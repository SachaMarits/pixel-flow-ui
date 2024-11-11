import type { Meta, StoryObj } from "@storybook/react";

import "./transition-story.scss";
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

export const OpacityExample: Story = {
  args: {
    in: true,
    duration: 1000,
    children: React.createElement(
      "p",
      { className: "transition-story-opacity" },
      "Opacity transition"
    ),
  },
};

export const TranslationExample: Story = {
  args: {
    in: true,
    duration: 1000,
    children: React.createElement(
      "p",
      { className: "transition-story-translate" },
      "Translation transition"
    ),
  },
};
