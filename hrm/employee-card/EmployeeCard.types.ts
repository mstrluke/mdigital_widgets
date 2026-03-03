export interface Employee { name: string; role?: string; department?: string; email?: string; avatar?: string; status?: "active" | "away" | "offline"; }
export interface EmployeeCardProps { employee: Employee; onEdit?: () => void; onMessage?: () => void; compact?: boolean; className?: string; }
