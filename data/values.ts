import { CompanyValue, Mission, Purpose } from '@/types';

export const companyMission: Mission = {
  statement: 'Our Mission',
  description: 'Blue Capital is dedicated to mobilizing $100 billion in blue economy investments to foster sustainable development across Africa\'s blue economy sectors. Leveraging finance as a catalyst for positive impact, we aim to create a thriving, climate-resilient world by empowering clients with innovative financial solutions that prioritize sustainability and transformative change.',
  target: '$100 billion',
};

export const companyPurpose: Purpose = {
  statement: 'Our Purpose',
  description: 'Blue Capital\'s purpose is to empower Africa\'s blue economy by delivering specialized advisory services and actionable intelligence, enabling transformative investments that create sustainable value and impact blue ecosystems across the continent.',
};

export const companyValues: CompanyValue[] = [
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Striving to be Africa\'s No. 1 leader in blue finance, delivering innovative and impactful financial solutions.',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description: 'Committing to fostering a sustainable blue economy through specialized advisory services in climate finance, companies, and development agencies.',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Pioneering thought leadership through initiatives like the Africa Blue Economy Intelligence Index (ABEII), the premier data and analytics platform for blue economy performance across African nations.',
  },
  {
    id: 'strategic-insight',
    title: 'Strategic Insight',
    description: 'Providing forward-thinking Blue Economic Intelligence Reports, with quarterly briefings that translate trends into strategic opportunities, keeping investors and companies ahead of the curve.',
  },
];
