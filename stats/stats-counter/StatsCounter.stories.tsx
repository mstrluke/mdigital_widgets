import type { Meta, StoryObj } from "@storybook/react";
import StatsCounter from "./StatsCounter";

const meta: Meta<typeof StatsCounter> = {
  title: "Stats/StatsCounter",
  component: StatsCounter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof StatsCounter>;

export const Default: Story = {
  args: {
    stats: [
      { label: "Happy Customers", value: 12500, suffix: "+" },
      { label: "Projects Delivered", value: 850 },
      { label: "Team Members", value: 120 },
      { label: "Countries", value: 45 },
    ],
  },
};

export const WithPrefix: Story = {
  args: {
    stats: [
      { label: "Revenue Generated", value: 2500000, prefix: "$" },
      { label: "Hours Saved", value: 50000, suffix: "+" },
      { label: "Uptime", value: 99, suffix: "%" },
    ],
  },
};

export const TwoStats: Story = {
  args: {
    stats: [
      { label: "Open Source Stars", value: 15000, suffix: "+" },
      { label: "npm Downloads", value: 500000, suffix: "/mo" },
    ],
  },
};
