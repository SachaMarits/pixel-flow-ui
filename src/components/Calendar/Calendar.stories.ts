import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "./index";

const meta = {
  title: "Calendar",
  component: Calendar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const randomDate = () => {
  const date = new Date();
  date.setDate(Math.floor(1 + Math.random() * 28));
  return date;
};

export const Default: Story = {
  args: {
    data: Array(Math.floor(3 + Math.random() * 5))
      .fill(1)
      .map((_, i) => ({
        id: i + 1,
        text: "Random Event",
        date: randomDate(),
      })),
  },
};

export const ShowWeekEnds: Story = {
  args: {
    data: Array(Math.floor(3 + Math.random() * 5))
      .fill(1)
      .map((_, i) => ({
        id: i + 1,
        text: "Random Event",
        date: randomDate(),
      })),
    showWeekends: true,
  },
};
