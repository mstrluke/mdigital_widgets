"use client";

import { useState, useMemo } from "react";
import Table from "@mdigital_ui/ui/table";
import Skeleton from "@mdigital_ui/ui/skeleton";
import { cn } from "@mdigital_ui/ui";
import type { DataTableProps } from "./DataTable.types";

export default function DataTable<T extends Record<string, any>>({ columns, data, keyField = "id", loading, emptyText = "No data", onRowClick, className }: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sorted = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey];
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("asc"); }
  };

  if (!loading && !data.length) return <div className={cn("flex flex-col items-center justify-center py-12 text-center", className)}><p className="text-sm text-text-secondary">{emptyText}</p></div>;

  return (
    <div className={cn("overflow-auto rounded-lg border border-border", className)}>
      <table className="w-full text-sm">
        <thead className="border-b border-border bg-surface/50">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={cn("px-4 py-3 text-left font-medium text-text-secondary", col.sortable && "cursor-pointer select-none hover:text-text-primary")}
                style={col.width ? { width: col.width } : undefined} onClick={() => col.sortable && handleSort(col.key)}>
                {col.header} {sortKey === col.key && (sortDir === "asc" ? " ↑" : " ↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? Array.from({ length: 5 }).map((_, i) => (
            <tr key={i} className="border-b border-border">
              {columns.map((col) => <td key={col.key} className="px-4 py-3"><Skeleton className="h-4 w-24" /></td>)}
            </tr>
          )) : sorted.map((row, i) => (
            <tr key={row[keyField] ?? i} className={cn("border-b border-border transition-colors hover:bg-surface/30", onRowClick && "cursor-pointer")}
              onClick={() => onRowClick?.(row)}>
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3">{col.render ? col.render(row[col.key], row) : String(row[col.key] ?? "")}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
