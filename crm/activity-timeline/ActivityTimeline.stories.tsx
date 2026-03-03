import type { Meta, StoryObj } from "@storybook/react";
import ActivityTimeline from "./ActivityTimeline";

const meta: Meta<typeof ActivityTimeline> = {
  title: "CRM/ActivityTimeline",
  component: ActivityTimeline,
  tags: ["autodocs"],
  argTypes: {
    maxItems: { control: { type: "number", min: 1, max: 10 } },
  },
};
export default meta;
type Story = StoryObj<typeof ActivityTimeline>;

const events = [
  { id: "1", type: "call", title: "Phone call with Sarah Chen", description: "Discussed Q2 pricing and next steps", date: "2 hours ago", user: "Mike Johnson" },
  { id: "2", type: "email", title: "Proposal sent", description: "Enterprise license proposal v2 attached", date: "Yesterday", user: "Mike Johnson" },
  { id: "3", type: "meeting", title: "Discovery meeting", description: "Initial needs assessment with stakeholders", date: "3 days ago", user: "Lisa Park" },
  { id: "4", type: "note", title: "Internal note added", description: "Budget approved by their CFO — proceed to negotiation", date: "5 days ago", user: "Mike Johnson" },
  { id: "5", type: "deal", title: "Deal created", date: "1 week ago", user: "Lisa Park" },
];

export const Default: Story = {
  args: { events },
};

export const LimitedItems: Story = {
  args: {
    events,
    maxItems: 3,
  },
};

export const SingleEvent: Story = {
  args: {
    events: [events[0]],
  },
};
