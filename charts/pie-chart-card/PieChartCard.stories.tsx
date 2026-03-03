import type { Meta, StoryObj } from "@storybook/react";
import PieChartCard from "./PieChartCard";

const meta: Meta<typeof PieChartCard> = {
  title: "Charts/PieChartCard",
  component: PieChartCard,
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "number", min: 100, max: 300 } },
    showLegend: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof PieChartCard>;

export const Default: Story = {
  args: {
    title: "Traffic Sources",
    segments: [
      { label: "Direct", value: 35, color: "var(--color-primary)" },
      { label: "Organic", value: 28, color: "var(--color-success)" },
      { label: "Referral", value: 22, color: "var(--color-warning)" },
      { label: "Social", value: 15, color: "var(--color-info)" },
    ],
  },
};

export const TwoSegments: Story = {
  args: {
    title: "Completion Rate",
    segments: [
      { label: "Completed", value: 72, color: "var(--color-success)" },
      { label: "Remaining", value: 28, color: "var(--color-border)" },
    ],
    size: 120,
  },
};

export const ManySegments: Story = {
  args: {
    title: "Revenue by Region",
    segments: [
      { label: "North America", value: 40, color: "var(--color-primary)" },
      { label: "Europe", value: 25, color: "var(--color-info)" },
      { label: "Asia", value: 20, color: "var(--color-success)" },
      { label: "South America", value: 8, color: "var(--color-warning)" },
      { label: "Africa", value: 4, color: "var(--color-error)" },
      { label: "Oceania", value: 3, color: "var(--color-accent)" },
    ],
  },
};
