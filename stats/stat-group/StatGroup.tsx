"use client";

import Card, { CardContent } from "@voltui/uikit/card";
import Badge from "@voltui/uikit/badge";
import Skeleton from "@voltui/uikit/skeleton";
import { cn } from "@voltui/uikit";
import type { StatGroupProps } from "./StatGroup.types";

const colMap: Record<number, string> = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" };

export default function StatGroup({ stats, columns = 4, loading, className }: StatGroupProps) {
  return (
    <div className={cn("grid gap-4", colMap[columns], className)}>
      {stats.map((s, i) => (
        <Card key={i}>
          <CardContent className="pt-6">
            {loading ? (
              <div className="space-y-2"><Skeleton className="h-4 w-20" /><Skeleton className="h-7 w-28" /></div>
            ) : (
              <>
                <p className="text-sm text-text-secondary">{s.title}</p>
                <p className="mt-1 text-2xl font-bold">{s.value}</p>
                {s.change !== undefined && (
                  <div className="mt-2 flex items-center gap-1.5 text-sm">
                    <Badge color={s.change > 0 ? "success" : s.change < 0 ? "error" : "default"} variant="soft" size="sm">
                      {s.change > 0 && "+"}{s.change}%
                    </Badge>
                    {s.changeLabel && <span className="text-text-secondary">{s.changeLabel}</span>}
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
