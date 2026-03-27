import { renderButton } from "./renderers";

const meta = {
  title: "QA/Components/Button",
  tags: ["!autodocs"],
  args: {
    label: "Save changes",
    variant: "primary",
    type: "button",
    disabled: false
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "quiet"]
    },
    type: {
      control: "inline-radio",
      options: ["button", "submit", "reset"]
    }
  },
  render: renderButton
};

export default meta;

export const Default = {};

export const Secondary = {
  args: {
    variant: "secondary",
    label: "Review state"
  }
};

export const Disabled = {
  args: {
    disabled: true,
    label: "Unavailable"
  }
};
