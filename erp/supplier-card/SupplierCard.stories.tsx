import type { Meta, StoryObj } from "@storybook/react";
import SupplierCard from "./SupplierCard";

const meta: Meta<typeof SupplierCard> = {
  title: "ERP/SupplierCard",
  component: SupplierCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SupplierCard>;

export const Default: Story = {
  args: {
    supplier: {
      name: "TechParts Global",
      status: "Active",
      contact: "James Wilson",
      email: "james@techparts.com",
      rating: 4.5,
      categories: ["Electronics", "Components", "Cables"],
    },
    onContact: () => console.log("Contact"),
    onEdit: () => console.log("Edit"),
  },
};

export const Minimal: Story = {
  args: {
    supplier: {
      name: "Quick Supplies Inc.",
      email: "orders@quicksupplies.com",
    },
  },
};

export const HighRated: Story = {
  args: {
    supplier: {
      name: "Premium Parts Co.",
      status: "Preferred",
      contact: "Maria Santos",
      email: "maria@premiumparts.co",
      rating: 5,
      categories: ["Precision Parts", "Custom Manufacturing"],
    },
    onContact: () => {},
    onEdit: () => {},
  },
};
