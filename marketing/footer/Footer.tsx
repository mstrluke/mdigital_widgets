"use client";
import Link from "@voltui/uikit/link";
import { cn } from "@voltui/uikit";
import type { FooterProps } from "./Footer.types";

export default function Footer({ columns, copyright, logo, className }: FooterProps) {
  return (
    <footer className={cn("px-4 py-12", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          {logo && <div>{logo}</div>}
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="mb-3 text-sm font-semibold">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => <li key={j}><Link href={link.href} size="sm" className="text-text-secondary hover:text-text-primary">{link.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        {copyright && <p className="mt-12 text-center text-sm text-text-secondary">{copyright}</p>}
      </div>
    </footer>
  );
}
