import { motion } from 'framer-motion';

const QuoteSection = () => (
  <div className="bg-primary py-20 px-6 md:px-12 text-center overflow-hidden">
    <motion.blockquote
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-[clamp(22px,3.5vw,32px)] font-medium italic text-white leading-snug max-w-[800px] mx-auto tracking-tight"
    >
      "We don't hand you a diagnosis. We stay, we build, and we don't leave until it's working."
    </motion.blockquote>
  </div>
);

export default QuoteSection;
