import type { Meta, StoryObj } from "@storybook/react";
import LeaveBalanceCard from "./LeaveBalanceCard";

const meta: Meta<typeof LeaveBalanceCard> = {
  title: "HRM/LeaveBalanceCard",
  component: LeaveBalanceCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof LeaveBalanceCard>;

export const Default: Story = {
  args: {
    balances: [
      { type: "Annual Leave", used: 8, total: 20 },
      { type: "Sick Leave", used: 2, total: 10 },
      { type: "Personal", used: 1, total: 3 },
    ],
  },
};

export const NearingLimit: Story = {
  args: {
    balances: [
      { type: "Annual Leave", used: 18, total: 20 },
      { type: "Sick Leave", used: 9, total: 10 },
      { type: "Personal", used: 3, total: 3 },
    ],
  },
};

export const Fresh: Story = {
  args: {
    balances: [
      { type: "Annual Leave", used: 0, total: 25 },
      { type: "Sick Leave", used: 0, total: 12 },
      { type: "Personal", used: 0, total: 5 },
      { type: "Parental", used: 0, total: 90 },
    ],
  },
};
