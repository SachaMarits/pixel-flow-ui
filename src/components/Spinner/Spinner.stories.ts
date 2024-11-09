import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./index";

const meta = {
  title: "Spinner",
  component: Spinner,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    color: "success"
  }
};

export const Warning: Story = {
  args: {
    color: "warning"
  }
};

export const Danger: Story = {
  args: {
    color: "danger"
  }
};

export const Black: Story = {
  args: {
    color: "black"
  }
};

export const White: Story = {
  args: {
    color: "white"
  }
};

export const Lg: Story = {
  args: {
    color: "primary",
    size: "lg"
  }
};

export const Md: Story = {
  args: {
    color: "primary",
    size: "md"
  }
};

export const Sm: Story = {
  args: {
    color: "primary",
    size: "sm"
  }
};

export const Xs: Story = {
  args: {
    color: "primary",
    size: "xs"
  }
};
