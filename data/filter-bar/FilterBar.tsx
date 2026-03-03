"use client";
import Badge from "@mdigital_ui/ui/badge";
import Button from "@mdigital_ui/ui/button";
import { cn } from "@mdigital_ui/ui";
import type { FilterBarProps } from "./FilterBar.types";

export default function FilterBar({ filters, onChange, onClear, className }: FilterBarProps) {
  const hasActive = filters.some((f) => f.value?.length);
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {filters.map((filter) => (
        <div key={filter.id} className="flex items-center gap-1">
          <span className="text-xs text-text-secondary">{filter.label}:</span>
          {filter.options.map((opt) => {
            const active = filter.value?.includes(opt.value);
            return (
              <button key={opt.value} onClick={() => {
                const current = filter.value || [];
                onChange(filter.id, active ? current.filter((v) => v !== opt.value) : [...current, opt.value]);
              }} className={cn("rounded-full border px-2.5 py-0.5 text-xs transition-colors", active ? "border-primary bg-primary/10 text-primary" : "border-border text-text-secondary hover:border-foreground")}>
                {opt.label}{opt.count !== undefined && ` (${opt.count})`}
              </button>
            );
          })}
        </div>
      ))}
      {hasActive && onClear && <Button variant="ghost" size="sm" onClick={onClear}>Clear all</Button>}
    </div>
  );
}
