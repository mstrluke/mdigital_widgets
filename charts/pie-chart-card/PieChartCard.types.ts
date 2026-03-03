import type { ReactNode } from "react";

export interface PieSegment {
  label: string;
  value: number;
  color: string;
}

export interface PieChartCardProps {
  title: string;
  segments: PieSegment[];
  size?: number;
  showLegend?: boolean;
  actions?: ReactNode;
  className?: string;
}
