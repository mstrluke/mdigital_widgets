import type { Meta, StoryObj } from "@storybook/react";
import LeadScoreIndicator from "./LeadScoreIndicator";

const meta: Meta<typeof LeadScoreIndicator> = {
  title: "CRM/LeadScoreIndicator",
  component: LeadScoreIndicator,
  tags: ["autodocs"],
  argTypes: {
    score: { control: { type: "number", min: 0, max: 100 } },
    maxScore: { control: { type: "number", min: 50, max: 200 } },
  },
};
export default meta;
type Story = StoryObj<typeof LeadScoreIndicator>;

export const HighScore: Story = {
  args: {
    score: 82,
    factors: [
      { label: "Engagement", score: 25, max: 30 },
      { label: "Fit", score: 28, max: 30 },
      { label: "Behavior", score: 18, max: 25 },
      { label: "Demographics", score: 11, max: 15 },
    ],
  },
};

export const MediumScore: Story = {
  args: {
    score: 48,
    factors: [
      { label: "Engagement", score: 15, max: 30 },
      { label: "Fit", score: 18, max: 30 },
      { label: "Behavior", score: 10, max: 25 },
      { label: "Demographics", score: 5, max: 15 },
    ],
  },
};

export const LowScore: Story = {
  args: {
    score: 22,
    factors: [
      { label: "Engagement", score: 5, max: 30 },
      { label: "Fit", score: 10, max: 30 },
      { label: "Behavior", score: 4, max: 25 },
      { label: "Demographics", score: 3, max: 15 },
    ],
  },
};

export const NoFactors: Story = {
  args: {
    score: 65,
  },
};
