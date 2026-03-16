import type { Meta, StoryObj } from "@storybook/react";
import HowItWorks from "./HowItWorks";

const meta: Meta<typeof HowItWorks> = {
  title: "Marketing/HowItWorks",
  component: HowItWorks,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof HowItWorks>;

export const Default: Story = {
  args: {
    title: "How it works",
    subtitle: "Get started in three simple steps.",
    steps: [
      { title: "Install", description: "Add the package to your project with a single command. Works with npm, yarn, and pnpm." },
      { title: "Configure", description: "Import components and customize with design tokens. Full TypeScript support included." },
      { title: "Ship", description: "Build production-ready UIs in hours, not weeks. Focus on your product, not the plumbing." },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    title: "Getting started",
    steps: [
      { title: "Sign Up", description: "Create your free account in seconds.", icon: <span className="text-lg">📝</span> },
      { title: "Connect", description: "Link your data sources and tools.", icon: <span className="text-lg">🔗</span> },
      { title: "Grow", description: "Watch your metrics improve automatically.", icon: <span className="text-lg">📈</span> },
    ],
  },
};

export const NoHeader: Story = {
  args: {
    steps: [
      { title: "Browse", description: "Explore our catalog of widgets." },
      { title: "Add", description: "Install with the voltui CLI." },
      { title: "Customize", description: "Make it yours with design tokens." },
    ],
  },
};
