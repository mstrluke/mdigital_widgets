import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Auth/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    error: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("Submit:", data),
    onForgotPassword: () => console.log("Forgot password"),
    onSignUp: () => console.log("Sign up"),
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "Invalid email or password. Please try again.",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Minimal: Story = {
  args: {
    onSubmit: (data) => console.log("Submit:", data),
  },
};
