import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Card } from "./index";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: React.createElement("p", null, "Test"),
  },
};
