import type { Meta, StoryObj } from "storybook-solidjs-vite";

import { Button } from "@bitsyui/ui-solid";

const meta = {
  title: "QA/Components/Button",
  component: Button,
  args: {
    children: "Save changes",
    variant: "primary",
    size: "medium",
    fullWidth: false,
    disabled: false
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "ghost"]
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"]
    }
  },
  render: (args) => <Button {...args} />
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Review state"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Unavailable"
  }
};
