export interface QuestionOption {
  text: string;
  score: number;
}

export interface ProcessDebtQuestion {
  text: string;
  options: QuestionOption[];
}

export interface ProcessDebtCategory {
  id: string;
  name: string;
  weight: number;
  color: string;
  bgLight: string;
  borderLight: string;
  sub: string;
  questions: ProcessDebtQuestion[];
  recommendation: string;
}

export const CATS: ProcessDebtCategory[] = [
  {
    id: 'communication',
    name: 'Communication',
    weight: 0.15,
    color: '#8B5CF6',
    bgLight: 'rgba(139,92,246,0.08)',
    borderLight: 'rgba(139,92,246,0.25)',
    sub: 'Does critical information flow through structured channels, or rely on informal chat?',
    recommendation: 'Move critical operational communication into structured channels with audit trails. Reduce reliance on informal chat for task assignments and decisions.',
    questions: [
      {
        text: 'How are operational decisions and task assignments typically communicated?',
        options: [
          { text: 'Through a structured system with audit trails', score: 0 },
          { text: 'Mostly email, with some informal messaging', score: 1 },
          { text: 'Mix of tools — some structured, some chat-based', score: 2 },
          { text: 'Heavily reliant on WhatsApp, Viber, or similar chat groups', score: 3 },
        ],
      },
      {
        text: 'How often does your team redo work due to miscommunication or unclear processes?',
        options: [
          { text: 'Rarely — processes and handoffs are clear', score: 0 },
          { text: 'Occasionally — a few times per month', score: 2 },
          { text: 'Frequently — it is a recurring frustration', score: 3 },
        ],
      },
    ],
  },
  {
    id: 'people_deps',
    name: 'People Dependencies',
    weight: 0.15,
    color: '#EC4899',
    bgLight: 'rgba(236,72,153,0.08)',
    borderLight: 'rgba(236,72,153,0.25)',
    sub: 'Do your processes live in systems or in people\'s heads?',
    recommendation: 'Document key processes and cross-train team members. No single person should be a bottleneck for any critical workflow.',
    questions: [
      {
        text: 'If one key person were absent for a week, would a critical process stall or break?',
        options: [
          { text: 'No — processes are documented and others can step in', score: 0 },
          { text: 'It would slow down but not break', score: 1 },
          { text: 'One or two processes would be significantly disrupted', score: 2 },
          { text: 'Yes — at least one major process depends on a specific person', score: 3 },
        ],
      },
      {
        text: 'How long does it take a new hire to become fully productive in their role?',
        options: [
          { text: 'Under 2 weeks — clear playbooks and structured onboarding', score: 0 },
          { text: '1–2 months — some documentation, mostly learning by doing', score: 2 },
          { text: '3+ months — largely dependent on shadowing colleagues', score: 3 },
        ],
      },
    ],
  },
  {
    id: 'visibility',
    name: 'Visibility',
    weight: 0.15,
    color: '#06B6D4',
    bgLight: 'rgba(6,182,212,0.08)',
    borderLight: 'rgba(6,182,212,0.25)',
    sub: 'Can management see what\'s happening without scheduling a meeting?',
    recommendation: 'Invest in real-time dashboards and automated status reporting. Management should not need meetings to know what is happening.',
    questions: [
      {
        text: 'Can management see, in real time, where work is stuck or piling up?',
        options: [
          { text: 'Yes — we have dashboards or systems that show this', score: 0 },
          { text: 'Partially — we get updates in meetings or reports', score: 1 },
          { text: 'We have some tools but they are not consistently used', score: 2 },
          { text: 'No — we usually find out when something becomes urgent', score: 3 },
        ],
      },
      {
        text: 'Do you have regular meetings that exist primarily so management can find out what is happening?',
        options: [
          { text: 'No — information is available without meetings', score: 0 },
          { text: 'Some, but they serve other purposes too', score: 1 },
          { text: 'A few weekly stand-ups mainly for status updates', score: 2 },
          { text: 'Yes — weekly meetings are our main way of knowing what is going on', score: 3 },
        ],
      },
    ],
  },
  {
    id: 'automation',
    name: 'Automation',
    weight: 0.20,
    color: '#F59E0B',
    bgLight: 'rgba(245,158,11,0.08)',
    borderLight: 'rgba(245,158,11,0.25)',
    sub: 'How much time is spent on tasks that should be automated?',
    recommendation: 'Identify the top 5 most repetitive manual tasks and build a business case for automating them. Start with the highest-volume, lowest-complexity processes.',
    questions: [
      {
        text: 'How much time does your team spend moving data between systems manually?',
        options: [
          { text: 'Almost none — our systems are integrated', score: 0 },
          { text: 'A few hours per week across the team', score: 1 },
          { text: 'Multiple people spend time on it daily', score: 2 },
          { text: 'Significant time — it is a daily activity for multiple people', score: 3 },
        ],
      },
      {
        text: 'Roughly how many hours per week does your team spend on tasks that feel like they should be automated?',
        options: [
          { text: 'Under 5 hours per week total', score: 0 },
          { text: '5–15 hours per week', score: 1 },
          { text: '15–25 hours per week', score: 2 },
          { text: '25+ hours per week', score: 3 },
        ],
      },
    ],
  },
  {
    id: 'scalability',
    name: 'Scalability',
    weight: 0.15,
    color: '#4F46E5',
    bgLight: 'rgba(79,70,229,0.08)',
    borderLight: 'rgba(79,70,229,0.25)',
    sub: 'Are your operations designed for growth, or do they break under pressure?',
    recommendation: 'Redesign workflows to scale through systems, not headcount. Review approval chains and remove unnecessary bottlenecks.',
    questions: [
      {
        text: 'When workload increases, what is your organisation\'s typical response?',
        options: [
          { text: 'We scale through better systems and processes', score: 0 },
          { text: 'A mix — some process improvement, some hiring', score: 1 },
          { text: 'Mostly hiring, with plans to improve processes later', score: 2 },
          { text: 'We hire more people to do the same manual work', score: 3 },
        ],
      },
      {
        text: 'Have you invested in a platform or tool in the last 2 years that your team doesn\'t fully use?',
        options: [
          { text: 'No — our tools are well adopted', score: 0 },
          { text: 'One tool is slightly underutilised', score: 1 },
          { text: 'One or two tools are underutilised', score: 2 },
          { text: 'Yes — we have spent money on tools people have largely abandoned', score: 3 },
        ],
      },
    ],
  },
  {
    id: 'customer_impact',
    name: 'Customer Impact',
    weight: 0.10,
    color: '#EF4444',
    bgLight: 'rgba(239,68,68,0.08)',
    borderLight: 'rgba(239,68,68,0.25)',
    sub: 'Do internal inefficiencies leak out and affect your customers?',
    recommendation: 'Map internal process failures to customer-facing outcomes. Prioritise fixing the processes that directly affect delivery, quality, or response times.',
    questions: [
      {
        text: 'Do operational inefficiencies ever visibly affect your customers or clients?',
        options: [
          { text: 'Never — our internal issues do not reach clients', score: 0 },
          { text: 'Sometimes — occasional delays or errors that clients notice', score: 2 },
          { text: 'Regularly — we have lost business or received complaints due to internal breakdowns', score: 3 },
        ],
      },
      {
        text: 'How long does a typical internal approval take (e.g. purchase, leave, budget)?',
        options: [
          { text: 'Same-day or automated', score: 0 },
          { text: '1–2 days', score: 1 },
          { text: '2–3 days, sometimes needs a reminder', score: 2 },
          { text: '3+ days, often requiring follow-up', score: 3 },
        ],
      },
    ],
  },
  {
    id: 'decision_making',
    name: 'Decision Making',
    weight: 0.10,
    color: '#10B981',
    bgLight: 'rgba(16,185,129,0.08)',
    borderLight: 'rgba(16,185,129,0.25)',
    sub: 'Are decisions driven by data, or by gut feeling and past experience?',
    recommendation: 'Build operational dashboards that surface key metrics automatically. Reduce dependence on gut feeling by making data accessible and actionable.',
    questions: [
      {
        text: 'How does management typically make operational decisions?',
        options: [
          { text: 'Data-driven — dashboards and reports inform most decisions', score: 0 },
          { text: 'A mix of data and experience', score: 2 },
          { text: 'Mostly intuition and past experience', score: 3 },
        ],
      },
      {
        text: 'When workload increases, how quickly can management identify the bottleneck?',
        options: [
          { text: 'Within hours — we have real-time metrics', score: 0 },
          { text: 'Within a day or two — we investigate manually', score: 1 },
          { text: 'It takes days — we rely on team feedback and meetings', score: 2 },
          { text: 'We often don\'t identify it until something breaks', score: 3 },
        ],
      },
    ],
  },
];

