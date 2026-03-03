"use client";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Checkbox from "@mdigital_ui/ui/checkbox";
import Progress from "@mdigital_ui/ui/progress";
import { cn } from "@mdigital_ui/ui";
import type { OnboardingProgressProps } from "./OnboardingProgress.types";

export default function OnboardingProgress({ tasks, employeeName, onToggle, className }: OnboardingProgressProps) {
  const done = tasks.filter((t) => t.completed).length;
  const pct = Math.round((done / tasks.length) * 100);
  return (
    <Card className={className}><CardHeader>
      <CardTitle className="text-sm font-medium">{employeeName ? `Onboarding: ${employeeName}` : "Onboarding"}</CardTitle>
      <div className="flex items-center gap-3 mt-2"><Progress value={pct} className="flex-1" /><span className="text-sm font-medium">{pct}%</span></div>
    </CardHeader>
      <CardContent><div className="space-y-2">{tasks.map((t) => (
        <Checkbox key={t.id} label={t.title} checked={t.completed} onChange={() => onToggle?.(t.id)} />
      ))}</div></CardContent>
    </Card>
  );
}
