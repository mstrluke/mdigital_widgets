"use client";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Progress from "@mdigital_ui/ui/progress";
import { cn } from "@mdigital_ui/ui";
import type { LeadScoreIndicatorProps } from "./LeadScoreIndicator.types";

export default function LeadScoreIndicator({ score, maxScore = 100, factors, className }: LeadScoreIndicatorProps) {
  const pct = (score / maxScore) * 100;
  const color = pct >= 70 ? "success" : pct >= 40 ? "warning" : "error";
  return (
    <Card className={className}>
      <CardHeader><CardTitle className="text-sm font-medium">Lead Score</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-end gap-2"><span className="text-3xl font-bold">{score}</span><span className="text-sm text-text-secondary">/ {maxScore}</span></div>
        <Progress value={pct} color={color} />
        {factors && (
          <div className="space-y-2 pt-2">
            {factors.map((f, i) => (
              <div key={i}><div className="flex justify-between text-xs mb-1"><span className="text-text-secondary">{f.label}</span><span>{f.score}/{f.max}</span></div><Progress value={(f.score / f.max) * 100} className="h-1.5" /></div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
