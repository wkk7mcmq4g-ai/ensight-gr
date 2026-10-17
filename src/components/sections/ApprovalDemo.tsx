import { useState } from 'react';
import { CheckCircle2, Clock3, FileText, RotateCcw, ArrowRight, CircleDot } from 'lucide-react';

const steps = [
  { title: 'Draft request', owner: 'Requester', action: 'Submit for review', note: 'The quote and request are ready. Submit them to the budget owner.' },
  { title: 'Awaiting approval', owner: 'Budget owner', action: 'Approve this version', note: 'The reviewer sees the amount, supporting quote and request together.' },
  { title: 'Version 1 approved', owner: 'Purchasing', action: 'Revise quote to €1,350', note: 'Try changing the quote. An approval should apply to the amount actually reviewed.' },
  { title: 'Review required', owner: 'Budget owner', action: 'Approve revised quote', note: 'The amount has changed. Version 1 stays in the history, but its approval does not cover version 2.' },
  { title: 'Version 2 approved', owner: 'Purchasing', action: 'Restart example', note: 'The team can proceed with the revised amount. Both versions and decisions remain visible.' },
];
const history = [
  'Request created with quote v1 · €1,200',
  'Submitted to budget owner',
  'Quote v1 approved · €1,200',
  'Quote revised to v2 · €1,350. Sent for new approval.',
  'Quote v2 approved · €1,350',
];
export default function ApprovalDemo() {
  const [step, setStep] = useState(0);
  const current = steps[step];
  const revised = step >= 3;
  const approved = step === 2 || step === 4;
  return <section aria-labelledby="approval-title">
    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Try a workflow · demonstration data</p>
    <h2 id="approval-title" className="text-3xl font-semibold mb-3">What happens when the quote changes?</h2>
    <p className="text-muted-foreground mb-8 max-w-2xl">Follow a purchase request from draft to approval, then change the quote. This interactive example sends no requests or payments.</p>
    <div className="rounded-2xl border border-primary/20 bg-card overflow-hidden shadow-[0_16px_60px_-20px_hsl(var(--primary)/0.2)]">
      <div className="flex flex-wrap gap-3 justify-between items-center bg-[hsl(270,40%,12%)] text-white px-6 py-4"><span className="font-semibold text-sm">Ensight <span className="font-normal text-white/50 ml-2">/ Requests</span></span><span className="text-xs text-white/70">Interactive preview · Step {step + 1} / 5</span></div>
      <div className="grid lg:grid-cols-[1.4fr_1fr]">
        <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-border">
          <div className="flex items-start justify-between gap-4 mb-6"><div><p className="text-xs text-muted-foreground mb-2">PUR-0042 · Operations</p><h3 className="text-2xl font-semibold">Office equipment</h3></div><FileText className="text-primary shrink-0" size={28} /></div>
          <div aria-live="polite" aria-atomic="true">
            <span className={approved ? 'inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 px-3 py-1 text-xs font-semibold' : 'inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-900 px-3 py-1 text-xs font-semibold'}>{approved ? <CheckCircle2 size={14} /> : <Clock3 size={14} />}{current.title}</span>
            <div className="grid grid-cols-2 gap-4 my-6"><div><p className="text-xs text-muted-foreground mb-1">Request amount</p><p className="text-3xl font-semibold tabular-nums">{revised ? '€1,350' : '€1,200'}</p>{revised && <p className="text-xs text-muted-foreground mt-1">Previously €1,200 · +€150</p>}</div><div><p className="text-xs text-muted-foreground mb-1">Next action with</p><p className="font-semibold">{current.owner}</p></div></div>
            <div className="rounded-lg border border-border bg-muted/30 flex gap-3 items-center p-4"><FileText size={22} className="text-primary" /><div><p className="text-sm font-medium">Supplier quote · v{revised ? '2' : '1'}</p><p className="text-xs text-muted-foreground">Example supporting document</p></div></div>
            {revised && <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">Version 1 approval is retained for reference. Only the approval for version 2 covers the revised amount.</p>}
            <p className="text-sm text-muted-foreground leading-relaxed mt-5 min-h-[4.5rem]">{current.note}</p>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-5"><button type="button" onClick={() => setStep((value) => (value + 1) % steps.length)} className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-5 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-primary/90">{current.action}<ArrowRight size={16} /></button><button type="button" onClick={() => setStep(0)} disabled={step === 0} className="inline-flex min-h-11 items-center gap-1 px-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-40"><RotateCcw size={14} />Reset</button></div>
        </div>
        <aside className="p-6 md:p-8 bg-muted/20" aria-label="Request activity history"><h4 className="font-semibold mb-2">Activity history</h4><p className="text-xs text-muted-foreground mb-6">One record of the request and its decisions.</p><ol className="space-y-6">{history.slice(0, step + 1).map((event, i) => <li key={event} className="flex gap-3"><CircleDot size={17} className={i === step ? 'text-primary shrink-0 mt-0.5' : 'text-muted-foreground/50 shrink-0 mt-0.5'} /><div><p className="text-xs text-muted-foreground mb-1">Event {i + 1}</p><p className="text-sm leading-relaxed">{event}</p></div></li>)}</ol></aside>
      </div>
    </div>
  </section>;
}
