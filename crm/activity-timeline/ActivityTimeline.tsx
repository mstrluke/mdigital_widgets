"use client";
import { cn } from "@voltui/uikit";
import Badge from "@voltui/uikit/badge";
import type { ActivityTimelineProps } from "./ActivityTimeline.types";

export default function ActivityTimeline({ events, maxItems, className }: ActivityTimelineProps) {
  const items = maxItems ? events.slice(0, maxItems) : events;
  return (
    <div className={cn("space-y-0", className)}>
      {items.map((e, i) => (
        <div key={e.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">{e.icon || e.type[0].toUpperCase()}</div>
            {i < items.length - 1 && <div className="w-px flex-1 bg-border" />}
          </div>
          <div className="pb-6">
            <div className="flex items-center gap-2"><p className="text-sm font-medium">{e.title}</p><Badge variant="soft" size="sm">{e.type}</Badge></div>
            {e.description && <p className="mt-0.5 text-sm text-text-secondary">{e.description}</p>}
            <p className="mt-1 text-xs text-text-secondary">{e.date}{e.user && ` · ${e.user}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
