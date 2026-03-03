"use client";

import { useMemo } from "react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import { cn } from "@mdigital_ui/ui";
import type { PieChartCardProps } from "./PieChartCard.types";

export default function PieChartCard({ title, segments, size = 160, showLegend = true, actions, className }: PieChartCardProps) {
  const total = useMemo(() => segments.reduce((a, s) => a + s.value, 0), [segments]);
  const paths = useMemo(() => {
    let cumulative = 0;
    return segments.map((seg) => {
      const start = cumulative;
      cumulative += (seg.value / total) * 360;
      return { ...seg, startAngle: start, endAngle: cumulative };
    });
  }, [segments, total]);

  const r = size / 2;
  const ir = r * 0.6;

  function arc(startDeg: number, endDeg: number, radius: number) {
    const s = ((startDeg - 90) * Math.PI) / 180;
    const e = ((endDeg - 90) * Math.PI) / 180;
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${r + radius * Math.cos(s)} ${r + radius * Math.sin(s)} A ${radius} ${radius} 0 ${large} 1 ${r + radius * Math.cos(e)} ${r + radius * Math.sin(e)}`;
  }

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>{actions}
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          <svg width={size} height={size} className="shrink-0">
            {paths.map((p, i) => (
              <path key={i} d={`${arc(p.startAngle, p.endAngle, r)} L ${r + ir * Math.cos(((p.endAngle - 90) * Math.PI) / 180)} ${r + ir * Math.sin(((p.endAngle - 90) * Math.PI) / 180)} ${arc(p.endAngle, p.startAngle, ir).replace("M", "L")} Z`}
                fill={p.color} />
            ))}
          </svg>
          {showLegend && (
            <div className="flex flex-col gap-2">
              {segments.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-text-secondary">{s.label}</span>
                  <span className="ml-auto font-medium">{((s.value / total) * 100).toFixed(0)}%</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
