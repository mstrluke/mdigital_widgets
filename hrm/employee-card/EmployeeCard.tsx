"use client";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Avatar from "@mdigital_ui/ui/avatar";
import Badge from "@mdigital_ui/ui/badge";
import Button from "@mdigital_ui/ui/button";
import { cn } from "@mdigital_ui/ui";
import type { EmployeeCardProps } from "./EmployeeCard.types";

export default function EmployeeCard({ employee, onEdit, onMessage, compact, className }: EmployeeCardProps) {
  return (
    <Card className={className}><CardContent className={cn("flex gap-4", compact ? "items-center pt-4" : "flex-col items-center pt-6 text-center")}>
      <Avatar src={employee.avatar} name={employee.name} size={compact ? "md" : "lg"} />
      <div className={cn("min-w-0", compact && "flex-1")}>
        <p className="font-semibold truncate">{employee.name}</p>
        {employee.role && <p className="text-sm text-text-secondary">{employee.role}</p>}
        {employee.department && <Badge variant="soft" size="sm" className="mt-1">{employee.department}</Badge>}
      </div>
      {(onEdit || onMessage) && <div className="flex gap-2">
        {onMessage && <Button variant="outlined" size="sm" onClick={onMessage}>Message</Button>}
        {onEdit && <Button variant="ghost" size="sm" onClick={onEdit}>Edit</Button>}
      </div>}
    </CardContent></Card>
  );
}
