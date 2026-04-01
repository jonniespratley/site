import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Projects from "../components/Project";

const meta = {
  title: "Pages / Projects",
  component: Projects,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};
