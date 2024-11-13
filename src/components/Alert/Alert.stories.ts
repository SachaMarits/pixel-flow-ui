import type { Meta, StoryObj } from "@storybook/react";

import AlertExample from "./AlertExample";

const meta = {
  title: "Alert",
  component: AlertExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AlertExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Your title",
    message: "Any message you would like to show",
    buttons: [],
  },
};

export const Success: Story = {
  args: {
    title: "Your title",
    message: "Any message you would like to show",
    buttons: [],
    icon: "success",
  },
};

export const Warning: Story = {
  args: {
    title: "Your title",
    message: "Any message you would like to show",
    buttons: [],
    icon: "warning",
  },
};

export const Error: Story = {
  args: {
    title: "Your title",
    message: "Any message you would like to show",
    buttons: [],
    icon: "error",
  },
};

export const Confirmation: Story = {
  args: {
    title: "Your title",
    message: "Any statement that needs an answer",
    icon: "warning",
    buttons: [
      { color: "primary", text: "Yes", value: true },
      { color: "danger", text: "No", value: false },
    ],
  },
};