// ─── Verdict Tiers ───
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
  low: {
    name: 'Low Process Debt',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.3)',
    desc: 'Your organisation shows relatively low levels of process debt. There may still be optimisation opportunities, but your foundation is solid.',
    steps: [
      { title: 'Identify remaining quick wins', desc: 'Even with a strong foundation, look at any categories flagged as "At Risk" for targeted improvements.' },
      { title: 'Consider an Operational X-Ray', desc: 'A brief engagement to validate what\'s working and surface any hidden inefficiencies before they compound.' },
      { title: 'Build a continuous improvement cadence', desc: 'Schedule quarterly process reviews to prevent debt from accumulating as you scale.' },
    ],
  },
  moderate: {
    name: 'Moderate Process Debt',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.3)',
    desc: 'Your organisation has accumulated meaningful process debt. Inefficiencies are likely costing you more than you realise, and they compound as you grow.',
    steps: [
      { title: 'Review the category-level findings', desc: 'Each flagged category has specific actions. Start with the highest-weight categories showing problems.' },
      { title: 'Book an Operational X-Ray', desc: 'A 1–2 week embedded engagement to map exactly where capacity is trapped and build a prioritised fix plan.' },
      { title: 'Prioritise automation opportunities', desc: 'Focus on the top 3 most repetitive manual tasks. Automate these first for the fastest ROI.' },
      { title: 'Re-assess in 3 months', desc: 'After implementing changes, re-take the assessment to measure progress and identify the next tranche of improvements.' },
    ],
  },
  high: {
    name: 'High Process Debt',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.3)',
    desc: 'Your organisation is carrying substantial process debt. A large portion of your team\'s time and your operating budget is being consumed by inefficiency.',
    steps: [
      { title: 'Acknowledge the scale of the problem', desc: 'High process debt doesn\'t resolve incrementally. It requires a structured programme to unwind.' },
      { title: 'Book an Operational X-Ray immediately', desc: 'The X-Ray embeds with your team for 1–2 weeks to map every bottleneck and build a costed remediation plan.' },
      { title: 'Address critical categories first', desc: 'Focus on categories flagged as Critical — these are actively destroying capacity and customer trust.' },
      { title: 'Redesign before you automate', desc: 'Automating broken processes just makes them break faster. Fix the workflow design first, then automate.' },
    ],
  },
};

