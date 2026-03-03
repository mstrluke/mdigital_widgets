"use client";
import Button from "@mdigital_ui/ui/button";
import { cn } from "@mdigital_ui/ui";
import type { BulkActionBarProps } from "./BulkActionBar.types";

export default function BulkActionBar({ selectedCount, actions, onAction, onClearSelection, className }: BulkActionBarProps) {
  if (!selectedCount) return null;
  return (
    <div className={cn("flex items-center gap-3 rounded-lg border border-border bg-surface/30 px-4 py-2", className)}>
      <span className="text-sm font-medium">{selectedCount} selected</span>
      <div className="flex gap-2">
        {actions.map((a) => (
          <Button key={a.id} variant={a.variant === "danger" ? "outlined" : "ghost"} color={a.variant === "danger" ? "error" : undefined} size="sm"
            startContent={a.icon} onClick={() => onAction(a.id)}>{a.label}</Button>
        ))}
      </div>
      {onClearSelection && <Button variant="ghost" size="sm" onClick={onClearSelection} className="ml-auto">Clear</Button>}
    </div>
  );
}
