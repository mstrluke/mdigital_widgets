"use client";
import Card, { CardContent, CardHeader, CardTitle } from "@voltui/uikit/card";
import Badge from "@voltui/uikit/badge";
import Button from "@voltui/uikit/button";
import { cn } from "@voltui/uikit";
import type { NotificationCenterProps } from "./NotificationCenter.types";

const colorMap: Record<string, string> = { info: "primary", success: "success", warning: "warning", error: "error" };

export default function NotificationCenter({ notifications, onRead, onReadAll, onDismiss, emptyText = "No notifications", className }: NotificationCenterProps) {
  const unread = notifications.filter((n) => !n.read).length;
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2"><CardTitle className="text-base">Notifications</CardTitle>{unread > 0 && <Badge color="primary" size="sm">{unread}</Badge>}</div>
        {unread > 0 && onReadAll && <Button variant="ghost" size="sm" onClick={onReadAll}>Mark all read</Button>}
      </CardHeader>
      <CardContent>
        {!notifications.length ? <div className="flex flex-col items-center justify-center py-8 text-center"><p className="text-sm text-text-secondary">{emptyText}</p></div> : (
          <div className="space-y-1">
            {notifications.map((n) => (
              <div key={n.id} className={cn("flex items-start gap-3 rounded-md p-3 transition-colors", !n.read && "bg-primary/5")}
                onClick={() => !n.read && onRead?.(n.id)} role="button" tabIndex={0}>
                <div className={cn("mt-1 h-2 w-2 shrink-0 rounded-full", !n.read ? "bg-primary" : "bg-transparent")} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{n.title}</p>
                  {n.description && <p className="text-sm text-text-secondary truncate">{n.description}</p>}
                  <p className="mt-1 text-xs text-text-secondary">{n.date}</p>
                </div>
                {onDismiss && <Button variant="ghost" size="sm" iconOnly onClick={(e: any) => { e.stopPropagation(); onDismiss(n.id); }}>×</Button>}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
