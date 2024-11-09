import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "./index";

const meta = {
  title: "Progress",
  component: Progress,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    color: "default"
  }
};

export const Primary: Story = {
  args: {
    value: 50,
    color: "primary"
  }
};

export const Secondary: Story = {
  args: {
    value: 50,
    color: "secondary"
  }
};

export const Success: Story = {
  args: {
    value: 50,
    color: "success"
  }
};

export const Danger: Story = {
  args: {
    value: 50,
    color: "danger"
  }
};

export const Warning: Story = {
  args: {
    value: 50,
    color: "warning"
  }
};
