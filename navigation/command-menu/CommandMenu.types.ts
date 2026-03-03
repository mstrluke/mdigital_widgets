export interface CommandItem { id: string; label: string; icon?: React.ReactNode; group?: string; onSelect: () => void; }
export interface CommandMenuProps { items: CommandItem[]; open?: boolean; onOpenChange?: (open: boolean) => void; placeholder?: string; }
