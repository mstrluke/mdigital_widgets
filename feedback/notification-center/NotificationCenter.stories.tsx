import type { Meta, StoryObj } from "@storybook/react";
import NotificationCenter from "./NotificationCenter";

const meta: Meta<typeof NotificationCenter> = {
  title: "Feedback/NotificationCenter",
  component: NotificationCenter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NotificationCenter>;

const notifications = [
  { id: "1", title: "New comment on your post", description: "Sarah Chen replied to your discussion", date: "2 min ago", read: false, type: "info" as const },
  { id: "2", title: "Deployment successful", description: "v2.0.0 deployed to production", date: "1 hour ago", read: false, type: "success" as const },
  { id: "3", title: "Password changed", description: "Your password was updated successfully", date: "Yesterday", read: true, type: "info" as const },
  { id: "4", title: "Invoice generated", description: "Invoice INV-2026-001 is ready", date: "2 days ago", read: true, type: "info" as const },
];

export const Default: Story = {
  args: {
    notifications,
    onRead: (id) => console.log("Read:", id),
    onReadAll: () => console.log("Read all"),
    onDismiss: (id) => console.log("Dismiss:", id),
  },
};

export const AllRead: Story = {
  args: {
    notifications: notifications.map((n) => ({ ...n, read: true })),
    onRead: () => {},
  },
};

export const Empty: Story = {
  args: {
    notifications: [],
  },
};

export const SingleUnread: Story = {
  args: {
    notifications: [notifications[0]],
    onRead: () => {},
    onDismiss: () => {},
  },
};
