import type { ReactNode } from "react";
export interface UserProfileCardProps {
  name: string; email?: string; role?: string; avatar?: string;
  status?: "online" | "offline" | "away" | "busy";
  actions?: ReactNode; className?: string;
}
