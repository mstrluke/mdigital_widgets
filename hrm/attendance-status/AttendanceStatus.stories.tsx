import type { Meta, StoryObj } from "@storybook/react";
import AttendanceStatus from "./AttendanceStatus";

const meta: Meta<typeof AttendanceStatus> = {
  title: "HRM/AttendanceStatus",
  component: AttendanceStatus,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: ["clocked-in", "clocked-out", "on-break"] },
    todayHours: { control: { type: "number", min: 0, max: 12, step: 0.5 } },
  },
};
export default meta;
type Story = StoryObj<typeof AttendanceStatus>;

export const ClockedIn: Story = {
  args: {
    status: "clocked-in",
    clockInTime: "9:00 AM",
    todayHours: 4.5,
    onClockOut: () => console.log("Clock out"),
    onBreak: () => console.log("Break"),
  },
};

export const ClockedOut: Story = {
  args: {
    status: "clocked-out",
    todayHours: 0,
    onClockIn: () => console.log("Clock in"),
  },
};

export const OnBreak: Story = {
  args: {
    status: "on-break",
    clockInTime: "8:30 AM",
    todayHours: 3.2,
    onClockOut: () => console.log("Clock out"),
  },
};
