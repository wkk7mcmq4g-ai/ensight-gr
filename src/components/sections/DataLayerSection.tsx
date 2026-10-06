import { ChevronRight, Database, Layers, GitCompare, BarChart3, type LucideIcon } from 'lucide-react';
import AnimatedSection from '@/components/home/AnimatedSection';

const layers: { num: string; icon: LucideIcon; title: string; desc: string }[] = [
  {
    num: '01',
    icon: Layers,
    title: 'Sources',
    desc: 'The ERP, accounting, CRM and the spreadsheets around them. Extracted on a schedule, never by hand.',
  },
  {
    num: '02',
    icon: Database,
    title: 'Data warehouse',
    desc: 'One modelled store for finance, sales and operations, with history kept so last year can still be explained.',
  },
  {
    num: '03',
    icon: GitCompare,
    title: 'Definitions',
    desc: 'A semantic model: each metric defined once, documented, and traceable back to the source record.',
  },
  {
    num: '04',
    icon: BarChart3,
    title: 'Reporting and AI',
    desc: 'Power BI for management reporting, and governed plain-language access for the questions a report does not answer.',
  },
];

const platforms = ['SoftOne', 'Xero', 'Azure SQL', 'MySQL', 'PostgreSQL', 'Power BI', 'Python'];

type Props = {
  lead?: string;
};

/** The four-layer data stack that both services are built on. The order is the direction the data flows. */
const DataLayerSection = ({
  lead = 'Reporting, costing and automation all rest on the same four layers. I design and build each of them, and have run them in production for a manufacturer and an institutional asset manager.',
}: Props) => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="data-layer">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">The Data Layer</div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        What sits underneath
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[640px] mb-12">{lead}</p>
    </AnimatedSection>

    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0">
      {layers.map((l, i) => (
        <li key={l.num} className="relative bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 text-primary">
              <l.icon size={20} strokeWidth={1.5} />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-muted-foreground/60">{l.num}</span>
          </div>
          <h3 className="text-base font-bold mb-1.5">{l.title}</h3>
          <p className="text-sm text-ordinal-body leading-relaxed">{l.desc}</p>
          {i < layers.length - 1 && (
            <span
              aria-hidden
              className="hidden lg:flex absolute top-1/2 -right-[14px] -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-border items-center justify-center text-primary"
            >
              <ChevronRight size={14} />
            </span>
          )}
        </li>
      ))}
    </ol>

    <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="text-[11px] font-medium tracking-[2px] uppercase text-ordinal-dim">Platforms I work with</span>
      {platforms.map((p) => (
        <span key={p} className="text-[13px] text-foreground border border-border bg-card rounded-md px-2.5 py-1">
          {p}
        </span>
      ))}
    </div>
  </section>
);

export default DataLayerSection;
