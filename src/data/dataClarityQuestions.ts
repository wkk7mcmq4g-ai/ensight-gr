export interface DataClarityOption {
  text: string;
  score: number;
}

export type DataClarityCategory =
  | 'Data Availability'
  | 'Data Consistency'
  | 'Cost Visibility'
  | 'System Integration'
  | 'Reporting Maturity';

export interface DataClarityQuestion {
  text: string;
  options: DataClarityOption[];
}

export interface DataClarityDimension {
  id: string;
  name: DataClarityCategory;
  weight: number;
  color: string;
  bgLight: string;
  borderLight: string;
  sub: string;
  questions: DataClarityQuestion[];
}

export const DIMS: DataClarityDimension[] = [
  {
    id: 'availability',
    name: 'Data Availability',
    weight: 0.25,
    color: '#4F46E5',
    bgLight: 'rgba(79,70,229,0.08)',
    borderLight: 'rgba(79,70,229,0.25)',
    sub: 'Does the data that matters actually exist, and is it captured systematically?',
    questions: [
      {
        text: 'How is your core transactional data — sales, orders, bookings — captured?',
        options: [
          { score: 1, text: 'Not systematically. Much exists only in emails, messages, or people\'s memory.' },
          { score: 2, text: 'Core transactions are recorded but key details like client, product, or location are often missing.' },
          { score: 3, text: 'Core transactions are captured consistently. Some gaps in secondary areas.' },
          { score: 4, text: 'Comprehensive, structured capture across all business activities. The right data exists and is retrievable.' },
        ],
      },
      {
        text: 'What happens to your data when the person who usually manages it is absent?',
        options: [
          { score: 1, text: 'The process stalls or breaks. Data exists primarily in one person\'s knowledge or files.' },
          { score: 2, text: 'Some disruption. Workarounds exist but they are manual and unreliable.' },
          { score: 3, text: 'Mild disruption only. Processes are partially documented and others can step in with effort.' },
          { score: 4, text: 'No significant disruption. Data capture is systematised and not dependent on any individual.' },
        ],
      },
      {
        text: 'How much operational data do you capture beyond core transactions — staff time, vehicle usage, production runs?',
        options: [
          { score: 1, text: 'Little to none. Operational activity is not formally recorded.' },
          { score: 2, text: 'Some is recorded but informally — timesheets, notes, rough logs. Not structured or consistent.' },
          { score: 3, text: 'Key operational metrics are tracked. Some gaps in secondary areas.' },
          { score: 4, text: 'Comprehensive operational data capture across most functions.' },
        ],
      },
    ],
  },
  {
    id: 'consistency',
    name: 'Data Consistency',
    weight: 0.25,
    color: '#06B6D4',
    bgLight: 'rgba(6,182,212,0.08)',
    borderLight: 'rgba(6,182,212,0.25)',
    sub: 'Is there a single agreed version of truth, or do different systems produce conflicting numbers?',
    questions: [
      {
        text: 'If you asked your owner and your CFO what revenue was last month, what would happen?',
        options: [
          { score: 1, text: 'They would give materially different figures and neither could quickly explain why.' },
          { score: 2, text: 'Similar figures but with acknowledged differences they cannot fully reconcile.' },
          { score: 3, text: 'The same number for most purposes, with minor known differences.' },
          { score: 4, text: 'Exactly the same number. There is one agreed, single source for this metric.' },
        ],
      },
      {
        text: 'When two of your systems both record the same transaction, how often do they agree?',
        options: [
          { score: 1, text: 'Frequently they do not. Discrepancies are common and reconciliation is manual.' },
          { score: 2, text: 'They usually agree on totals but differ on details like timing or categorisation.' },
          { score: 3, text: 'They mostly agree. Occasional discrepancies are resolved through a known process.' },
          { score: 4, text: 'They always agree, or we have only one system recording each transaction type.' },
        ],
      },
      {
        text: 'Has a management meeting ever been derailed because different people had different figures for the same thing?',
        options: [
          { score: 1, text: 'Regularly. It is a known, recurring problem that undermines management meetings.' },
          { score: 2, text: 'Occasionally. Not frequent enough to have prompted a systematic fix.' },
          { score: 3, text: 'Rarely. When it happens it is quickly resolved.' },
          { score: 4, text: 'Never. Our numbers are consistently agreed across the team.' },
        ],
      },
    ],
  },
  {
    id: 'cost',
    name: 'Cost Visibility',
    weight: 0.20,
    color: '#F59E0B',
    bgLight: 'rgba(245,158,11,0.08)',
    borderLight: 'rgba(245,158,11,0.25)',
    sub: 'Are costs allocated to clients, products, and business units — or sitting in aggregate overhead?',
    questions: [
      {
        text: 'Can you tell me the net margin — after all costs — of your top client?',
        options: [
          { score: 1, text: 'No. We know total costs but they are not broken down by client.' },
          { score: 2, text: 'We know gross margin per client but indirect costs are not allocated at client level.' },
          { score: 3, text: 'We have an approximate net margin using a simple allocation method, but not activity-based.' },
          { score: 4, text: 'Yes. Accurate net margin per client based on actual, activity-based cost allocation.' },
        ],
      },
      {
        text: 'How are indirect costs — logistics, account management, admin, support — allocated in your P&L?',
        options: [
          { score: 1, text: 'They are not allocated. They sit in a single overhead line.' },
          { score: 2, text: 'Allocated by a simple method like percentage of revenue, but this is approximate.' },
          { score: 3, text: 'Most are allocated using reasonable drivers. Some categories remain in an overhead pool.' },
          { score: 4, text: 'All significant costs allocated using activity-based drivers that reflect actual consumption.' },
        ],
      },
      {
        text: 'When you price a new contract, what cost data do you reference?',
        options: [
          { score: 1, text: 'Market rates or competitor pricing. We do not have cost data at the required granularity.' },
          { score: 2, text: 'Direct cost estimates only. Indirect costs added as a standard overhead percentage.' },
          { score: 3, text: 'A cost model that includes most cost types, though not all allocated precisely.' },
          { score: 4, text: 'A detailed cost model showing the actual cost to serve this specific client or product type.' },
        ],
      },
    ],
  },
  {
    id: 'integration',
    name: 'System Integration',
    weight: 0.15,
    color: '#7C3AED',
    bgLight: 'rgba(124,58,237,0.08)',
    borderLight: 'rgba(124,58,237,0.25)',
    sub: 'Do your key systems communicate, or is data moved manually between them?',
    questions: [
      {
        text: 'How does your accounting system know about a transaction that originated in your booking, CRM, or sales platform?',
        options: [
          { score: 1, text: 'Manual entry. Someone re-keys or copy-pastes data from one system to another.' },
          { score: 2, text: 'Regular manual export and import. Some automation exists but human steps remain.' },
          { score: 3, text: 'Partial automation. Key flows are connected; some secondary flows are still manual.' },
          { score: 4, text: 'Fully automated. Systems are integrated and data flows without manual intervention.' },
        ],
      },
      {
        text: 'How many spreadsheets are actively used as part of your regular reporting process?',
        options: [
          { score: 1, text: 'Many — spreadsheets are the primary reporting layer sitting between our systems.' },
          { score: 2, text: 'Several. Reports cannot be produced without significant spreadsheet work.' },
          { score: 3, text: 'A few — used for supplementary analysis but not as the main reporting layer.' },
          { score: 4, text: 'Minimal. Most reporting comes directly from systems rather than assembled in spreadsheets.' },
        ],
      },
      {
        text: 'How long does it take to produce a standard management report once a request is made?',
        options: [
          { score: 1, text: 'Several days. Reports require significant manual assembly from multiple sources.' },
          { score: 2, text: 'One to two days. The process is known but involves multiple manual steps.' },
          { score: 3, text: 'A few hours. Mostly automated, with some manual steps to finalise.' },
          { score: 4, text: 'Near-instant or scheduled. Reports are produced automatically on a defined cadence.' },
        ],
      },
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting Maturity',
    weight: 0.15,
    color: '#10B981',
    bgLight: 'rgba(16,185,129,0.08)',
    borderLight: 'rgba(16,185,129,0.25)',
    sub: 'What reporting exists today, how is it produced, and does management use it to make decisions?',
    questions: [
      {
        text: 'What reports does management look at every week or month without fail?',
        options: [
          { score: 1, text: 'None formally. Decisions are made based on conversations and individual recollections.' },
          { score: 2, text: 'Basic financial reports — P&L, aged debtors. No operational reporting.' },
          { score: 3, text: 'A management pack covering main commercial metrics. Produced regularly, but manually.' },
          { score: 4, text: 'A standing KPI dashboard or pack reviewed regularly. It defines the management rhythm.' },
        ],
      },
      {
        text: 'When a commercial decision is made — pricing, client targeting, resource allocation — what data is referenced?',
        options: [
          { score: 1, text: 'Mostly intuition and experience. We do not have specific data to reference.' },
          { score: 2, text: 'High-level financials. The data exists but is too aggregate to be decision-specific.' },
          { score: 3, text: 'We have relevant data most of the time, though it sometimes requires manual assembly.' },
          { score: 4, text: 'Specific data is routinely referenced for most decisions. The infrastructure supports this.' },
        ],
      },
      {
        text: 'What is the one thing you wish you could see right now that you currently cannot?',
        options: [
          { score: 1, text: 'Basic performance — we do not know how the business is doing at any given moment.' },
          { score: 2, text: 'Granularity — we have totals but cannot break them down by client, product, or unit.' },
          { score: 3, text: 'Timeliness — we have the right metrics but they lag too far behind actual performance.' },
          { score: 4, text: 'Predictive insight — we have good current data but want forward-looking analytics.' },
        ],
      },
    ],
  },
];

export interface VerdictStep {
  title: string;
  desc: string;
}

export interface VerdictInfo {
  name: string;
  color: string;
  bg: string;
  border: string;
  desc: string;
  steps: VerdictStep[];
}

export const VERDICTS: Record<string, VerdictInfo> = {
  build: {
    name: 'Build-ready',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.3)',
    desc: 'Your data foundation is sufficient to proceed to the Analytics Build. Minor gaps can be addressed during the build phase itself. The next step is scoping the Analytics Build based on your business profile and sector.',
    steps: [
      { title: 'Book the Analytics Build scoping session', desc: 'A 60-minute session to define the dashboard scope, KPI framework, and build timeline based on your Assessment findings.' },
      { title: 'Address any flagged gaps in parallel', desc: 'Minor data gaps or inconsistencies identified in the Assessment are resolved during the early build phase — they do not block the start.' },
      { title: 'Begin phased delivery', desc: 'The Analytics Build starts with the KPI Framework and data architecture. Working dashboards are in your hands within the first few weeks.' },
      { title: 'Transition to the Data Clarity Retainer', desc: 'Once the system is live and adopted, the monthly partnership begins — turning data into decisions every month.' },
    ],
  },
  foundation: {
    name: 'Foundation first',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.3)',
    desc: 'Specific data foundation work is required before a full Analytics Build can proceed. The flagged dimensions need targeted remediation. In some cases a partial build is possible while remediation runs in parallel.',
    steps: [
      { title: 'Review the dimension-level findings', desc: 'Each flagged dimension has specific remediation actions, addressed in order of dependency — consistency and availability before cost allocation.' },
      { title: 'Develop a sequenced remediation plan', desc: 'A plan covering each gap, the actions required, ownership, and estimated effort to reach Build-Ready.' },
      { title: 'Consider a partial build', desc: 'Where some dimensions score well, a limited build on those areas may be possible immediately — delivering early value while remediation proceeds.' },
      { title: 'Re-assess and proceed to full build', desc: 'Once remediation milestones are met, a brief re-assessment confirms readiness and the full Analytics Build scoping session is scheduled.' },
    ],
  },
  notviable: {
    name: 'Not viable yet',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.3)',
    desc: 'The data foundation has fundamental issues that would undermine any analytics system built on it. The most valuable next step is not to build, but to address the root causes first — which are typically operational and process issues rather than purely technical ones.',
    steps: [
      { title: 'Review the full findings in detail', desc: 'A 60-minute session to walk through the Assessment results, clarify root causes, and identify any immediate quick wins.' },
      { title: 'Consider Operational Clarity first', desc: 'Process issues are the most common cause of data problems. An Operational Clarity engagement addresses the underlying workflows that produce unreliable or absent data.' },
      { title: 'Build a remediation roadmap', desc: 'A sequenced plan covering the actions needed to reach Foundation First — with clear owners, timelines, and milestones.' },
      { title: 'Re-assess in 3–6 months', desc: 'Once remediation is underway, a follow-up Data Clarity Assessment confirms progress and determines when the Analytics Build can begin.' },
    ],
  },
};

