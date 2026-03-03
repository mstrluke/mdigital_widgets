export interface BulkAction { id: string; label: string; icon?: React.ReactNode; variant?: "default" | "danger"; }
export interface BulkActionBarProps { selectedCount: number; actions: BulkAction[]; onAction: (actionId: string) => void; onClearSelection?: () => void; className?: string; }
