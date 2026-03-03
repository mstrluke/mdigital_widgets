export interface MetricComparisonProps {
  title: string;
  current: { label: string; value: number };
  previous: { label: string; value: number };
  format?: (v: number) => string;
  className?: string;
}
