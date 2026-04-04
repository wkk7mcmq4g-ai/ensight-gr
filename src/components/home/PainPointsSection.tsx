import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const painPoints = [
  'Critical processes live in Excel',
  'Teams manually reconcile data across systems',
  'Reporting takes days instead of minutes',
  'Systems don\'t talk to each other',
  'Growth is limited by operational inefficiencies',
];

const PainPointsSection = () => (
  <section className="bg-muted/50 border-y border-border">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-20">
      <AnimatedSection>
        <h2 className="text-[clamp(22px,3.5vw,34px)] font-extrabold tracking-tight leading-[1.15] mb-10 text-foreground">
          If any of this sounds familiar…
        </h2>

        <ul className="space-y-5 mb-10 max-w-[640px]">
          {painPoints.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              <AlertCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
              {point}
            </motion.li>
          ))}
        </ul>

        <p className="text-lg md:text-xl font-semibold text-foreground">
          This is exactly where we come in.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default PainPointsSection;
