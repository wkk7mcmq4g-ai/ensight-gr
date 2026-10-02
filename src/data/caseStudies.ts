import caseStudyLoan from '@/assets/case-study-loan.jpg';
import caseStudyCharity from '@/assets/case-study-charity.jpg';
import caseStudyReporting from '@/assets/case-study-reporting.jpg';
import caseStudyTouro from '@/assets/case-study-touro.jpg';
import logoHms from '@/assets/logo-hms.png';
import logoMyAthens from '@/assets/logo-myathenstransfers.png';
import logoVolunteering from '@/assets/logo-volunteering-matters.png';
import logoQsix from '@/assets/logo-qsix.png';
import logoLoux from '@/assets/logo-loux.png';

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
  /**
   * Height multiplier for the client logo. Logos are laid out to a shared
   * height, which makes a near-square mark look much smaller than a wide
   * wordmark. Set this above 1 to even out the visual weight.
   */
  logoScale?: number;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'costing-bi-platform',
    sector: 'Consumer Goods',
    client: 'Loux Marlafekas',
    clientLogo: logoLoux,
    title: 'Activity-Based Costing & BI Platform',
    subtitle: 'A costing model and reporting layer built on SoftOne, so management can see what each product and each customer actually earns.',
    outcome:
      'Management moved from a view of revenue to a view of margin. True landed cost is now calculated and carried through to costing and pricing at product and customer level — including third-party goods moving through the distribution network, where margin is thinnest and the exposure was largest. Pricing and commercial decisions are taken against the real numbers rather than an estimate.',
    challenge:
      'The ERP recorded transactions faithfully, but it could not answer the question management kept asking: what does this product actually cost us to make and move, and what does this customer actually earn? Landed cost sat across purchasing, packaging, production and distribution, and nothing brought those pieces together. Pricing decisions were therefore made on gross revenue and gut feel, and the risk concentrated exactly where it mattered most — in third-party goods carried through the network on thin margins.',
    approach: [
      'Led the end-to-end SoftOne ERP transformation first — process redesign, data migration and post-go-live optimisation across finance, procurement and sales — so the transaction data underneath was trustworthy before anything was built on it',
      'Designed the costing model: landed cost from purchase order through to goods received, then allocation of production and distribution activity to products and customers, so cost follows the work actually performed',
      'Built the reporting data warehouse and BI layer on top of SoftOne, giving management margin by product, by customer and by channel, alongside budgeting, forecasting and variance analysis',
    ],
    tools: ['SoftOne ERP', 'Activity-Based Costing', 'Reporting Data Warehouse', 'Power BI', 'Pricing Analysis'],
    metrics: [
      { label: 'Cost per product', before: 'Estimated from averages', after: 'Calculated from landed cost and activity' },
      { label: 'Customer profitability', before: 'Not measured', after: 'Reported by customer and channel' },
      { label: 'Pricing decisions', before: 'Revenue-led', after: 'Margin-led, against real numbers' },
    ],
    timeline: 'Ongoing advisory since 2009',
    icon: 'Calculator',
    keyResult: 'Margin visible per product and customer',
    image: caseStudyReporting,
    logoScale: 1.9,
  },
  {
    id: 'financial-reporting',
    sector: 'Financial Services',
    client: 'QSIX',
    clientLogo: logoQsix,
    title: 'One Set of Numbers',
    subtitle: 'A governed reporting layer for an institutional portfolio, where every metric has one definition — and an AI extraction step that gets supplier invoices into the finance system clean, before they can pollute it.',
    outcome:
      'The firm stopped debating whose number was right. Finance, investment and operations now read the same portfolio position from the same definitions, with lineage back to source, and the reporting cycle no longer depends on one person remembering how a figure was assembled. Supplier invoices arrive structured rather than retyped, so the spend data feeding those reports is consistent from the moment it enters. Meetings moved from reconciling the pack to interrogating what it says.',
    challenge:
      'Portfolio, loan, finance and spend data lived in separate systems, and each team had built its own view on top of its own extract. The same metric carried different definitions in different packs, so a committee meeting could open with two credible numbers for the same position and spend half its time deciding which to believe. Nobody could trace a figure back to where it came from, which made the numbers hard to defend and impossible to audit. Upstream of all of it, supplier invoices were being read by a person and keyed in by hand — the point at which inconsistency enters a finance system and never leaves.',
    approach: [
      'Catalogued every metric already in circulation, traced each to its source and surfaced where two reports used the same name for different calculations',
      'Consolidated portfolio, loan, finance and spend systems into a single governed warehouse, with definitions agreed by the people who rely on them and lineage preserved to source',
      'Rebuilt the reporting layer on those definitions, with a measure-governance audit so the calculated logic behind each figure is documented and reviewable rather than buried in a report',
      'Closed the gap at source: supplier invoices are read automatically with Azure Document Intelligence and routed through Power Automate into the finance system, with a human approving every posting — so spend data arrives structured instead of being retyped into the system it will later be reported from',
    ],
    tools: ['Data Warehouse', 'Metric Governance', 'Semantic Modelling', 'Power BI', 'Data Lineage', 'Azure Document Intelligence', 'Power Automate'],
    metrics: [
      { label: 'Definitions', before: 'One metric, several meanings', after: 'One agreed definition, documented' },
      { label: 'Traceability', before: 'Figures could not be traced to source', after: 'Lineage preserved end to end' },
      { label: 'Invoice capture', before: 'Keyed in by hand, then reconciled', after: 'Extracted automatically, approved by a person' },
      { label: 'Committee time', before: 'Spent reconciling the pack', after: 'Spent on the decision' },
    ],
    timeline: '8 weeks',
    icon: 'BarChart3',
    keyResult: 'One agreed number per metric',
    image: caseStudyReporting,
  },
  {
    id: 'invoice-extraction',
    sector: 'Financial Services',
    client: 'QSIX',
    clientLogo: logoQsix,
    title: 'Invoices the Machine Reads',
    subtitle: 'AI extraction that pulls supplier invoices into the finance system structured and consistent — with a person approving every posting.',
    outcome:
      'Supplier invoices are now read automatically and arrive in the finance system as structured data, routed to the right approver with the extracted values on screen beside the document. Nobody retypes an invoice, and nothing posts without a human saying so. The downstream effect matters more than the time saved: spend data is consistent from the moment it enters, so the reporting built on top of it is arguing about decisions rather than about whether the figures match the paperwork.',
    challenge:
      'Invoices arrived as PDFs and scans, in every layout a supplier cared to use, and were read by a person and keyed in by hand. That is slow, but slow was not the real problem. Hand-keying is where inconsistency enters a finance system and never leaves — a supplier name spelled two ways, a date in the wrong format, a net figure transposed. Every one of those errors is invisible at the point of entry and expensive three months later, when a report is questioned and nobody can tell whether the number or the typing is wrong.',
    approach: [
      'Mapped how invoices actually arrive and who approves what, before any model was involved — including the exceptions, which is where document automation usually fails',
      'Built extraction on Azure Document Intelligence to pull supplier, dates, line detail, net, VAT and totals from unstructured documents, whatever the layout',
      'Orchestrated the flow in Power Automate: extracted values validated against the finance system, routed to the right approver, with the source document alongside — and nothing posts until a person approves it',
      'Designed for the failure case: low-confidence extractions are flagged rather than guessed, and every posting carries a record of what the system read and who approved it',
    ],
    tools: ['Azure Document Intelligence', 'Power Automate', 'ERP Integration', 'Human-in-the-Loop Design', 'Audit Trails'],
    metrics: [
      { label: 'Invoice capture', before: 'Read and keyed in by hand', after: 'Extracted automatically from any layout' },
      { label: 'Data quality at source', before: 'Transposition and spelling drift', after: 'Validated against the finance system' },
      { label: 'Control', before: 'Manual process, no record of why', after: 'Human approval, with an audit trail' },
    ],
    timeline: '6 weeks',
    icon: 'ScanLine',
    keyResult: 'Automated extraction, human approval',
    image: caseStudyLoan,
  },
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
