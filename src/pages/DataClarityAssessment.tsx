import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Info, X, Download, Share2 } from 'lucide-react';
import { generateDataClarityPDF } from '@/utils/generateDataClarityPDF';
import { Link } from 'react-router-dom';
import ProgressBar from '@/components/assessment/ProgressBar';
import QuestionCard from '@/components/assessment/QuestionCard';
import EmailCapture from '@/components/assessment/EmailCapture';
import {
  dataClarityQuestions,
  categoryWeights,
  categoryRecommendations,
  type DataClarityCategory,
} from '@/data/dataClarityQuestions';

// Map to the Question interface expected by QuestionCard
const questionsForCard = dataClarityQuestions.map((q) => ({
  id: q.id,
  type: q.type,
  label: q.label,
  context: q.context,
  placeholder: q.placeholder,
  options: q.options,
  category: q.category,
}));

// Animated counter hook
const useAnimatedCounter = (target: number, duration = 1500) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return count;
};

interface CategoryResult {
  category: DataClarityCategory;
  weight: number;
  items: { label: string; score: number }[];
  avgScore: number;
  recommendation: string;
}

// ─── Results Component ───
const DataClarityResults = ({
  answers,
  onRestart,
}: {
  answers: Record<string, number | null>;
  onRestart: () => void;
}) => {
  const ringRef = useRef<SVGCircleElement>(null);
  const [showMethodology, setShowMethodology] = useState(false);

  const categoryOrder: DataClarityCategory[] = [
    'Data Availability',
    'Data Consistency',
    'Cost Visibility',
    'System Integration',
    'Reporting Maturity',
  ];

  // Build category results
  const categoryMap = new Map<DataClarityCategory, { label: string; score: number; max: number }[]>();
  dataClarityQuestions.forEach((q) => {
    if (q.type === 'number' || !q.category) return;
    const ans = answers[q.id];
    if (ans == null || !q.options) return;
    const opt = q.options[ans];
    const qMax = Math.max(...q.options.map((o) => o.score));
    if (!categoryMap.has(q.category)) categoryMap.set(q.category, []);
    categoryMap.get(q.category)!.push({
      label: q.label.replace(/\?$/, ''),
      score: opt.score,
      max: qMax,
    });
  });

  const categories: CategoryResult[] = [];
  let weightedScore = 0;
  let totalWeight = 0;

  categoryOrder.forEach((cat) => {
    const items = categoryMap.get(cat);
    if (!items || items.length === 0) return;
    const totalCatScore = items.reduce((s, i) => s + i.score, 0);
    const totalCatMax = items.reduce((s, i) => s + i.max, 0);
    const avg = totalCatMax > 0 ? totalCatScore / totalCatMax : 0;
    const weight = categoryWeights[cat];
    weightedScore += avg * weight;
    totalWeight += weight;
    categories.push({
      category: cat,
      weight,
      items: items.map((i) => ({ label: i.label, score: i.score })),
      avgScore: avg,
      recommendation: categoryRecommendations[cat],
    });
  });

  // Convert to percentage (0 = best, 100 = worst)
  const rawPct = totalWeight > 0 ? (weightedScore / totalWeight) * 100 : 0;
  // Invert for "readiness" (100 = best)
  const readinessPct = Math.round(100 - rawPct);

  const teamSize = (answers.dc_team_size as number) || 30;
  const avgCost = 40000;
  const wasteFactor = ((100 - readinessPct) / 100) * 0.25;
  const annualCost = Math.round(teamSize * avgCost * wasteFactor);
  const costFormatted = '\u20AC' + annualCost.toLocaleString('en');

  const animatedPct = useAnimatedCounter(readinessPct);
  const animatedCost = useAnimatedCounter(annualCost);

  let verdict: 'build-ready' | 'foundation' | 'not-viable';
  let verdictLabel: string;
  let headline: string;
  let desc: string;

  if (readinessPct >= 75) {
    verdict = 'build-ready';
    verdictLabel = 'Build-Ready';
    headline = 'Your Data Foundation Is Strong';
    desc = 'Your data infrastructure is sufficient to proceed with an analytics build. Minor gaps can be addressed during the build phase.';
  } else if (readinessPct >= 50) {
    verdict = 'foundation';
    verdictLabel = 'Foundation First';
    headline = 'Specific Remediation Required';
    desc = 'Your data has meaningful gaps that need addressing before a full analytics build. A targeted roadmap will identify what to fix first.';
  } else {
    verdict = 'not-viable';
    verdictLabel = 'Not Viable Yet';
    headline = 'Fundamental Issues to Resolve';
    desc = 'Your data infrastructure has significant gaps that block meaningful analytics. Operational and data remediation is needed before building.';
  }

  const colorMap = {
    'build-ready': { text: 'text-ordinal-green', stroke: 'hsl(160, 84%, 39%)', bg: 'bg-ordinal-green', topBar: 'bg-ordinal-green' },
    foundation: { text: 'text-ordinal-amber', stroke: 'hsl(38, 92%, 50%)', bg: 'bg-ordinal-amber', topBar: 'bg-ordinal-amber' },
    'not-viable': { text: 'text-ordinal-pink', stroke: 'hsl(330, 81%, 60%)', bg: 'bg-ordinal-pink', topBar: 'bg-ordinal-pink' },
  };
  const colors = colorMap[verdict];
  const circumference = 2 * Math.PI * 70;

  useEffect(() => {
    const ring = ringRef.current;
    if (ring) {
      ring.style.strokeDasharray = `${circumference}`;
      ring.style.strokeDashoffset = `${circumference}`;
      const timeout = setTimeout(() => {
        ring.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)';
        ring.style.strokeDashoffset = `${circumference - (circumference * readinessPct) / 100}`;
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [readinessPct, circumference]);

  const badgeClass = (score: number) => {
    if (score === 0) return 'bg-ordinal-green/15 text-ordinal-green';
    if (score >= 3) return 'bg-ordinal-pink/15 text-ordinal-pink';
    return 'bg-ordinal-amber/15 text-ordinal-amber';
  };
  const badgeLabel = (score: number) => {
    if (score === 0) return 'Strong';
    if (score >= 3) return 'Critical';
    return 'Gaps';
  };

  const categoryStatusClass = (avg: number) => {
    if (avg <= 0.15) return 'text-ordinal-green';
    if (avg >= 0.7) return 'text-ordinal-pink';
    return 'text-ordinal-amber';
  };
  const categoryStatusLabel = (avg: number) => {
    if (avg <= 0.15) return 'Strong';
    if (avg >= 0.7) return 'Critical';
    return 'Gaps';
  };

  const scoredQuestionCount = dataClarityQuestions.filter((q) => q.type !== 'number').length;
  const mailtoHref = `mailto:hello@ensight.co?subject=Data Clarity Assessment Enquiry&body=Hi, I just completed the Data Clarity Assessment (readiness score: ${readinessPct}%). I'd like to learn more about the Data Clarity service.`;

  const shareUrl = typeof window !== 'undefined' ? window.location.origin + '/data-clarity-assessment' : '';
  const shareText = `I scored ${readinessPct}% on the Data Readiness Assessment by Ensight. How data-ready is your business?`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div>
      {/* Confetti */}
      <div className="relative">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              background: ['hsl(160,84%,39%)', 'hsl(190,95%,42%)', 'hsl(38,92%,50%)', 'hsl(330,81%,60%)'][i % 4],
            }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos((i * 30 * Math.PI) / 180) * (80 + Math.random() * 60),
              y: Math.sin((i * 30 * Math.PI) / 180) * (80 + Math.random() * 60),
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* Score Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-lg p-12 text-center mb-6 relative overflow-hidden"
      >
        <div className={`absolute top-0 left-0 right-0 h-1 ${colors.topBar}`} />
        <div className={`font-mono-label text-[11px] font-semibold tracking-[3px] uppercase mb-4 ${colors.text}`}>
          {verdictLabel}
        </div>
        <div className="w-40 h-40 mx-auto mb-6 relative">
          <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
            <circle cx="80" cy="80" r="70" fill="none" strokeWidth="8" stroke="hsl(var(--border))" />
            <circle
              ref={ringRef}
              cx="80"
              cy="80"
              r="70"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              stroke={colors.stroke}
            />
          </svg>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-black ${colors.text}`}>
            {animatedPct}
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">{headline}</h2>
        <p className="text-[15px] text-ordinal-body leading-relaxed max-w-[500px] mx-auto">{desc}</p>
      </motion.div>

      {/* Cost Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="bg-gradient-to-br from-[#111118] to-[#1a1a2e] rounded-lg p-10 text-center mb-6 border border-[#2a2a3e]"
      >
        <div className="flex items-center justify-center gap-2 font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-ordinal-dim mb-3">
          Estimated Cost of Data & Reporting Inefficiency
          <button
            onClick={() => setShowMethodology(!showMethodology)}
            className="relative text-ordinal-dim hover:text-ordinal-faint transition-colors"
            aria-label="How is this calculated?"
          >
            {showMethodology ? <X size={14} /> : <Info size={14} />}
          </button>
        </div>

        {showMethodology && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white/5 border border-white/10 rounded-xl p-5 mb-4 text-left text-xs text-ordinal-dim leading-relaxed space-y-2"
          >
            <p className="font-semibold text-ordinal-faint">How we calculate this:</p>
            <p>Each of the {scoredQuestionCount} questions scores 0 (strong) to 3 (critical). Scores are weighted by dimension importance (25/25/20/15/15).</p>
            <p><span className="text-ordinal-faint">Readiness %</span> = 100 - weighted average of debt scores</p>
            <p><span className="text-ordinal-faint">Waste factor</span> = (100 - Readiness%) × 0.25 (up to 25% of payroll lost to data inefficiency)</p>
            <p><span className="text-ordinal-faint">Annual cost</span> = {teamSize} people × €40,000 avg cost × {(wasteFactor * 100).toFixed(1)}% waste = <strong className="text-ordinal-faint">{costFormatted}</strong></p>
            <p className="text-ordinal-dim/70 italic">This is a directional estimate, not a precise audit.</p>
          </motion.div>
        )}

        <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-ordinal-pink-bright via-ordinal-amber to-ordinal-green-bright bg-clip-text text-transparent mb-3">
          {'\u20AC'}{animatedCost.toLocaleString('en')}
        </div>
        <div className="text-xs text-ordinal-dim leading-relaxed">
          Based on {teamSize} people and your Data Readiness Score of {readinessPct}%.<br />
          Directional estimate using cross-industry research benchmarks.
        </div>
      </motion.div>

      {/* Dimension Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.24 }}
        className="bg-card border border-border rounded-lg p-8 mb-6"
      >
        <h3 className="text-lg font-bold mb-5">Your Breakdown</h3>
        <div className="space-y-6">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + catIndex * 0.08 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-ordinal-faint">
                  {cat.category}
                  <span className="ml-2 text-ordinal-dim font-normal text-[10px] tracking-normal">({cat.weight}% weight)</span>
                </h4>
                <span className={`font-mono-label text-[10px] font-semibold tracking-[1px] ${categoryStatusClass(cat.avgScore)}`}>
                  {categoryStatusLabel(cat.avgScore)}
                </span>
              </div>
              {cat.items.map((item, i) => (
                <div key={i} className={`flex justify-between items-center py-3 ${i < cat.items.length - 1 ? 'border-b border-border' : ''}`}>
                  <span className="text-[13px] text-ordinal-body flex-1 pr-3">{item.label}</span>
                  <span className={`font-mono-label text-[10px] font-semibold px-3 py-1 rounded-full tracking-[1px] flex-shrink-0 ${badgeClass(item.score)}`}>
                    {badgeLabel(item.score)}
                  </span>
                </div>
              ))}
              {cat.avgScore > 0.15 && (
                <p className="mt-2 text-xs text-ordinal-dim leading-relaxed border-l-2 border-[#06B6D4]/30 ml-1 pl-3">
                  💡 {cat.recommendation}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.36 }}
        className="bg-card border border-border rounded-lg p-10 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#06B6D4] via-[#10B981] to-[#4F46E5]" />
        <h3 className="text-[22px] font-bold mb-3">Ready for the Full Assessment?</h3>
        <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[440px] mx-auto">
          This self-assessment gives a directional view. Our Data Clarity Assessment is a structured diagnostic that maps your data landscape in detail and produces a scored Data Readiness Report with a clear path forward.
        </p>
        <a
          href={mailtoHref}
          className="inline-block bg-[#10B981] text-white font-bold text-base px-10 py-4 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:bg-[#059669] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,185,129,0.3)] transition-all duration-250 no-underline"
        >
          Book Your Data Clarity Assessment
        </a>
      </motion.div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#0A66C2] text-white rounded-xl font-semibold text-sm hover:bg-[#004182] hover:-translate-y-0.5 transition-all duration-200 no-underline"
        >
          <Share2 size={15} />
          LinkedIn
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-xl font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 no-underline"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          Post
        </a>
        <button
          onClick={onRestart}
          className="text-sm text-ordinal-dim hover:text-foreground transition-colors underline underline-offset-4"
        >
          Retake Assessment
        </button>
      </div>
    </div>
  );
};

// ─── Page Component ───
const DataClarityAssessment = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [direction, setDirection] = useState(1);

  const total = dataClarityQuestions.length;
  const question = questionsForCard[current];
  const answer = answers[question.id] ?? null;

  const isNextDisabled = question.type === 'number' ? !answer || answer < 1 : answer === null;

  const handleSelectOption = useCallback(
    (index: number) => {
      setAnswers((prev) => ({ ...prev, [question.id]: index }));
    },
    [question.id]
  );

  const handleNumberInput = useCallback(
    (value: number | null) => {
      setAnswers((prev) => ({ ...prev, [question.id]: value }));
    },
    [question.id]
  );

  const goNext = () => {
    setDirection(1);
    if (current < total - 1) {
      setCurrent((c) => c + 1);
    } else {
      setShowEmailCapture(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goBack = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  };

  const proceedToResults = () => {
    setShowEmailCapture(false);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-[720px] mx-auto px-6 pt-28 pb-20">
      <header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] font-mono-label text-[10px] font-medium tracking-[3px] uppercase px-4 py-2 rounded-full mb-7">
          <span className="w-[6px] h-[6px] bg-[#06B6D4] rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
          Data Readiness Check
        </div>
        <h1 className="text-[clamp(28px,5vw,42px)] font-extrabold leading-[1.15] tracking-tight mb-4">
          How{' '}
          <span className="bg-gradient-to-br from-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
            Data-Ready
          </span>{' '}
          Is Your Business?
        </h1>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[520px] mx-auto">
          Answer 11 questions about your data infrastructure. Get your Data Readiness Score and see where the gaps are across five critical dimensions.
        </p>
      </header>

      {showEmailCapture ? (
        <EmailCapture
          onSubmit={(_name, _email) => {
            proceedToResults();
          }}
          onSkip={proceedToResults}
        />
      ) : !showResults ? (
        <>
          <ProgressBar current={current} total={total} />

          <QuestionCard
            question={question as any}
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
              className="px-8 py-3.5 bg-[#10B981] text-white rounded-xl font-semibold text-[15px] ml-auto shadow-[0_4px_12px_rgba(16,185,129,0.12)] transition-all duration-250 hover:bg-[#059669] hover:-translate-y-px hover:shadow-[0_4px_24px_rgba(16,185,129,0.25)] disabled:opacity-30 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
            >
              {current === total - 1 ? 'See My Results' : 'Next'}
            </button>
          </div>
        </>
      ) : (
        <DataClarityResults
          answers={answers}
          onRestart={() => {
            setAnswers({});
            setCurrent(0);
            setShowResults(false);
            setShowEmailCapture(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
};

export default DataClarityAssessment;
