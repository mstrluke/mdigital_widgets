import type { Meta, StoryObj } from "@storybook/react";
import ChartCard from "./ChartCard";

const meta: Meta<typeof ChartCard> = {
  title: "Charts/ChartCard",
  component: ChartCard,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["bar", "dot"] },
    height: { control: { type: "number", min: 100, max: 400 } },
  },
};
export default meta;
type Story = StoryObj<typeof ChartCard>;

const weeklyData = [
  { label: "Mon", value: 45 },
  { label: "Tue", value: 72 },
  { label: "Wed", value: 58 },
  { label: "Thu", value: 91 },
  { label: "Fri", value: 66 },
  { label: "Sat", value: 38 },
  { label: "Sun", value: 52 },
];

export const BarChart: Story = {
  args: {
    title: "Weekly Revenue",
    description: "Revenue by day of week",
    data: weeklyData,
    type: "bar",
    height: 200,
  },
};

export const DotChart: Story = {
  args: {
    title: "Daily Active Users",
    data: weeklyData,
    type: "dot",
    height: 200,
  },
};

export const MonthlyData: Story = {
  args: {
    title: "Monthly Sales",
    description: "Last 12 months",
    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
      (label) => ({ label, value: Math.floor(Math.random() * 100) + 20 })
    ),
    type: "bar",
    height: 250,
  },
};
