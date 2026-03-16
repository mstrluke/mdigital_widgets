"use client";
import { useState, useEffect, useMemo } from "react";
import Modal from "@voltui/uikit/modal";
import Input from "@voltui/uikit/input";
import { cn } from "@voltui/uikit";
import type { CommandMenuProps } from "./CommandMenu.types";

export default function CommandMenu({ items, open, onOpenChange, placeholder = "Search..." }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  useEffect(() => { if (open) setQuery(""); }, [open]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); onOpenChange?.(!open); } };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);
  const filtered = useMemo(() => items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())), [items, query]);
  const groups = useMemo(() => {
    const g: Record<string, typeof items> = {};
    filtered.forEach((i) => { const k = i.group || "Actions"; (g[k] ??= []).push(i); });
    return g;
  }, [filtered]);
  return (
    <Modal open={open} onOpenChange={onOpenChange} showCloseButton={false} className="max-w-lg p-0">
      <div className="border-b border-border p-3"><Input value={query} onChange={(e: any) => setQuery(e.target?.value ?? e)} placeholder={placeholder} autoFocus /></div>
      <div className="max-h-72 overflow-auto p-2">
        {Object.entries(groups).map(([group, gItems]) => (
          <div key={group}>
            <p className="px-2 py-1.5 text-xs font-medium text-text-secondary">{group}</p>
            {gItems.map((item) => (
              <button key={item.id} onClick={() => { item.onSelect(); onOpenChange?.(false); }}
                className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-surface/50 transition-colors">
                {item.icon && <span className="text-text-secondary">{item.icon}</span>}
                {item.label}
              </button>
            ))}
          </div>
        ))}
        {!filtered.length && <p className="py-6 text-center text-sm text-text-secondary">No results</p>}
      </div>
    </Modal>
  );
}
