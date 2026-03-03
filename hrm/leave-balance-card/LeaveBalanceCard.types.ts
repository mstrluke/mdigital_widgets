export interface LeaveBalance { type: string; used: number; total: number; color?: string; }
export interface LeaveBalanceCardProps { balances: LeaveBalance[]; className?: string; }
