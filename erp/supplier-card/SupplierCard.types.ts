export interface Supplier { name: string; contact?: string; email?: string; phone?: string; rating?: number; status?: string; categories?: string[]; }
export interface SupplierCardProps { supplier: Supplier; onEdit?: () => void; onContact?: () => void; className?: string; }
