const stats = [
  { num: '20–30%', label: 'of OpEx estimated lost\nto inefficiency*', bg: 'bg-primary' },
  { num: '40%', label: 'of manager time on\npreventable issues*', bg: 'bg-ordinal-cyan' },
  { num: '70%', label: 'digital transformation\nfailure rate (BCG)', bg: 'bg-ordinal-pink' },
  { num: '42%', label: 'of benefits lost\nafter go-live (McKinsey)', bg: 'bg-ordinal-amber' },
];

const StatStrip = () => (
  <div className="grid grid-cols-2 md:grid-cols-4">
    {stats.map((s, i) => (
      <div
        key={i}
        className={`${s.bg} px-5 py-6 text-center border-r border-white/10 last:border-0`}
      >
        <div className="text-3xl md:text-4xl font-bold text-stat-accent leading-none tracking-tight mb-2">
          {s.num}
        </div>
        <div className="text-[9px] uppercase tracking-[0.5px] text-white/70 leading-snug whitespace-pre-line">
          {s.label}
        </div>
      </div>
    ))}
  </div>
);

export default StatStrip;
