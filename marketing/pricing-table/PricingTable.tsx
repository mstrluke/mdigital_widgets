"use client";
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from "@voltui/uikit/card";
import Button from "@voltui/uikit/button";
import Badge from "@voltui/uikit/badge";
import Divider from "@voltui/uikit/divider";
import { cn } from "@voltui/uikit";
import type { PricingTableProps } from "./PricingTable.types";

export default function PricingTable({ plans, onSelect, className }: PricingTableProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {plans.map((plan) => (
        <Card key={plan.id} className={cn(plan.recommended && "border-primary shadow-md ring-1 ring-primary")}>
          <CardHeader>
            {plan.recommended && <Badge color="primary" className="mb-2 w-fit">Recommended</Badge>}
            <CardTitle>{plan.name}</CardTitle>
            {plan.description && <CardDescription>{plan.description}</CardDescription>}
            <div className="mt-4"><span className="text-3xl font-bold">{typeof plan.price === "number" ? `$${plan.price}` : plan.price}</span>{plan.period && <span className="text-text-secondary">/{plan.period}</span>}</div>
          </CardHeader>
          <CardContent>
            <Divider className="mb-4" />
            <ul className="space-y-2.5">
              {plan.features.map((f, i) => <li key={i} className="flex items-center gap-2 text-sm"><span className="text-success">✓</span>{f}</li>)}
            </ul>
            <Button color={plan.recommended ? "primary" : undefined} variant={plan.recommended ? "solid" : "outlined"} fullWidth className="mt-6"
              onClick={() => onSelect?.(plan.id)}>{plan.ctaText || "Get started"}</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
