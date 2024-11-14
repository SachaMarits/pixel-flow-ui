import type { Meta, StoryObj } from "@storybook/react";

import { WelcomeCard } from "./index";

const meta = {
  title: "WelcomeCard",
  component: WelcomeCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof WelcomeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Welcome John Doe",
    text: "Lorem ipsum dolor sit amet",
    icon: "home-settings",
  },
};
