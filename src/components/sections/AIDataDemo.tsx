import { useState } from 'react';
import { ArrowRight, Database, MessageSquareText, BarChart3 } from 'lucide-react';

const sales = [
  { label: 'Customer A', actual: 260, target: 300 },
  { label: 'Customer B', actual: 225, target: 250 },
  { label: 'Customer C', actual: 185, target: 200 },
  { label: 'Other customers', actual: 250, target: 250 },
];
const payments = [
  { label: 'Mon 19 Oct', value: 20 }, { label: 'Tue 20 Oct', value: 35 },
  { label: 'Wed 21 Oct', value: 10 }, { label: 'Thu 22 Oct', value: 25 }, { label: 'Fri 23 Oct', value: 30 },
];
const questions = [
  'How are sales performing against target?',
  'Which customers explain the gap?',
  'What payments fall due next week?',
];
const eur = (amount: number) => '€' + amount.toLocaleString('en-GB') + 'k';
export default function AIDataDemo() {
  const [selected, setSelected] = useState(0);
  const actual = sales.reduce((sum, row) => sum + row.actual, 0);
  const target = sales.reduce((sum, row) => sum + row.target, 0);
  const gap = target - actual;
  const due = payments.reduce((sum, row) => sum + row.value, 0);
  const rows = selected === 0 ? [{ label: 'Actual sales', value: actual }, { label: 'Target', value: target }]
    : selected === 1 ? sales.map(row => ({ label: row.label, value: row.target - row.actual }))
    : payments;
  const maximum = Math.max(...rows.map(row => row.value));
  const kpis = selected === 0 ? [['Net sales', eur(actual)], ['Target achieved', (actual / target * 100).toFixed(0) + '%'], ['Below target', eur(gap)]]
    : selected === 1 ? [['Total shortfall', eur(gap)], ['Largest contributor', 'Customer A'], ['Share of shortfall', ((sales[0].target - sales[0].actual) / gap * 100).toFixed(0) + '%']]
    : [['Payments due', eur(due)], ['Busiest day', 'Tuesday'], ['Due Tuesday', eur(payments[1].value)]];
  const answer = selected === 0
    ? 'Net sales are €920k against a €1,000k target for the same period: 92% achieved, with an €80k shortfall. Check which customers account for the gap.'
    : selected === 1
    ? 'Customer A accounts for €40k of the €80k shortfall, followed by Customer B at €25k and Customer C at €15k. This identifies where the gap sits; it does not establish why sales were lower.'
    : '€120k falls due next week, with the largest amount on Tuesday (€35k). Review those invoices first. These are scheduled obligations, not a cash balance forecast or payment instruction.';
  return <section id="ai-demo" aria-labelledby="ai-demo-title" className="scroll-mt-24 mt-10">
    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Interactive example · demonstration data</p>
    <h3 id="ai-demo-title" className="text-2xl md:text-3xl font-semibold mb-3">A business question. An answer you can inspect.</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-3xl">Choose a question to explore prepared answers and charts using invented figures. This is an interface demonstration, not a live AI agent or a connection to company data.</p>
    <div className="rounded-2xl border border-primary/20 overflow-hidden shadow-[0_20px_60px_-24px_hsl(var(--primary)/0.25)]">
      <div className="bg-[hsl(270,40%,10%)] text-white px-6 py-4 flex flex-wrap items-center gap-3 justify-between"><span className="font-semibold flex items-center gap-2"><MessageSquareText size={18} className="text-violet-300" />Ensight / Ask your data</span><span className="text-xs text-white/60">Prepared examples · No data sent</span></div>
      <div className="grid lg:grid-cols-[280px_1fr]">
        <div className="bg-muted/40 border-b lg:border-b-0 lg:border-r border-border p-4 lg:p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Choose a question</p>
          <div className="flex flex-col gap-3">{questions.map((question, index) => <button type="button" key={question} aria-pressed={selected === index} aria-controls="ai-demo-answer" onClick={() => setSelected(index)} className={'text-left min-h-11 rounded-xl border p-3 lg:p-4 text-sm leading-relaxed flex gap-3 items-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ' + (selected === index ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-card border-border text-foreground hover:border-primary/50')}><span>{question}</span><ArrowRight size={16} className="shrink-0 mt-1" /></button>)}</div>
          <p className="hidden lg:block text-xs text-muted-foreground leading-relaxed mt-6">A real implementation would use agreed metric definitions and enforce each user's access through the connected tools.</p>
        </div>
        <div className="bg-card p-5 md:p-8" id="ai-demo-answer">
          <div aria-live="polite" aria-atomic="true"><p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Example answer</p><p className="text-base leading-relaxed mb-6">{answer}</p>
          <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-3 mb-7">{kpis.map(([label, value]) => <div key={label} className="rounded-xl bg-primary/5 border border-primary/10 p-4"><p className="text-xs text-muted-foreground mb-2">{label}</p><p className="text-xl md:text-2xl font-semibold tabular-nums">{value}</p></div>)}</div></div>
          <figure className="m-0 rounded-xl border border-border p-5">
            <figcaption className="text-sm font-semibold flex gap-2 items-center mb-5"><BarChart3 size={17} className="text-primary" />{selected === 0 ? 'Sales versus target' : selected === 1 ? 'Shortfall by customer' : 'Payments by due date'} <span className="ml-auto text-xs font-normal text-muted-foreground">EUR thousands</span></figcaption>
            <div className="space-y-4">{rows.map(row => <div key={row.label}><div className="flex justify-between gap-3 text-xs mb-2"><span>{row.label}</span><span className="font-semibold tabular-nums">{eur(row.value)}</span></div><div aria-hidden="true" className="h-3 rounded-full bg-muted overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-primary to-accent-blue motion-safe:transition-[width] motion-safe:duration-300" style={{ width: (row.value / maximum * 100) + '%' }} /></div></div>)}</div>
          </figure>
          <div className="mt-5 text-xs text-muted-foreground leading-relaxed space-y-2"><p className="flex items-start gap-2"><Database size={14} className="shrink-0 mt-0.5" /><span><strong>Example source:</strong> {selected === 2 ? 'Supplier invoice schedule' : 'Sales ledger and approved sales targets'} · synthetic dataset</span></p><p><strong>Period:</strong> {selected === 2 ? '19–23 October 2026' : '1–16 October 2026, actual and target for matching dates'}</p><p><strong>Snapshot:</strong> 17 October 2026, 09:00 Athens · fixed demonstration snapshot</p></div>
          <details className="mt-5 border-t border-border pt-4 text-sm"><summary className="font-semibold cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Inspect the figures and definition</summary><p className="text-xs text-muted-foreground leading-relaxed mt-3">{selected === 2 ? 'Outstanding supplier invoice amounts grouped by due date, including VAT. No cash balances or expected receipts are included.' : 'Net invoiced sales after returns, excluding VAT. Shortfall = target minus actual. Figures are in EUR thousands.'}</p><div className="overflow-x-auto mt-4"><table className="w-full text-xs text-left"><caption className="sr-only">Demonstration source figures in EUR thousands</caption><thead><tr className="border-b border-border"><th scope="col" className="py-2">{selected === 2 ? 'Due date' : 'Customer'}</th>{selected !== 2 && <th scope="col" className="py-2 text-right">Actual</th>}<th scope="col" className="py-2 text-right">{selected === 2 ? 'Amount due' : 'Target'}</th></tr></thead><tbody>{selected === 2 ? payments.map(row => <tr key={row.label} className="border-b border-border/50"><th scope="row" className="py-2 font-normal">{row.label}</th><td className="text-right">{row.value}</td></tr>) : sales.map(row => <tr key={row.label} className="border-b border-border/50"><th scope="row" className="py-2 font-normal">{row.label}</th><td className="text-right">{row.actual}</td><td className="text-right">{row.target}</td></tr>)}</tbody></table></div></details>
        </div>
      </div>
    </div>
  </section>;
}
