import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { createSignal } from "solid-js";

import { Button, Modal } from "@bitsyui/ui-solid";

const meta = {
  title: "QA/Components/Modal",
  args: {
    title: "Publish changes",
    description: "Confirm this action before promoting the current component set.",
    footerVariant: "confirm"
  },
  render: (args) => {
    const [open, setOpen] = createSignal(false);

    return (
      <div class="qa-stack">
        <p class="qa-copy">Use the trigger to verify focus management, escape handling, and backdrop dismissal.</p>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          description={args.description}
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
          open={open()}
          title={args.title}
          onOpenChange={setOpen}
        >
          <p class="qa-copy">
            Modal content should remain readable, keyboard reachable, and visually distinct in both supported themes.
          </p>
        </Modal>
      </div>
    );
  }
} satisfies Meta<{
  title: string;
  description: string;
  footerVariant: string;
}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
