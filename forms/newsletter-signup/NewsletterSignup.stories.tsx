import type { Meta, StoryObj } from "@storybook/react";
import NewsletterSignup from "./NewsletterSignup";

const meta: Meta<typeof NewsletterSignup> = {
  title: "Forms/NewsletterSignup",
  component: NewsletterSignup,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    buttonText: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof NewsletterSignup>;

export const Default: Story = {
  args: {
    onSubmit: (email) => console.log("Subscribe:", email),
    description: "Get the latest updates and tips delivered to your inbox.",
  },
};

export const CustomText: Story = {
  args: {
    title: "Join our waitlist",
    description: "Be the first to know when we launch.",
    buttonText: "Join",
    onSubmit: (email) => console.log("Waitlist:", email),
  },
};

export const Loading: Story = {
  args: {
    onSubmit: () => {},
    loading: true,
  },
};

export const Compact: Story = {
  args: {
    onSubmit: (email) => console.log("Subscribe:", email),
    buttonText: "Go",
    className: "max-w-sm",
  },
};
