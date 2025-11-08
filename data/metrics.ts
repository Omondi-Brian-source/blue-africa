import { ImpactMetric, EconomicTarget } from '@/types';

export const impactMetrics: ImpactMetric[] = [
  {
    id: 'capital-crowded',
    value: '£1.9 Billion',
    label: 'Amount of long-term capital crowded in for SMEs, affordable housing and sustainable energy projects',
    description: 'Long-term capital mobilized for sustainable development',
  },
  {
    id: 'business-access',
    value: '3.2 Million',
    label: 'Number of businesses that have gained improved access to financial services',
    description: 'Businesses empowered with financial access',
  },
  {
    id: 'green-investments',
    value: '£50 Million',
    label: 'Investments in Green Projects',
    description: 'Capital deployed in environmental initiatives',
  },
  {
    id: 'sme-capital',
    value: '67,200',
    label: 'Amount of long-term capital crowded in for SMEs, affordable housing and sustainable energy projects',
    description: 'Additional capital for SME development',
  },
  {
    id: 'individual-access',
    value: '12 Million',
    label: 'Number of individuals that have gained improved access to financial services',
    description: 'Individuals with improved financial access',
  },
  {
    id: 'regulations',
    value: '150',
    label: 'Number of regulations, policies, investment guidelines and master plans developed or refined',
    description: 'Policy frameworks created or enhanced',
  },
];

export const economicTarget: EconomicTarget = {
  value: '$1.8 Trillion',
  label: 'Blue Economic Value target in Africa by 2030',
  year: 2030,
  description: 'Our ambitious target for blue economy value creation across Africa',
};

export const missionTarget = {
  value: '$100 billion',
  description: 'Our mission is to unlock $100 billion annually in sustainable Blue economy investments in Africa',
};
