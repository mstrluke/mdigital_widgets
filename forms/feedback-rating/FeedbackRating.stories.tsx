import type { Meta, StoryObj } from "@storybook/react";
import FeedbackRating from "./FeedbackRating";

const meta: Meta<typeof FeedbackRating> = {
  title: "Forms/FeedbackRating",
  component: FeedbackRating,
  tags: ["autodocs"],
  argTypes: {
    maxRating: { control: { type: "number", min: 3, max: 10 } },
    showComment: { control: "boolean" },
    loading: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof FeedbackRating>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("Feedback:", data),
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Rate this article",
    onSubmit: (data) => console.log("Feedback:", data),
  },
};

export const NoComment: Story = {
  args: {
    onSubmit: (data) => console.log("Feedback:", data),
    showComment: false,
  },
};

export const TenStars: Story = {
  args: {
    onSubmit: (data) => console.log("Feedback:", data),
    maxRating: 10,
    title: "How likely are you to recommend us? (1-10)",
  },
};

export const Loading: Story = {
  args: {
    onSubmit: () => {},
    loading: true,
  },
};
