import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Info, X, Download, Share2 } from 'lucide-react';
import { questions, categoryRecommendations, type QuestionCategory } from '@/data/questions';
import { generatePDF } from '@/utils/generatePDF';

interface ResultsProps {
  answers: Record<string, number | null>;
  onRestart: () => void;
}

interface CategoryResult {
  category: QuestionCategory;
  items: { label: string; score: number }[];
  avgScore: number;
  recommendation: string;
}

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

const Results = ({ answers, onRestart }: ResultsProps) => {
  const ringRef = useRef<SVGCircleElement>(null);
  const [showMethodology, setShowMethodology] = useState(false);

  let totalScore = 0;
  let maxScore = 0;
  const categoryMap = new Map<QuestionCategory, { label: string; score: number; max: number }[]>();

  questions.forEach((q) => {
    if (q.type === 'number' || !q.category) return;
    const ans = answers[q.id];
    if (ans == null || !q.options) return;
    const opt = q.options[ans];
    const qMax = Math.max(...q.options.map((o) => o.score));
    totalScore += opt.score;
    maxScore += qMax;

    if (!categoryMap.has(q.category)) categoryMap.set(q.category, []);
    categoryMap.get(q.category)!.push({
      label: q.label.replace(/\?$/, ''),
      score: opt.score,
      max: qMax,
    });
  });

  const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  const teamSize = (answers.team_size as number) || 30;
  const avgCost = 40000;
  const wasteFactor = (pct / 100) * 0.3;
  const annualCost = Math.round(teamSize * avgCost * wasteFactor);
  const costFormatted = '\u20AC' + annualCost.toLocaleString('en');

  // Animated values
  const animatedPct = useAnimatedCounter(pct);
  const animatedCost = useAnimatedCounter(annualCost);

  const categories: CategoryResult[] = [];
  const categoryOrder: QuestionCategory[] = [
    'Communication',
    'People Dependencies',
    'Visibility',
    'Automation',
    'Scalability',
    'Customer Impact',
    'Decision Making',
  ];

  categoryOrder.forEach((cat) => {
    const items = categoryMap.get(cat);
    if (!items || items.length === 0) return;
    const totalCatScore = items.reduce((s, i) => s + i.score, 0);
    const totalCatMax = items.reduce((s, i) => s + i.max, 0);
    const avg = totalCatMax > 0 ? totalCatScore / totalCatMax : 0;
    categories.push({
      category: cat,
      items: items.map((i) => ({ label: i.label, score: i.score })),
      avgScore: avg,
      recommendation: categoryRecommendations[cat],
    });
  });

  let level: 'low' | 'medium' | 'high';
  let levelLabel: string;
  let headline: string;
  let desc: string;

  if (pct <= 25) {
    level = 'low';
    levelLabel = 'Low Process Debt';
    headline = 'Your Operations Are in Good Shape';
    desc = 'Your organisation shows relatively low levels of process debt. There may still be optimisation opportunities, but your foundation is solid.';
  } else if (pct <= 55) {
    level = 'medium';
    levelLabel = 'Moderate Process Debt';
    headline = 'Significant Capacity to Recover';
    desc = 'Your organisation has accumulated meaningful process debt. Inefficiencies are likely costing you more than you realise, and they are compounding as you grow.';
  } else {
    level = 'high';
    levelLabel = 'High Process Debt';
    headline = 'Your Operations Need Urgent Attention';
    desc = 'Your organisation is carrying substantial process debt. A large portion of your team\'s time and your operating budget is being consumed by inefficiency.';
  }

  const colorMap = {
    low: { text: 'text-ordinal-green', stroke: 'hsl(270, 80%, 50%)', bg: 'bg-ordinal-green', topBar: 'bg-ordinal-green' },
    medium: { text: 'text-ordinal-amber', stroke: 'hsl(38, 92%, 50%)', bg: 'bg-ordinal-amber', topBar: 'bg-ordinal-amber' },
    high: { text: 'text-ordinal-pink', stroke: 'hsl(330, 81%, 60%)', bg: 'bg-ordinal-pink', topBar: 'bg-ordinal-pink' },
  };
  const colors = colorMap[level];
  const circumference = 2 * Math.PI * 70;

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

  const badgeClass = (score: number) => {
    if (score === 0) return 'bg-ordinal-green/15 text-ordinal-green';
    if (score >= 3) return 'bg-ordinal-pink/15 text-ordinal-pink';
    return 'bg-ordinal-amber/15 text-ordinal-amber';
  };
  const badgeLabel = (score: number) => {
    if (score === 0) return 'Good';
    if (score >= 3) return 'Critical';
    return 'At Risk';
  };

  const categoryStatusClass = (avg: number) => {
    if (avg <= 0.15) return 'text-ordinal-green';
    if (avg >= 0.7) return 'text-ordinal-pink';
    return 'text-ordinal-amber';
  };
  const categoryStatusLabel = (avg: number) => {
    if (avg <= 0.15) return 'Good';
    if (avg >= 0.7) return 'Critical';
    return 'At Risk';
  };

  const scoredQuestionCount = questions.filter((q) => q.type !== 'number').length;
  const mailtoHref = `mailto:hello@ordinal.co?subject=Operational X-Ray Enquiry&body=Hi, I just completed the ordinal Process Debt Assessment (score: ${pct}). I'd like to learn more about the Operational X-Ray.`;

  const shareUrl = typeof window !== 'undefined' ? window.location.origin + '/assessment' : '';
  const shareText = `I just scored ${pct} on the Process Debt Assessment by Ensight. Find out your score:`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div>
      {/* Confetti sparkle burst */}
      <div className="relative">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              background: ['hsl(270,80%,60%)', 'hsl(160,84%,39%)', 'hsl(38,92%,50%)', 'hsl(330,81%,60%)'][i % 4],
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
          {levelLabel}
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
          Estimated Annual Cost of Inefficiency
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
            <p>Each of the {scoredQuestionCount} operational questions scores 0 (good), 1-2 (moderate), or 3 (critical), giving a max score of {maxScore}.</p>
            <p><span className="text-ordinal-faint">Process Debt %</span> = your total score / max score x 100</p>
            <p><span className="text-ordinal-faint">Waste factor</span> = Process Debt % x 0.30 (capped at 30% of payroll)</p>
            <p><span className="text-ordinal-faint">Annual cost</span> = {teamSize} people x {'\u20AC'}40,000 avg cost x {(wasteFactor * 100).toFixed(1)}% waste = <strong className="text-ordinal-faint">{costFormatted}</strong></p>
            <p className="text-ordinal-dim/70 italic">This is a directional estimate based on cross-industry benchmarks, not a precise audit.</p>
          </motion.div>
        )}

        <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-ordinal-pink-bright via-ordinal-amber to-ordinal-green-bright bg-clip-text text-transparent mb-3">
          {'\u20AC'}{animatedCost.toLocaleString('en')}
        </div>
        <div className="text-xs text-ordinal-dim leading-relaxed">
          Based on {teamSize} people and your Process Debt Score of {pct}.<br />
          Directional estimate using cross-industry research benchmarks.
        </div>
      </motion.div>

      {/* Categorized Breakdown */}
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
                <h4 className="text-sm font-bold uppercase tracking-wider text-ordinal-faint">{cat.category}</h4>
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
                <p className="mt-2 text-xs text-ordinal-dim leading-relaxed border-l-2 border-ordinal-amber/30 ml-1 pl-3">
                  {'\uD83D\uDCA1'} {cat.recommendation}
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
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ordinal-green to-ordinal-cyan" />
        <h3 className="text-[22px] font-bold mb-3">Want to See the Real Numbers?</h3>
        <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[440px] mx-auto">
          This estimate is based on industry averages. Our Operational X-Ray embeds with your team for 1-2 weeks and shows you exactly where capacity is trapped and how to unlock it.
        </p>
        <a
          href={mailtoHref}
          className="inline-block bg-ordinal-green text-foreground font-bold text-base px-10 py-4 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:bg-ordinal-green-bright hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,185,129,0.3)] transition-all duration-250 no-underline"
        >
          Book Your X-Ray Briefing
        </a>
      </motion.div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <button
          onClick={() =>
            generatePDF({
              pct,
              levelLabel,
              headline,
              desc,
              costFormatted,
              teamSize,
              categories,
            })
          }
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-md hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
        >
          <Download size={16} />
          Download PDF
        </button>

        {/* Social share buttons */}
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

export default Results;
