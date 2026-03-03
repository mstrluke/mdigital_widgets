export interface FooterLink { label: string; href: string; }
export interface FooterColumn { title: string; links: FooterLink[]; }
export interface FooterProps { columns: FooterColumn[]; copyright?: string; logo?: React.ReactNode; className?: string; }
