import caseStudyLoan from '@/assets/case-study-loan.jpg';
import caseStudyCharity from '@/assets/case-study-charity.jpg';
import caseStudyReporting from '@/assets/case-study-reporting.jpg';
import caseStudyTouro from '@/assets/case-study-touro.jpg';
import logoHms from '@/assets/logo-hms.png';
import logoMyAthens from '@/assets/logo-myathenstransfers.png';
import logoVolunteering from '@/assets/logo-volunteering-matters.png';
import logoQsix from '@/assets/logo-qsix.png';

export interface CaseStudy {
  id: string;
  sector: string;
  client: string;
  clientLogo: string;
  title: string;
  subtitle: string;
  outcome: string;
  challenge: string;
  approach: string[];
  tools: string[];
  metrics: { label: string; before: string; after: string }[];
  timeline: string;
  icon: string;
  keyResult: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'loan-servicing',
    sector: 'Financial Services',
    client: 'HMS',
    clientLogo: logoHms,
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
    icon: 'Landmark',
    keyResult: '60% less manual work',
    image: caseStudyLoan,
  },
  {
    id: 'charity-crm',
    sector: 'Non-Profit',
    client: 'Volunteering Matters',
    clientLogo: logoVolunteering,
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
    icon: 'Heart',
    keyResult: 'Full compliance visibility',
    image: caseStudyCharity,
  },
  {
    id: 'financial-reporting',
    sector: 'Financial Services',
    client: 'QSIX',
    clientLogo: logoQsix,
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
    icon: 'BarChart3',
    keyResult: 'Days → Minutes',
    image: caseStudyReporting,
  },
  {
    id: 'touro-driver-ux',
    sector: 'Tourism & Transport',
    client: 'MyAthensTransfers',
    clientLogo: logoMyAthens,
    title: 'Touro — Improving Driver Operations Through Better UX',
    subtitle: 'Redesigning the driver-facing interface for clarity, speed, and reliable field execution.',
    outcome: 'A mobile-first, card-based interface that reduced cognitive load and improved real-time operational reliability for drivers.',
    challenge:
      'The existing driver interface was functional but not designed for field use — hard to scan quickly, not mobile-friendly, and key information was buried in dense layouts. This slowed down drivers and increased operational friction.',
    approach: [
      'Audited the existing interface for usability pain points in field conditions',
      'Designed a mobile-first, card-based layout with at-a-glance transfer summaries',
      'Introduced expandable details for notes, contacts, and flight information',
      'Established clear visual hierarchy and status cues for fast decision-making',
    ],
    tools: ['UX Redesign', 'Mobile-First Design', 'Card-Based UI', 'Visual Hierarchy'],
    metrics: [
      { label: 'Information Access', before: 'Buried in dense layouts', after: 'At-a-glance' },
      { label: 'Cognitive Load', before: 'High', after: 'Reduced' },
      { label: 'Field Execution', before: 'Friction-heavy', after: 'Reliable' },
    ],
    timeline: '6 weeks',
    icon: 'MapPin',
    keyResult: 'At-a-glance clarity',
    image: caseStudyTouro,
  },
];
