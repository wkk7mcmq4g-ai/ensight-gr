import { CheckCircle2 } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const caseStudies = [
  {
    title: 'Loan Servicing Platform',
    points: [
      'Built a custom end-to-end loan servicing system',
      'Automated reporting and reconciliation processes',
      'Reduced manual workload and improved operational efficiency',
    ],
  },
  {
    title: 'Charity CRM System',
    points: [
      'Designed a multi-programme CRM platform',
      'Implemented compliance tracking (DBS, training, references)',
      'Enabled organisation-wide reporting and visibility',
    ],
  },
  {
    title: 'Financial Reporting Automation',
    points: [
      'Replaced manual reporting processes with automated pipelines',
      'Delivered real-time dashboards and insights',
      'Improved speed and accuracy of decision-making',
    ],
  },
];

const SelectedWorkSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="work">
    <AnimatedSection>
      <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        {"// Selected Work"}
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.15] mb-12">
        Selected Work
      </h2>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {caseStudies.map((cs, i) => (
        <StaggerItem key={i}>
          <div className="bg-card border border-border rounded-lg p-7 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-ordinal-faint transition-all h-full">
            <h3 className="text-lg font-bold mb-4">{cs.title}</h3>
            <ul className="space-y-3">
              {cs.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-ordinal-body leading-relaxed">
                  <CheckCircle2 size={16} className="text-ordinal-green mt-0.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default SelectedWorkSection;
