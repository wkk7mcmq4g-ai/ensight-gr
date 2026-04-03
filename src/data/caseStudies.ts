export interface CaseStudy {
  id: string;
  sector: string;
  title: string;
  subtitle: string;
  challenge: string;
  approach: string[];
  metrics: { label: string; before: string; after: string }[];
  timeline: string;
  quote?: string;
  quoteAuthor?: string;
}

// TODO: Add real case study data
export const caseStudies: CaseStudy[] = [
  {
    id: 'tourism',
    sector: 'Tourism & Hospitality',
    title: 'Case Study Coming Soon',
    subtitle: 'Details to be added.',
    challenge: 'Details coming soon.',
    approach: ['Details coming soon.'],
    metrics: [
      { label: 'Metric 1', before: '—', after: 'TBD' },
      { label: 'Metric 2', before: '—', after: 'TBD' },
    ],
    timeline: 'TBD',
  },
  {
    id: 'financial-services',
    sector: 'Financial Services',
    title: 'Case Study Coming Soon',
    subtitle: 'Details to be added.',
    challenge: 'Details coming soon.',
    approach: ['Details coming soon.'],
    metrics: [
      { label: 'Metric 1', before: '—', after: 'TBD' },
      { label: 'Metric 2', before: '—', after: 'TBD' },
    ],
    timeline: 'TBD',
  },
  {
    id: 'manufacturing',
    sector: 'Manufacturing',
    title: 'Case Study Coming Soon',
    subtitle: 'Details to be added.',
    challenge: 'Details coming soon.',
    approach: ['Details coming soon.'],
    metrics: [
      { label: 'Metric 1', before: '—', after: 'TBD' },
      { label: 'Metric 2', before: '—', after: 'TBD' },
    ],
    timeline: 'TBD',
  },
];
