"use client";

import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Progress from "@mdigital_ui/ui/progress";
import Badge from "@mdigital_ui/ui/badge";
import { cn } from "@mdigital_ui/ui";
import type { MetricComparisonProps } from "./MetricComparison.types";

export default function MetricComparison({ title, current, previous, format = (v) => v.toLocaleString(), className }: MetricComparisonProps) {
  const max = Math.max(current.value, previous.value);
  const change = previous.value ? ((current.value - previous.value) / previous.value * 100) : 0;
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Badge color={change >= 0 ? "success" : "error"} variant="soft" size="sm">
            {change >= 0 && "+"}{change.toFixed(1)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="flex justify-between text-sm"><span>{current.label}</span><span className="font-medium">{format(current.value)}</span></div>
          <Progress value={(current.value / max) * 100} className="mt-1" color="primary" />
        </div>
        <div>
          <div className="flex justify-between text-sm"><span>{previous.label}</span><span className="font-medium">{format(previous.value)}</span></div>
          <Progress value={(previous.value / max) * 100} className="mt-1" color="default" />
        </div>
      </CardContent>
    </Card>
  );
}
