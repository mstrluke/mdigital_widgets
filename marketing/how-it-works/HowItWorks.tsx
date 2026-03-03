"use client";
import { cn } from "@mdigital_ui/ui";
import type { HowItWorksProps } from "./HowItWorks.types";

export default function HowItWorks({ steps, title, subtitle, className }: HowItWorksProps) {
  return (
    <section className={cn("px-4 py-16", className)}>
      {(title || subtitle) && <div className="mb-12 text-center">{title && <h2 className="text-3xl font-bold">{title}</h2>}{subtitle && <p className="mt-3 text-lg text-text-secondary">{subtitle}</p>}</div>}
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">{s.icon || i + 1}</div>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-text-secondary">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
