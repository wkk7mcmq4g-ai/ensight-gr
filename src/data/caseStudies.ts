import caseStudyLoan from '@/assets/case-study-loan.jpg';
import caseStudyCharity from '@/assets/case-study-charity.jpg';
import caseStudyReporting from '@/assets/case-study-reporting.jpg';
import caseStudyCosting from '@/assets/case-study-costing.jpg';
import caseStudyInvoice from '@/assets/case-study-invoice.jpg';
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
    image: caseStudyCosting,
    logoScale: 1.9,
  },
  {
    id: 'financial-reporting',
    sector: 'Financial Services',
    client: 'QSIX',
    clientLogo: logoQsix,
    title: 'One Set of Numbers',
    subtitle: 'A governed reporting layer for an institutional portfolio, where every metric has one definition and can be traced to its source.',
    outcome:
      'The firm stopped debating whose number was right. Finance, investment and operations now read the same portfolio position from the same definitions, with lineage back to source, and the reporting cycle no longer depends on one person remembering how a figure was assembled. Meetings moved from reconciling the pack to interrogating what it says.',
    challenge:
      'Portfolio, loan, finance and spend data lived in separate systems, and each team had built its own view on top of its own extract. The same metric carried different definitions in different packs, so a committee meeting could open with two credible numbers for the same position and spend half its time deciding which to believe. Nobody could trace a figure back to where it came from, which made the numbers hard to defend and impossible to audit.',
    approach: [
      'Catalogued every metric already in circulation, traced each to its source and surfaced where two reports used the same name for different calculations',
      'Consolidated portfolio, loan, finance and spend systems into a single governed warehouse, with definitions agreed by the people who rely on them and lineage preserved to source',
      'Rebuilt the reporting layer on those definitions, with a measure-governance audit so the calculated logic behind each figure is documented and reviewable rather than buried in a report',
    ],
    tools: ['Data Warehouse', 'Metric Governance', 'Semantic Modelling', 'Power BI', 'Data Lineage'],
    metrics: [
      { label: 'Definitions', before: 'One metric, several meanings', after: 'One agreed definition, documented' },
      { label: 'Traceability', before: 'Figures could not be traced to source', after: 'Lineage preserved end to end' },
      { label: 'Committee time', before: 'Spent reconciling the pack', after: 'Spent on the decision' },
    ],
    timeline: 'As Head of Data, since 2018',
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
    image: caseStudyInvoice,
  },
  {
    id: 'governed-ai-access',
    sector: 'Financial Services',
    client: 'QSIX',
    clientLogo: logoQsix,
    title: 'Ask the Data',
    subtitle: 'Plain-language access to live portfolio, finance and spend data, with every query scoped and logged.',
    outcome:
      'Finance and investment staff ask in plain language and get an answer from live data. Access widens only by decision, never by default.',
    challenge:
      'The answers were in the warehouse, but getting one meant asking the data team to write a query. Simple questions waited behind complex ones. Giving an AI assistant open access to financial data was not acceptable.',
    approach: [
      "Built a server that lets AI assistants query the group's data warehouse, with read-only access, limits on what each query can do and a log of every request",
      'Used supported vendor connections where they existed, such as for the accounting system, and built only what had no supported option',
      'Added search across internal documents, so an answer cites the document it came from',
      'Wrote the AI and application governance policy that sets who can use what, on which data, adopted across the firm',
    ],
    tools: ['Model Context Protocol Servers', 'Azure App Service', 'Azure MySQL', 'PostgreSQL / pgvector', 'OAuth'],
    metrics: [
      { label: 'Getting an answer', before: 'A request to the data team', after: 'Asked in plain language' },
      { label: 'Control', before: 'None designed for AI', after: 'Read-only, scoped, logged' },
      { label: 'Policy', before: 'None', after: 'One firm-wide policy' },
    ],
    timeline: 'In production',
    icon: 'MessageSquareText',
    keyResult: 'Plain-language answers, every query logged',
    // Placeholder: shares the reporting case image until this case has its own.
    image: caseStudyReporting,
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
    subtitle: 'A centralised platform that brought programme management, volunteer tracking, and compliance reporting under one roof. Built pro bono.',
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
    timeline: 'Pro bono, since 2021',
    icon: 'Heart',
    keyResult: 'Full compliance visibility',
    image: caseStudyCharity,
  },
  {
    id: 'touro-driver-ux',
    sector: 'Transfers Company',
    client: 'myAthensTransfers',
    clientLogo: logoMyAthens,
    title: 'Touro: the app the drivers work from',
    subtitle: 'A mobile-first redesign of the driver screen at an Athens transfer company, built for a phone on the move.',
    outcome: 'Drivers went from squinting at dense tables to glancing at clear, card-based summaries — reducing cognitive load, speeding up pickups, and cutting down on dispatch calls. The new interface brought real-time reliability to field operations.',
    challenge:
      'myAthensTransfers is an airport and port transfer company in Athens. The driver screen had grown with the business and was never designed for a phone on the move. Passenger names, pickup times and flight numbers sat in dense tables that were hard to scan between jobs, so drivers missed details and called dispatch to check them.',
    approach: [
      'Watched how drivers actually used the screen during live jobs',
      'Redesigned the layout mobile-first, around cards with an at-a-glance summary of each transfer',
      'Moved secondary information such as notes, contacts and flight data into expandable panels, keeping the default view clean',
      'Set consistent status indicators and colour cues so a driver can read the state of a transfer without reading text',
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
