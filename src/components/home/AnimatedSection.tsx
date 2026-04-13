import { forwardRef, ReactNode, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, Props>(({ children, className, delay = 0 }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const resolvedRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
  const isInView = useInView(resolvedRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div ref={resolvedRef} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={resolvedRef}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export const StaggerChildren = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
    const isInView = useInView(resolvedRef, { once: true, margin: '-60px' });
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return <div ref={resolvedRef} className={className}>{children}</div>;
    }

    return (
      <motion.div
        ref={resolvedRef}
        className={className}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerChildren.displayName = 'StaggerChildren';

export const StaggerItem = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className }, _ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return <div className={className}>{children}</div>;
    }

    return (
      <motion.div
        className={className}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerItem.displayName = 'StaggerItem';

export default AnimatedSection;
