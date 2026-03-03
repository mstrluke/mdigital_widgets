import type { Meta, StoryObj } from "@storybook/react";
import MetricComparison from "./MetricComparison";

const meta: Meta<typeof MetricComparison> = {
  title: "Stats/MetricComparison",
  component: MetricComparison,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof MetricComparison>;

export const RevenueUp: Story = {
  args: {
    title: "Revenue",
    current: { label: "This Month", value: 45231 },
    previous: { label: "Last Month", value: 38120 },
    format: (v) => `$${v.toLocaleString()}`,
  },
};

export const UsersDown: Story = {
  args: {
    title: "Active Users",
    current: { label: "This Week", value: 1820 },
    previous: { label: "Last Week", value: 2150 },
  },
};

export const Flat: Story = {
  args: {
    title: "Conversion Rate",
    current: { label: "Q1 2026", value: 324 },
    previous: { label: "Q4 2025", value: 318 },
    format: (v) => `${(v / 100).toFixed(2)}%`,
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MetricComparison title="Revenue" current={{ label: "This Month", value: 45231 }} previous={{ label: "Last Month", value: 38120 }} format={(v) => `$${v.toLocaleString()}`} />
      <MetricComparison title="Users" current={{ label: "This Month", value: 2345 }} previous={{ label: "Last Month", value: 2150 }} />
      <MetricComparison title="Orders" current={{ label: "This Month", value: 420 }} previous={{ label: "Last Month", value: 480 }} />
    </div>
  ),
};
