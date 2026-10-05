import { ReactNode } from 'react';
import AnimatedSection from '@/components/home/AnimatedSection';

type Props = {
  eyebrow?: string;
  heading: string;
  lead?: ReactNode;
};

const SectionHeading = ({ eyebrow, heading, lead }: Props) => (
  <AnimatedSection>
    {eyebrow && (
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">{eyebrow}</div>
    )}
    <h2 className={`text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] ${lead ? 'mb-4' : 'mb-12'}`}>
      {heading}
    </h2>
    {lead && <p className="text-base text-ordinal-body leading-relaxed max-w-[620px] mb-12">{lead}</p>}
  </AnimatedSection>
);

export default SectionHeading;
