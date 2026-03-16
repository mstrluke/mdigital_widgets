"use client";
import Card, { CardContent, CardHeader, CardTitle } from "@voltui/uikit/card";
import Progress from "@voltui/uikit/progress";
import Badge from "@voltui/uikit/badge";
import { cn } from "@voltui/uikit";
import type { SkillsMatrixProps } from "./SkillsMatrix.types";

export default function SkillsMatrix({ skills, showCategories = true, className }: SkillsMatrixProps) {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, s) => { (acc[s.category || "General"] ??= []).push(s); return acc; }, {});
  return (
    <Card className={className}><CardHeader><CardTitle className="text-sm font-medium">Skills</CardTitle></CardHeader>
      <CardContent className="space-y-4">{Object.entries(grouped).map(([cat, items]) => (
        <div key={cat}>
          {showCategories && <Badge variant="soft" size="sm" className="mb-2">{cat}</Badge>}
          <div className="space-y-2">{items.map((s, i) => (
            <div key={i}><div className="flex justify-between text-sm mb-1"><span>{s.name}</span><span className="text-text-secondary">{s.level}/{s.maxLevel || 5}</span></div>
              <Progress value={(s.level / (s.maxLevel || 5)) * 100} className="h-1.5" /></div>
          ))}</div>
        </div>
      ))}</CardContent>
    </Card>
  );
}
