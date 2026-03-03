import type { Meta, StoryObj } from "@storybook/react";
import KpiCard from "./KpiCard";

const meta: Meta<typeof KpiCard> = {
  title: "Stats/KpiCard",
  component: KpiCard,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    trend: { control: "select", options: ["up", "down", "neutral"] },
    change: { control: { type: "number", min: -100, max: 100 } },
  },
};
export default meta;
type Story = StoryObj<typeof KpiCard>;

export const Up: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,231",
    change: 12.5,
    changeLabel: "vs last month",
    icon: <span className="text-lg">💰</span>,
  },
};

export const Down: Story = {
  args: {
    title: "Bounce Rate",
    value: "42.3%",
    change: -5.2,
    changeLabel: "vs last month",
    icon: <span className="text-lg">📉</span>,
  },
};

export const Neutral: Story = {
  args: {
    title: "Active Users",
    value: "2,345",
    change: 0,
    changeLabel: "no change",
  },
};

export const Loading: Story = {
  args: { loading: true },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KpiCard title="Revenue" value="$45.2k" change={12.5} changeLabel="vs last mo" icon={<span>💰</span>} />
      <KpiCard title="Users" value="8,234" change={8.1} changeLabel="vs last mo" icon={<span>👥</span>} />
      <KpiCard title="Orders" value="1,420" change={-3.2} changeLabel="vs last mo" icon={<span>📦</span>} />
      <KpiCard title="Conversion" value="3.24%" change={0.8} changeLabel="vs last mo" icon={<span>🎯</span>} />
    </div>
  ),
};
