import type { Meta, StoryObj } from "@storybook/react";
import TestimonialCards from "./TestimonialCards";

const meta: Meta<typeof TestimonialCards> = {
  title: "Marketing/TestimonialCards",
  component: TestimonialCards,
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "select", options: [2, 3] },
  },
};
export default meta;
type Story = StoryObj<typeof TestimonialCards>;

const testimonials = [
  { id: "1", name: "Sarah Chen", role: "CTO at TechCorp", avatar: "https://i.pravatar.cc/150?u=tc1", content: "This toolkit saved us months of development time. The components are polished and production-ready out of the box.", rating: 5 },
  { id: "2", name: "Marcus Johnson", role: "Lead Developer", avatar: "https://i.pravatar.cc/150?u=tc2", content: "Best component library I've used. The TypeScript support and design tokens make customization a breeze.", rating: 5 },
  { id: "3", name: "Emily Park", role: "Product Designer", avatar: "https://i.pravatar.cc/150?u=tc3", content: "Finally a UI kit that designers and developers both love. Consistent, accessible, and beautiful.", rating: 4 },
];

export const Default: Story = {
  args: { testimonials },
};

export const TwoColumns: Story = {
  args: {
    testimonials: testimonials.slice(0, 2),
    columns: 2,
  },
};

export const NoRating: Story = {
  args: {
    testimonials: testimonials.map(({ rating, ...t }) => t),
  },
};
