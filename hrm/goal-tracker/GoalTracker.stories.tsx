import type { Meta, StoryObj } from "@storybook/react";
import GoalTracker from "./GoalTracker";

const meta: Meta<typeof GoalTracker> = {
  title: "HRM/GoalTracker",
  component: GoalTracker,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof GoalTracker>;

export const Default: Story = {
  args: {
    goals: [
      { id: "1", title: "Complete TypeScript migration", progress: 75, status: "on-track", dueDate: "Mar 30, 2026" },
      { id: "2", title: "Launch v2.0 to production", progress: 45, status: "at-risk", dueDate: "Apr 15, 2026" },
      { id: "3", title: "Reduce load time to < 2s", progress: 20, status: "behind", dueDate: "Mar 15, 2026" },
      { id: "4", title: "Onboard 3 new team members", progress: 100, status: "completed", dueDate: "Feb 28, 2026" },
    ],
    onGoalClick: (id) => console.log("Goal:", id),
  },
};

export const AllOnTrack: Story = {
  args: {
    goals: [
      { id: "1", title: "Q1 Revenue Target", progress: 82, status: "on-track", dueDate: "Mar 31" },
      { id: "2", title: "Customer Satisfaction > 4.5", progress: 90, status: "on-track", dueDate: "Mar 31" },
    ],
  },
};

export const NoStatus: Story = {
  args: {
    goals: [
      { id: "1", title: "Read 12 books", progress: 33 },
      { id: "2", title: "Exercise 3x/week", progress: 60 },
      { id: "3", title: "Learn Rust", progress: 10 },
    ],
  },
};
