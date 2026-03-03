export interface ScoreFactor { label: string; score: number; max: number; }
export interface LeadScoreIndicatorProps { score: number; maxScore?: number; factors?: ScoreFactor[]; className?: string; }
