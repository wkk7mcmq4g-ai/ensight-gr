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
  id: string;
  type?: 'number';
  label: string;
  context: string;
  placeholder?: string;
  options?: DataClarityOption[];
  category?: DataClarityCategory;
}

export const categoryWeights: Record<DataClarityCategory, number> = {
  'Data Availability': 25,
  'Data Consistency': 25,
  'Cost Visibility': 20,
  'System Integration': 15,
  'Reporting Maturity': 15,
};

export const categoryRecommendations: Record<DataClarityCategory, string> = {
  'Data Availability':
    'Prioritise capturing missing data at source. Automate data collection where possible and eliminate manual reconstruction of key metrics.',
  'Data Consistency':
    'Establish a single source of truth for each key metric. Define ownership and reconciliation processes to eliminate conflicting numbers across departments.',
  'Cost Visibility':
    'Implement activity-based cost allocation to understand true margin at the client and product level. Move beyond gross margin to net margin visibility.',
  'System Integration':
    'Map data flows between key systems and prioritise integrations that eliminate the highest-volume manual data transfers.',
  'Reporting Maturity':
    'Move from static, periodic reports to interactive dashboards that update automatically. Ensure reports are designed around decisions, not just data.',
};

export const dataClarityQuestions: DataClarityQuestion[] = [
  {
    id: 'dc_team_size',
    type: 'number',
    label: 'How many people are in your organisation?',
    context: 'This helps us estimate the cost impact of data and reporting inefficiency.',
    placeholder: 'e.g. 30',
  },
  {
    id: 'dc_data_location',
    category: 'Data Availability',
    label: 'Where does your core financial and operational data live?',
    context: 'We\'re assessing whether key data is captured systematically or scattered across ad hoc sources.',
    options: [
      { text: 'In a centralised system or data warehouse with automated feeds', score: 0 },
      { text: 'Mostly in accounting/ERP, with some supplementary spreadsheets', score: 1 },
      { text: 'Split across multiple disconnected systems and spreadsheets', score: 2 },
      { text: 'Scattered everywhere — spreadsheets, emails, people\'s heads', score: 3 },
    ],
  },
  {
    id: 'dc_manual_collection',
    category: 'Data Availability',
    label: 'How much of your reporting data requires manual collection or reconstruction?',
    context: 'Manual data assembly is a strong indicator of gaps in data infrastructure.',
    options: [
      { text: 'Almost none — data flows automatically into reports', score: 0 },
      { text: 'Some metrics need manual lookup or verification', score: 1 },
      { text: 'Most reports require significant manual data gathering', score: 2 },
      { text: 'Nearly everything is manually assembled from scratch', score: 3 },
    ],
  },
  {
    id: 'dc_single_truth',
    category: 'Data Consistency',
    label: 'Do different departments produce the same number for the same metric?',
    context: 'Consistency across departments is the foundation of trustworthy data.',
    options: [
      { text: 'Yes — everyone works from the same data source and definitions', score: 0 },
      { text: 'Mostly — minor discrepancies but generally aligned', score: 1 },
      { text: 'Often not — different teams calculate things differently', score: 2 },
      { text: 'Rarely — meetings regularly surface conflicting numbers', score: 3 },
    ],
  },
  {
    id: 'dc_reconciliation',
    category: 'Data Consistency',
    label: 'How often do meetings become reconciliation exercises about whose figures are correct?',
    context: 'Time spent arguing about numbers is time not spent acting on them.',
    options: [
      { text: 'Never — our numbers are trusted and consistent', score: 0 },
      { text: 'Occasionally — maybe once a month', score: 1 },
      { text: 'Regularly — it\'s a recurring frustration', score: 2 },
      { text: 'Most meetings — we spend more time validating than deciding', score: 3 },
    ],
  },
  {
    id: 'dc_net_margin',
    category: 'Cost Visibility',
    label: 'Can you see net margin at the individual client or product level?',
    context: 'Knowing gross revenue is not the same as knowing true profitability.',
    options: [
      { text: 'Yes — we allocate all costs and see net margin per client/product', score: 0 },
      { text: 'We know gross margin but not fully allocated net margin', score: 1 },
      { text: 'We have a rough idea but it\'s not systematic', score: 2 },
      { text: 'No — costs sit in undifferentiated overhead buckets', score: 3 },
    ],
  },
  {
    id: 'dc_cost_allocation',
    category: 'Cost Visibility',
    label: 'How are indirect costs (overhead, shared resources) allocated?',
    context: 'Unallocated costs hide the true cost to serve and distort pricing decisions.',
    options: [
      { text: 'Activity-based allocation tied to actual usage/drivers', score: 0 },
      { text: 'Simple percentage-based allocation (e.g. by revenue)', score: 1 },
      { text: 'Partially allocated — some costs are, some aren\'t', score: 2 },
      { text: 'Not allocated — indirect costs are treated as a single pool', score: 3 },
    ],
  },
  {
    id: 'dc_system_comms',
    category: 'System Integration',
    label: 'How do your key systems (accounting, CRM, operations) share data?',
    context: 'Disconnected systems create manual work and data quality issues.',
    options: [
      { text: 'Integrated via APIs or a central data platform', score: 0 },
      { text: 'Some integrations exist but key gaps remain', score: 1 },
      { text: 'Mostly manual — data is exported and re-entered', score: 2 },
      { text: 'No integration — each system is an island', score: 3 },
    ],
  },
  {
    id: 'dc_cross_system',
    category: 'System Integration',
    label: 'How much manual effort goes into assembling a cross-system report?',
    context: 'The time spent assembling data is time not spent analysing it.',
    options: [
      { text: 'Minimal — reports pull from integrated sources automatically', score: 0 },
      { text: 'A few hours — some manual joining of data sources', score: 1 },
      { text: 'Half a day or more — significant manual assembly', score: 2 },
      { text: 'Days — cross-system reporting is a major project each time', score: 3 },
    ],
  },
  {
    id: 'dc_reporting_state',
    category: 'Reporting Maturity',
    label: 'What does your current reporting look like?',
    context: 'The format and frequency of reporting reveals how embedded data is in decision-making.',
    options: [
      { text: 'Interactive dashboards updated in real-time or near-real-time', score: 0 },
      { text: 'Regular automated reports (weekly/monthly) with some manual elements', score: 1 },
      { text: 'Periodic spreadsheets assembled manually', score: 2 },
      { text: 'Ad hoc — reports are created when someone asks for them', score: 3 },
    ],
  },
  {
    id: 'dc_decision_use',
    category: 'Reporting Maturity',
    label: 'How frequently are reports used to make actual business decisions?',
    context: 'Reports that don\'t drive decisions are just administrative overhead.',
    options: [
      { text: 'Constantly — data informs most operational and strategic decisions', score: 0 },
      { text: 'Regularly — key decisions reference the data', score: 1 },
      { text: 'Sometimes — but many decisions are still intuition-based', score: 2 },
      { text: 'Rarely — reports are produced but not meaningfully used', score: 3 },
    ],
  },
];
