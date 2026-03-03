export interface CtaAction { label: string; href?: string; onClick?: () => void; }
export interface CtaBannerProps { title: string; description?: string; primaryAction: CtaAction; secondaryAction?: CtaAction; className?: string; }
