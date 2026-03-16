import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Marketing/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    logo: (
      <div className="flex items-center gap-2 font-bold text-lg">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm">M</div>
        <span>VoltUI</span>
      </div>
    ),
    columns: [
      { title: "Product", links: [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }, { label: "Changelog", href: "#" }] },
      { title: "Resources", links: [{ label: "Documentation", href: "#" }, { label: "API Reference", href: "#" }, { label: "Guides", href: "#" }] },
      { title: "Company", links: [{ label: "About", href: "#" }, { label: "Blog", href: "#" }, { label: "Careers", href: "#" }, { label: "Contact", href: "#" }] },
    ],
    copyright: "© 2026 VoltUI. All rights reserved.",
  },
};

export const Minimal: Story = {
  args: {
    columns: [
      { title: "Links", links: [{ label: "Home", href: "#" }, { label: "About", href: "#" }, { label: "Contact", href: "#" }] },
    ],
    copyright: "© 2026 My Company",
  },
};
