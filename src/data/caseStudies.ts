export interface CaseStudy {
  id: string;
  sector: string;
  title: string;
  subtitle: string;
  outcome: string;
  challenge: string;
  approach: string[];
  tools: string[];
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
    outcome: 'A unified platform that cut manual processing by 60% and delivered real-time portfolio visibility.',
    challenge:
      'A growing loan portfolio was managed through fragmented systems and manual processes, limiting visibility and operational efficiency.',
    approach: [
      'Mapped existing workflows and identified manual bottlenecks',
      'Designed and implemented a custom servicing platform',
      'Integrated data, workflows, and reporting into a single system',
    ],
    tools: ['Custom Platform', 'Workflow Automation', 'Data Integration', 'Real-time Dashboards'],
    metrics: [
      { label: 'Manual Processing', before: 'Extensive', after: '~60% reduction' },
      { label: 'Reconciliation', before: 'Daily manual tasks', after: 'Eliminated' },
      { label: 'Portfolio Visibility', before: 'Fragmented', after: 'Real-time' },
    ],
    timeline: '12 weeks',
    quote: 'The platform transformed how we manage our portfolio — what used to take days now happens in real time.',
    quoteAuthor: 'Head of Operations, Financial Services Firm',
  },
  {
    id: 'charity-crm',
    sector: 'Non-Profit',
    title: 'Charity CRM System',
    subtitle: 'Unified platform for programme management, compliance, and reporting.',
    outcome: 'A single CRM that centralised programme management and brought structured compliance oversight.',
    challenge:
      'Multiple programmes were managed independently, with limited visibility and inconsistent compliance tracking.',
    approach: [
      'Assessed programme workflows and compliance requirements',
      'Designed a unified CRM platform across all programmes',
      'Implemented compliance tracking and organisation-wide reporting',
    ],
    tools: ['CRM Design', 'Compliance Framework', 'Centralised Reporting', 'Programme Management'],
    metrics: [
      { label: 'Programme Management', before: 'Siloed', after: 'Centralised' },
      { label: 'Compliance Tracking', before: 'Inconsistent', after: 'Structured oversight' },
      { label: 'Reporting', before: 'Per-programme', after: 'Organisation-wide' },
    ],
    timeline: '10 weeks',
    quote: 'For the first time, we have a complete picture of our programmes and compliance status in one place.',
    quoteAuthor: 'Programme Director, National Charity',
  },
  {
    id: 'financial-reporting',
    sector: 'Financial Services',
    title: 'Financial Reporting Automation',
    subtitle: 'Automated pipelines and dashboards replacing manual data extraction.',
    outcome: 'Reporting reduced from days to minutes with consistent, real-time data across the business.',
    challenge:
      'Reporting relied on manual data extraction and reconciliation across multiple sources.',
    approach: [
      'Audited existing reporting processes and data sources',
      'Implemented automated data pipelines',
      'Built real-time reporting dashboards',
    ],
    tools: ['Automated Pipelines', 'Data Reconciliation', 'Dashboard Design', 'ETL Processes'],
    metrics: [
      { label: 'Reporting Time', before: 'Days', after: 'Minutes' },
      { label: 'Data Accuracy', before: 'Error-prone', after: 'Consistent' },
      { label: 'Insights', before: 'Periodic', after: 'Real-time' },
    ],
    timeline: '8 weeks',
    quote: 'We went from spending days pulling reports to having everything available at the click of a button.',
    quoteAuthor: 'Finance Director, Financial Services Firm',
  },
];
