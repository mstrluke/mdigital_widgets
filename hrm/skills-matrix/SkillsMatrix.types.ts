export interface Skill { name: string; level: number; maxLevel?: number; category?: string; }
export interface SkillsMatrixProps { skills: Skill[]; showCategories?: boolean; className?: string; }
