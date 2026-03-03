"use client";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Progress from "@mdigital_ui/ui/progress";
import Badge from "@mdigital_ui/ui/badge";
import { cn } from "@mdigital_ui/ui";
import type { StockLevelCardProps } from "./StockLevelCard.types";

export default function StockLevelCard({ product, sku, currentStock, maxStock, reorderPoint, unit = "units", className }: StockLevelCardProps) {
  const pct = (currentStock / maxStock) * 100;
  const status = reorderPoint && currentStock <= reorderPoint ? (currentStock === 0 ? "error" : "warning") : "success";
  return (
    <Card className={className}>
      <CardContent className="pt-6 space-y-3">
        <div className="flex justify-between"><div><p className="font-semibold">{product}</p>{sku && <p className="text-xs text-text-secondary">{sku}</p>}</div>
          <Badge color={status} variant="soft" size="sm">{status === "error" ? "Out of stock" : status === "warning" ? "Low stock" : "In stock"}</Badge></div>
        <div><div className="flex justify-between text-sm mb-1"><span className="text-text-secondary">{currentStock} / {maxStock} {unit}</span><span>{pct.toFixed(0)}%</span></div>
          <div className="relative"><Progress value={pct} color={status} />{reorderPoint && <div className="absolute top-0 h-full w-px bg-error" style={{ left: `${(reorderPoint / maxStock) * 100}%` }} />}</div>
        </div>
      </CardContent>
    </Card>
  );
}
