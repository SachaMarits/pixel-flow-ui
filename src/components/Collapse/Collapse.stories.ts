import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Collapse } from "./index";

const meta = {
  title: "Collapse",
  component: Collapse,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: <h3>Show content</h3>,
    children: (
      <>
        <h1>Any content</h1>
        <p>
          This component can be controlled when using show and toggle props.
        </p>
      </>
    ),
  },
};
