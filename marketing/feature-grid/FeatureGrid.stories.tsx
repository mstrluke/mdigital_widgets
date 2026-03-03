import type { Meta, StoryObj } from "@storybook/react";
import FeatureGrid from "./FeatureGrid";

const meta: Meta<typeof FeatureGrid> = {
  title: "Marketing/FeatureGrid",
  component: FeatureGrid,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: {
    columns: { control: "select", options: [2, 3, 4] },
  },
};
export default meta;
type Story = StoryObj<typeof FeatureGrid>;

const features = [
  { title: "Lightning Fast", description: "Optimized for performance. Sub-second load times on any device.", icon: <span className="text-xl">⚡</span> },
  { title: "Type Safe", description: "Full TypeScript support with strict types for every component.", icon: <span className="text-xl">🛡️</span> },
  { title: "Accessible", description: "WCAG 2.1 compliant. Keyboard navigation and screen reader support.", icon: <span className="text-xl">♿</span> },
  { title: "Themeable", description: "Design tokens for complete visual customization. Dark mode included.", icon: <span className="text-xl">🎨</span> },
  { title: "Responsive", description: "Mobile-first design that looks great on every screen size.", icon: <span className="text-xl">📱</span> },
  { title: "Open Source", description: "MIT licensed. Use it in personal and commercial projects.", icon: <span className="text-xl">💻</span> },
];

export const ThreeColumns: Story = {
  args: {
    title: "Everything you need",
    subtitle: "A complete toolkit for building modern web applications.",
    features,
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    ...ThreeColumns.args,
    columns: 2,
    features: features.slice(0, 4),
  },
};

export const FourColumns: Story = {
  args: {
    features: features.slice(0, 4),
    columns: 4,
  },
};
