export interface CounterStat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface StatsCounterProps {
  stats: CounterStat[];
  className?: string;
}
