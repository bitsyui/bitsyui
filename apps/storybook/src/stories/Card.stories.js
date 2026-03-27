import { renderCard } from "./renderers";

const meta = {
  title: "QA/Components/Card",
  tags: ["!autodocs"],
  args: {
    eyebrow: "Surface",
    title: "Release readiness",
    badge: "Stable",
    tone: "success",
    body: "Cards are useful for validating spacing, hierarchy, and nested interactive states against both light and dark themes."
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "brand", "success", "warning", "danger"]
    }
  },
  render: renderCard
};

export default meta;

export const Default = {};

export const Warning = {
  args: {
    badge: "Needs review",
    tone: "warning",
    body: "Use this state when visual QA should call attention to density, truncation, or interaction edge cases."
  }
};
