import type { Meta, StoryObj } from "@storybook/react";
import ResetPasswordForm from "./ResetPasswordForm";

const meta: Meta<typeof ResetPasswordForm> = {
  title: "Auth/ResetPasswordForm",
  component: ResetPasswordForm,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    error: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof ResetPasswordForm>;

export const Default: Story = {
  args: {
    onSubmit: (pw) => console.log("Reset to:", pw),
    onBackToLogin: () => console.log("Back to login"),
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "Reset link has expired. Please request a new one.",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};
