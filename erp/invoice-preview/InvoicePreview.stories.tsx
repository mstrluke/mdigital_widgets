import type { Meta, StoryObj } from "@storybook/react";
import InvoicePreview from "./InvoicePreview";

const meta: Meta<typeof InvoicePreview> = {
  title: "ERP/InvoicePreview",
  component: InvoicePreview,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof InvoicePreview>;

export const Default: Story = {
  args: {
    invoice: {
      id: "INV-2026-001",
      date: "March 1, 2026",
      status: "Paid",
      from: { name: "MDigital Inc.", address: "123 Tech Ave, San Francisco, CA" },
      to: { name: "Acme Corp", address: "456 Business Blvd, New York, NY" },
      items: [
        { description: "Enterprise License (Annual)", quantity: 1, rate: 12000, amount: 12000 },
        { description: "Premium Support", quantity: 12, rate: 500, amount: 6000 },
        { description: "Custom Integration", quantity: 40, rate: 150, amount: 6000 },
      ],
      subtotal: 24000,
      tax: 2400,
      total: 26400,
    },
  },
};

export const Pending: Story = {
  args: {
    invoice: {
      id: "INV-2026-002",
      date: "March 3, 2026",
      status: "Pending",
      from: { name: "MDigital Inc." },
      to: { name: "TechStart LLC" },
      items: [
        { description: "Starter Plan (Monthly)", quantity: 1, rate: 49, amount: 49 },
      ],
      subtotal: 49,
      total: 49,
    },
  },
};

export const EuroCurrency: Story = {
  args: {
    invoice: {
      ...Default.args!.invoice!,
      currency: "€",
    },
  },
};
