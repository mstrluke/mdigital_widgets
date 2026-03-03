import type { Meta, StoryObj } from "@storybook/react";
import ContactForm from "./ContactForm";

const meta: Meta<typeof ContactForm> = {
  title: "Forms/ContactForm",
  component: ContactForm,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    showSubject: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("Contact:", data),
  },
};

export const WithoutSubject: Story = {
  args: {
    onSubmit: (data) => console.log("Contact:", data),
    showSubject: false,
  },
};

export const Loading: Story = {
  args: {
    onSubmit: (data) => console.log("Contact:", data),
    loading: true,
  },
};
