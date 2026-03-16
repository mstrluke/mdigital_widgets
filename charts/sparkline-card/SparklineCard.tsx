"use client";

import { useMemo } from "react";
import Card, { CardContent } from "@voltui/uikit/card";
import { cn } from "@voltui/uikit";
import type { SparklineCardProps } from "./SparklineCard.types";

export default function SparklineCard({ title, value, data, color = "var(--color-primary)", height = 40, className }: SparklineCardProps) {
  const path = useMemo(() => {
    if (!data.length) return "";
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const w = 100;
    const step = w / (data.length - 1);
    return data.map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${height - ((v - min) / range) * height}`).join(" ");
  }, [data, height]);
  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <p className="text-sm text-text-secondary">{title}</p>
        <p className="mt-1 text-2xl font-bold">{value}</p>
        <svg viewBox={`0 0 100 ${height}`} className="mt-3 w-full" preserveAspectRatio="none" style={{ height }}>
          <path d={path} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </CardContent>
    </Card>
  );
}
