import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2 } from 'lucide-react';
import { generateDataClarityPDF } from '@/utils/generateDataClarityPDF';
import { Link } from 'react-router-dom';
import {
  DIMS,
  VERDICTS,
  dimScore,
  compositeScore,
  readinessPct,
  getVerdict,
  dimComplete,
  allDimsComplete,
  type DataClarityDimension,
} from '@/data/dataClarityQuestions';

// ─── Animated counter ───
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

// ─── Progress Bar (5 segments) ───
const DimProgress = ({ step }: { step: number }) => (
  <div className="flex gap-1.5 mb-2">
    {DIMS.map((_, i) => (
      <div
        key={i}
        className={`flex-1 h-1 rounded-full transition-colors duration-400 ${
          step > i ? 'bg-ordinal-green' : step === i ? 'bg-[#06B6D4]' : 'bg-border'
        }`}
      />
    ))}
  </div>
);

// ─── Intro Screen ───
const IntroScreen = ({ onBegin }: { onBegin: () => void }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-[22px] font-extrabold tracking-tight mb-3">Data Clarity Assessment</h2>
        <p className="text-sm text-ordinal-body leading-relaxed mb-6">
          This assessment maps your organisation's data landscape across five weighted dimensions.
          Your responses produce a composite Data Readiness Score and a specific verdict on your readiness
          to build a management analytics system.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-6">
          {DIMS.map((d) => (
            <div key={d.id} className="bg-background border border-border rounded-xl p-3 text-center">
              <div className="font-mono-label text-[9px] tracking-[1px] text-ordinal-dim mb-1">
                {Math.round(d.weight * 100)}%
              </div>
              <div className="text-[11px] font-bold leading-tight">{d.name}</div>
            </div>
          ))}
        </div>
        <div className="bg-background border border-border rounded-xl p-4 text-[13px] text-ordinal-body leading-relaxed">
          Each dimension has 3 questions with 4 options scored 1–4. There are no right or wrong answers — honest responses produce the most useful verdict.
        </div>
      </div>
      <div className="flex items-center justify-between px-8 py-5 border-t border-border bg-background/50">
        <span className="text-[13px] text-ordinal-dim">5 dimensions · 15 questions · ~5 minutes</span>
        <button
          onClick={onBegin}
          className="px-6 py-2.5 bg-foreground text-background rounded-lg font-bold text-[13px] hover:opacity-90 transition-opacity"
        >
          Begin assessment
        </button>
      </div>
    </div>
  </motion.div>
);

