import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Blog from "../components/Blog";

const meta = {
  title: "Pages / Blog",
  component: Blog,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};
