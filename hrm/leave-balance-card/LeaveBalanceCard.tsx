"use client";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Progress from "@mdigital_ui/ui/progress";
import { cn } from "@mdigital_ui/ui";
import type { LeaveBalanceCardProps } from "./LeaveBalanceCard.types";

export default function LeaveBalanceCard({ balances, className }: LeaveBalanceCardProps) {
  return (
    <Card className={className}><CardHeader><CardTitle className="text-sm font-medium">Leave Balance</CardTitle></CardHeader>
      <CardContent className="space-y-4">{balances.map((b, i) => (
        <div key={i}><div className="flex justify-between text-sm mb-1"><span>{b.type}</span><span className="text-text-secondary">{b.used}/{b.total} days</span></div>
          <Progress value={(b.used / b.total) * 100} color={b.used / b.total > 0.8 ? "warning" : "primary"} /></div>
      ))}</CardContent>
    </Card>
  );
}
