import type { Meta, StoryObj } from "@storybook/react";
import CookieConsent from "./CookieConsent";

const meta: Meta<typeof CookieConsent> = {
  title: "Feedback/CookieConsent",
  component: CookieConsent,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof CookieConsent>;

export const Default: Story = {
  args: {
    onAccept: () => console.log("Accepted"),
    onReject: () => console.log("Rejected"),
    onCustomize: () => console.log("Customize"),
  },
};

export const AcceptOnly: Story = {
  args: {
    onAccept: () => console.log("Accepted"),
  },
};

export const AcceptReject: Story = {
  args: {
    onAccept: () => console.log("Accepted"),
    onReject: () => console.log("Rejected"),
  },
};

export const CustomMessage: Story = {
  args: {
    message: "This site uses essential cookies for functionality and optional cookies for analytics. You can choose which to accept.",
    onAccept: () => {},
    onReject: () => {},
    onCustomize: () => {},
  },
};
