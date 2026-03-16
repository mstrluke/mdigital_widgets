"use client";
import Card, { CardContent } from "@voltui/uikit/card";
import Avatar from "@voltui/uikit/avatar";
import Badge from "@voltui/uikit/badge";
import { cn } from "@voltui/uikit";
import type { UserProfileCardProps } from "./UserProfileCard.types";

const statusConfig: Record<string, { color: string; label: string }> = {
  online: { color: "bg-success", label: "Online" },
  away: { color: "bg-warning", label: "Away" },
  busy: { color: "bg-error", label: "Busy" },
  offline: { color: "bg-text-disabled", label: "Offline" },
};

export default function UserProfileCard({ name, email, role, avatar, status, actions, className }: UserProfileCardProps) {
  return (
    <Card className={className}>
      <CardContent className="flex items-center gap-4 pt-6">
        <div className="relative">
          <Avatar src={avatar} name={name} size="lg" />
          {status && <div className={cn("absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background", statusConfig[status].color)} />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold truncate">{name}</p>
          {role && <p className="text-sm text-text-secondary">{role}</p>}
          {email && <p className="text-sm text-text-secondary truncate">{email}</p>}
        </div>
        {actions && <div className="flex shrink-0 gap-2">{actions}</div>}
      </CardContent>
    </Card>
  );
}
