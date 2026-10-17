import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import DarkHero from '@/components/sections/DarkHero';
import ClosingCTA from '@/components/sections/ClosingCTA';
import ApprovalDemo from '@/components/sections/ApprovalDemo';
import { heroPrimaryButton, heroSecondaryButton } from '@/components/sections/buttonStyles';
import { CONTACT_HREF } from '@/lib/contact';

export default function BusinessApplications() {
  return <div>
    <SEO title="Business Applications | Ensight" description="Custom applications for shared spreadsheet processes, approvals, requests and operational work, connected to your existing systems." path="/business-applications" ogImage="/og/services.jpg" />
    <DarkHero eyebrow="Business Applications" headline={<>Give your team <span className="text-primary">one place to do the work.</span></>} subhead="When spreadsheets, email and disconnected tools become a shared business process, I build applications that bring the people, information and next actions together.">
      <a href={CONTACT_HREF} className={heroPrimaryButton}>Discuss your process</a>
      <a href="#workflow-example" className={heroSecondaryButton}>Try the workflow example</a>
    </DarkHero>
    <section className="max-w-[1100px] mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-semibold mb-5">When does a process need an application?</h2>
      <p className="text-muted-foreground leading-relaxed max-w-[760px] mb-8">The same file has several versions. Approvals are separated from the records they concern. Nobody can see who owns the next step. These are signs that a shared process needs more structure. I first check whether your existing software or a simple automation can meet the need.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          ['Requests and approvals', 'Purchases, expenditure and document reviews, with supporting evidence and decisions tied to the version approved.'],
          ['Shared operational work', 'Customer follow-up, servicing tasks and internal requests, with an owner, status and history.'],
          ['Connected information', 'Validated inputs and agreed integrations with your ERP, finance tools or reporting, with permissions for each role.'],
        ].map(([title, text]) => <article key={title} className="bg-card border border-border rounded-lg p-6"><h3 className="font-semibold text-lg mb-3">{title}</h3><p className="text-muted-foreground leading-relaxed text-sm">{text}</p></article>)}
      </div>
    </section>
    <div id="workflow-example" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-16 scroll-mt-24"><ApprovalDemo /></div>
    <section className="max-w-[1100px] mx-auto px-6 md:px-12 pb-16">
      <h2 className="text-3xl font-semibold mb-5">Start with one complete workflow</h2>
      <p className="text-muted-foreground leading-relaxed max-w-[760px] mb-5">We agree who uses it, the information they need, the rules and exceptions, and what happens at handover. Working versions let the team test the process before launch. Ownership, hosting, documentation and support are defined in the scope.</p>
      <Link to="/how-i-work" className="text-primary font-semibold hover:underline">How we work together →</Link>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <Link to="/case-studies/loan-servicing" className="border border-border bg-card rounded-lg p-6 hover:border-primary"><h3 className="font-semibold mb-2">HMS · Loan servicing</h3><p className="text-muted-foreground text-sm">Connected servicing workflows and a consolidated operational view.</p></Link>
        <Link to="/case-studies/touro-driver-ux" className="border border-border bg-card rounded-lg p-6 hover:border-primary"><h3 className="font-semibold mb-2">Touro · Driver application</h3><p className="text-muted-foreground text-sm">Transfer details organised around the task a driver needs to complete.</p></Link>
      </div>
    </section>
    <ClosingCTA heading="Which spreadsheet or process is holding the team back?" body="Bring one example. We can discuss whether an existing tool, an automation or a dedicated application is the right next step." />
  </div>;
}
