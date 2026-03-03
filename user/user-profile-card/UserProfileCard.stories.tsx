import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserProfileCard from "./UserProfileCard";

const meta: Meta<typeof UserProfileCard> = {
  title: "User/UserProfileCard",
  component: UserProfileCard,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: ["online", "away", "busy", "offline"] },
  },
};
export default meta;
type Story = StoryObj<typeof UserProfileCard>;

export const Online: Story = {
  args: {
    name: "Sarah Chen",
    email: "sarah.chen@acme.com",
    role: "Senior Developer",
    avatar: "https://i.pravatar.cc/150?u=profile1",
    status: "online",
  },
};

export const Away: Story = {
  args: {
    ...Online.args,
    name: "Mike Johnson",
    status: "away",
    avatar: "https://i.pravatar.cc/150?u=profile2",
  },
};

export const Busy: Story = {
  args: {
    ...Online.args,
    name: "Lisa Park",
    status: "busy",
    avatar: "https://i.pravatar.cc/150?u=profile3",
  },
};

export const WithActions: Story = {
  args: {
    ...Online.args,
    actions: (
      <div className="flex gap-2">
        <button className="rounded-md border border-border px-3 py-1 text-sm">Message</button>
        <button className="rounded-md bg-primary px-3 py-1 text-sm text-white">Follow</button>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    name: "Anonymous User",
    status: "offline",
  },
};
