import type { Meta, StoryObj } from "@storybook/react";

import { Hr } from "./index";

const meta = {
  title: "Hr",
  component: Hr,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Hr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
