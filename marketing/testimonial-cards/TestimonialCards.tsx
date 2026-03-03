"use client";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Avatar from "@mdigital_ui/ui/avatar";
import { cn } from "@mdigital_ui/ui";
import type { TestimonialCardsProps } from "./TestimonialCards.types";

export default function TestimonialCards({ testimonials, columns = 3, className }: TestimonialCardsProps) {
  return (
    <div className={cn("grid gap-6", columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3", className)}>
      {testimonials.map((t) => (
        <Card key={t.id}><CardContent className="pt-6">
          {t.rating && <div className="mb-3 text-warning">{"★".repeat(t.rating)}<span className="text-text-disabled">{"☆".repeat(5 - t.rating)}</span></div>}
          <p className="text-sm italic text-text-secondary">"{t.content}"</p>
          <div className="mt-4 flex items-center gap-3">
            <Avatar src={t.avatar} name={t.name} size="sm" />
            <div><p className="text-sm font-medium">{t.name}</p>{t.role && <p className="text-xs text-text-secondary">{t.role}</p>}</div>
          </div>
        </CardContent></Card>
      ))}
    </div>
  );
}
