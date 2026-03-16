import type { Meta, StoryObj } from "@storybook/react";
import CtaBanner from "./CtaBanner";

const meta: Meta<typeof CtaBanner> = {
  title: "Marketing/CtaBanner",
  component: CtaBanner,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CtaBanner>;

export const Default: Story = {
  args: {
    title: "Ready to get started?",
    description: "Join thousands of teams building better products with VoltUI.",
    primaryAction: { label: "Start free trial", href: "#" },
    secondaryAction: { label: "Talk to sales", href: "#" },
  },
};

export const PrimaryOnly: Story = {
  args: {
    title: "Start building today",
    description: "No credit card required. Free for individuals.",
    primaryAction: { label: "Get started for free", onClick: () => console.log("CTA") },
  },
};

export const NoDescription: Story = {
  args: {
    title: "Upgrade to Pro for unlimited access",
    primaryAction: { label: "Upgrade now", href: "#" },
    secondaryAction: { label: "Compare plans", href: "#" },
  },
};
