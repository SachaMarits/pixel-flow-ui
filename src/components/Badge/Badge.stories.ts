import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./index";
import { ThemeColor } from "../../types/Colors";

const meta = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      defaultValue: "primary",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: ThemeColor.Default,
    children: "Default badge",
  },
};

export const Primary: Story = {
  args: {
    color: ThemeColor.Primary,
    children: "Primary badge",
  },
};

export const Secondary: Story = {
  args: {
    color: ThemeColor.Secondary,
    children: "Secondary badge",
  },
};

export const Success: Story = {
  args: {
    color: ThemeColor.Success,
    children: "Success badge",
  },
};

export const Warning: Story = {
  args: {
    color: ThemeColor.Warning,
    children: "Warning badge",
  },
};

export const Danger: Story = {
  args: {
    color: ThemeColor.Danger,
    children: "Danger badge",
  },
};
