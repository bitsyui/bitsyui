import type { Meta, StoryObj } from "storybook-solidjs-vite";

import { Input } from "@bitsyui/ui-solid";

const meta = {
  title: "QA/Components/Input",
  component: Input,
  args: {
    label: "Project name",
    placeholder: "Bitsy UI starter",
    hint: "Use a concise product-facing name.",
    error: "",
    disabled: false,
    value: ""
  },
  render: (args) => <Input {...args} />
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    value: "Bitsy Workspace"
  }
};

export const Invalid: Story = {
  args: {
    error: "A project name is required before publishing."
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Read only"
  }
};
