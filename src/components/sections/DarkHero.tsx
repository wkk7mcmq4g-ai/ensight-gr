import { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  headline: ReactNode;
  subhead: string;
  children?: ReactNode;
};

/** Dark page hero shared by the two service pages. `children` are the buttons. */
const DarkHero = ({ eyebrow, headline, subhead, children }: Props) => (
  <section className="relative bg-[hsl(270,40%,6%)] overflow-hidden flex items-center px-6 md:px-12 pt-28 pb-14">
    <div
      className="absolute inset-0"
      aria-hidden
      style={{
        backgroundImage:
          'linear-gradient(rgba(79,70,229,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.06) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        animation: 'gridPan 20s linear infinite',
      }}
    />
    <div className="absolute -top-[200px] -right-[100px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_60%)]" aria-hidden />
    <div className="absolute -bottom-[150px] left-[100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.07)_0%,transparent_60%)]" aria-hidden />

    <div className="relative z-10 max-w-[1200px] mx-auto w-full">
      <div className="max-w-[680px]">
        <div className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[3px] uppercase text-primary border border-primary/30 px-4 py-1.5 rounded-full mb-6">
          <span className="w-[5px] h-[5px] bg-primary rounded-full" />
          {eyebrow}
        </div>
        <h1 className="text-[clamp(34px,5vw,58px)] font-bold leading-[1.08] tracking-tight text-white mb-5">
          {headline}
        </h1>
        <p className="text-[17px] text-white/70 leading-[1.75] max-w-[580px] mb-9">{subhead}</p>
        {children && <div className="flex gap-3 flex-wrap">{children}</div>}
      </div>
    </div>
  </section>
);

export default DarkHero;
