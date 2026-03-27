import {
  For,
  Show,
  createEffect,
  createSignal,
  createUniqueId,
  mergeProps,
  splitProps
} from "solid-js";
import type { JSX } from "solid-js";

import { cx } from "./lib/utils";

export interface TabsItem {
  value: string;
  label: string;
  content: JSX.Element;
  disabled?: boolean;
}

export interface TabsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  items: TabsItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  activationMode?: "automatic" | "manual";
  listLabel?: string;
}

export function Tabs(props: TabsProps) {
  const scopeId = createUniqueId();
  const merged = mergeProps(
    {
      orientation: "horizontal" as const,
      activationMode: "automatic" as const,
      listLabel: "Tabs"
    },
    props
  );
  const [local, others] = splitProps(merged, [
    "class",
    "items",
    "value",
    "defaultValue",
    "onValueChange",
    "orientation",
    "activationMode",
    "listLabel"
  ]);

  const firstEnabledValue = () => local.items.find((item) => !item.disabled)?.value;
  const [internalValue, setInternalValue] = createSignal(local.defaultValue ?? local.value ?? firstEnabledValue());
  const tabRefs = new Map<string, HTMLButtonElement>();
  const selectedValue = () => local.value ?? internalValue();
  const selectedItem = () => local.items.find((item) => item.value === selectedValue()) ?? local.items[0];

  createEffect(() => {
    const current = selectedValue();
    if (!current || !local.items.some((item) => item.value === current && !item.disabled)) {
      const next = firstEnabledValue();
      if (next) {
        setInternalValue(next);
      }
    }
  });

  const selectValue = (value: string) => {
    if (local.value === undefined) {
      setInternalValue(value);
    }
    local.onValueChange?.(value);
  };

  const enabledItems = () => local.items.filter((item) => !item.disabled);

  const focusValue = (value: string, activate: boolean) => {
    const ref = tabRefs.get(value);
    ref?.focus();
    if (activate) {
      selectValue(value);
    }
  };

  const moveFocus = (currentValue: string, direction: "next" | "previous" | "first" | "last") => {
    const items = enabledItems();
    if (items.length === 0) {
      return;
    }

    const index = items.findIndex((item) => item.value === currentValue);
    const shouldActivate = local.activationMode === "automatic";

    if (direction === "first") {
      focusValue(items[0].value, shouldActivate);
      return;
    }

    if (direction === "last") {
      focusValue(items[items.length - 1].value, shouldActivate);
      return;
    }

    const currentIndex = index === -1 ? 0 : index;
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % items.length
        : (currentIndex - 1 + items.length) % items.length;

    focusValue(items[nextIndex].value, shouldActivate);
  };

  const onTabKeyDown: JSX.EventHandlerUnion<HTMLButtonElement, KeyboardEvent> = (event) => {
    const currentValue = event.currentTarget.dataset.value;

    if (!currentValue) {
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      moveFocus(currentValue, "first");
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      moveFocus(currentValue, "last");
      return;
    }

    const isHorizontal = local.orientation === "horizontal";
    const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";
    const previousKey = isHorizontal ? "ArrowLeft" : "ArrowUp";

    if (event.key === nextKey) {
      event.preventDefault();
      moveFocus(currentValue, "next");
      return;
    }

    if (event.key === previousKey) {
      event.preventDefault();
      moveFocus(currentValue, "previous");
      return;
    }

    if (local.activationMode === "manual" && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      selectValue(currentValue);
    }
  };

  return (
    <div class={cx("b-tabs", local.class)} {...others}>
      <div
        aria-label={local.listLabel}
        aria-orientation={local.orientation}
        class="b-tabs__list"
        role="tablist"
      >
        <For each={local.items}>
          {(item) => {
            const tabId = `${scopeId}-tab-${item.value}`;
            const panelId = `${scopeId}-panel-${item.value}`;
            const isSelected = () => selectedValue() === item.value;

            return (
              <button
                id={tabId}
                ref={(element) => tabRefs.set(item.value, element)}
                aria-controls={panelId}
                aria-selected={isSelected()}
                class="b-tabs__trigger"
                data-value={item.value}
                disabled={item.disabled}
                role="tab"
                tabIndex={isSelected() ? 0 : -1}
                type="button"
                onClick={() => selectValue(item.value)}
                onKeyDown={onTabKeyDown}
              >
                {item.label}
              </button>
            );
          }}
        </For>
      </div>
      <Show when={selectedItem()}>
        {(item) => (
          <div
            aria-labelledby={`${scopeId}-tab-${item().value}`}
            class="b-tabs__panel"
            id={`${scopeId}-panel-${item().value}`}
            role="tabpanel"
            tabIndex={0}
          >
            {item().content}
          </div>
        )}
      </Show>
    </div>
  );
}

