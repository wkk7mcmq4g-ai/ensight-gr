export interface QuestionOption {
  text: string;
  score: number;
}

export type QuestionCategory =
  | 'Communication'
  | 'People Dependencies'
  | 'Visibility'
  | 'Automation'
  | 'Scalability'
  | 'Customer Impact'
  | 'Decision Making';

export interface Question {
  id: string;
  type?: 'number';
  label: string;
  context: string;
  placeholder?: string;
  options?: QuestionOption[];
  category?: QuestionCategory;
}

export const categoryRecommendations: Record<QuestionCategory, string> = {
  Communication:
    'Move critical operational communication into structured channels with audit trails. Reduce reliance on informal chat for task assignments and decisions.',
  'People Dependencies':
    'Document key processes and cross-train team members. No single person should be a bottleneck for any critical workflow.',
  Visibility:
    'Invest in real-time dashboards and automated status reporting. Management shouldn't need meetings to know what's happening.',
  Automation:
    'Identify the top 5 most repetitive manual tasks and build a business case for automating them. Start with the highest-volume, lowest-complexity processes.',
  Scalability:
    'Redesign workflows to scale through systems, not headcount. Review approval chains and remove unnecessary bottlenecks.',
  'Customer Impact':
    'Map internal process failures to customer-facing outcomes. Prioritise fixing the processes that directly affect delivery, quality, or response times.',
  'Decision Making':
    'Build operational dashboards that surface key metrics automatically. Reduce dependence on gut feeling by making data accessible and actionable.',
};

