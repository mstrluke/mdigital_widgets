"use client";
import Card, { CardContent } from "@voltui/uikit/card";
import Badge from "@voltui/uikit/badge";
import Button from "@voltui/uikit/button";
import { cn } from "@voltui/uikit";
import type { AttendanceStatusProps } from "./AttendanceStatus.types";

export default function AttendanceStatus({ status, clockInTime, todayHours, onClockIn, onClockOut, onBreak, className }: AttendanceStatusProps) {
  return (
    <Card className={className}><CardContent className="pt-6 space-y-4">
      <div className="flex items-center justify-between">
        <div><p className="font-semibold">Attendance</p>{clockInTime && <p className="text-sm text-text-secondary">Clocked in at {clockInTime}</p>}</div>
        <Badge color={status === "clocked-in" ? "success" : status === "on-break" ? "warning" : "default"} variant="soft">
          {status === "clocked-in" ? "Working" : status === "on-break" ? "On Break" : "Off"}
        </Badge>
      </div>
      {todayHours !== undefined && <p className="text-2xl font-bold">{todayHours.toFixed(1)}h <span className="text-sm font-normal text-text-secondary">today</span></p>}
      <div className="flex gap-2">
        {status === "clocked-out" && onClockIn && <Button color="primary" size="sm" onClick={onClockIn}>Clock In</Button>}
        {status === "clocked-in" && onClockOut && <Button color="error" variant="outlined" size="sm" onClick={onClockOut}>Clock Out</Button>}
        {status === "clocked-in" && onBreak && <Button variant="outlined" size="sm" onClick={onBreak}>Break</Button>}
      </div>
    </CardContent></Card>
  );
}
