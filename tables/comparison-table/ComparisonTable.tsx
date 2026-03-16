"use client";

import Badge from "@voltui/uikit/badge";
import { cn } from "@voltui/uikit";
import type { ComparisonTableProps } from "./ComparisonTable.types";

export default function ComparisonTable({ plans, features, highlightPlan, className }: ComparisonTableProps) {
  return (
    <div className={cn("overflow-auto rounded-lg border border-border", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-surface/50">
            <th className="px-4 py-3 text-left font-medium text-text-secondary">Feature</th>
            {plans.map((p) => (
              <th key={p} className={cn("px-4 py-3 text-center font-medium", p === highlightPlan ? "text-primary" : "text-text-secondary")}>{p}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((f, i) => (
            <tr key={i} className="border-b border-border">
              <td className="px-4 py-3 font-medium">{f.name}</td>
              {plans.map((p) => {
                const v = f.values[p];
                return (
                  <td key={p} className="px-4 py-3 text-center">
                    {typeof v === "boolean" ? (v ? <Badge color="success" variant="soft" size="sm">✓</Badge> : <span className="text-text-secondary">—</span>) : <span>{v}</span>}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
