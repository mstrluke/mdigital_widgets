import type { Meta, StoryObj } from "@storybook/react";
import OtpVerification from "./OtpVerification";

const meta: Meta<typeof OtpVerification> = {
  title: "Auth/OtpVerification",
  component: OtpVerification,
  tags: ["autodocs"],
  argTypes: {
    length: { control: { type: "number", min: 4, max: 8 } },
    loading: { control: "boolean" },
    error: { control: "text" },
    maskedContact: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof OtpVerification>;

export const Default: Story = {
  args: {
    onSubmit: (code) => console.log("OTP:", code),
    onResend: () => console.log("Resend"),
    maskedContact: "j***@example.com",
  },
};

export const FourDigit: Story = {
  args: {
    ...Default.args,
    length: 4,
    maskedContact: "+1 ***-***-4567",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "Invalid code. Please try again.",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};
