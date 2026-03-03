import type { Meta, StoryObj } from "@storybook/react";
import ContactCard from "./ContactCard";

const meta: Meta<typeof ContactCard> = {
  title: "CRM/ContactCard",
  component: ContactCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ContactCard>;

export const Default: Story = {
  args: {
    contact: {
      name: "Sarah Chen",
      role: "Head of Marketing",
      company: "Acme Corp",
      email: "sarah.chen@acme.com",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      tags: ["VIP", "Enterprise"],
    },
    onCall: () => console.log("Call"),
    onEmail: () => console.log("Email"),
    onEdit: () => console.log("Edit"),
  },
};

export const Minimal: Story = {
  args: {
    contact: {
      name: "John Doe",
      email: "john@example.com",
    },
  },
};

export const WithAllTags: Story = {
  args: {
    contact: {
      name: "Alex Rivera",
      role: "CTO",
      company: "TechStart",
      email: "alex@techstart.io",
      avatar: "https://i.pravatar.cc/150?u=alex",
      tags: ["Lead", "Hot", "Q1 Target", "Decision Maker"],
    },
    onCall: () => {},
    onEmail: () => {},
    onEdit: () => {},
  },
};
