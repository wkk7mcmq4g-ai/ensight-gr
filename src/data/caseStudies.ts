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

export const caseStudies: CaseStudy[] = [
  {
    id: 'tourism',
    sector: 'Tourism & Hospitality',
    title: 'Reclaiming 35% of Operational Capacity',
    subtitle: 'A leading hospitality group with 200+ staff across 12 properties.',
    challenge:
      'Operations relied heavily on tribal knowledge and manual coordination across properties. Seasonal scaling meant re-training from scratch every cycle, and management spent 60% of their time firefighting instead of planning.',
    approach: [
      'Embedded with operations teams across 4 properties for 2 weeks',
      'Mapped 23 core processes and identified 9 critical bottlenecks',
      'Designed standardised playbooks for seasonal onboarding',
      'Implemented automated scheduling and task management workflows',
    ],
    metrics: [
      { label: 'Manager time on firefighting', before: '60%', after: '25%' },
      { label: 'Seasonal onboarding time', before: '3 weeks', after: '5 days' },
      { label: 'Cross-property coordination errors', before: '~40/month', after: '~8/month' },
      { label: 'Operational capacity recovered', before: '—', after: '35%' },
    ],
    timeline: '6 weeks from kickoff to full implementation',
    quote: 'We didn\'t realise how much time we were wasting until Ensight showed us the numbers.',
    quoteAuthor: 'COO, Hospitality Group',
  },
  {
    id: 'financial-services',
    sector: 'Financial Services',
    title: 'Cutting Compliance Processing Time by 70%',
    subtitle: 'A mid-sized financial advisory firm with 80 employees.',
    challenge:
      'Compliance reporting was a manual, error-prone process that consumed entire teams for days each quarter. Key person dependencies meant any absence created cascading delays across client deliverables.',
    approach: [
      'Audited end-to-end compliance workflows over 10 days',
      'Identified 14 redundant approval steps and 6 single-point-of-failure roles',
      'Redesigned approval chains with parallel processing',
      'Built automated data collection and pre-populated reporting templates',
    ],
    metrics: [
      { label: 'Quarterly compliance processing', before: '12 days', after: '3.5 days' },
      { label: 'Manual data entry errors', before: '~15%', after: '<2%' },
      { label: 'Key person dependencies', before: '6 roles', after: '1 role' },
      { label: 'Annual cost savings', before: '—', after: '€320,000' },
    ],
    timeline: '8 weeks from audit to go-live',
    quote: 'The ROI was obvious within the first month. We should have done this years ago.',
    quoteAuthor: 'Managing Director, Financial Advisory',
  },
  {
    id: 'manufacturing',
    sector: 'Manufacturing',
    title: 'Eliminating €500K in Hidden Waste',
    subtitle: 'A precision manufacturing company with 150 employees across 2 facilities.',
    challenge:
      'Production planning was done in spreadsheets passed between departments. Quality issues were caught late, rework rates were climbing, and nobody had visibility into true production costs per unit.',
    approach: [
      'Spent 2 weeks on the factory floor observing workflows',
      'Built a process map revealing 31% of activity was non-value-adding',
      'Introduced real-time production dashboards replacing 17 spreadsheets',
      'Redesigned quality checkpoints to catch issues 3 stages earlier',
    ],
    metrics: [
      { label: 'Non-value-adding activity', before: '31%', after: '12%' },
      { label: 'Rework rate', before: '8.5%', after: '2.1%' },
      { label: 'Production visibility', before: 'Weekly reports', after: 'Real-time' },
      { label: 'Annual waste eliminated', before: '—', after: '€500,000' },
    ],
    timeline: '10 weeks from observation to full rollout',
    quote: 'Ensight found half a million euros hiding in plain sight.',
    quoteAuthor: 'Plant Director, Manufacturing',
  },
];
