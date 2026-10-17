import AnimatedSection from '@/components/home/AnimatedSection';
import { ENQUIRY_HREF } from '@/lib/contact';
import { heroPrimaryButton } from './buttonStyles';

type Props = {
  heading: string;
  body: string;
};

/** Dark closing band with the single "Discuss your project" action. */
const ClosingCTA = ({ heading, body }: Props) => (
  <section className="bg-[hsl(270,40%,6%)] py-24 text-center" id="contact">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <AnimatedSection>
        <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight leading-[1.12] text-white mb-5 max-w-[720px] mx-auto">
          {heading}
        </h2>
        <p className="text-base text-white/70 leading-relaxed max-w-[600px] mx-auto mb-10">{body}</p>
        <a href={ENQUIRY_HREF} className={`inline-block ${heroPrimaryButton}`}>
          Discuss your project
        </a>
        <div className="text-[10px] text-white/50 tracking-[1px] mt-8">georgekondylis@msn.com · Athens, Greece</div>
      </AnimatedSection>
    </div>
  </section>
);

export default ClosingCTA;
