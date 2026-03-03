export interface FilterOption { value: string; label: string; count?: number; }
export interface Filter { id: string; label: string; options: FilterOption[]; value?: string[]; }
export interface FilterBarProps { filters: Filter[]; onChange: (filterId: string, values: string[]) => void; onClear?: () => void; className?: string; }
