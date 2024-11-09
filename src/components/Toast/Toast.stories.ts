import type { Meta, StoryObj } from "@storybook/react";

import ToastExample from "./ToastExample";

const meta = {
  title: "Toast",
  component: ToastExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ToastExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Toast title",
    text: "Toast text",
    icon: undefined,
    delay: 3000,
  },
};

export const NoDelay: Story = {
  args: {
    title: "Toast title",
    text: "Toast text",
    icon: undefined,
    delay: undefined,
  },
};

export const Success: Story = {
  args: {
    title: "Success toast title",
    text: "Success toast text",
    icon: "success",
    delay: 3000,
  },
};

export const Warning: Story = {
  args: {
    title: "Warning toast title",
    text: "Warning toast text",
    icon: "warning",
    delay: 3000,
  },
};

export const Danger: Story = {
  args: {
    title: "Danger toast title",
    text: "Danger toast text",
    icon: "danger",
    delay: 3000,
  },
};

export const TopLeft: Story = {
  args: {
    title: "Toast title",
    text: "Toast text",
    icon: undefined,
    delay: undefined,
    corner: "topLeft",
  },
};

export const TopRight: Story = {
  args: {
    title: "Toast title",
    text: "Toast text",
    corner: "topRight",
  },
};

export const BottomLeft: Story = {
  args: {
    title: "Toast title",
    text: "Toast text",
    corner: "BottomLeft",
  },
};
