"use client";
import Button from "@mdigital_ui/ui/button";
import { cn } from "@mdigital_ui/ui";
import type { CtaBannerProps } from "./CtaBanner.types";

export default function CtaBanner({ title, description, primaryAction, secondaryAction, className }: CtaBannerProps) {
  return (
    <section className={cn("rounded-xl bg-primary/5 px-6 py-12 text-center sm:px-12", className)}>
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-text-secondary">{description}</p>}
      <div className="mt-6 flex justify-center gap-3">
        <Button color="primary" as={primaryAction.href ? "a" : "button"} href={primaryAction.href} onClick={primaryAction.onClick}>{primaryAction.label}</Button>
        {secondaryAction && <Button variant="outlined" as={secondaryAction.href ? "a" : "button"} href={secondaryAction.href} onClick={secondaryAction.onClick}>{secondaryAction.label}</Button>}
      </div>
    </section>
  );
}
