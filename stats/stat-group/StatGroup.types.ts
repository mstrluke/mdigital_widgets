export interface StatItem {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
}

export interface StatGroupProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  loading?: boolean;
  className?: string;
}
