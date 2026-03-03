export interface Goal { id: string; title: string; progress: number; dueDate?: string; status?: "on-track" | "at-risk" | "behind" | "completed"; }
export interface GoalTrackerProps { goals: Goal[]; onGoalClick?: (id: string) => void; className?: string; }
