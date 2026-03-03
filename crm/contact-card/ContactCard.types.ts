import type { ReactNode } from "react";
export interface Contact { name: string; email?: string; phone?: string; company?: string; role?: string; avatar?: string; status?: string; tags?: string[]; }
export interface ContactCardProps { contact: Contact; onEdit?: () => void; onCall?: () => void; onEmail?: () => void; actions?: ReactNode; className?: string; }
