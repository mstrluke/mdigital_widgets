import type { Meta, StoryObj } from "@storybook/react";
import AvatarUpload from "./AvatarUpload";

const meta: Meta<typeof AvatarUpload> = {
  title: "User/AvatarUpload",
  component: AvatarUpload,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
  },
};
export default meta;
type Story = StoryObj<typeof AvatarUpload>;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=avatar-upload",
    name: "Sarah Chen",
    onUpload: (file) => console.log("Upload:", file.name),
  },
};

export const WithInitials: Story = {
  args: {
    name: "John Doe",
    onUpload: (file) => console.log("Upload:", file.name),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <AvatarUpload name="SM" size="sm" onUpload={() => {}} />
      <AvatarUpload name="MD" size="md" onUpload={() => {}} />
      <AvatarUpload name="LG" size="lg" onUpload={() => {}} />
      <AvatarUpload name="XL" size="xl" onUpload={() => {}} />
    </div>
  ),
};
