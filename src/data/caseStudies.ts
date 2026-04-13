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
    subtitle: 'A purpose-built servicing system that replaced fragmented spreadsheets and manual hand-offs with a single, real-time operational hub.',
    outcome: 'HMS moved from a patchwork of disconnected tools to a unified platform that handles the full loan lifecycle — from onboarding through repayment — with real-time visibility at every stage. Manual processing dropped by 60%, and the operations team reclaimed hours previously lost to reconciliation.',
    challenge:
      'As the loan portfolio grew, so did the operational strain. Servicing was spread across disconnected spreadsheets, email threads, and legacy tools — each requiring manual data entry and reconciliation. Portfolio managers lacked a single source of truth, and reporting was a labour-intensive exercise that consumed entire working days. Errors were common, and the team spent more time maintaining processes than improving them.',
    approach: [
      'Conducted a detailed process audit across the full loan lifecycle to identify the highest-friction bottlenecks',
      'Designed a custom servicing platform with role-based workflows, automated task routing, and built-in validation logic',
      'Unified all data sources into a single system with real-time dashboards, automated reconciliation, and audit-ready reporting',
    ],
    tools: ['Custom Platform', 'Workflow Automation', 'Data Integration', 'Real-time Dashboards'],
    metrics: [
      { label: 'Manual Processing', before: 'Extensive daily effort', after: '~60% reduction' },
      { label: 'Reconciliation', before: 'Full-day manual task', after: 'Fully automated' },
      { label: 'Portfolio Visibility', before: 'Fragmented across tools', after: 'Real-time, single view' },
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
    subtitle: 'A centralised platform that brought programme management, volunteer tracking, and compliance reporting under one roof.',
    outcome: 'Volunteering Matters moved from managing each programme in isolation to running the entire organisation through a single CRM — with structured compliance oversight, cross-programme reporting, and a clear operational picture for leadership.',
    challenge:
      'Each programme operated as its own silo, with its own tracking methods, spreadsheets, and reporting cadences. There was no unified view of volunteer engagement, programme outcomes, or compliance status. Leadership decisions were based on manually assembled reports that were often outdated by the time they reached the board. Compliance tracking was inconsistent, creating risk during audits and funding reviews.',
    approach: [
      'Mapped the workflows, data structures, and compliance requirements across all active programmes to understand the full operational landscape',
      'Designed a unified CRM architecture that preserved programme-level flexibility while enabling organisation-wide visibility and standardised reporting',
      'Implemented structured compliance tracking with automated alerts, audit trails, and board-ready reporting dashboards',
    ],
    tools: ['CRM Design', 'Compliance Framework', 'Centralised Reporting', 'Programme Management'],
    metrics: [
      { label: 'Programme Management', before: 'Siloed per programme', after: 'Fully centralised' },
      { label: 'Compliance Tracking', before: 'Ad-hoc and inconsistent', after: 'Structured with audit trails' },
      { label: 'Reporting', before: 'Manual, per-programme', after: 'Real-time, organisation-wide' },
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
    subtitle: 'Automated data pipelines and live dashboards that replaced days of manual extraction with on-demand, accurate reporting.',
    outcome: 'QSIX went from spending days assembling reports from scattered data sources to generating accurate, real-time financial views in minutes. The team shifted from reactive data gathering to proactive, insight-driven decision-making.',
    challenge:
      'Financial reporting was a manual, error-prone process that consumed significant time each reporting cycle. Data lived across multiple platforms — accounting software, bank feeds, internal spreadsheets — and had to be manually extracted, cleaned, and reconciled before any report could be produced. Discrepancies were common, and by the time a report was finalised, the numbers were often already stale.',
    approach: [
      'Audited the end-to-end reporting workflow and catalogued every data source, transformation step, and manual touchpoint',
      'Built automated ETL pipelines that pull, validate, and reconcile data from all sources on a scheduled basis',
      'Designed interactive dashboards with drill-down capability, giving stakeholders real-time access to the metrics that matter most',
    ],
    tools: ['Automated Pipelines', 'Data Reconciliation', 'Dashboard Design', 'ETL Processes'],
    metrics: [
      { label: 'Reporting Time', before: 'Multiple days per cycle', after: 'Minutes, on demand' },
      { label: 'Data Accuracy', before: 'Error-prone, manual checks', after: 'Validated and consistent' },
      { label: 'Insights', before: 'Periodic, backward-looking', after: 'Real-time, actionable' },
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
    subtitle: 'A mobile-first redesign that turned a cluttered driver interface into a fast, scannable command centre for the road.',
    outcome: 'Drivers went from squinting at dense tables to glancing at clear, card-based summaries — reducing cognitive load, speeding up pickups, and cutting down on dispatch calls. The new interface brought real-time reliability to field operations.',
    challenge:
      'The existing driver-facing interface had grown organically alongside the business, but it was never designed for the reality of field use. Critical information — passenger names, pickup times, flight numbers — was buried in dense table layouts that were difficult to scan on a phone screen while on the move. Drivers frequently missed details, leading to delayed pickups and a high volume of calls to dispatch for clarification.',
    approach: [
      'Conducted a field-level usability audit, observing how drivers actually interacted with the interface during live operations',
      'Redesigned the layout around a mobile-first, card-based architecture with at-a-glance transfer summaries and clear visual hierarchy',
      'Introduced expandable detail panels for secondary information — notes, contacts, flight data — keeping the default view clean and focused',
      'Established consistent status indicators and colour cues so drivers could assess transfer state instantly without reading text',
    ],
    tools: ['UX Redesign', 'Mobile-First Design', 'Card-Based UI', 'Visual Hierarchy'],
    metrics: [
      { label: 'Information Access', before: 'Buried in dense layouts', after: 'At-a-glance summaries' },
      { label: 'Cognitive Load', before: 'High, error-prone', after: 'Minimal, focused' },
      { label: 'Field Execution', before: 'Friction-heavy, call-dependent', after: 'Reliable, self-service' },
    ],
    timeline: '6 weeks',
    icon: 'MapPin',
    keyResult: 'At-a-glance clarity',
    image: caseStudyTouro,
  },
];
