"use client";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Avatar from "@mdigital_ui/ui/avatar";
import Badge from "@mdigital_ui/ui/badge";
import { cn } from "@mdigital_ui/ui";
import type { TeamRosterProps } from "./TeamRoster.types";

const statusDot: Record<string, string> = {
  active: "bg-success",
  away: "bg-warning",
  offline: "bg-text-disabled",
};

export default function TeamRoster({ members, title = "Team", onMemberClick, className }: TeamRosterProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Badge variant="soft" size="sm">{members.length}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {members.map((m) => (
            <div
              key={m.id}
              className={cn("flex items-center gap-3 rounded-md p-2 transition-colors", onMemberClick && "cursor-pointer hover:bg-surface/50")}
              onClick={() => onMemberClick?.(m.id)}
            >
              <div className="relative">
                <Avatar src={m.avatar} name={m.name} size="sm" />
                {m.status && (
                  <div className={cn("absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background", statusDot[m.status] || "bg-text-disabled")} />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{m.name}</p>
                {m.role && <p className="text-xs text-text-secondary">{m.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
