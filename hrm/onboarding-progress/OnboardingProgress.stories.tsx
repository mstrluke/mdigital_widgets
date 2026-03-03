import type { Meta, StoryObj } from "@storybook/react";
import OnboardingProgress from "./OnboardingProgress";

const meta: Meta<typeof OnboardingProgress> = {
  title: "HRM/OnboardingProgress",
  component: OnboardingProgress,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof OnboardingProgress>;

const tasks = [
  { id: "1", title: "Complete profile information", completed: true },
  { id: "2", title: "Set up 2FA authentication", completed: true },
  { id: "3", title: "Watch welcome video", completed: true },
  { id: "4", title: "Read company handbook", completed: false },
  { id: "5", title: "Meet your team lead", completed: false },
  { id: "6", title: "Complete compliance training", completed: false },
  { id: "7", title: "Set up development environment", completed: false },
];

export const HalfDone: Story = {
  args: {
    tasks,
    employeeName: "Sarah Chen",
    onToggle: (id) => console.log("Toggle:", id),
  },
};

export const AllDone: Story = {
  args: {
    tasks: tasks.map((t) => ({ ...t, completed: true })),
    employeeName: "Mike Johnson",
    onToggle: (id) => console.log("Toggle:", id),
  },
};

export const JustStarted: Story = {
  args: {
    tasks: tasks.map((t) => ({ ...t, completed: false })),
    onToggle: (id) => console.log("Toggle:", id),
  },
};
