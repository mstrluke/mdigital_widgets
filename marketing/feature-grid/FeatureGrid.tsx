"use client";
import Card, { CardContent } from "@voltui/uikit/card";
import { cn } from "@voltui/uikit";
import type { FeatureGridProps } from "./FeatureGrid.types";

const colMap: Record<number, string> = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" };

export default function FeatureGrid({ features, columns = 3, title, subtitle, className }: FeatureGridProps) {
  return (
    <section className={cn("px-4 py-16", className)}>
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && <h2 className="text-3xl font-bold">{title}</h2>}
          {subtitle && <p className="mt-3 text-lg text-text-secondary">{subtitle}</p>}
        </div>
      )}
      <div className={cn("mx-auto grid max-w-6xl gap-6", colMap[columns])}>
        {features.map((f, i) => (
          <Card key={i}><CardContent className="pt-6">
            {f.icon && <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">{f.icon}</div>}
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1.5 text-sm text-text-secondary">{f.description}</p>
          </CardContent></Card>
        ))}
      </div>
    </section>
  );
}
