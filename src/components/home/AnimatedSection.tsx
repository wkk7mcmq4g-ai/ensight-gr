import { motion } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, Props>(({ children, className, delay = 0 }, ref) => (
  <motion.div
    ref={ref}
    className={className}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-20px' }}
    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: Math.min(delay, 0.1) }}
  >
    {children}
  </motion.div>
));

AnimatedSection.displayName = 'AnimatedSection';

export const StaggerChildren = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className }, ref) => (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  )
);

StaggerChildren.displayName = 'StaggerChildren';

export const StaggerItem = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className }, ref) => (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
);

StaggerItem.displayName = 'StaggerItem';

export default AnimatedSection;
