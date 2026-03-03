export interface NotificationItem { id: string; title: string; description?: string; type?: "info" | "success" | "warning" | "error"; read?: boolean; date: string; }
export interface NotificationCenterProps { notifications: NotificationItem[]; onRead?: (id: string) => void; onReadAll?: () => void; onDismiss?: (id: string) => void; emptyText?: string; className?: string; }
