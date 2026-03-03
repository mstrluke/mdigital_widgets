import type { Meta, StoryObj } from "@storybook/react";
import PricingTable from "./PricingTable";

const meta: Meta<typeof PricingTable> = {
  title: "Marketing/PricingTable",
  component: PricingTable,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PricingTable>;

export const Default: Story = {
  args: {
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "Perfect for side projects",
        price: 9,
        period: "mo",
        features: ["5 projects", "10GB storage", "Basic support", "API access"],
        ctaText: "Start free trial",
      },
      {
        id: "pro",
        name: "Pro",
        description: "For growing teams",
        price: 29,
        period: "mo",
        features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domains", "Team collaboration"],
        recommended: true,
        ctaText: "Get started",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "For large organizations",
        price: "Custom",
        features: ["Everything in Pro", "Unlimited storage", "24/7 phone support", "SSO & SAML", "Custom integrations", "Dedicated account manager", "SLA guarantee"],
        ctaText: "Contact sales",
      },
    ],
    onSelect: (id) => console.log("Selected:", id),
  },
};

export const Annual: Story = {
  args: {
    plans: [
      { id: "basic", name: "Basic", price: 79, period: "year", features: ["1 user", "5 projects", "5GB storage"], ctaText: "Choose Basic" },
      { id: "team", name: "Team", price: 249, period: "year", features: ["10 users", "Unlimited projects", "50GB storage", "Priority support"], recommended: true, ctaText: "Choose Team" },
      { id: "business", name: "Business", price: 599, period: "year", features: ["Unlimited users", "Unlimited everything", "24/7 support", "Custom domain"], ctaText: "Choose Business" },
    ],
    onSelect: (id) => console.log("Selected:", id),
  },
};
