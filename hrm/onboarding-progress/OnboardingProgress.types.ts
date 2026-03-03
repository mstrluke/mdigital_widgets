export interface OnboardingTask { id: string; title: string; completed: boolean; category?: string; }
export interface OnboardingProgressProps { tasks: OnboardingTask[]; employeeName?: string; onToggle?: (id: string) => void; className?: string; }
