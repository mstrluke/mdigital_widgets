import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Tables/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof DataTable>;

const columns = [
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email", sortable: true },
  { key: "role", header: "Role" },
  { key: "status", header: "Status", render: (val: string) => (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${val === "Active" ? "bg-success/10 text-success" : "bg-text-disabled/10 text-text-secondary"}`}>{val}</span>
  )},
];

const data = [
  { id: "1", name: "Sarah Chen", email: "sarah@acme.com", role: "Admin", status: "Active" },
  { id: "2", name: "Mike Johnson", email: "mike@acme.com", role: "Editor", status: "Active" },
  { id: "3", name: "Lisa Park", email: "lisa@acme.com", role: "Viewer", status: "Inactive" },
  { id: "4", name: "Alex Rivera", email: "alex@acme.com", role: "Editor", status: "Active" },
  { id: "5", name: "Emma Wilson", email: "emma@acme.com", role: "Admin", status: "Active" },
];

export const Default: Story = {
  args: {
    columns,
    data,
    onRowClick: (row) => console.log("Row:", row),
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyText: "No users found. Try adjusting your filters.",
  },
};

export const ManyRows: Story = {
  args: {
    columns,
    data: Array.from({ length: 20 }, (_, i) => ({
      id: String(i),
      name: `User ${i + 1}`,
      email: `user${i + 1}@company.com`,
      role: ["Admin", "Editor", "Viewer"][i % 3],
      status: i % 4 === 0 ? "Inactive" : "Active",
    })),
  },
};
