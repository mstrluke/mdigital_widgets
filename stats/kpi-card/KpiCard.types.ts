import type { ReactNode } from "react";

export type TrendDirection = "up" | "down" | "neutral";

export interface KpiCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  trend?: TrendDirection;
  icon?: ReactNode;
  loading?: boolean;
  className?: string;
}
