import type { Meta, StoryObj } from "@storybook/react";
import EmployeeCard from "./EmployeeCard";

const meta: Meta<typeof EmployeeCard> = {
  title: "HRM/EmployeeCard",
  component: EmployeeCard,
  tags: ["autodocs"],
  argTypes: {
    compact: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof EmployeeCard>;

export const Default: Story = {
  args: {
    employee: {
      name: "Sarah Chen",
      role: "Senior Developer",
      department: "Engineering",
      avatar: "https://i.pravatar.cc/150?u=sarah-emp",
    },
    onEdit: () => console.log("Edit"),
    onMessage: () => console.log("Message"),
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    compact: true,
  },
};

export const NoAvatar: Story = {
  args: {
    employee: {
      name: "Alex Rivera",
      role: "Product Manager",
      department: "Product",
    },
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <EmployeeCard employee={{ name: "Sarah Chen", role: "Developer", department: "Engineering", avatar: "https://i.pravatar.cc/150?u=s1" }} />
      <EmployeeCard employee={{ name: "Mike Johnson", role: "Designer", department: "Design", avatar: "https://i.pravatar.cc/150?u=m1" }} />
      <EmployeeCard employee={{ name: "Lisa Park", role: "PM", department: "Product", avatar: "https://i.pravatar.cc/150?u=l1" }} />
    </div>
  ),
};
