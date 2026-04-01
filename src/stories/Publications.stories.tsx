import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Publications from "../components/Publications";

const meta = {
  title: "Pages / Publications",
  component: Publications,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof Publications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};
