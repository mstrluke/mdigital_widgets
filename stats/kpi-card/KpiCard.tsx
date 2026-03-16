"use client";

import Card, { CardContent } from "@voltui/uikit/card";
import Badge from "@voltui/uikit/badge";
import Skeleton from "@voltui/uikit/skeleton";
import { cn } from "@voltui/uikit";
import type { KpiCardProps } from "./KpiCard.types";

export default function KpiCard({ title, value, change, changeLabel, trend, icon, loading, className }: KpiCardProps) {
  if (loading) {
    return <Card className={className}><CardContent className="pt-6 space-y-3"><Skeleton className="h-4 w-24" /><Skeleton className="h-8 w-32" /><Skeleton className="h-4 w-20" /></CardContent></Card>;
  }
  const dir = trend ?? (change !== undefined ? (change > 0 ? "up" : change < 0 ? "down" : "neutral") : undefined);
  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-text-secondary">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          {icon && <div className="rounded-lg bg-primary/10 p-2 text-primary">{icon}</div>}
        </div>
        {change !== undefined && (
          <div className="mt-3 flex items-center gap-1.5 text-sm">
            <Badge color={dir === "up" ? "success" : dir === "down" ? "error" : "default"} variant="soft" size="sm">
              {dir === "up" && "↑"}{dir === "down" && "↓"} {Math.abs(change)}%
            </Badge>
            {changeLabel && <span className="text-text-secondary">{changeLabel}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
