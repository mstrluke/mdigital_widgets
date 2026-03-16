"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@voltui/uikit";
import type { StatsCounterProps, CounterStat } from "./StatsCounter.types";

function AnimatedNumber({ stat }: { stat: CounterStat }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      const duration = 1500;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        setCount(Math.floor(p * stat.value));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.disconnect();
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat.value]);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold sm:text-4xl">{stat.prefix}{count.toLocaleString()}{stat.suffix}</p>
      <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
    </div>
  );
}

export default function StatsCounter({ stats, className }: StatsCounterProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-8 py-8 md:grid-cols-4", className)}>
      {stats.map((s, i) => <AnimatedNumber key={i} stat={s} />)}
    </div>
  );
}
