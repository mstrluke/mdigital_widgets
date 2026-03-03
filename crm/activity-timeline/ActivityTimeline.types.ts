export interface TimelineEvent { id: string; type: string; title: string; description?: string; date: string; user?: string; icon?: React.ReactNode; }
export interface ActivityTimelineProps { events: TimelineEvent[]; maxItems?: number; className?: string; }
