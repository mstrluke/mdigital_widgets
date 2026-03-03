import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Marketing/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: {
    align: { control: "select", options: ["center", "left"] },
  },
};
export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    title: "Build faster, ship sooner",
    subtitle: "The modern UI toolkit for production-ready React apps. Beautiful components, zero config.",
    badge: "New in v2.0",
    actions: [
      { label: "Get Started", href: "#" },
      { label: "View Docs", href: "#", variant: "secondary" },
    ],
  },
};

export const LeftAligned: Story = {
  args: {
    ...Default.args,
    align: "left",
  },
};

export const NoBadge: Story = {
  args: {
    title: "Your all-in-one business platform",
    subtitle: "CRM, ERP, and HRM tools that work together seamlessly.",
    actions: [{ label: "Start Free Trial", onClick: () => console.log("CTA") }],
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    image: (
      <div className="mx-auto max-w-4xl rounded-xl border border-border bg-surface/50 p-4 shadow-lg">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="h-3 w-3 rounded-full bg-error/50" />
          <div className="h-3 w-3 rounded-full bg-warning/50" />
          <div className="h-3 w-3 rounded-full bg-success/50" />
        </div>
        <div className="h-48 rounded bg-surface flex items-center justify-center text-text-secondary">App Screenshot</div>
      </div>
    ),
  },
};
