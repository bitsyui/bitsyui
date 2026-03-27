import { renderInput } from "./renderers";

const meta = {
  title: "QA/Components/Input",
  tags: ["!autodocs"],
  args: {
    label: "Project name",
    type: "text",
    placeholder: "Bitsy UI starter",
    value: "",
    hint: "Use a concise product-facing name.",
    disabled: false,
    invalid: false
  },
  argTypes: {
    type: {
      control: "inline-radio",
      options: ["text", "email", "password"]
    }
  },
  render: renderInput
};

export default meta;

export const Empty = {};

export const Filled = {
  args: {
    value: "Bitsy Workspace"
  }
};

export const Invalid = {
  args: {
    invalid: true,
    hint: "A project name is required before publishing."
  }
};

export const Disabled = {
  args: {
    disabled: true,
    value: "Read only"
  }
};
