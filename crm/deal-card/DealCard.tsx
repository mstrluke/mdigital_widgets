"use client";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Avatar from "@mdigital_ui/ui/avatar";
import Badge from "@mdigital_ui/ui/badge";
import Progress from "@mdigital_ui/ui/progress";
import { cn } from "@mdigital_ui/ui";
import type { DealCardProps } from "./DealCard.types";

export default function DealCard({ deal, currency = "$", onClick, className }: DealCardProps) {
  return (
    <Card className={cn(onClick && "cursor-pointer hover:shadow-md transition-shadow", className)} onClick={onClick}>
      <CardContent className="pt-6 space-y-3">
        <div className="flex items-start justify-between">
          <div><p className="font-semibold">{deal.name}</p>{deal.company && <p className="text-sm text-text-secondary">{deal.company}</p>}</div>
          <Badge variant="soft">{deal.stage}</Badge>
        </div>
        <p className="text-2xl font-bold">{currency}{deal.value.toLocaleString()}</p>
        {deal.probability !== undefined && (
          <div><div className="flex justify-between text-xs text-text-secondary mb-1"><span>Probability</span><span>{deal.probability}%</span></div><Progress value={deal.probability} /></div>
        )}
        <div className="flex items-center justify-between text-sm text-text-secondary">
          {deal.owner && <div className="flex items-center gap-2"><Avatar src={deal.owner.avatar} name={deal.owner.name} size="xs" /><span>{deal.owner.name}</span></div>}
          {deal.closeDate && <span>Close: {deal.closeDate}</span>}
        </div>
      </CardContent>
    </Card>
  );
}
