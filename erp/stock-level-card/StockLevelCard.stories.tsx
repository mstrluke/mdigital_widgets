import type { Meta, StoryObj } from "@storybook/react";
import StockLevelCard from "./StockLevelCard";

const meta: Meta<typeof StockLevelCard> = {
  title: "ERP/StockLevelCard",
  component: StockLevelCard,
  tags: ["autodocs"],
  argTypes: {
    currentStock: { control: { type: "number", min: 0, max: 1000 } },
    maxStock: { control: { type: "number", min: 100, max: 1000 } },
    reorderPoint: { control: { type: "number", min: 0, max: 500 } },
  },
};
export default meta;
type Story = StoryObj<typeof StockLevelCard>;

export const InStock: Story = {
  args: {
    product: "Wireless Keyboard",
    sku: "KB-WL-001",
    currentStock: 450,
    maxStock: 500,
    reorderPoint: 100,
  },
};

export const LowStock: Story = {
  args: {
    product: "USB-C Hub",
    sku: "HUB-C-003",
    currentStock: 45,
    maxStock: 500,
    reorderPoint: 50,
  },
};

export const OutOfStock: Story = {
  args: {
    product: "Monitor Stand",
    sku: "MS-ALU-002",
    currentStock: 0,
    maxStock: 200,
    reorderPoint: 30,
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <StockLevelCard product="Keyboard" sku="KB-001" currentStock={450} maxStock={500} reorderPoint={100} />
      <StockLevelCard product="Mouse" sku="MS-002" currentStock={42} maxStock={300} reorderPoint={50} />
      <StockLevelCard product="Headset" sku="HS-003" currentStock={0} maxStock={200} reorderPoint={25} />
    </div>
  ),
};
