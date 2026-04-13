import { forwardRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, Props>(({ children, className, delay: _delay = 0 }, ref) => (
  <div ref={ref} className={className}>
    {children}
  </div>
));

AnimatedSection.displayName = 'AnimatedSection';

export const StaggerChildren = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className }, ref) => (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
);

StaggerChildren.displayName = 'StaggerChildren';

export const StaggerItem = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className }, ref) => (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
);

StaggerItem.displayName = 'StaggerItem';

export default AnimatedSection;
