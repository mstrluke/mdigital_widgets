import type { Meta, StoryObj } from "@storybook/react";
import AnnouncementBar from "./AnnouncementBar";

const meta: Meta<typeof AnnouncementBar> = {
  title: "Feedback/AnnouncementBar",
  component: AnnouncementBar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: {
    variant: { control: "select", options: ["info", "success", "warning", "error"] },
  },
};
export default meta;
type Story = StoryObj<typeof AnnouncementBar>;

export const Info: Story = {
  args: {
    message: "🎉 Version 2.0 is now available!",
    linkText: "Learn more",
    linkHref: "#",
    onDismiss: () => console.log("Dismiss"),
  },
};

export const Success: Story = {
  args: {
    message: "Your account has been upgraded successfully.",
    variant: "success",
    onDismiss: () => {},
  },
};

export const Warning: Story = {
  args: {
    message: "Scheduled maintenance on March 10, 2026 at 2:00 AM UTC.",
    variant: "warning",
    linkText: "View details",
    linkHref: "#",
  },
};

export const Error: Story = {
  args: {
    message: "Service degradation detected. We're investigating.",
    variant: "error",
    onDismiss: () => {},
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col">
      <AnnouncementBar message="Info announcement" variant="info" linkText="Learn more" linkHref="#" />
      <AnnouncementBar message="Success announcement" variant="success" />
      <AnnouncementBar message="Warning announcement" variant="warning" />
      <AnnouncementBar message="Error announcement" variant="error" />
    </div>
  ),
};
