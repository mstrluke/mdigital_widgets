import type { ReactNode } from "react";

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ChartCardProps {
  title: string;
  description?: string;
  data: ChartDataPoint[];
  type?: "bar" | "line";
  color?: string;
  height?: number;
  actions?: ReactNode;
  className?: string;
}
