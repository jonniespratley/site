import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import App from "../App";

const meta = {
  title: "Site",
  component: App,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};
