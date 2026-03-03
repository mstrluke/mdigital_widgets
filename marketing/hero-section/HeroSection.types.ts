import type { ReactNode } from "react";
export interface HeroAction { label: string; href?: string; onClick?: () => void; variant?: "primary" | "secondary"; }
export interface HeroSectionProps { title: string; subtitle?: string; actions?: HeroAction[]; image?: ReactNode; badge?: string; align?: "left" | "center"; className?: string; }
