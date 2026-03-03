import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

const meta: Meta<typeof RegisterForm> = {
  title: "Auth/RegisterForm",
  component: RegisterForm,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    error: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("Register:", data),
    onSignIn: () => console.log("Sign in"),
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "An account with this email already exists.",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};
