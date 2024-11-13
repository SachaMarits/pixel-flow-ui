import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    color: "success",
    text: "Success Button"
  }
};

export const Warning: Story = {
  args: {
    color: "warning",
    text: "Warning Button"
  }
};

export const Danger: Story = {
  args: {
    color: "danger",
    text: "Danger Button"
  }
};

export const Primary: Story = {
  args: {
    color: "primary",
    text: "Primary Button"
  }
};

export const Default: Story = {
  args: {
    color: "default",
    text: "Default Button"
  }
};

export const Gradient: Story = {
  args: {
    color: "gradient",
    text: "Gradient Button"
  }
};

export const Animated: Story = {
  args: {
    color: "primary",
    text: "Animated Button",
    animate: true
  }
};

export const IsSubmitting: Story = {
  args: {
    color: "primary",
    text: "Primary Button",
    animate: false,
    isSubmitting: true
  }
};

export const NoRipple: Story = {
  args: {
    color: "primary",
    text: "No Ripple On Click",
    ripple: false
  }
};

export const Disabled: Story = {
  args: {
    color: "default",
    text: "Default Button",
    disabled: true
  }
};
