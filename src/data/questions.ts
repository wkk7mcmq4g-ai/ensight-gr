export interface QuestionOption {
  text: string;
  score: number;
}

export interface Question {
  id: string;
  type?: 'number';
  label: string;
  context: string;
  placeholder?: string;
  options?: QuestionOption[];
}

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
    label: 'How are operational decisions and task assignments typically communicated?',
    context: 'We\u2019re looking at whether critical information flows through structured or informal channels.',
    options: [
      { text: 'Through a structured system with audit trails', score: 0 },
      { text: 'Mostly email, with some informal messaging', score: 1 },
      { text: 'Heavily reliant on WhatsApp, Viber, or similar chat groups', score: 3 },
    ],
  },
  {
    id: 'human_router',
    label: 'If one key person were absent for a week, would a critical process stall or break?',
    context: 'This tests whether your processes live in systems or in people\u2019s heads.',
    options: [
      { text: 'No \u2014 processes are documented and others can step in', score: 0 },
      { text: 'It would slow down but not break', score: 1 },
      { text: 'Yes \u2014 at least one major process depends on a specific person', score: 3 },
    ],
  },
  {
    id: 'invisible_queue',
    label: 'Can management see, in real time, where work is stuck or piling up?',
    context: 'Operational visibility is the difference between proactive and reactive management.',
    options: [
      { text: 'Yes \u2014 we have dashboards or systems that show this', score: 0 },
      { text: 'Partially \u2014 we get updates in meetings or reports', score: 1 },
      { text: 'No \u2014 we usually find out when something becomes urgent', score: 3 },
    ],
  },
  {
    id: 'copy_paste',
    label: 'How much time does your team spend moving data between systems manually?',
    context: 'Disconnected systems are one of the largest hidden costs in mid-sized organisations.',
    options: [
      { text: 'Almost none \u2014 our systems are integrated', score: 0 },
      { text: 'A few hours per week across the team', score: 1 },
      { text: 'Significant time \u2014 it\u2019s a daily activity for multiple people', score: 3 },
    ],
  },
  {
    id: 'status_meetings',
    label: 'Do you have regular meetings that exist primarily so management can find out what\u2019s happening?',
    context: 'If the only way to get a status update is to schedule a meeting, that\u2019s a visibility gap.',
    options: [
      { text: 'No \u2014 information is available without meetings', score: 0 },
      { text: 'Some, but they serve other purposes too', score: 1 },
      { text: 'Yes \u2014 weekly meetings are our main way of knowing what\u2019s going on', score: 3 },
    ],
  },
  {
    id: 'scaling',
    label: 'When workload increases, what is your organisation\u2019s typical response?',
    context: 'How you scale reveals whether your operations are designed for growth.',
    options: [
      { text: 'We scale through better systems and processes', score: 0 },
      { text: 'A mix \u2014 some process improvement, some hiring', score: 1 },
      { text: 'We hire more people to do the same manual work', score: 3 },
    ],
  },
  {
    id: 'approvals',
    label: 'How long does a typical internal approval take (e.g. purchase, leave, budget)?',
    context: 'Approval speed is a reliable indicator of workflow efficiency.',
    options: [
      { text: 'Same-day or automated', score: 0 },
      { text: '1\u20132 days', score: 1 },
      { text: '3+ days, often requiring follow-up', score: 3 },
    ],
  },
  {
    id: 'failed_tool',
    label: 'Have you invested in a platform or tool in the last 2 years that your team doesn\u2019t fully use?',
    context: 'Unused tools are a symptom of technology being implemented without process redesign.',
    options: [
      { text: 'No \u2014 our tools are well adopted', score: 0 },
      { text: 'One or two tools are underutilised', score: 2 },
      { text: 'Yes \u2014 we\u2019ve spent money on tools people have largely abandoned', score: 3 },
    ],
  },
  {
    id: 'manual_hours',
    label: 'Roughly how many hours per week does your team spend on tasks that feel like they should be automated?',
    context: 'Be honest \u2014 include data entry, reformatting, chasing approvals, compiling reports.',
    options: [
      { text: 'Under 5 hours per week total', score: 0 },
      { text: '5\u201315 hours per week', score: 1 },
      { text: '15+ hours per week', score: 3 },
    ],
  },
];
