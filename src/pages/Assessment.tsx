import SEO from '@/components/SEO';
import { useState, useEffect, useRef } from 'react';
import { Download, Share2, Info, X, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generatePDF } from '@/utils/generatePDF';
import {
  CATS,
  VERDICTS,
  categoryScore,
  compositeScore,
  debtPct,
  getVerdict,
  categoryComplete,
  allCategoriesComplete,
  type ProcessDebtCategory,
} from '@/data/questions';

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

// ─── Progress Bar (7 segments) ───
const CatProgress = ({ step }: { step: number }) => (
  <div className="flex gap-1.5 mb-2">
    {CATS.map((_, i) => (
      <div
        key={i}
        className={`flex-1 h-1 rounded-full transition-colors duration-400 ${
          step > i ? 'bg-primary' : step === i ? 'bg-accent-blue' : 'bg-border'
        }`}
      />
    ))}
  </div>
);

// ─── Team Size Step ───
const TeamSizeStep = ({
  teamSize,
  onChange,
  onBack,
  onNext,
}: {
  teamSize: number | null;
  onChange: (v: number | null) => void;
  onBack: () => void;
  onNext: () => void;
}) => (
  <div>
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-8">
        <span className="inline-flex items-center gap-1.5 font-mono-label text-[8px] tracking-[2px] uppercase px-2.5 py-1 rounded-full mb-3 bg-primary/10 text-primary">
          <span className="w-[5px] h-[5px] rounded-full bg-primary" />
          Final question
        </span>
        <h2 className="text-xl font-extrabold tracking-tight mb-1.5">Team Size</h2>
        <p className="text-sm text-ordinal-body leading-relaxed mb-6">
          This helps us estimate the financial impact of operational inefficiency on your organisation.
        </p>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={teamSize ?? ''}
            placeholder="e.g. 30"
            min={1}
            max={10000}
            onChange={(e) => {
              const num = parseInt(e.target.value);
              onChange(isNaN(num) ? null : num);
            }}
            className="w-[140px] px-4 py-3 border border-border rounded-xl font-sans text-lg font-bold text-center bg-background outline-none transition-colors focus:border-primary"
          />
          <span className="text-[15px] text-ordinal-dim">people</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-8 py-5 border-t border-border bg-background/50">
        <span className="font-mono-label text-[9px] tracking-[1px] uppercase text-ordinal-dim">
          {teamSize && teamSize >= 1 ? '1/1 answered' : '0/1 answered'}
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
            disabled={!teamSize || teamSize < 1}
            className="px-5 py-2.5 bg-foreground text-background rounded-lg font-bold text-[13px] hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          >
            See results
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ─── Email Capture ───
const EmailCapture = ({ onSubmit, onSkip }: { onSubmit: (name: string, email: string) => void; onSkip: () => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const isValid = name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div>
      <div className="bg-card border border-border rounded-lg p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Mail className="text-primary" size={24} />
        </div>
        <h2 className="text-[22px] font-bold mb-2">Your Results Are Ready</h2>
        <p className="text-[15px] text-ordinal-body leading-relaxed mb-8 max-w-[420px] mx-auto">
          Enter your details to receive a copy of your Process Debt Report, or skip to view your results now.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); if (isValid) onSubmit(name.trim(), email.trim()); }} className="max-w-[360px] mx-auto space-y-3">
          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100}
            className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground text-[15px] outline-none transition-colors focus:border-primary placeholder:text-muted-foreground" />
          <input type="email" placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255}
            className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground text-[15px] outline-none transition-colors focus:border-primary placeholder:text-muted-foreground" />
          <button type="submit" disabled={!isValid}
            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-accent-blue text-white rounded-xl font-semibold text-[15px] shadow-[0_4px_12px_hsl(261_84%_58%/0.15)] transition-all duration-200 hover:opacity-90 hover:-translate-y-px disabled:opacity-30 disabled:cursor-not-allowed">
            View My Results <ArrowRight size={16} />
          </button>
        </form>
        <button onClick={onSkip} className="mt-5 text-sm text-ordinal-dim hover:text-foreground transition-colors underline underline-offset-4">
          Skip, just show my results
        </button>
      </div>
    </div>
  );
};

