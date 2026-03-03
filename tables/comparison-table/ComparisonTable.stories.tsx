import type { Meta, StoryObj } from "@storybook/react";
import ComparisonTable from "./ComparisonTable";

const meta: Meta<typeof ComparisonTable> = {
  title: "Tables/ComparisonTable",
  component: ComparisonTable,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ComparisonTable>;

export const Default: Story = {
  args: {
    plans: ["Starter", "Pro", "Enterprise"],
    highlightPlan: "Pro",
    features: [
      { name: "Projects", values: { Starter: "5", Pro: "Unlimited", Enterprise: "Unlimited" } },
      { name: "Storage", values: { Starter: "10GB", Pro: "100GB", Enterprise: "Unlimited" } },
      { name: "Team members", values: { Starter: "1", Pro: "10", Enterprise: "Unlimited" } },
      { name: "API access", values: { Starter: true, Pro: true, Enterprise: true } },
      { name: "Priority support", values: { Starter: false, Pro: true, Enterprise: true } },
      { name: "Custom domain", values: { Starter: false, Pro: true, Enterprise: true } },
      { name: "SSO / SAML", values: { Starter: false, Pro: false, Enterprise: true } },
      { name: "SLA guarantee", values: { Starter: false, Pro: false, Enterprise: true } },
      { name: "Dedicated support", values: { Starter: false, Pro: false, Enterprise: true } },
    ],
  },
};

export const TwoPlans: Story = {
  args: {
    plans: ["Free", "Premium"],
    highlightPlan: "Premium",
    features: [
      { name: "Widgets", values: { Free: "10", Premium: "Unlimited" } },
      { name: "Themes", values: { Free: "3", Premium: "All" } },
      { name: "Export", values: { Free: false, Premium: true } },
      { name: "Analytics", values: { Free: false, Premium: true } },
    ],
  },
};
