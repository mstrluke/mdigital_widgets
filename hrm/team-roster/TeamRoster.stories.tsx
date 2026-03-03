import type { Meta, StoryObj } from "@storybook/react";
import TeamRoster from "./TeamRoster";

const meta: Meta<typeof TeamRoster> = {
  title: "HRM/TeamRoster",
  component: TeamRoster,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TeamRoster>;

const members = [
  { id: "1", name: "Sarah Chen", role: "Tech Lead", avatar: "https://i.pravatar.cc/150?u=t1", status: "active" as const },
  { id: "2", name: "Mike Johnson", role: "Senior Dev", avatar: "https://i.pravatar.cc/150?u=t2", status: "active" as const },
  { id: "3", name: "Lisa Park", role: "Designer", avatar: "https://i.pravatar.cc/150?u=t3", status: "away" as const },
  { id: "4", name: "Alex Rivera", role: "Backend Dev", avatar: "https://i.pravatar.cc/150?u=t4", status: "offline" as const },
  { id: "5", name: "Emma Wilson", role: "QA Engineer", avatar: "https://i.pravatar.cc/150?u=t5", status: "active" as const },
];

export const Default: Story = {
  args: {
    members,
    onMemberClick: (id) => console.log("Click:", id),
  },
};

export const CustomTitle: Story = {
  args: {
    members: members.slice(0, 3),
    title: "Frontend Squad",
    onMemberClick: (id) => console.log("Click:", id),
  },
};

export const NoStatus: Story = {
  args: {
    members: members.map(({ status, ...m }) => m),
  },
};
