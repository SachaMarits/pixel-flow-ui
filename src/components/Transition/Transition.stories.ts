import type { Meta, StoryObj } from "@storybook/react";

import { Transition } from "./index";
import React from "react";

const meta = {
  title: "Transition",
  component: Transition,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Transition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    in: true,
    duration: 1000,
    children: React.createElement("p", null, "Transition"),
  },
};
