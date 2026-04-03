import { useState, useCallback } from 'react';
import Header from '@/components/assessment/Header';
import ProgressBar from '@/components/assessment/ProgressBar';
import QuestionCard from '@/components/assessment/QuestionCard';
import Results from '@/components/assessment/Results';
import { questions } from '@/data/questions';

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [showResults, setShowResults] = useState(false);

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
    if (current < total - 1) {
      setCurrent((c) => c + 1);
    } else {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goBack = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background blobs */}
      <div className="fixed -top-[30%] -right-[15%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.05)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="fixed -bottom-[25%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.04)_0%,transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 pt-10 pb-20 md:px-6">
        <Header />

        {!showResults ? (
          <>
            <ProgressBar current={current} total={total} />

            <QuestionCard
              question={question}
              answer={answer}
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
                className="px-8 py-3.5 bg-ordinal-green text-foreground rounded-xl font-semibold text-[15px] ml-auto shadow-[0_4px_12px_rgba(16,185,129,0.12)] transition-all duration-250 hover:bg-ordinal-green-bright hover:-translate-y-px hover:shadow-[0_4px_24px_rgba(16,185,129,0.25)] disabled:opacity-30 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
              >
                {current === total - 1 ? 'See My Results' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <Results answers={answers} />
        )}

        <div className="text-center mt-12 font-mono-label text-[11px] text-ordinal-faint tracking-[1px]">
          <span className="font-sans font-black text-[13px] text-ordinal-dim lowercase">ordinal</span>
          {' '}&middot; Athens, Greece
        </div>
      </div>
    </div>
  );
};

export default Index;