export const questions: Question[] = [
  {
    id: 'team_size',
    type: 'number',
    label: 'How many people are in your organisation?',
    context: 'This helps us estimate the financial impact of operational inefficiency.',
    placeholder: 'e.g. 30',
  },
  {
    id: 'whatsapp',
    category: 'Communication',
    label: 'How are operational decisions and task assignments typically communicated?',
    context: 'We're looking at whether critical information flows through structured or informal channels.',
    options: [
      { text: 'Through a structured system with audit trails', score: 0 },
      { text: 'Mostly email, with some informal messaging', score: 1 },
      { text: 'Mix of tools  --  some structured, some chat-based', score: 2 },
      { text: 'Heavily reliant on WhatsApp, Viber, or similar chat groups', score: 3 },
    ],
  },
  {
    id: 'human_router',
    category: 'People Dependencies',
    label: 'If one key person were absent for a week, would a critical process stall or break?',
    context: 'This tests whether your processes live in systems or in people's heads.',
    options: [
      { text: 'No  --  processes are documented and others can step in', score: 0 },
      { text: 'It would slow down but not break', score: 1 },
      { text: 'One or two processes would be significantly disrupted', score: 2 },
      { text: 'Yes  --  at least one major process depends on a specific person', score: 3 },
    ],
  },
  {
    id: 'onboarding',
    category: 'People Dependencies',
    label: 'How long does it take a new hire to become fully productive in their role?',
    context: 'Onboarding speed reflects how well processes are documented and systematised.',
    options: [
      { text: 'Under 2 weeks  --  clear playbooks and structured onboarding', score: 0 },
      { text: '1-2 months  --  some documentation, mostly learning by doing', score: 2 },
      { text: '3+ months  --  largely dependent on shadowing colleagues', score: 3 },
    ],
  },
  {
    id: 'invisible_queue',
    category: 'Visibility',
    label: 'Can management see, in real time, where work is stuck or piling up?',
    context: 'Operational visibility is the difference between proactive and reactive management.',
    options: [
      { text: 'Yes  --  we have dashboards or systems that show this', score: 0 },
      { text: 'Partially  --  we get updates in meetings or reports', score: 1 },
      { text: 'We have some tools but they're not consistently used', score: 2 },
      { text: 'No  --  we usually find out when something becomes urgent', score: 3 },
    ],
  },
  {
    id: 'copy_paste',
    category: 'Automation',
    label: 'How much time does your team spend moving data between systems manually?',
    context: 'Disconnected systems are one of the largest hidden costs in mid-sized organisations.',
    options: [
      { text: 'Almost none  --  our systems are integrated', score: 0 },
      { text: 'A few hours per week across the team', score: 1 },
      { text: 'Multiple people spend time on it daily', score: 2 },
      { text: 'Significant time  --  it's a daily activity for multiple people', score: 3 },
    ],
  },
  {
    id: 'status_meetings',
    category: 'Visibility',
    label: 'Do you have regular meetings that exist primarily so management can find out what's happening?',
    context: 'If the only way to get a status update is to schedule a meeting, that's a visibility gap.',
    options: [
      { text: 'No  --  information is available without meetings', score: 0 },
      { text: 'Some, but they serve other purposes too', score: 1 },
      { text: 'A few weekly stand-ups mainly for status updates', score: 2 },
      { text: 'Yes  --  weekly meetings are our main way of knowing what's going on', score: 3 },
    ],
  },
  {
    id: 'scaling',
    category: 'Scalability',
    label: 'When workload increases, what is your organisation's typical response?',
    context: 'How you scale reveals whether your operations are designed for growth.',
    options: [
      { text: 'We scale through better systems and processes', score: 0 },
      { text: 'A mix  --  some process improvement, some hiring', score: 1 },
      { text: 'Mostly hiring, with plans to improve processes later', score: 2 },
      { text: 'We hire more people to do the same manual work', score: 3 },
    ],
  },
  {
    id: 'approvals',
    category: 'Scalability',
    label: 'How long does a typical internal approval take (e.g. purchase, leave, budget)?',
    context: 'Approval speed is a reliable indicator of workflow efficiency.',
    options: [
      { text: 'Same-day or automated', score: 0 },
      { text: '1-2 days', score: 1 },
      { text: '2-3 days, sometimes needs a reminder', score: 2 },
      { text: '3+ days, often requiring follow-up', score: 3 },
    ],
  },
  {
    id: 'failed_tool',
    category: 'Scalability',
    label: 'Have you invested in a platform or tool in the last 2 years that your team doesn't fully use?',
    context: 'Unused tools are a symptom of technology being implemented without process redesign.',
    options: [
      { text: 'No  --  our tools are well adopted', score: 0 },
      { text: 'One tool is slightly underutilised', score: 1 },
      { text: 'One or two tools are underutilised', score: 2 },
      { text: 'Yes  --  we've spent money on tools people have largely abandoned', score: 3 },
    ],
  },
  {
    id: 'manual_hours',
    category: 'Automation',
    label: 'Roughly how many hours per week does your team spend on tasks that feel like they should be automated?',
    context: 'Be honest  --  include data entry, reformatting, chasing approvals, compiling reports.',
    options: [
      { text: 'Under 5 hours per week total', score: 0 },
      { text: '5-15 hours per week', score: 1 },
      { text: '15-25 hours per week', score: 2 },
      { text: '25+ hours per week', score: 3 },
    ],
  },
  {
    id: 'rework',
    category: 'Automation',
    label: 'How often does your team redo work due to miscommunication or unclear processes?',
    context: 'Rework is one of the most expensive forms of waste  --  it consumes time that's already been spent.',
    options: [
      { text: 'Rarely  --  processes and handoffs are clear', score: 0 },
      { text: 'Occasionally  --  a few times per month', score: 2 },
      { text: 'Frequently  --  it's a recurring frustration', score: 3 },
    ],
  },
  {
    id: 'customer_impact',
    category: 'Customer Impact',
    label: 'Do operational inefficiencies ever visibly affect your customers or clients?',
    context: 'When internal process debt leaks externally, it damages trust and revenue.',
    options: [
      { text: 'Never  --  our internal issues don't reach clients', score: 0 },
      { text: 'Sometimes  --  occasional delays or errors that clients notice', score: 2 },
      { text: 'Regularly  --  we've lost business or received complaints due to internal breakdowns', score: 3 },
    ],
  },
  {
    id: 'data_decisions',
    category: 'Decision Making',
    label: 'How does management typically make operational decisions?',
    context: 'Data-driven decision-making is a strong indicator of operational maturity.',
    options: [
      { text: 'Data-driven  --  dashboards and reports inform most decisions', score: 0 },
      { text: 'A mix of data and experience', score: 2 },
      { text: 'Mostly intuition and past experience', score: 3 },
    ],
  },
];
