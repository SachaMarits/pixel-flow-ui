import type { Meta, StoryObj } from "@storybook/react";

import { ColorThemePalette } from "./index";

const meta = {
  title: "ColorThemePalette",
  component: ColorThemePalette,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ColorThemePalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
