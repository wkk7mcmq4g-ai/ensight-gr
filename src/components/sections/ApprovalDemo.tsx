import { useState } from 'react';
const steps = [
  { title: 'Request prepared', owner: 'Requester', detail: 'Example: office equipment, €1,200, with a quote attached.', action: 'Submit for review' },
  { title: 'Ready for review', owner: 'Budget owner', detail: 'The request, amount and supporting quote are presented together.', action: 'Approve this version' },
  { title: 'Version 1 approved', owner: 'Purchasing', detail: 'Approval is recorded against the €1,200 quote. Try changing the quote to see what happens.', action: 'Revise quote to €1,350' },
  { title: 'New approval required', owner: 'Budget owner', detail: 'Version 2 is €1,350. The earlier approval remains in the history but does not approve the revised quote.', action: 'Approve revised quote' },
  { title: 'Version 2 approved', owner: 'Purchasing', detail: 'The team can proceed against the approved €1,350 quote, with both decisions retained.', action: 'Restart example' },
];
export default function ApprovalDemo() {
  const [step, setStep] = useState(0);
  const current = steps[step];
  return <section className="border border-primary/20 bg-primary/5 rounded-xl p-6 md:p-8" aria-labelledby="approval-title">
    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Interactive example · demonstration data</p>
    <h2 id="approval-title" className="text-2xl font-semibold mb-3">What happens when the quote changes?</h2>
    <p className="text-muted-foreground mb-6">Follow a request through approval and revision. This example sends no requests or payments.</p>
    <div aria-live="polite" aria-atomic="true" className="bg-card border border-border rounded-lg p-5 mb-4">
      <p className="text-xs text-primary mb-2">Step {step + 1} of {steps.length} · With: {current.owner}</p>
      <h3 className="font-semibold text-lg mb-2">{current.title}</h3><p className="text-muted-foreground">{current.detail}</p>
    </div>
    <button type="button" onClick={() => setStep((step + 1) % steps.length)} className="bg-primary text-primary-foreground rounded-lg px-5 py-3 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{current.action}</button>
    {step > 0 && <button type="button" onClick={() => setStep(0)} className="ml-4 text-sm underline">Reset</button>}
  </section>;
}
