import type { Meta, StoryObj } from "@storybook/react";
import SkillsMatrix from "./SkillsMatrix";

const meta: Meta<typeof SkillsMatrix> = {
  title: "HRM/SkillsMatrix",
  component: SkillsMatrix,
  tags: ["autodocs"],
  argTypes: {
    showCategories: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof SkillsMatrix>;

export const Default: Story = {
  args: {
    skills: [
      { name: "React", level: 4, maxLevel: 5, category: "Frontend" },
      { name: "TypeScript", level: 5, maxLevel: 5, category: "Frontend" },
      { name: "CSS/Tailwind", level: 4, maxLevel: 5, category: "Frontend" },
      { name: "Node.js", level: 3, maxLevel: 5, category: "Backend" },
      { name: "PostgreSQL", level: 3, maxLevel: 5, category: "Backend" },
      { name: "Docker", level: 2, maxLevel: 5, category: "DevOps" },
      { name: "CI/CD", level: 3, maxLevel: 5, category: "DevOps" },
    ],
  },
};

export const NoCategoriesGrouping: Story = {
  args: {
    skills: [
      { name: "JavaScript", level: 5, maxLevel: 5 },
      { name: "Python", level: 3, maxLevel: 5 },
      { name: "Go", level: 2, maxLevel: 5 },
    ],
    showCategories: false,
  },
};

export const CustomScale: Story = {
  args: {
    skills: [
      { name: "Leadership", level: 8, maxLevel: 10, category: "Soft Skills" },
      { name: "Communication", level: 9, maxLevel: 10, category: "Soft Skills" },
      { name: "Problem Solving", level: 7, maxLevel: 10, category: "Core" },
    ],
  },
};
