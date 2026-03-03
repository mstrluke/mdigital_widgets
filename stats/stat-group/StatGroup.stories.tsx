import type { Meta, StoryObj } from "@storybook/react";
import StatGroup from "./StatGroup";

const meta: Meta<typeof StatGroup> = {
  title: "Stats/StatGroup",
  component: StatGroup,
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "select", options: [2, 3, 4] },
    loading: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof StatGroup>;

export const FourColumns: Story = {
  args: {
    stats: [
      { title: "Total Revenue", value: "$45,231", change: 12.5, changeLabel: "vs last month" },
      { title: "Active Users", value: "2,345", change: 8.1, changeLabel: "vs last month" },
      { title: "New Orders", value: "1,420", change: -3.2, changeLabel: "vs last month" },
      { title: "Conversion", value: "3.24%", change: 0.8, changeLabel: "vs last month" },
    ],
    columns: 4,
  },
};

export const ThreeColumns: Story = {
  args: {
    stats: [
      { title: "Employees", value: "142" },
      { title: "Departments", value: "8" },
      { title: "Open Positions", value: "12", change: 3 },
    ],
    columns: 3,
  },
};

export const Loading: Story = {
  args: {
    stats: Array.from({ length: 4 }, () => ({ title: "", value: "" })),
    loading: true,
  },
};

export const NoChange: Story = {
  args: {
    stats: [
      { title: "Total Deals", value: "48" },
      { title: "Pipeline Value", value: "$1.2M" },
    ],
    columns: 2,
  },
};
