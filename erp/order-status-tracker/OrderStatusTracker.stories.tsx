import type { Meta, StoryObj } from "@storybook/react";
import OrderStatusTracker from "./OrderStatusTracker";

const meta: Meta<typeof OrderStatusTracker> = {
  title: "ERP/OrderStatusTracker",
  component: OrderStatusTracker,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof OrderStatusTracker>;

export const InProgress: Story = {
  args: {
    orderId: "ORD-4521",
    steps: [
      { label: "Ordered", completed: true, date: "Feb 28" },
      { label: "Processing", completed: true, date: "Mar 1" },
      { label: "Shipped", completed: true, date: "Mar 2" },
      { label: "In Transit", completed: false },
      { label: "Delivered", completed: false },
    ],
  },
};

export const Completed: Story = {
  args: {
    orderId: "ORD-4520",
    steps: [
      { label: "Ordered", completed: true, date: "Feb 25" },
      { label: "Processing", completed: true, date: "Feb 26" },
      { label: "Shipped", completed: true, date: "Feb 27" },
      { label: "Delivered", completed: true, date: "Mar 1" },
    ],
  },
};

export const JustPlaced: Story = {
  args: {
    orderId: "ORD-4522",
    steps: [
      { label: "Ordered", completed: true, date: "Today" },
      { label: "Confirmed", completed: false },
      { label: "Shipped", completed: false },
      { label: "Delivered", completed: false },
    ],
  },
};
