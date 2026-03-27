import { Show, createUniqueId, mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { cx } from "./lib/utils";

export interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  inputClass?: string;
}

export function Input(props: InputProps) {
  const fallbackId = createUniqueId();
  const merged = mergeProps({ type: "text" as const }, props);
  const [local, others] = splitProps(merged, [
    "class",
    "id",
    "label",
    "hint",
    "error",
    "inputClass",
    "aria-describedby",
    "aria-invalid"
  ]);

  const inputId = () => local.id ?? `bitsy-input-${fallbackId}`;
  const hintId = () => `${inputId()}-hint`;
  const errorId = () => `${inputId()}-error`;
  const describedBy = () =>
    [local["aria-describedby"], local.hint ? hintId() : undefined, local.error ? errorId() : undefined]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div class={cx("b-field", local.class)}>
      <Show when={local.label}>
        <label class="b-label" for={inputId()}>
          {local.label}
        </label>
      </Show>
      <input
        id={inputId()}
        class={cx("b-input", local.inputClass)}
        aria-describedby={describedBy()}
        aria-invalid={local.error ? "true" : local["aria-invalid"]}
        {...others}
      />
      <Show when={local.hint}>
        <p class="b-field__hint" id={hintId()}>
          {local.hint}
        </p>
      </Show>
      <Show when={local.error}>
        <p class="b-field__hint" data-tone="danger" id={errorId()}>
          {local.error}
        </p>
      </Show>
    </div>
  );
}

