import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Expertise from "../components/Expertise";

const meta = {
  title: "Pages / Experience",
  component: Expertise,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof Expertise>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};
