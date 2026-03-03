export interface Step { title: string; description: string; icon?: React.ReactNode; }
export interface HowItWorksProps { steps: Step[]; title?: string; subtitle?: string; className?: string; }
