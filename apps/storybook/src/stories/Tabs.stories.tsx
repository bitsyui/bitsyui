import type { Meta, StoryObj } from "storybook-solidjs-vite";

import { Card, CardBody, CardDescription, CardHeader, CardTitle, Tabs } from "@bitsyui/ui-solid";

const meta = {
  title: "QA/Components/Tabs",
  args: {
    orientation: "horizontal",
    activationMode: "automatic"
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"]
    },
    activationMode: {
      control: "inline-radio",
      options: ["automatic", "manual"]
    }
  },
  render: (args) => (
    <Tabs
      activationMode={args.activationMode}
      orientation={args.orientation}
      items={[
        {
          value: "system",
          label: "System",
          content: (
            <Card>
              <CardHeader>
                <CardTitle>System layer</CardTitle>
              </CardHeader>
              <CardBody>
                <CardDescription>Architecture, boundaries, and runtime choices.</CardDescription>
              </CardBody>
            </Card>
          )
        },
        {
          value: "tokens",
          label: "Tokens",
          content: (
            <Card>
              <CardHeader>
                <CardTitle>Token layer</CardTitle>
              </CardHeader>
              <CardBody>
                <CardDescription>Semantic naming, themes, and portable decisions.</CardDescription>
              </CardBody>
            </Card>
          )
        },
        {
          value: "components",
          label: "Components",
          content: (
            <Card>
              <CardHeader>
                <CardTitle>Component layer</CardTitle>
              </CardHeader>
              <CardBody>
                <CardDescription>Interactive behavior built on shared CSS blocks.</CardDescription>
              </CardBody>
            </Card>
          )
        }
      ]}
    />
  )
} satisfies Meta<{
  orientation: "horizontal" | "vertical";
  activationMode: "automatic" | "manual";
}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
