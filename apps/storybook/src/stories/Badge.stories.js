import { renderBadge } from "./renderers";

const meta = {
  title: "QA/Components/Badge",
  tags: ["!autodocs"],
  args: {
    label: "Beta",
    tone: "brand"
  },
  argTypes: {
    tone: {
      control: "inline-radio",
      options: ["neutral", "brand", "success", "warning", "danger"]
    }
  },
  render: renderBadge
};

export default meta;

export const Brand = {};

export const Success = {
  args: {
    label: "Healthy",
    tone: "success"
  }
};

export const Warning = {
  args: {
    label: "Draft",
    tone: "warning"
  }
};

export const Danger = {
  args: {
    label: "Blocked",
    tone: "danger"
  }
};
