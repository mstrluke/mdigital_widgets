import React from "react";

export const Logo = () => (
  <div className="flex items-center gap-2 font-bold text-lg">
    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm">M</div>
    <span>VoltUI</span>
  </div>
);

export const LogoSmall = () => (
  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold">M</div>
);

export const Placeholder = ({ label, className }: { label?: string; className?: string }) => (
  <div className={`flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface/30 p-8 text-sm text-text-secondary ${className || ""}`}>
    {label || "Content"}
  </div>
);

export const SidebarNav = () => (
  <nav className="flex flex-col gap-1">
    {[
      { label: "Dashboard", active: true },
      { label: "Projects" },
      { label: "Team" },
      { label: "Calendar" },
      { label: "Reports" },
      { label: "Settings" },
    ].map((item) => (
      <a
        key={item.label}
        href="#"
        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${item.active ? "bg-primary/10 text-primary font-medium" : "text-text-secondary hover:bg-surface"}`}
      >
        {item.label}
      </a>
    ))}
  </nav>
);

export const HeaderBar = () => (
  <div className="flex h-14 items-center justify-between px-4">
    <Logo />
    <div className="flex items-center gap-3">
      <span className="text-sm text-text-secondary">user@email.com</span>
      <div className="h-8 w-8 rounded-full bg-primary/20" />
    </div>
  </div>
);
