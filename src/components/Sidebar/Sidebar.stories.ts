import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./index";
import React from "react";

const meta = {
  title: "Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
    show: true,
    title: "Sidebar title",
    children: React.createElement(
      "p",
      { style: { padding: "0 16px", margin: 0 } },
      "Sidebar content"
    ),
  },
};
