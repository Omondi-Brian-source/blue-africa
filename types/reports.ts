export interface CountryReport {
  number: number;
  country: string;
  title: string;
  year?: number;
  slug?: string;
}

export interface ReportCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Report {
  id: string;
  title: string;
  description: string;
  category: string;
  published: string;
  downloadUrl?: string;
}
