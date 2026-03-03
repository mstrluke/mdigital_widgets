import type { Meta, StoryObj } from "@storybook/react";
import BulkActionBar from "./BulkActionBar";

const meta: Meta<typeof BulkActionBar> = {
  title: "Data/BulkActionBar",
  component: BulkActionBar,
  tags: ["autodocs"],
  argTypes: {
    selectedCount: { control: { type: "number", min: 0, max: 100 } },
  },
};
export default meta;
type Story = StoryObj<typeof BulkActionBar>;

export const Default: Story = {
  args: {
    selectedCount: 5,
    actions: [
      { id: "export", label: "Export" },
      { id: "archive", label: "Archive" },
      { id: "delete", label: "Delete", variant: "danger" },
    ],
    onAction: (id) => console.log("Action:", id),
    onClearSelection: () => console.log("Clear"),
  },
};

export const SingleAction: Story = {
  args: {
    selectedCount: 12,
    actions: [{ id: "delete", label: "Delete selected", variant: "danger" }],
    onAction: (id) => console.log("Action:", id),
    onClearSelection: () => console.log("Clear"),
  },
};

export const NoneSelected: Story = {
  args: {
    selectedCount: 0,
    actions: [{ id: "export", label: "Export" }],
    onAction: () => {},
  },
};