// ─── Scoring Helpers ───

/** Average score for one category (0–3 scale). Returns null if incomplete. */
export function categoryScore(catId: string, answers: Record<string, Record<number, number>>): number | null {
  const a = answers[catId];
  if (!a) return null;
  const cat = CATS.find((c) => c.id === catId);
  if (!cat) return null;
  const filled = cat.questions.filter((_, i) => a[i] !== undefined);
  if (filled.length < cat.questions.length) return null;
  return cat.questions.reduce((t, _, i) => t + (a[i] ?? 0), 0) / cat.questions.length;
}

/** Weighted composite score (0–3 scale). */
export function compositeScore(answers: Record<string, Record<number, number>>): number | null {
  let t = 0;
  for (const c of CATS) {
    const s = categoryScore(c.id, answers);
    if (s === null) return null;
    t += s * c.weight;
  }
  return t;
}

/** Convert composite (0–3) to percentage (higher = worse). */
export function debtPct(composite: number): number {
  return Math.round((composite / 3) * 100);
}

/** Returns verdict key based on answers. */
export function getVerdict(answers: Record<string, Record<number, number>>): string {
  const comp = compositeScore(answers);
  if (comp === null) return 'high';
  const pct = debtPct(comp);
  const scores = CATS.map((c) => categoryScore(c.id, answers));
  const critCount = scores.filter((s) => s !== null && s >= 2.5).length;
  if (critCount >= 3) return 'high';
  if (pct >= 55) return 'high';
  if (pct >= 25) return 'moderate';
  return 'low';
}

export function categoryComplete(catId: string, answers: Record<string, Record<number, number>>): boolean {
  const cat = CATS.find((c) => c.id === catId);
  if (!cat) return false;
  const a = answers[catId] || {};
  return cat.questions.every((_, i) => a[i] !== undefined);
}

export function allCategoriesComplete(answers: Record<string, Record<number, number>>): boolean {
  return CATS.every((c) => categoryComplete(c.id, answers));
}
