import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FilterBar from "./FilterBar";

const meta: Meta<typeof FilterBar> = {
  title: "Data/FilterBar",
  component: FilterBar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FilterBar>;

const filters = [
  {
    id: "status",
    label: "Status",
    value: ["active"],
    options: [
      { value: "active", label: "Active", count: 24 },
      { value: "inactive", label: "Inactive", count: 8 },
      { value: "pending", label: "Pending", count: 3 },
    ],
  },
  {
    id: "role",
    label: "Role",
    value: [],
    options: [
      { value: "admin", label: "Admin", count: 5 },
      { value: "editor", label: "Editor", count: 12 },
      { value: "viewer", label: "Viewer", count: 18 },
    ],
  },
];

export const Default: Story = {
  args: {
    filters,
    onChange: (id, val) => console.log("Change:", id, val),
    onClear: () => console.log("Clear all"),
  },
};

export const Interactive: Story = {
  render: () => {
    const [state, setState] = useState(filters);
    return (
      <FilterBar
        filters={state}
        onChange={(id, value) =>
          setState((prev) =>
            prev.map((f) => (f.id === id ? { ...f, value } : f))
          )
        }
        onClear={() => setState((prev) => prev.map((f) => ({ ...f, value: [] })))}
      />
    );
  },
};

export const NoActiveFilters: Story = {
  args: {
    filters: filters.map((f) => ({ ...f, value: [] })),
    onChange: () => {},
  },
};
