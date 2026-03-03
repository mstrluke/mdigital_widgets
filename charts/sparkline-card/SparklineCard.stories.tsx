import type { Meta, StoryObj } from "@storybook/react";
import SparklineCard from "./SparklineCard";

const meta: Meta<typeof SparklineCard> = {
  title: "Charts/SparklineCard",
  component: SparklineCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SparklineCard>;

export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$12,450",
    data: [20, 35, 28, 45, 38, 52, 48, 60, 55, 72, 68, 85],
  },
};

export const Declining: Story = {
  args: {
    title: "Bounce Rate",
    value: "42.3%",
    data: [85, 78, 72, 80, 65, 70, 55, 60, 48, 52, 45, 42],
    color: "var(--color-error)",
  },
};

export const Flat: Story = {
  args: {
    title: "Avg Response Time",
    value: "230ms",
    data: [230, 225, 235, 228, 232, 229, 231, 227, 233, 230, 228, 231],
    color: "var(--color-warning)",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SparklineCard title="Users" value="8,234" data={[40, 55, 48, 62, 58, 70, 65, 78, 72, 85, 80, 92]} />
      <SparklineCard title="Revenue" value="$45.2k" data={[30, 35, 42, 38, 50, 48, 55, 52, 60, 58, 65, 62]} color="var(--color-success)" />
      <SparklineCard title="Orders" value="1,420" data={[80, 75, 70, 65, 60, 55, 58, 52, 48, 50, 45, 42]} color="var(--color-error)" />
    </div>
  ),
};
