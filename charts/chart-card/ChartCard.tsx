"use client";

import { useMemo } from "react";
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from "@voltui/uikit/card";
import { cn } from "@voltui/uikit";
import type { ChartCardProps } from "./ChartCard.types";

export default function ChartCard({ title, description, data, type = "bar", color = "var(--color-primary)", height = 200, actions, className }: ChartCardProps) {
  const max = useMemo(() => Math.max(...data.map((d) => d.value), 1), [data]);
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div><CardTitle className="text-sm font-medium">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}</div>
        {actions}
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-1" style={{ height }}>
          {data.map((d, i) => {
            const pct = (d.value / max) * 100;
            return type === "bar" ? (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div className="w-full rounded-t" style={{ height: `${pct}%`, backgroundColor: color, minHeight: 4 }} />
                <span className="text-[10px] text-text-secondary">{d.label}</span>
              </div>
            ) : (
              <div key={i} className="flex flex-1 flex-col items-center">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color, marginBottom: `${pct}%` }} />
                <span className="mt-auto text-[10px] text-text-secondary">{d.label}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
