export interface PricingPlan { id: string; name: string; description?: string; price: number | string; period?: string; features: string[]; recommended?: boolean; ctaText?: string; }
export interface PricingTableProps { plans: PricingPlan[]; onSelect?: (planId: string) => void; showAnnual?: boolean; className?: string; }
