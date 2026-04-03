import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '@/data/questions';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  answer: number | null;
  direction: number;
  onSelectOption: (index: number) => void;
  onNumberInput: (value: number | null) => void;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const QuestionCard = ({ question, questionIndex, answer, direction, onSelectOption, onNumberInput }: QuestionCardProps) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={question.id}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="bg-card border border-border rounded-lg p-9 mb-5"
      >
        <div className="font-mono-label text-[10px] font-medium text-electric-glow tracking-[2px] uppercase mb-3">
          Question {questionIndex + 1}
        </div>
        <h2 className="text-xl font-bold leading-snug mb-2">{question.label}</h2>
        <p className="text-sm text-ordinal-dim mb-6 leading-relaxed">{question.context}</p>

        {question.type === 'number' ? (
          <div className="flex items-center gap-4 mt-2">
            <input
              type="number"
              value={answer ?? ''}
              placeholder={question.placeholder}
              min={1}
              max={10000}
              onChange={(e) => {
                const num = parseInt(e.target.value);
                onNumberInput(isNaN(num) ? null : num);
              }}
              className="w-[120px] px-4 py-3 border border-border rounded-xl font-sans text-lg font-bold text-center bg-background outline-none transition-colors focus:border-electric-bright"
            />
            <span className="text-[15px] text-ordinal-dim">people</span>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            {question.options?.map((opt, i) => {
              const selected = answer === i;
              return (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => onSelectOption(i)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                  className={`flex items-center gap-3.5 px-[18px] py-3.5 border rounded-xl text-left text-[15px] transition-all duration-200 cursor-pointer ${
                    selected
                      ? 'border-electric-bright bg-primary/[0.06] font-semibold'
                      : 'border-border bg-card text-ordinal-body hover:border-primary hover:bg-primary/5 hover:text-foreground'
                  }`}
                >
                  <div
                    className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      selected
                        ? 'border-electric-bright bg-electric-bright'
                        : 'border-border'
                    }`}
                  >
                    {selected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-primary-foreground rounded-full"
                      />
                    )}
                  </div>
                  <span>{opt.text}</span>
                </motion.button>
              );
            })}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionCard;
