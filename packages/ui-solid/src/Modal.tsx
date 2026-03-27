import { Show, createEffect, createUniqueId, onCleanup, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import type { JSX, ParentProps } from "solid-js";

import { Button } from "./Button";
import { cx, getFocusableElements } from "./lib/utils";

export interface ModalProps extends ParentProps<JSX.HTMLAttributes<HTMLDivElement>> {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description?: string;
  footer?: JSX.Element;
  closeLabel?: string;
}

export function Modal(props: ModalProps) {
  const scopeId = createUniqueId();
  const [local, others] = splitProps(props, [
    "class",
    "children",
    "open",
    "onOpenChange",
    "title",
    "description",
    "footer",
    "closeLabel"
  ]);

  let dialogRef: HTMLDivElement | undefined;
  let previousActiveElement: HTMLElement | null = null;

  createEffect(() => {
    if (!local.open || typeof document === "undefined") {
      return;
    }

    const body = document.body;
    const previousOverflow = body.style.overflow;
    previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    body.style.overflow = "hidden";

    queueMicrotask(() => {
      const dialog = dialogRef;
      if (!dialog) {
        return;
      }

      const focusable = getFocusableElements(dialog);
      (focusable[0] ?? dialog).focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        local.onOpenChange?.(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef) {
        return;
      }

      const focusable = getFocusableElements(dialogRef);
      if (focusable.length === 0) {
        event.preventDefault();
        dialogRef.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    onCleanup(() => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      previousActiveElement?.focus?.();
    });
  });

  return (
    <Show when={local.open}>
      <Portal>
        <div class="b-modal" role="presentation">
          <div class="b-modal__backdrop" onClick={() => local.onOpenChange?.(false)} />
          <div
            aria-describedby={local.description ? `${scopeId}-description` : undefined}
            aria-labelledby={`${scopeId}-title`}
            aria-modal="true"
            class={cx("b-modal__dialog", "b-surface", local.class)}
            ref={dialogRef}
            role="dialog"
            tabIndex={-1}
            {...others}
          >
            <div class="b-modal__header">
              <div class="o-stack">
                <h2 class="b-modal__title" id={`${scopeId}-title`}>
                  {local.title}
                </h2>
                <Show when={local.description}>
                  <p class="b-modal__description" id={`${scopeId}-description`}>
                    {local.description}
                  </p>
                </Show>
              </div>
              <Button
                aria-label={local.closeLabel ?? "Close dialog"}
                size="small"
                variant="ghost"
                onClick={() => local.onOpenChange?.(false)}
              >
                Close
              </Button>
            </div>
            <div class="b-modal__body">{local.children}</div>
            <Show when={local.footer}>
              <div class="b-modal__footer">{local.footer}</div>
            </Show>
          </div>
        </div>
      </Portal>
    </Show>
  );
}

