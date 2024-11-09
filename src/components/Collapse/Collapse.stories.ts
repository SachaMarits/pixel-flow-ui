import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Collapse } from "./index";

const meta = {
  title: "Collapse",
  component: Collapse,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: React.createElement("h3", null, "Test"),
    children: React.createElement("p", null, "Test")
  }
};