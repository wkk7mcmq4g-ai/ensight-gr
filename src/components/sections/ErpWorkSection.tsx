import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';

const builds = [
  {
    platform: 'Entersoft',
    client: 'FHL Kiriakidis Group',
    context: 'White marble, quarried in northern Greece and shipped worldwide',
    question: 'Who owes us money, and which orders haven’t gone out?',
    body: "Read straight from Entersoft through a read-only login, with every figure reconciled to the accountant's before a single screen was built.",
    points: [
      'What each customer owes, invoice by invoice, by how far past due',
      'Every open order line by line: shipped, left, days waiting',
      'Sales and margins, production, stock, cash flow and P&L',
    ],
    href: '/case-studies/fhl-entersoft-reporting',
  },
  {
    platform: 'SoftOne',
    client: 'Loux',
    context: 'Soft-drinks manufacturer and distributor',
    question: 'Who do we call today, and is a tight week coming?',
    body: 'The receivables team starts the day on one screen, built on the SoftOne system they already run.',
    points: [
      'Who owes what and since when, and who to call today',
      'Reminder emails prepared in Outlook from the selected invoices',
      'A shared activity calendar and full history for every customer',
      'Receipts, payments and cheques coming up, week by week',
    ],
    href: '/case-studies/softone-receivables-cash',
  },
];

type Props = {
  lead?: string;
};

/** Reporting built directly on the two Greek ERPs, one client on each. */
const ErpWorkSection = ({
  lead = 'If your company runs SoftOne or Entersoft, you can build on the data already there. I build the reporting on the system you already have, reading from it rather than replacing it.',
}: Props) => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="erp">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">On the ERP You Already Run</div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        Reporting built on SoftOne and Entersoft
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[640px] mb-12">{lead}</p>
    </AnimatedSection>

    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {builds.map((b) => (
        <StaggerItem key={b.platform}>
          <Link
            to={b.href}
            className="flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden no-underline shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all group"
          >
            <div className="bg-[hsl(270,40%,6%)] px-7 py-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
              <div className="min-w-0">
                <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-1 whitespace-nowrap">Built on</div>
                <div className="text-[26px] font-bold tracking-tight leading-none text-white">{b.platform}</div>
              </div>
              <div className="sm:text-right min-w-0">
                <div className="text-sm font-semibold text-white">{b.client}</div>
                <div className="text-[11px] text-white/60 leading-snug">{b.context}</div>
              </div>
            </div>
            <div className="flex flex-col flex-1 p-7">
              <h3 className="text-lg font-semibold leading-snug mb-2 text-foreground group-hover:text-primary transition-colors">
                {b.question}
              </h3>
              <p className="text-sm text-ordinal-body leading-relaxed mb-4">{b.body}</p>
              <ul className="space-y-1.5 mb-6">
                {b.points.map((pt) => (
                  <li key={pt} className="text-[13px] text-muted-foreground leading-snug flex gap-2">
                    <span aria-hidden className="text-primary/50 shrink-0">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Read the case <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default ErpWorkSection;
