export interface AnnouncementBarProps { message: string; linkText?: string; linkHref?: string; onDismiss?: () => void; variant?: "info" | "success" | "warning" | "error"; className?: string; }
