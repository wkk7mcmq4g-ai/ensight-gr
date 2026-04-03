interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="bg-card border border-border rounded-lg p-5 px-7 mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono-label text-[11px] font-medium text-electric-glow">
          Question {current + 1} of {total}
        </span>
        <span className="font-mono-label text-[11px] font-medium text-ordinal-dim">
          {pct}%
        </span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-ordinal-green transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
