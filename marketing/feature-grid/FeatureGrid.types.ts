import type { ReactNode } from "react";
export interface Feature { title: string; description: string; icon?: ReactNode; }
export interface FeatureGridProps { features: Feature[]; columns?: 2 | 3 | 4; title?: string; subtitle?: string; className?: string; }
