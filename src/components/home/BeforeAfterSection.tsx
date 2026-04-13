import { useState, useRef, useCallback } from 'react';
import AnimatedSection from './AnimatedSection';
import { GripVertical } from 'lucide-react';

/* ── Mock "Before" spreadsheet chaos ── */
const SpreadsheetChaos = () => (
  <div className="absolute inset-0 bg-[hsl(var(--muted))] p-5 overflow-hidden select-none">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 rounded-full bg-destructive/60" />
      <div className="w-3 h-3 rounded-full bg-ordinal-amber/60" />
      <div className="w-3 h-3 rounded-full bg-primary/40" />
      <span className="ml-2 text-[10px] font-mono-label text-muted-foreground">revenue_tracking_FINAL_v3_copy.xlsx</span>
    </div>
    {/* Fake spreadsheet grid */}
    <div className="border border-border rounded overflow-hidden text-[9px] font-mono-label">
      {/* Header row */}
      <div className="grid grid-cols-5 bg-muted border-b border-border">
        {['A', 'B', 'C', 'D', 'E'].map(c => (
          <div key={c} className="px-2 py-1 text-center text-muted-foreground border-r border-border last:border-r-0 font-semibold">{c}</div>
        ))}
      </div>
      {/* Data rows with "errors" */}
      {[
        ['Client', 'Revenue', 'Status', 'Date', 'Notes'],
        ['Acme Ltd', '£12,400', '#REF!', '12/03', '???'],
        ['Beta Co', '', 'Pending', '??/??', 'check w/ Jo'],
        ['Gamma', '£8,200', 'Active', '01/04', ''],
        ['Delta Inc', '#VALUE!', 'ERROR', '', 'DUPLICATE?'],
        ['', '£5,100', '', '28/02', 'missing name'],
        ['Zeta PLC', '£0', 'Closed?', '15/03', 'reopen??'],
        ['Eta Corp', '#N/A', 'Active', '22/01', ''],
      ].map((row, i) => (
        <div key={i} className={`grid grid-cols-5 ${i === 0 ? 'bg-muted/60 font-semibold' : ''} ${i > 0 && (i % 2 === 0) ? 'bg-card/50' : ''}`}>
          {row.map((cell, j) => (
            <div key={j} className={`px-2 py-1.5 border-r border-b border-border last:border-r-0 truncate ${
              cell.includes('#') || cell.includes('ERROR') ? 'text-destructive font-bold' :
              cell.includes('??') || cell === '' ? 'text-ordinal-amber' :
              'text-foreground/70'
            }`}>
              {cell || <span className="text-muted-foreground/40">—</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
    {/* Scattered "sticky note" annotations */}
    <div className="absolute bottom-8 right-6 bg-ordinal-amber/20 border border-ordinal-amber/30 rounded px-2 py-1 text-[8px] text-ordinal-amber rotate-2">
      ⚠ 23 duplicates found
    </div>
    <div className="absolute top-16 right-8 bg-destructive/10 border border-destructive/20 rounded px-2 py-1 text-[8px] text-destructive -rotate-1">
      Last updated: 6 weeks ago
    </div>
  </div>
);

/* ── Mock "After" clean dashboard ── */
const CleanDashboard = () => (
  <div className="absolute inset-0 bg-card p-5 overflow-hidden select-none">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-primary/15 flex items-center justify-center">
          <div className="w-3 h-3 rounded-sm bg-primary" />
        </div>
        <span className="text-xs font-semibold text-foreground">Revenue Dashboard</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="h-5 px-2 rounded-full bg-primary/15 text-primary text-[9px] font-semibold flex items-center">Live</div>
        <div className="h-5 px-2 rounded bg-muted text-[9px] text-muted-foreground">Q1 2025</div>
      </div>
    </div>

    {/* KPI row */}
    <div className="grid grid-cols-3 gap-2 mb-4">
      {[
        { label: 'Total Revenue', value: '£284K', change: '+12%', color: 'text-primary' },
        { label: 'Active Clients', value: '47', change: '+3', color: 'text-primary' },
        { label: 'Avg Deal Size', value: '£6.0K', change: '+8%', color: 'text-primary' },
      ].map((kpi) => (
        <div key={kpi.label} className="bg-muted/40 rounded-lg p-3 border border-border/50">
          <div className="text-[8px] text-muted-foreground uppercase tracking-wide mb-1">{kpi.label}</div>
          <div className="text-sm font-bold text-foreground">{kpi.value}</div>
          <div className={`text-[9px] font-semibold ${kpi.color}`}>{kpi.change}</div>
        </div>
      ))}
    </div>

    {/* Mini bar chart */}
    <div className="bg-muted/30 rounded-lg p-3 border border-border/50 mb-3">
      <div className="text-[9px] text-muted-foreground mb-2 font-medium">Monthly Revenue</div>
      <div className="flex items-end gap-1.5 h-14">
        {[40, 55, 45, 65, 58, 72, 68, 80, 75, 88, 82, 94].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{
            height: `${h}%`,
            backgroundColor: i >= 9 ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.25)',
          }} />
        ))}
      </div>
      <div className="flex justify-between mt-1 text-[7px] text-muted-foreground">
        <span>Jan</span><span>Jun</span><span>Dec</span>
      </div>
    </div>

    {/* Clean table snippet */}
    <div className="rounded-lg border border-border/50 overflow-hidden text-[9px]">
      <div className="grid grid-cols-4 bg-muted/50 font-semibold text-muted-foreground">
        {['Client', 'Revenue', 'Status', 'Trend'].map(h => (
          <div key={h} className="px-2 py-1.5">{h}</div>
        ))}
      </div>
      {[
        { name: 'Acme Ltd', rev: '£12,400', status: 'Active', trend: '↑' },
        { name: 'Beta Co', rev: '£9,800', status: 'Active', trend: '↑' },
        { name: 'Gamma', rev: '£8,200', status: 'Active', trend: '→' },
      ].map((r, i) => (
        <div key={i} className="grid grid-cols-4 border-t border-border/30">
          <div className="px-2 py-1.5 text-foreground font-medium">{r.name}</div>
          <div className="px-2 py-1.5 text-foreground">{r.rev}</div>
          <div className="px-2 py-1.5"><span className="bg-primary/15 text-primary px-1 rounded text-[8px] font-semibold">{r.status}</span></div>
          <div className="px-2 py-1.5 text-primary">{r.trend}</div>
        </div>
      ))}
    </div>
  </div>
);

const BeforeAfterSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(50);
  const dragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderX(Math.max(5, Math.min(95, pct)));
  }, []);

  const onPointerDown = useCallback(() => { dragging.current = true; }, []);
  const onPointerUp = useCallback(() => { dragging.current = false; }, []);
  const onPointerMove = useCallback((e: React.PointerEvent) => handleMove(e.clientX), [handleMove]);

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection>
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          Transformation
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
          From chaos to clarity
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-10">
          Drag the slider to see how we transform fragmented spreadsheets into real-time, actionable dashboards.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] md:aspect-[16/8] rounded-xl border border-border overflow-hidden shadow-lg cursor-col-resize touch-none"
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {/* After layer (full width behind) */}
          <CleanDashboard />

          {/* Before layer (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderX}%` }}
          >
            <div style={{ width: containerRef.current?.offsetWidth || '100%', position: 'absolute', inset: 0 }}>
              <SpreadsheetChaos />
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
            style={{ left: `${sliderX}%`, transform: 'translateX(-50%)' }}
            onPointerDown={onPointerDown}
          >
            <div className="w-[3px] h-full bg-primary/80" />
            <div className="absolute w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.5)] hover:scale-110 transition-transform">
              <GripVertical size={16} />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-3 left-3 z-10 bg-destructive/90 text-destructive-foreground px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider">
            Before
          </div>
          <div className="absolute top-3 right-3 z-10 bg-primary/90 text-primary-foreground px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider">
            After
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default BeforeAfterSection;
