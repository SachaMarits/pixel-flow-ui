import type { Meta, StoryObj } from "@storybook/react";

import "../../../.storybook/assets/mdi.min.css";
import { NoDataPlaceholder } from "./index";

const meta = {
  title: "NoDataPlaceholder",
  component: NoDataPlaceholder,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NoDataPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "mdi mdi-account-off",
    text: "No data",
    // button: <Button />
  },
};
