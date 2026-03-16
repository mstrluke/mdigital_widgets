"use client";
import Card, { CardContent, CardHeader, CardTitle } from "@voltui/uikit/card";
import { cn } from "@voltui/uikit";
import type { OrderStatusTrackerProps } from "./OrderStatusTracker.types";

export default function OrderStatusTracker({ orderId, steps, className }: OrderStatusTrackerProps) {
  return (
    <Card className={className}>
      <CardHeader><CardTitle className="text-sm font-medium">Order {orderId}</CardTitle></CardHeader>
      <CardContent>
        <div className="flex items-center">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div className={cn("flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold", s.completed ? "bg-primary text-primary-foreground" : "border-2 border-border text-text-secondary")}>{s.completed ? "✓" : i + 1}</div>
                <p className="mt-2 text-xs font-medium text-center">{s.label}</p>
                {s.date && <p className="text-[10px] text-text-secondary">{s.date}</p>}
              </div>
              {i < steps.length - 1 && <div className={cn("mx-2 h-0.5 flex-1", s.completed ? "bg-primary" : "bg-border")} />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
