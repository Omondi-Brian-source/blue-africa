export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  icon?: string;
}

export interface EconomicTarget {
  value: string;
  label: string;
  year: number;
  description: string;
}
