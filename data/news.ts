import { NewsArticle } from '@/types';

export const newsArticles: NewsArticle[] = [
  {
    id: 'blue-capital-tanzania-eia-2025',
    title: 'Blue Capital to power Tanzania\'s EIA & Economy – East Africa\'s blue economy gateway',
    date: '2025-08-14',
    category: 'partnership',
    excerpt: 'Blue Capital announces major partnership to power Tanzania\'s Environmental Impact Assessment and economic development as East Africa\'s blue economy gateway.',
    slug: 'blue-capital-tanzania-eia-2025',
  },
  {
    id: 'undp-abew-2026',
    title: 'Blue Capital to join UNDP for ABEW 2026 in Addis Ababa',
    date: '2025-10-29',
    category: 'event',
    excerpt: 'Blue Capital announces participation in the Africa Blue Economy Week 2026 with UNDP in Addis Ababa.',
    slug: 'undp-abew-2026',
  },
  {
    id: 'unlock-100-billion',
    title: 'Blue Capital to unlock $100 billion and accelerate Africa\'s Blue Economy transformation',
    date: '2025-09-14',
    category: 'announcement',
    excerpt: 'Blue Capital announces ambitious plan to unlock $100 billion in sustainable blue economy investments across Africa.',
    slug: 'unlock-100-billion',
  },
  {
    id: 'flood-protection-funding',
    title: 'Blue Capital to establish Usd 10M flood protection funding for Coastal ecosystems in Africa',
    date: '2025-10-14',
    category: 'investment',
    excerpt: 'New $10 million fund launched to protect coastal ecosystems and communities from flooding across Africa.',
    slug: 'flood-protection-funding',
  },
  {
    id: 'julai-energy-investment',
    title: 'Blue Capital announces minority investment in Julai Energy, a leading provider of mining processing solutions in Africa',
    date: '2025-04-07',
    category: 'investment',
    excerpt: 'Strategic minority investment in Julai Energy to support sustainable mining processing solutions across the continent.',
    slug: 'julai-energy-investment',
  },
  {
    id: 'kenya-epza-feasibility',
    title: 'Blue Capital appointed to design EIA & undertake Feasibility study report for Usd 1.5M Kenya Government EPZA project',
    date: '2024-05-14',
    category: 'partnership',
    excerpt: 'Blue Capital selected by Kenya Government to conduct Environmental Impact Assessment and feasibility study for major EPZA project.',
    slug: 'kenya-epza-feasibility',
  },
  {
    id: 'kenya-forest-service',
    title: 'Blue Capital signs Collaborative Finance Framework Agreement with Kenya Forest Service',
    date: '2024-02-14',
    category: 'partnership',
    excerpt: 'Groundbreaking collaborative finance agreement signed with Kenya Forest Service to support sustainable forest management.',
    slug: 'kenya-forest-service',
  },
  {
    id: 'ocean-mpa-financing',
    title: 'Blue Capital Announces $2 Billion of ocean and MPA financing investments in Sub Saharan Africa',
    date: '2024-01-14',
    category: 'investment',
    excerpt: '$2 billion commitment to ocean and Marine Protected Area financing across Sub-Saharan Africa.',
    slug: 'ocean-mpa-financing',
  },
  {
    id: 'expansion-4-countries',
    title: 'Blue Capital poised for both expansion and diversification in 4 African countries',
    date: '2024-07-14',
    category: 'announcement',
    excerpt: 'Blue Capital announces strategic expansion and diversification plans across four African nations.',
    slug: 'expansion-4-countries',
  },
];

export const getNewsArticle = (slug: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.slug === slug);
};

export const getLatestNews = (limit: number = 6): NewsArticle[] => {
  return newsArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getNewsByCategory = (category: string): NewsArticle[] => {
  return newsArticles.filter(article => article.category === category);
};
