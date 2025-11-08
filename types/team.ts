export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'leadership' | 'advisory' | 'technology' | 'finance';
  image: string;
  bio?: string;
  linkedin?: string;
}

export interface JobOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  postedDate: string;
}
