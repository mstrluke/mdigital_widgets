import type { Meta, StoryObj } from "@storybook/react";
import ForgotPasswordForm from "./ForgotPasswordForm";

const meta: Meta<typeof ForgotPasswordForm> = {
  title: "Auth/ForgotPasswordForm",
  component: ForgotPasswordForm,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    success: { control: "boolean" },
    error: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof ForgotPasswordForm>;

export const Default: Story = {
  args: {
    onSubmit: (email) => console.log("Reset:", email),
    onBackToLogin: () => console.log("Back to login"),
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    success: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "No account found with this email.",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};
