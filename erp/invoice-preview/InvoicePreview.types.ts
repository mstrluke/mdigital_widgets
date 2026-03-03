export interface InvoiceLineItem { description: string; quantity: number; rate: number; amount: number; }
export interface InvoiceParty { name: string; address?: string; email?: string; }
export interface InvoiceData { id: string; date: string; dueDate: string; from: InvoiceParty; to: InvoiceParty; items: InvoiceLineItem[]; subtotal: number; tax?: number; total: number; currency?: string; status?: string; }
export interface InvoicePreviewProps { invoice: InvoiceData; className?: string; }
