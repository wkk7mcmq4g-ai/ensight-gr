import { useState, useCallback } from 'react';
import ProgressBar from '@/components/assessment/ProgressBar';
import QuestionCard from '@/components/assessment/QuestionCard';
import Results from '@/components/assessment/Results';
import { questions } from '@/data/questions';

const Assessment = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [showResults, setShowResults] = useState(false);
  const [direction, setDirection] = useState(1);

  const total = questions.length;
  const question = questions[current];
  const answer = answers[question.id] ?? null;

  const isNextDisabled = question.type === 'number'
    ? !answer || answer < 1
    : answer === null;

  const handleSelectOption = useCallback((index: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: index }));
  }, [question.id]);

  const handleNumberInput = useCallback((value: number | null) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  }, [question.id]);

  const goNext = () => {
    setDirection(1);
    if (current < total - 1) {
      setCurrent((c) => c + 1);
    } else {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goBack = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  };

  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-20">
      {/* Assessment header */}
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-electric-glow font-mono-label text-[10px] font-medium tracking-[3px] uppercase px-4 py-2 rounded-full mb-7">
          <span className="w-[6px] h-[6px] bg-electric-bright rounded-full shadow-[0_0_8px_rgba(128,0,255,0.5)]" />
          Free Assessment
        </div>
        <h1 className="text-[clamp(28px,5vw,42px)] font-extrabold leading-[1.15] tracking-tight mb-4">
          How Much Is{' '}
          <span className="bg-gradient-to-br from-electric-bright to-ordinal-green-bright bg-clip-text text-transparent">
            Process Debt
          </span>{' '}
          Costing You?
        </h1>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[520px] mx-auto">
          Answer 14 questions about your operations. Get your Process Debt Score and an estimate of what operational inefficiency costs your organisation each year.
        </p>
      </header>

      {!showResults ? (
        <>
          <ProgressBar current={current} total={total} />

          <QuestionCard
            question={question}
            questionIndex={current}
            answer={answer}
            direction={direction}
            onSelectOption={handleSelectOption}
            onNumberInput={handleNumberInput}
          />

          <div className="flex justify-between gap-3 mt-2">
            <button
              onClick={goBack}
              disabled={current === 0}
              className="px-8 py-3.5 bg-card text-ordinal-body border border-border rounded-xl font-semibold text-[15px] transition-all duration-250 hover:bg-card hover:text-foreground hover:border-ordinal-faint disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button
              onClick={goNext}
              disabled={isNextDisabled}
              className="px-8 py-3.5 bg-ordinal-green text-white rounded-xl font-semibold text-[15px] ml-auto shadow-[0_4px_12px_rgba(16,185,129,0.12)] transition-all duration-250 hover:bg-ordinal-green-bright hover:-translate-y-px hover:shadow-[0_4px_24px_rgba(16,185,129,0.25)] disabled:opacity-30 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
            >
              {current === total - 1 ? 'See My Results' : 'Next'}
            </button>
          </div>
        </>
      ) : (
        <Results answers={answers} onRestart={() => { setAnswers({}); setCurrent(0); setShowResults(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      )}
    </div>
  );
};

export default Assessment;
