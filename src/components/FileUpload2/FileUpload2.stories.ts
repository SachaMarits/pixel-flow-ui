import type { Meta, StoryObj } from "@storybook/react";

import { FileUpload2 } from "./index";

const meta = {
  title: "FileUpload2",
  component: FileUpload2,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FileUpload2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dragAndDrop: true,
    multiple: true,
    onChange: () => {},
  },
};