// ─── Intro Screen ───
const IntroScreen = ({ onBegin }: { onBegin: () => void }) => (
  <div>
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-[22px] font-extrabold tracking-tight mb-3">Process Debt Assessment</h2>
        <p className="text-sm text-ordinal-body leading-relaxed mb-6">
          This assessment maps your organisation's operational efficiency across seven weighted categories.
          Your responses produce a Process Debt Score and a verdict on how much hidden cost your operations are carrying.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
          {CATS.map((c) => (
            <div key={c.id} className="bg-background border border-border rounded-xl p-3 text-center">
              <div className="font-mono-label text-[9px] tracking-[1px] text-ordinal-dim mb-1">
                {Math.round(c.weight * 100)}%
              </div>
              <div className="text-[11px] font-bold leading-tight">{c.name}</div>
            </div>
          ))}
        </div>
        <div className="bg-background border border-border rounded-xl p-4 text-[13px] text-ordinal-body leading-relaxed">
          Each category has 2 questions scored 0–3. Higher scores indicate more process debt. There are no right or wrong answers — honest responses produce the most useful results.
        </div>
      </div>
      <div className="flex items-center justify-between px-8 py-5 border-t border-border bg-background/50">
        <span className="text-[13px] text-ordinal-dim">7 categories · 14 questions · ~5 minutes</span>
        <button
          onClick={onBegin}
          className="px-6 py-2.5 bg-foreground text-background rounded-lg font-bold text-[13px] hover:opacity-90 transition-opacity"
        >
          Begin assessment
        </button>
      </div>
    </div>
  </div>
);

