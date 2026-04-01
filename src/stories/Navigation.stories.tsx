import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Navigation from "../components/Navigation";

const meta = {
  title: "Pages / Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};
