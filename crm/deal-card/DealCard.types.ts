export interface Deal { id: string; name: string; company?: string; value: number; stage: string; probability?: number; closeDate?: string; owner?: { name: string; avatar?: string }; }
export interface DealCardProps { deal: Deal; currency?: string; onClick?: () => void; className?: string; }
