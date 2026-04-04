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
    id: 'loan-servicing',
    sector: 'Financial Services',
    title: 'Loan Servicing Platform',
    subtitle: 'Custom end-to-end servicing system replacing fragmented processes.',
    challenge:
      'A growing loan portfolio was managed through fragmented systems and manual processes, limiting visibility and operational efficiency.',
    approach: [
      'Mapped existing workflows and identified manual bottlenecks',
      'Designed and implemented a custom servicing platform',
      'Integrated data, workflows, and reporting into a single system',
    ],
    metrics: [
      { label: 'Manual Processing', before: 'Extensive', after: '~60% reduction' },
      { label: 'Reconciliation', before: 'Daily manual tasks', after: 'Eliminated' },
      { label: 'Portfolio Visibility', before: 'Fragmented', after: 'Real-time' },
    ],
    timeline: '12 weeks',
  },
  {
    id: 'charity-crm',
    sector: 'Non-Profit',
    title: 'Charity CRM System',
    subtitle: 'Unified platform for programme management, compliance, and reporting.',
    challenge:
      'Multiple programmes were managed independently, with limited visibility and inconsistent compliance tracking.',
    approach: [
      'Assessed programme workflows and compliance requirements',
      'Designed a unified CRM platform across all programmes',
      'Implemented compliance tracking and organisation-wide reporting',
    ],
    metrics: [
      { label: 'Programme Management', before: 'Siloed', after: 'Centralised' },
      { label: 'Compliance Tracking', before: 'Inconsistent', after: 'Structured oversight' },
      { label: 'Reporting', before: 'Per-programme', after: 'Organisation-wide' },
    ],
    timeline: '10 weeks',
  },
  {
    id: 'financial-reporting',
    sector: 'Financial Services',
    title: 'Financial Reporting Automation',
    subtitle: 'Automated pipelines and dashboards replacing manual data extraction.',
    challenge:
      'Reporting relied on manual data extraction and reconciliation across multiple sources.',
    approach: [
      'Audited existing reporting processes and data sources',
      'Implemented automated data pipelines',
      'Built real-time reporting dashboards',
    ],
    metrics: [
      { label: 'Reporting Time', before: 'Days', after: 'Minutes' },
      { label: 'Data Accuracy', before: 'Error-prone', after: 'Consistent' },
      { label: 'Insights', before: 'Periodic', after: 'Real-time' },
    ],
    timeline: '8 weeks',
  },
];