// Scoring helpers
export function dimScore(dimId: string, answers: Record<string, Record<number, number>>): number | null {
  const a = answers[dimId];
  if (!a) return null;
  const dim = DIMS.find((d) => d.id === dimId);
  if (!dim) return null;
  const filled = dim.questions.filter((_, i) => a[i] !== undefined);
  if (filled.length < dim.questions.length) return null;
  return dim.questions.reduce((t, _, i) => t + (a[i] ?? 0), 0) / dim.questions.length;
}

export function compositeScore(answers: Record<string, Record<number, number>>): number | null {
  let t = 0;
  for (const d of DIMS) {
    const s = dimScore(d.id, answers);
    if (s === null) return null;
    t += s * d.weight;
  }
  return t;
}

export function readinessPct(composite: number): number {
  return Math.round((composite / 4) * 100);
}

export function getVerdict(answers: Record<string, Record<number, number>>): string {
  const comp = compositeScore(answers);
  if (comp === null) return 'notviable';
  const scores = DIMS.map((d) => dimScore(d.id, answers));
  const critCount = scores.filter((s) => s !== null && s <= 1.0).length;
  if (critCount >= 2) return 'notviable';
  let p = readinessPct(comp);
  if (critCount === 1 && p >= 75) p = 74;
  if (p >= 75) return 'build';
  if (p >= 50) return 'foundation';
  return 'notviable';
}

export function dimComplete(dimId: string, answers: Record<string, Record<number, number>>): boolean {
  const dim = DIMS.find((d) => d.id === dimId);
  if (!dim) return false;
  const a = answers[dimId] || {};
  return dim.questions.every((_, i) => a[i] !== undefined);
}

export function allDimsComplete(answers: Record<string, Record<number, number>>): boolean {
  return DIMS.every((d) => dimComplete(d.id, answers));
}
