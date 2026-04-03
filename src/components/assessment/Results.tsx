import { useEffect, useRef, useState } from 'react';
import { Info, X } from 'lucide-react';
import { questions, categoryRecommendations, type QuestionCategory } from '@/data/questions';

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

const Results = ({ answers, onRestart }: ResultsProps) => {
  const ringRef = useRef<SVGCircleElement>(null);
  const [showMethodology, setShowMethodology] = useState(false);

  // Calculate scores
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
  const costFormatted = '€' + annualCost.toLocaleString('en');

  // Build category results
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
    const avg = items.reduce((s, i) => s + i.score, 0) / items.reduce((s, i) => s + i.max, 0);
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
    desc = 'Your organisation shows relatively low levels of process debt. There may still be optimisation opportunities, but your foundation is solid. A targeted review could help you find the remaining 10–15% of efficiency gains.';
  } else if (pct <= 55) {
    level = 'medium';
    levelLabel = 'Moderate Process Debt';
    headline = 'Significant Capacity to Recover';
    desc = 'Your organisation has accumulated meaningful process debt. Inefficiencies are likely costing you more than you realise, and they're compounding as you grow. A structured operational review would reveal exactly where capacity is trapped and how to unlock it.';
  } else {
    level = 'high';
    levelLabel = 'High Process Debt';
    headline = 'Your Operations Need Urgent Attention';
    desc = 'Your organisation is carrying substantial process debt. A large portion of your team's time and your operating budget is being consumed by inefficiency that's invisible because it feels "normal." This compounds every month you wait.';
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

  return (
    <div>
      {/* Score Card */}
      <div className="animate-fade-up bg-card border border-border rounded-lg p-12 text-center mb-6 relative overflow-hidden">
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
            {pct}
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">{headline}</h2>
        <p className="text-[15px] text-ordinal-body leading-relaxed max-w-[500px] mx-auto">{desc}</p>
      </div>

      {/* Cost Card */}
      <div className="animate-fade-up bg-gradient-to-br from-[#111118] to-[#1a1a2e] rounded-lg p-10 text-center mb-6 border border-[#2a2a3e]" style={{ animationDelay: '0.12s', opacity: 0 }}>
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
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-4 text-left text-xs text-ordinal-dim leading-relaxed space-y-2 animate-fade-up">
            <p className="font-semibold text-ordinal-faint">How we calculate this:</p>
            <p>Each of the {scoredQuestionCount} operational questions scores 0 (good), 1–2 (moderate), or 3 (critical), giving a max score of {maxScore}.</p>
            <p><span className="text-ordinal-faint">Process Debt %</span> = your total score ÷ max score × 100</p>
            <p><span className="text-ordinal-faint">Waste factor</span> = Process Debt % × 0.30 (capped at 30% of payroll)</p>
            <p><span className="text-ordinal-faint">Annual cost</span> = {teamSize} people × €40,000 avg cost × {(wasteFactor * 100).toFixed(1)}% waste = <strong className="text-ordinal-faint">{costFormatted}</strong></p>
            <p className="text-ordinal-dim/70 italic">This is a directional estimate based on cross-industry benchmarks, not a precise audit.</p>
          </div>
        )}

        <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-ordinal-pink-bright via-ordinal-amber to-ordinal-green-bright bg-clip-text text-transparent mb-3">
          {costFormatted}
        </div>
        <div className="text-xs text-ordinal-dim leading-relaxed">
          Based on {teamSize} people and your Process Debt Score of {pct}.<br />
          Directional estimate using cross-industry research benchmarks.
        </div>
      </div>

      {/* Categorized Breakdown */}
      <div className="animate-fade-up bg-card border border-border rounded-lg p-8 mb-6" style={{ animationDelay: '0.24s', opacity: 0 }}>
        <h3 className="text-lg font-bold mb-5">Your Breakdown</h3>
        <div className="space-y-6">
          {categories.map((cat) => (
            <div key={cat.category}>
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
                <p className="mt-2 text-xs text-ordinal-dim leading-relaxed pl-0.5 border-l-2 border-ordinal-amber/30 ml-1 pl-3">
                  💡 {cat.recommendation}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Card */}
      <div className="animate-fade-up bg-card border border-border rounded-lg p-10 text-center relative overflow-hidden" style={{ animationDelay: '0.36s', opacity: 0 }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ordinal-green to-ordinal-cyan" />
        <h3 className="text-[22px] font-bold mb-3">Want to See the Real Numbers?</h3>
        <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[440px] mx-auto">
          This estimate is based on industry averages. Our Operational X-Ray embeds with your team for 1–2 weeks and shows you exactly where capacity is trapped and how to unlock it.
        </p>
        <a
          href={mailtoHref}
          className="inline-block bg-ordinal-green text-foreground font-bold text-base px-10 py-4 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:bg-ordinal-green-bright hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,185,129,0.3)] transition-all duration-250 no-underline"
        >
          Book Your X-Ray Briefing
        </a>
      </div>

      {/* Restart */}
      <div className="text-center mt-8">
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
