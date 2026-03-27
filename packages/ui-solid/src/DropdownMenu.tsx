import {
  For,
  Show,
  createEffect,
  createMemo,
  createSignal,
  createUniqueId,
  onCleanup,
  splitProps
} from "solid-js";
import type { JSX } from "solid-js";

import { Button } from "./Button";
import { cx } from "./lib/utils";

export interface DropdownMenuItem {
  type?: "item";
  label: string;
  value?: string;
  href?: string;
  target?: string;
  disabled?: boolean;
  danger?: boolean;
  onSelect?: (value?: string) => void;
}

export interface DropdownMenuSeparator {
  type: "separator";
}

export type DropdownMenuEntry = DropdownMenuItem | DropdownMenuSeparator;

export interface DropdownMenuProps extends JSX.HTMLAttributes<HTMLDivElement> {
  label: string;
  items: DropdownMenuEntry[];
  align?: "start" | "end";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerVariant?: "primary" | "secondary" | "ghost";
}

function isMenuItem(entry: DropdownMenuEntry): entry is DropdownMenuItem {
  return entry.type !== "separator";
}

function getItemKey(item: DropdownMenuItem) {
  return item.value ?? item.label;
}

export function DropdownMenu(props: DropdownMenuProps) {
  const scopeId = createUniqueId();
  const [local, others] = splitProps(props, [
    "class",
    "label",
    "items",
    "align",
    "open",
    "defaultOpen",
    "onOpenChange",
    "triggerVariant"
  ]);

  const [internalOpen, setInternalOpen] = createSignal(local.defaultOpen ?? false);
  const isOpen = () => local.open ?? internalOpen();
  const setOpen = (open: boolean) => {
    if (local.open === undefined) {
      setInternalOpen(open);
    }
    local.onOpenChange?.(open);
  };

  let rootRef: HTMLDivElement | undefined;
  let triggerRef: HTMLButtonElement | undefined;
  const itemRefs = new Map<string, HTMLElement>();
  const interactiveItems = createMemo(() => local.items.filter(isMenuItem));

  const focusItem = (direction: "first" | "last" | "next" | "previous", fromIndex = 0) => {
    const items = interactiveItems();
    const enabledIndexes = items
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => !item.disabled)
      .map(({ index }) => index);

    if (enabledIndexes.length === 0) {
      return;
    }

    let nextIndex = enabledIndexes[0];
    if (direction === "last") {
      nextIndex = enabledIndexes[enabledIndexes.length - 1];
    } else if (direction === "next" || direction === "previous") {
      const currentPosition = enabledIndexes.findIndex((value) => value === fromIndex);
      const safePosition = currentPosition === -1 ? 0 : currentPosition;
      const offset = direction === "next" ? 1 : -1;
      nextIndex = enabledIndexes[(safePosition + offset + enabledIndexes.length) % enabledIndexes.length];
    }

    const nextItem = items[nextIndex];
    if (nextItem) {
      itemRefs.get(getItemKey(nextItem))?.focus();
    }
  };

  createEffect(() => {
    if (!isOpen() || typeof document === "undefined") {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (rootRef && !rootRef.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    onCleanup(() => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    });
  });

  const openAndFocus = (target: "first" | "last") => {
    setOpen(true);
    queueMicrotask(() => focusItem(target));
  };

  const onTriggerKeyDown: JSX.EventHandlerUnion<HTMLButtonElement, KeyboardEvent> = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openAndFocus("first");
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      openAndFocus("last");
    }
  };

  const onMenuKeyDown: JSX.EventHandlerUnion<HTMLDivElement, KeyboardEvent> = (event) => {
    const currentKey = (event.target as HTMLElement).dataset.key;
    const index = interactiveItems().findIndex((item) => getItemKey(item) === currentKey);

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusItem("next", index);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusItem("previous", index);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusItem("first");
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusItem("last");
      return;
    }

    if (event.key === "Tab") {
      setOpen(false);
    }
  };

  const selectItem = (item: DropdownMenuItem) => {
    if (item.disabled) {
      return;
    }

    item.onSelect?.(item.value);
    setOpen(false);
    triggerRef?.focus();
  };

  return (
    <div class={cx("b-dropdown", local.class)} ref={rootRef} {...others}>
      <Button
        aria-controls={`${scopeId}-menu`}
        aria-expanded={isOpen()}
        aria-haspopup="menu"
        ref={triggerRef}
        variant={local.triggerVariant ?? "secondary"}
        onClick={() => setOpen(!isOpen())}
        onKeyDown={onTriggerKeyDown}
      >
        {local.label}
      </Button>

      <Show when={isOpen()}>
        <div
          class="b-dropdown__content"
          data-align={local.align ?? "start"}
          id={`${scopeId}-menu`}
          role="menu"
          onKeyDown={onMenuKeyDown}
        >
          <For each={local.items}>
            {(entry, index) => {
              if (!isMenuItem(entry)) {
                return <div aria-hidden="true" class="b-dropdown__separator" role="separator" />;
              }

              const commonProps = {
                class: "b-dropdown__item",
                "data-danger": entry.danger ? "true" : undefined,
                "data-key": getItemKey(entry),
                "aria-disabled": entry.disabled ? true : undefined,
                role: "menuitem" as const,
                tabIndex: -1,
                ref: (element: HTMLElement) => itemRefs.set(getItemKey(entry), element)
              };

              return entry.href ? (
                <a
                  {...commonProps}
                  href={entry.href}
                  target={entry.target}
                  onClick={() => selectItem(entry)}
                >
                  {entry.label}
                </a>
              ) : (
                <button
                  {...commonProps}
                  type="button"
                  onClick={() => selectItem(entry)}
                >
                  {entry.label}
                </button>
              );
            }}
          </For>
        </div>
      </Show>
    </div>
  );
}
