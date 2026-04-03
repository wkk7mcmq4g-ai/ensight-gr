const Header = () => (
  <header className="text-center mb-12">
    <div className="text-2xl font-black lowercase tracking-tight mb-8">
      ordinal
      <span className="inline-block w-[7px] h-[7px] bg-ordinal-green rounded-full ml-[1px] relative -top-[3px] shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
    </div>
    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-electric-glow font-mono-label text-[10px] font-medium tracking-[3px] uppercase px-4 py-2 rounded-full mb-7">
      <span className="w-[6px] h-[6px] bg-electric-bright rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
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
      Answer 10 questions about your operations. Get your Process Debt Score and an estimate of what operational inefficiency costs your organisation each year.
    </p>
  </header>
);

export default Header;
