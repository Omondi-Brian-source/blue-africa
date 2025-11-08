export interface Interview {
  id: string;
  person: string;
  title: string;
  organization: string;
  topic: string;
  image?: string;
  date?: string;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  category: 'interview' | 'analysis' | 'research';
  author?: string;
  date: string;
  slug: string;
}
