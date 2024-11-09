import type { Meta, StoryObj } from "@storybook/react";

import { ColorPalette } from "./index";

const meta = {
  title: "ColorPalette",
  component: ColorPalette,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: ["#2a9d8f", "#264653", "#a7c957", "#e9c46a", "#e76f51", "#d6ccc2"],
    onChange: () => {},
  },
};
