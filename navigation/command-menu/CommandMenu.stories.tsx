import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CommandMenu from "./CommandMenu";

const meta: Meta<typeof CommandMenu> = {
  title: "Navigation/CommandMenu",
  component: CommandMenu,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CommandMenu>;

const items = [
  { id: "1", label: "Go to Dashboard", group: "Navigation", onSelect: () => console.log("Dashboard") },
  { id: "2", label: "Go to Projects", group: "Navigation", onSelect: () => console.log("Projects") },
  { id: "3", label: "Go to Settings", group: "Navigation", onSelect: () => console.log("Settings") },
  { id: "4", label: "Create new project", group: "Actions", onSelect: () => console.log("New project") },
  { id: "5", label: "Invite team member", group: "Actions", onSelect: () => console.log("Invite") },
  { id: "6", label: "Export data", group: "Actions", onSelect: () => console.log("Export") },
  { id: "7", label: "Toggle dark mode", group: "Settings", onSelect: () => console.log("Dark mode") },
  { id: "8", label: "View documentation", group: "Help", onSelect: () => console.log("Docs") },
];

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <p className="text-sm text-text-secondary mb-4">Press Cmd+K or click the button to open</p>
        <button onClick={() => setOpen(true)} className="rounded-md border border-border px-3 py-1.5 text-sm text-text-secondary hover:bg-surface">
          Open Command Menu (⌘K)
        </button>
        <CommandMenu items={items} open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};

export const CustomPlaceholder: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <button onClick={() => setOpen(true)} className="rounded-md border border-border px-3 py-1.5 text-sm">Open</button>
        <CommandMenu items={items} open={open} onOpenChange={setOpen} placeholder="Type a command or search..." />
      </div>
    );
  },
};
