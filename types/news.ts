export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: 'announcement' | 'partnership' | 'investment' | 'report' | 'event';
  excerpt: string;
  slug: string;
  content?: string;
}

export interface NewsCategory {
  id: string;
  name: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
}
