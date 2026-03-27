import { mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { cx } from "./lib/utils";

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

export function Button(props: ButtonProps) {
  const merged = mergeProps(
    {
      type: "button" as const,
      variant: "primary" as const,
      size: "medium" as const,
      fullWidth: false
    },
    props
  );

  const [local, others] = splitProps(merged, ["class", "variant", "size", "fullWidth"]);

  return (
    <button
      class={cx("b-button", local.class)}
      data-variant={local.variant}
      data-size={local.size}
      data-full-width={local.fullWidth ? "true" : undefined}
      {...others}
    />
  );
}