// ─── Category Question Page ───
const CategoryPage = ({
  cat,
  catIndex,
  catAnswers,
  onSelect,
  onBack,
  onNext,
  canNext,
}: {
  cat: ProcessDebtCategory;
  catIndex: number;
  catAnswers: Record<number, number>;
  onSelect: (qIdx: number, score: number) => void;
  onBack: () => void;
  onNext: () => void;
  canNext: boolean;
}) => {
  const answered = Object.keys(catAnswers).length;
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSelect = (qi: number, score: number) => {
    onSelect(qi, score);
    const nextUnanswered = cat.questions.findIndex((_, i) => i > qi && catAnswers[i] === undefined);
    if (nextUnanswered !== -1) {
      setTimeout(() => {
        questionRefs.current[nextUnanswered]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  };

  return (
    <div>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-1.5 font-mono-label text-[8px] tracking-[2px] uppercase px-2.5 py-1 rounded-full mb-3"
              style={{ background: cat.bgLight, color: cat.color }}
            >
              <span className="w-[5px] h-[5px] rounded-full" style={{ background: cat.color }} />
              Category {catIndex + 1} of 7
            </span>
            <h2 className="text-xl font-extrabold tracking-tight mb-1.5">{cat.name}</h2>
            <p className="text-sm text-ordinal-body leading-relaxed">{cat.sub}</p>
          </div>

          {cat.questions.map((q, qi) => (
            <div key={qi} ref={(el) => { questionRefs.current[qi] = el; }}>
              {qi > 0 && <div className="h-px bg-border my-5" />}
              <div>
                <div className="font-mono-label text-[10px] text-ordinal-dim mb-1.5">
                  Question {qi + 1} of {cat.questions.length}
                </div>
                <div className="text-sm font-bold leading-snug mb-3">{q.text}</div>
                <div className="flex flex-col gap-2">
                  {q.options.map((opt) => {
                    const selected = catAnswers[qi] === opt.score;
                    return (
                      <button
                        key={opt.score}
                        type="button"
                        onClick={() => handleSelect(qi, opt.score)}
                        className={`flex items-start gap-3 px-3.5 py-3 border rounded-xl text-left text-[13px] leading-snug transition-all duration-150 cursor-pointer ${
                          selected
                            ? 'border-primary bg-primary/[0.06]'
                            : 'border-border bg-card hover:border-muted-foreground/30 hover:bg-accent/50'
                        }`}
                      >
                        <div
                          className={`w-[18px] h-[18px] rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                            selected ? 'border-primary bg-primary' : 'border-border'
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

        <div className="flex items-center justify-between px-8 py-5 border-t border-border bg-background/50">
          <span className="font-mono-label text-[9px] tracking-[1px] uppercase text-ordinal-dim">
            {answered}/{cat.questions.length} answered
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
              {catIndex === CATS.length - 1 && canNext ? 'Continue' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Results ───
const ResultsView = ({
  answers,
  teamSize,
  onRestart,
}: {
  answers: Record<string, Record<number, number>>;
  teamSize: number;
  onRestart: () => void;
}) => {
  const ringRef = useRef<SVGCircleElement>(null);
  const [showMethodology, setShowMethodology] = useState(false);
  const comp = compositeScore(answers)!;
  const pct = debtPct(comp);
  const vKey = getVerdict(answers);
  const v = VERDICTS[vKey];
  const animatedPct = useAnimatedCounter(pct);

  const scores = CATS.map((c) => categoryScore(c.id, answers)!);
  const critFlags = CATS.map((c, i) => ({ c, s: scores[i] })).filter((x) => x.s >= 2.5);
  const warnFlags = CATS.map((c, i) => ({ c, s: scores[i] })).filter((x) => x.s >= 1.5 && x.s < 2.5);

  // Cost calculation
  const avgCost = 40000;
  const wasteFactor = (pct / 100) * 0.3;
  const annualCost = Math.round(teamSize * avgCost * wasteFactor);
  const costFormatted = '\u20AC' + annualCost.toLocaleString('en');
  const animatedCost = useAnimatedCounter(annualCost);

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

  const shareUrl = typeof window !== 'undefined' ? window.location.origin + '/assessment' : '';
  const shareText = `I just scored ${pct}% on the Process Debt Assessment by ordinal. Find out your score:`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const mailtoHref = `mailto:hello@ordinal.co?subject=Operational X-Ray Enquiry&body=Hi, I just completed the ordinal Process Debt Assessment (score: ${pct}%). I'd like to learn more about the Operational X-Ray.`;
  const scoredQuestionCount = CATS.reduce((t, c) => t + c.questions.length, 0);
  const maxScore = scoredQuestionCount * 3;

  return (
    <div>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Score + Verdict side by side */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
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
                process debt
              </text>
            </svg>

            <div className="flex-1 rounded-xl p-6 border" style={{ background: v.bg, borderColor: v.border }}>
              <div className="font-mono-label text-[9px] tracking-[2px] uppercase mb-1" style={{ color: v.color }}>
                Verdict
              </div>
              <div className="text-xl font-extrabold mb-2" style={{ color: v.color }}>
                {v.name}
              </div>
              <p className="text-[13px] text-ordinal-body leading-relaxed">{v.desc}</p>
            </div>
          </div>

          {/* Cost estimate */}
          <div className="bg-gradient-to-br from-[#111118] to-[#1a1a2e] rounded-xl p-8 text-center mb-6 border border-[#2a2a3e]">
            <div className="flex items-center justify-center gap-2 font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-ordinal-dim mb-3">
              Estimated Annual Cost of Inefficiency
              <button onClick={() => setShowMethodology(!showMethodology)} className="text-ordinal-dim hover:text-ordinal-faint transition-colors" aria-label="How is this calculated?">
                {showMethodology ? <X size={14} /> : <Info size={14} />}
              </button>
            </div>
            {showMethodology && (
              <div
                className="bg-white/5 border border-white/10 rounded-xl p-5 mb-4 text-left text-xs text-ordinal-dim leading-relaxed space-y-2">
                <p className="font-semibold text-ordinal-faint">How we calculate this:</p>
                <p>Each of the {scoredQuestionCount} operational questions scores 0 (good) to 3 (critical), giving a max score of {maxScore}.</p>
                <p><span className="text-ordinal-faint">Process Debt %</span> = your weighted composite / max × 100</p>
                <p><span className="text-ordinal-faint">Waste factor</span> = Process Debt % × 0.30 (capped at 30% of payroll)</p>
                <p><span className="text-ordinal-faint">Annual cost</span> = {teamSize} people × €40,000 avg cost × {(wasteFactor * 100).toFixed(1)}% waste = <strong className="text-ordinal-faint">{costFormatted}</strong></p>
                <p className="text-ordinal-dim/70 italic">This is a directional estimate based on cross-industry benchmarks, not a precise audit.</p>
              </div>
            )}
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent-blue to-secondary bg-clip-text text-transparent mb-3">
              €{animatedCost.toLocaleString('en')}
            </div>
            <div className="text-xs text-ordinal-dim leading-relaxed">
              Based on {teamSize} people and your Process Debt Score of {pct}%.
            </div>
          </div>

          {/* Category bar chart */}
          <div className="h-px bg-border my-6" />
          <h3 className="text-base font-bold mb-4">Score by category</h3>
          <div className="space-y-3 mb-6">
            {CATS.map((c, i) => {
              const s = scores[i];
              const bp = Math.round((s / 3) * 100);
              const bc = s >= 2.5 ? '#EC4899' : s >= 1.5 ? '#F59E0B' : '#10B981';
              return (
                <div key={c.id} className="flex items-center gap-3">
                  <span className="text-[13px] text-ordinal-body w-36 flex-shrink-0">{c.name}</span>
                  <div className="flex-1 h-2.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{  background: bc , width: `${bp}%` }} />
                  </div>
                  <span className="font-mono-label text-[12px] font-bold w-12 text-right" style={{ color: bc }}>
                    {s.toFixed(1)}/3
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
                  <div key={f.c.id} className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ background: 'rgba(236,72,153,0.07)', borderColor: 'rgba(236,72,153,0.2)' }}>
                    <div className="w-6 h-6 rounded-full bg-ordinal-pink text-white flex items-center justify-center text-xs font-bold flex-shrink-0">!</div>
                    <div>
                      <p className="text-[13px] text-ordinal-body leading-relaxed">
                        <strong className="text-foreground">{f.c.name}</strong> — scored {f.s.toFixed(1)}/3. Critical level of process debt.
                      </p>
                      <p className="text-xs text-ordinal-dim mt-1 border-l-2 border-ordinal-pink/30 pl-3">{f.c.recommendation}</p>
                    </div>
                  </div>
                ))}
                {warnFlags.map((f) => (
                  <div key={f.c.id} className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ background: 'rgba(245,158,11,0.07)', borderColor: 'rgba(245,158,11,0.2)' }}>
                    <div className="w-6 h-6 rounded-full bg-ordinal-amber text-white flex items-center justify-center text-xs font-bold flex-shrink-0">~</div>
                    <div>
                      <p className="text-[13px] text-ordinal-body leading-relaxed">
                        <strong className="text-foreground">{f.c.name}</strong> — scored {f.s.toFixed(1)}/3. At-risk level — improvement recommended.
                      </p>
                      <p className="text-xs text-ordinal-dim mt-1 border-l-2 border-ordinal-amber/30 pl-3">{f.c.recommendation}</p>
                    </div>
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
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: v.bg, color: v.color, border: `1px solid ${v.border}` }}>
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
            <h3 className="text-lg font-bold mb-2">Want to See the Real Numbers?</h3>
            <p className="text-[13px] text-ordinal-body leading-relaxed mb-5 max-w-[440px] mx-auto">
              This estimate is based on industry averages. Our Operational X-Ray embeds with your team for 1–2 weeks and shows you exactly where capacity is trapped and how to unlock it.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={mailtoHref}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent-blue text-white font-bold text-sm rounded-xl shadow-[0_4px_16px_hsl(261_84%_58%/0.2)] hover:opacity-90 hover:-translate-y-0.5 transition-all no-underline">
                Book Your X-Ray Briefing
              </a>
              <button onClick={onRestart}
                className="px-6 py-3 bg-card border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-accent transition-colors">
                Start again
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-8 py-5 border-t border-border bg-background/50">
          <span className="font-mono-label text-[9px] tracking-[1px] uppercase text-ordinal-dim">Assessment complete</span>
          <div className="flex gap-2" />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <button
          onClick={() =>
            generatePDF({
              pct,
              levelLabel: v.name,
              headline: v.name,
              desc: v.desc,
              costFormatted,
              teamSize,
              categories: CATS.map((c, i) => ({
                category: c.name,
                items: c.questions.map((q, qi) => ({
                  label: q.text,
                  score: answers[c.id]?.[qi] ?? 0,
                })),
                avgScore: scores[i] / 3,
                recommendation: c.recommendation,
              })),
            })
          }
          className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-accent hover:-translate-y-0.5 transition-all duration-200"
        >
          <Download size={15} />
          Download PDF
        </button>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#0A66C2] text-white rounded-xl font-semibold text-sm hover:bg-[#004182] hover:-translate-y-0.5 transition-all duration-200 no-underline">
          <Share2 size={15} /> LinkedIn
        </a>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-xl font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 no-underline">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          Post
        </a>
      </div>
    </div>
  );
};

// ─── Page Component ───
const Assessment = () => {
  // step: -1=intro, 0-6=category, 7=team size, 8=email, 9=results
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, Record<number, number>>>({});
  const [teamSize, setTeamSize] = useState<number | null>(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSelect = (catId: string, qIdx: number, score: number) => {
    setAnswers((prev) => ({
      ...prev,
      [catId]: { ...(prev[catId] || {}), [qIdx]: score },
    }));
  };

  const goTo = (s: number) => {
    setStep(s);
    scrollToTop();
  };

  const catCount = CATS.length; // 7

  return (
    <div className="max-w-[800px] mx-auto px-6 pt-28 pb-20">
      <SEO title="Process Debt Assessment · Ensight" description="Score your operational efficiency in minutes. Identify where process debt is costing you the most." path="/assessment" ogImage="/og/assessment.jpg" />
      <header className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary font-mono-label text-[10px] font-medium tracking-[3px] uppercase px-4 py-2 rounded-full mb-7">
          <span className="w-[6px] h-[6px] bg-primary rounded-full shadow-[0_0_8px_hsl(261_84%_58%/0.5)]" />
          Free Assessment
        </div>
        <h1 className="text-[clamp(28px,5vw,42px)] font-extrabold leading-[1.15] tracking-tight mb-4">
          How Much Is{' '}
          <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">
            Process Debt
          </span>{' '}
          Costing You?
        </h1>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[520px] mx-auto">
          Answer 14 questions about your operations across 7 categories. Get your Process Debt Score and an estimate of what operational inefficiency costs your organisation each year.
        </p>
      </header>

      {/* Progress bar (during category questions) */}
      {step >= 0 && step < catCount && (
        <div className="mb-4">
          <CatProgress step={step} />
          <div className="flex justify-between font-mono-label text-[9px] tracking-[1.5px] uppercase text-ordinal-dim">
            <span>Category {step + 1} of {catCount} — {CATS[step].name}</span>
            <span>{Object.keys(answers[CATS[step].id] || {}).length}/{CATS[step].questions.length} answered</span>
          </div>
        </div>
      )}
      {step === catCount && (
        <div className="mb-4">
          <CatProgress step={catCount} />
          <div className="font-mono-label text-[9px] tracking-[1.5px] uppercase text-ordinal-dim">
            Final question
          </div>
        </div>
      )}
      {step === catCount + 2 && (
        <div className="mb-4">
          <CatProgress step={catCount} />
          <div className="font-mono-label text-[9px] tracking-[1.5px] uppercase text-ordinal-dim">
            Your results
          </div>
        </div>
      )}

      
        {step === -1 && <IntroScreen key="intro" onBegin={() => goTo(0)} />}

        {step >= 0 && step < catCount && (
          <CategoryPage
            key={CATS[step].id}
            cat={CATS[step]}
            catIndex={step}
            catAnswers={answers[CATS[step].id] || {}}
            onSelect={(qIdx, score) => handleSelect(CATS[step].id, qIdx, score)}
            onBack={() => goTo(step - 1)}
            onNext={() => goTo(step + 1)}
            canNext={categoryComplete(CATS[step].id, answers)}
          />
        )}

        {step === catCount && (
          <TeamSizeStep
            key="teamsize"
            teamSize={teamSize}
            onChange={setTeamSize}
            onBack={() => goTo(catCount - 1)}
            onNext={() => goTo(catCount + 1)}
          />
        )}

        {step === catCount + 1 && (
          <EmailCapture
            key="email"
            onSubmit={(_name, _email) => goTo(catCount + 2)}
            onSkip={() => goTo(catCount + 2)}
          />
        )}

        {step === catCount + 2 && (
          <ResultsView
            key="results"
            answers={answers}
            teamSize={teamSize || 30}
            onRestart={() => {
              setAnswers({});
              setTeamSize(null);
              goTo(-1);
            }}
          />
        )}
      
    </div>
  );
};

export default Assessment;
