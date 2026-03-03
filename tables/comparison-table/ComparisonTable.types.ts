export interface ComparisonFeature {
  name: string;
  values: Record<string, string | boolean>;
}

export interface ComparisonTableProps {
  plans: string[];
  features: ComparisonFeature[];
  highlightPlan?: string;
  className?: string;
}
