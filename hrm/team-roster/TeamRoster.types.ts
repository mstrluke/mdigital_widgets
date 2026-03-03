export interface TeamMember { id: string; name: string; role?: string; avatar?: string; status?: "active" | "away" | "offline"; }
export interface TeamRosterProps { members: TeamMember[]; title?: string; onMemberClick?: (id: string) => void; className?: string; }
