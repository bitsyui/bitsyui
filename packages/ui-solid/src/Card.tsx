import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { JSX, ParentProps } from "solid-js";

import { cx } from "./lib/utils";

export interface CardProps extends ParentProps<JSX.HTMLAttributes<HTMLElement>> {
  as?: "article" | "section" | "div";
}

export function Card(props: CardProps) {
  const [local, others] = splitProps(props, ["as", "class", "children"]);

  return (
    <Dynamic component={local.as ?? "article"} class={cx("b-card", "b-surface", local.class)} {...others}>
      {local.children}
    </Dynamic>
  );
}

export function CardHeader(props: ParentProps<JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <div class={cx("b-card__header", local.class)} {...others}>
      {local.children}
    </div>
  );
}

export function CardEyebrow(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <p class={cx("b-card__eyebrow", local.class)} {...others}>
      {local.children}
    </p>
  );
}

export function CardTitle(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <h3 class={cx("b-card__title", local.class)} {...others}>
      {local.children}
    </h3>
  );
}

export function CardDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <p class={cx("b-card__description", local.class)} {...others}>
      {local.children}
    </p>
  );
}

export function CardBody(props: ParentProps<JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <div class={cx("b-card__body", local.class)} {...others}>
      {local.children}
    </div>
  );
}

export function CardFooter(props: ParentProps<JSX.HTMLAttributes<HTMLDivElement>>) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <div class={cx("b-card__footer", local.class)} {...others}>
      {local.children}
    </div>
  );
}

