import type { Meta, StoryObj } from "storybook-solidjs-vite";

import { DropdownMenu } from "@bitsyui/ui-solid";

const meta = {
  title: "QA/Components/Dropdown Menu",
  args: {
    align: "start",
    triggerVariant: "secondary"
  },
  argTypes: {
    align: {
      control: "inline-radio",
      options: ["start", "end"]
    },
    triggerVariant: {
      control: "inline-radio",
      options: ["primary", "secondary", "ghost"]
    }
  },
  render: (args) => (
    <div class="qa-stack">
      <p class="qa-copy">Check trigger state, item focus order, and keyboard navigation inside the menu.</p>
      <DropdownMenu
        align={args.align}
        items={[
          { label: "Open preview", value: "preview" },
          { label: "Duplicate", value: "duplicate" },
          { type: "separator" },
          { danger: true, label: "Archive", value: "archive" }
        ]}
        label="Actions"
        triggerVariant={args.triggerVariant}
      />
    </div>
  )
} satisfies Meta<{
  align: "start" | "end";
  triggerVariant: "primary" | "secondary" | "ghost";
}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