// ─── Dimension Question Page ───
const DimensionPage = ({
  dim,
  dimIndex,
  dimAnswers,
  onSelect,
  onBack,
  onNext,
  canNext,
}: {
  dim: DataClarityDimension;
  dimIndex: number;
  dimAnswers: Record<number, number>;
  onSelect: (qIdx: number, score: number) => void;
  onBack: () => void;
  onNext: () => void;
  canNext: boolean;
}) => {
  const answered = Object.keys(dimAnswers).length;
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSelect = (qi: number, score: number) => {
    onSelect(qi, score);
    // Find next unanswered question and scroll to it
    const nextUnanswered = dim.questions.findIndex((_, i) => i > qi && dimAnswers[i] === undefined);
    if (nextUnanswered !== -1) {
      setTimeout(() => {
        questionRefs.current[nextUnanswered]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  };

  return (
    <motion.div
      key={dim.id}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Dimension header */}
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-1.5 font-mono-label text-[8px] tracking-[2px] uppercase px-2.5 py-1 rounded-full mb-3"
              style={{ background: dim.bgLight, color: dim.color }}
            >
              <span className="w-[5px] h-[5px] rounded-full" style={{ background: dim.color }} />
              Dimension {dimIndex + 1} of 5
            </span>
            <h2 className="text-xl font-extrabold tracking-tight mb-1.5">{dim.name}</h2>
            <p className="text-sm text-ordinal-body leading-relaxed">{dim.sub}</p>
          </div>

          {/* Questions */}
          {dim.questions.map((q, qi) => (
            <div key={qi} ref={(el) => { questionRefs.current[qi] = el; }}>
              {qi > 0 && <div className="h-px bg-border my-5" />}
              <div>
                <div className="font-mono-label text-[10px] text-ordinal-dim mb-1.5">
                  Question {qi + 1} of 3
                </div>
                <div className="text-sm font-bold leading-snug mb-3">{q.text}</div>
                <div className="flex flex-col gap-2">
                  {q.options.map((opt) => {
                    const selected = dimAnswers[qi] === opt.score;
                    return (
                      <button
                        key={opt.score}
                        type="button"
                        onClick={() => handleSelect(qi, opt.score)}
                        className={`flex items-start gap-3 px-3.5 py-3 border rounded-xl text-left text-[13px] leading-snug transition-all duration-150 cursor-pointer ${
                          selected
                            ? 'border-[#06B6D4] bg-[#06B6D4]/5'
                            : 'border-border bg-card hover:border-muted-foreground/30 hover:bg-accent/50'
                        }`}
                      >
                        <div
                          className={`w-[18px] h-[18px] rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                            selected ? 'border-[#06B6D4] bg-[#06B6D4]' : 'border-border'
                          }`}
                        >
                          {selected && <div className="w-[7px] h-[7px] bg-white rounded-full" />}
                        </div>
                        <span className={selected ? 'text-foreground' : 'text-ordinal-body'}>{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav footer */}
        <div className="flex items-center justify-between px-8 py-5 border-t border-border bg-background/50">
          <span className="font-mono-label text-[9px] tracking-[1px] uppercase text-ordinal-dim">
            {answered}/3 answered
          </span>
          <div className="flex gap-2">
            <button
              onClick={onBack}
              className="px-5 py-2.5 bg-card border border-border text-foreground rounded-lg font-bold text-[13px] hover:bg-accent transition-colors"
            >
              Back
            </button>
            <button
              onClick={onNext}
              disabled={!canNext}
              className="px-5 py-2.5 bg-foreground text-background rounded-lg font-bold text-[13px] hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {dimIndex === 4 && canNext ? 'See results' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Results ───
const ResultsView = ({
  answers,
  onRestart,
}: {
  answers: Record<string, Record<number, number>>;
  onRestart: () => void;
}) => {
  const ringRef = useRef<SVGCircleElement>(null);
  const comp = compositeScore(answers)!;
  const pct = readinessPct(comp);
  const vKey = getVerdict(answers);
  const v = VERDICTS[vKey];
  const animatedPct = useAnimatedCounter(pct);

  const scores = DIMS.map((d) => dimScore(d.id, answers)!);
  const critFlags = DIMS.map((d, i) => ({ d, s: scores[i] })).filter((x) => x.s <= 1.5);
  const warnFlags = DIMS.map((d, i) => ({ d, s: scores[i] })).filter((x) => x.s > 1.5 && x.s <= 2.5);

  const circumference = 2 * Math.PI * 54;

  useEffect(() => {
    const ring = ringRef.current;
    if (ring) {
      ring.style.strokeDasharray = `${circumference}`;
      ring.style.strokeDashoffset = `${circumference}`;
      const timeout = setTimeout(() => {
        ring.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)';
        ring.style.strokeDashoffset = `${circumference - (circumference * pct) / 100}`;
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [pct, circumference]);

  const shareUrl = typeof window !== 'undefined' ? window.location.origin + '/data-clarity-assessment' : '';
  const shareText = `I scored ${pct}% on the Data Readiness Assessment by Ensight. How data-ready is your business?`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const mailtoHref = `mailto:hello@ensight.co?subject=Data Clarity Assessment — ${encodeURIComponent(v.name)} (${pct}%)&body=I completed the Data Clarity Assessment and received the verdict: ${encodeURIComponent(v.name)} (${pct}%). I'd like to discuss my results.`;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Score + Verdict side by side */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Score ring */}
            <svg width="144" height="144" viewBox="0 0 144 144" className="flex-shrink-0">
              <circle cx="72" cy="72" r="54" fill="none" stroke="hsl(var(--border))" strokeWidth="9" />
              <circle
                ref={ringRef}
                cx="72" cy="72" r="54"
                fill="none" stroke={v.color} strokeWidth="9"
                strokeLinecap="round"
                transform="rotate(-90 72 72)"
              />
              <text x="72" y="66" textAnchor="middle" fontFamily="inherit" fontSize="28" fontWeight="800" fill={v.color}>
                {animatedPct}%
              </text>
              <text x="72" y="86" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="hsl(var(--muted-foreground))" letterSpacing="1">
                readiness
              </text>
            </svg>

            {/* Verdict box */}
            <div
              className="flex-1 rounded-xl p-6 border"
              style={{ background: v.bg, borderColor: v.border }}
            >
              <div className="font-mono-label text-[9px] tracking-[2px] uppercase mb-1" style={{ color: v.color }}>
                Verdict
              </div>
              <div className="text-xl font-extrabold mb-2" style={{ color: v.color }}>
                {v.name}
              </div>
              <p className="text-[13px] text-ordinal-body leading-relaxed">{v.desc}</p>
            </div>
          </div>

          {/* Dimension bar chart */}
          <div className="h-px bg-border my-6" />
          <h3 className="text-base font-bold mb-4">Score by dimension</h3>
          <div className="space-y-3 mb-6">
            {DIMS.map((d, i) => {
              const s = scores[i];
              const bp = Math.round((s / 4) * 100);
              const bc = s <= 1.5 ? '#EC4899' : s <= 2.5 ? '#F59E0B' : '#10B981';
              return (
                <div key={d.id} className="flex items-center gap-3">
                  <span className="text-[13px] text-ordinal-body w-36 flex-shrink-0">{d.name}</span>
                  <div className="flex-1 h-2.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: bc }}
                      initial={{ width: 0 }}
                      animate={{ width: `${bp}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    />
                  </div>
                  <span className="font-mono-label text-[12px] font-bold w-12 text-right" style={{ color: bc }}>
                    {s.toFixed(1)}/4
                  </span>
                </div>
              );
            })}
          </div>

          {/* Flags */}
          {(critFlags.length > 0 || warnFlags.length > 0) && (
            <>
              <div className="h-px bg-border my-6" />
              <h3 className="text-base font-bold mb-4">Flags requiring attention</h3>
              <div className="space-y-3 mb-6">
                {critFlags.map((f) => (
                  <div
                    key={f.d.id}
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ background: 'rgba(236,72,153,0.07)', borderColor: 'rgba(236,72,153,0.2)' }}
                  >
                    <div className="w-6 h-6 rounded-full bg-ordinal-pink text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      !
                    </div>
                    <p className="text-[13px] text-ordinal-body leading-relaxed">
                      <strong className="text-foreground">{f.d.name}</strong> — scored {f.s.toFixed(1)}/4. Critical threshold not met. This dimension requires remediation before any build can proceed.
                    </p>
                  </div>
                ))}
                {warnFlags.map((f) => (
                  <div
                    key={f.d.id}
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ background: 'rgba(245,158,11,0.07)', borderColor: 'rgba(245,158,11,0.2)' }}
                  >
                    <div className="w-6 h-6 rounded-full bg-ordinal-amber text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ~
                    </div>
                    <p className="text-[13px] text-ordinal-body leading-relaxed">
                      <strong className="text-foreground">{f.d.name}</strong> — scored {f.s.toFixed(1)}/4. Improvement required. Specific gaps should be addressed as part of the remediation plan.
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Next steps */}
          <div className="h-px bg-border my-6" />
          <h3 className="text-base font-bold mb-4">Recommended next steps</h3>
          <div className="space-y-4 mb-8">
            {v.steps.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: v.bg, color: v.color, border: `1px solid ${v.border}` }}
                >
                  {i + 1}
                </div>
                <div>
                  <div className="text-sm font-bold mb-0.5">{s.title}</div>
                  <div className="text-[13px] text-ordinal-body leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <div className="absolute-hidden h-1 bg-gradient-to-r from-[#06B6D4] via-[#10B981] to-[#4F46E5] rounded-t-xl" />
            <h3 className="text-lg font-bold mb-2">Ready to discuss your results?</h3>
            <p className="text-[13px] text-ordinal-body leading-relaxed mb-5 max-w-[440px] mx-auto">
              Book a 30-minute call with the ordinal. team. We'll walk through your Assessment findings and map the specific path forward for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={mailtoHref}
                className="px-8 py-3 bg-[#10B981] text-white font-bold text-sm rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:bg-[#059669] hover:-translate-y-0.5 transition-all no-underline"
              >
                Book a call
              </a>
              <button
                onClick={onRestart}
                className="px-6 py-3 bg-card border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-accent transition-colors"
              >
                Start again
              </button>
            </div>
          </div>
        </div>

        {/* Nav footer */}
        <div className="flex items-center justify-between px-8 py-5 border-t border-border bg-background/50">
          <span className="font-mono-label text-[9px] tracking-[1px] uppercase text-ordinal-dim">
            Assessment complete
          </span>
          <div className="flex gap-2" />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <button
          onClick={() =>
            generateDataClarityPDF({
              pct,
              verdictKey: vKey,
              verdictName: v.name,
              verdictDesc: v.desc,
              verdictColor: v.color,
              scores,
              steps: v.steps,
              critFlags,
              warnFlags,
            })
          }
          className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-accent hover:-translate-y-0.5 transition-all duration-200"
        >
          <Download size={15} />
          Download PDF
        </button>
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
      </div>
    </motion.div>
  );
};

// ─── Page Component ───
const DataClarityAssessment = () => {
  // step: -1=intro, 0-4=dimension, 5=results
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, Record<number, number>>>({});

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelect = (dimId: string, qIdx: number, score: number) => {
    setAnswers((prev) => ({
      ...prev,
      [dimId]: { ...(prev[dimId] || {}), [qIdx]: score },
    }));
  };

  const goTo = (s: number) => {
    setStep(s);
    scrollToTop();
  };

  return (
    <div className="max-w-[800px] mx-auto px-6 pt-28 pb-20">
      {/* Hero */}
      <header className="text-center mb-10">
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
          15 questions across five dimensions. A scored readiness profile. A clear verdict on whether you're ready to build — and what to do if you're not.
        </p>
      </header>

      {/* Progress bar (shown during questions) */}
      {step >= 0 && step < 5 && (
        <div className="mb-4">
          <DimProgress step={step} />
          <div className="flex justify-between font-mono-label text-[9px] tracking-[1.5px] uppercase text-ordinal-dim">
            <span>Dimension {step + 1} of 5 — {DIMS[step].name}</span>
            <span>{Object.keys(answers[DIMS[step].id] || {}).length}/3 answered</span>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="mb-4">
          <DimProgress step={5} />
          <div className="font-mono-label text-[9px] tracking-[1.5px] uppercase text-ordinal-dim">
            Your results
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === -1 && <IntroScreen key="intro" onBegin={() => goTo(0)} />}

        {step >= 0 && step < 5 && (
          <DimensionPage
            key={DIMS[step].id}
            dim={DIMS[step]}
            dimIndex={step}
            dimAnswers={answers[DIMS[step].id] || {}}
            onSelect={(qIdx, score) => handleSelect(DIMS[step].id, qIdx, score)}
            onBack={() => goTo(step - 1)}
            onNext={() => goTo(step + 1 > 4 && allDimsComplete(answers) ? 5 : Math.min(step + 1, 4))}
            canNext={dimComplete(DIMS[step].id, answers)}
          />
        )}

        {step === 5 && (
          <ResultsView
            key="results"
            answers={answers}
            onRestart={() => {
              setAnswers({});
              goTo(-1);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DataClarityAssessment;
