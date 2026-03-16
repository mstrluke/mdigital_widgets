"use client";
import Button from "@voltui/uikit/button";
import Badge from "@voltui/uikit/badge";
import { cn } from "@voltui/uikit";
import type { HeroSectionProps } from "./HeroSection.types";

export default function HeroSection({ title, subtitle, actions, image, badge, align = "center", className }: HeroSectionProps) {
  return (
    <section className={cn("px-4 py-16 sm:py-24 lg:py-32", align === "center" && "text-center", className)}>
      <div className={cn("mx-auto max-w-4xl", align === "center" && "flex flex-col items-center")}>
        {badge && <Badge variant="soft" className="mb-4">{badge}</Badge>}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-text-secondary sm:text-xl">{subtitle}</p>}
        {actions && (
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {actions.map((a, i) => <Button key={i} as={a.href ? "a" : "button"} href={a.href} onClick={a.onClick} color={a.variant === "secondary" ? undefined : "primary"} variant={a.variant === "secondary" ? "outlined" : "solid"} size="lg">{a.label}</Button>)}
          </div>
        )}
        {image && <div className="mt-12">{image}</div>}
      </div>
    </section>
  );
}
