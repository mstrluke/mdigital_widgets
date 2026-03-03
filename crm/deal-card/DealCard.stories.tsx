import type { Meta, StoryObj } from "@storybook/react";
import DealCard from "./DealCard";

const meta: Meta<typeof DealCard> = {
  title: "CRM/DealCard",
  component: DealCard,
  tags: ["autodocs"],
  argTypes: {
    currency: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof DealCard>;

export const Default: Story = {
  args: {
    deal: {
      name: "Enterprise License Deal",
      company: "Acme Corp",
      value: 125000,
      stage: "Proposal",
      probability: 65,
      owner: { name: "Mike Johnson", avatar: "https://i.pravatar.cc/150?u=mike" },
      closeDate: "Mar 30, 2026",
    },
    onClick: () => console.log("Deal clicked"),
  },
};

export const HighProbability: Story = {
  args: {
    deal: {
      name: "Annual Renewal",
      company: "TechCo",
      value: 48000,
      stage: "Negotiation",
      probability: 90,
      owner: { name: "Lisa Park" },
      closeDate: "Mar 15, 2026",
    },
  },
};

export const LowProbability: Story = {
  args: {
    deal: {
      name: "Cold Outreach Lead",
      value: 15000,
      stage: "Qualification",
      probability: 15,
    },
  },
};

export const EuroCurrency: Story = {
  args: {
    ...Default.args,
    currency: "€",
  },
};
