import type { Meta, StoryObj } from "storybook-solidjs-vite";

import { Button, Card, CardBody, CardDescription, CardEyebrow, CardFooter, CardHeader, CardTitle } from "@bitsyui/ui-solid";

const meta = {
  title: "QA/Components/Card",
  args: {
    eyebrow: "Surface",
    title: "Release readiness",
    description: "Cards are useful for validating spacing, hierarchy, and nested interactive states against both light and dark themes."
  },
  render: (args) => (
    <Card class="qa-card-frame">
      <CardHeader>
        <div class="qa-stack">
          <CardEyebrow>{args.eyebrow}</CardEyebrow>
          <CardTitle>{args.title}</CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <CardDescription>{args.description}</CardDescription>
      </CardBody>
      <CardFooter>
        <Button>Primary action</Button>
        <Button variant="secondary">Secondary</Button>
      </CardFooter>
    </Card>
  )
} satisfies Meta<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DenseContent: Story = {
  args: {
    title: "Component inventory",
    description:
      "Use this state to check multi-line body copy, action spacing, and how the card shell responds to longer editorial content in narrower canvases."
  }
};
