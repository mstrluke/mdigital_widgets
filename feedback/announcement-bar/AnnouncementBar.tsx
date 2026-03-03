"use client";
import Link from "@mdigital_ui/ui/link";
import Button from "@mdigital_ui/ui/button";
import { cn } from "@mdigital_ui/ui";
import type { AnnouncementBarProps } from "./AnnouncementBar.types";

const variantClasses: Record<string, string> = {
  info: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
};

export default function AnnouncementBar({ message, linkText, linkHref, onDismiss, variant = "info", className }: AnnouncementBarProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2 px-4 py-2 text-sm", variantClasses[variant], className)}>
      <span>{message}</span>
      {linkText && linkHref && <Link href={linkHref} size="sm" className="font-medium underline">{linkText}</Link>}
      {onDismiss && <Button variant="ghost" size="sm" iconOnly onClick={onDismiss} className="ml-2 h-5 w-5">×</Button>}
    </div>
  );
}
