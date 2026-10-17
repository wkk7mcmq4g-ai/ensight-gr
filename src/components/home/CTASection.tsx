import { useState, FormEvent } from 'react';
import { submitEnquiry } from '@/lib/enquiry';
import DecorativeShapes from '@/components/DecorativeShapes';

const enquiryEndpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT?.trim();

const CTASection = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    // Use the provider's hosted spam check when no custom backend is configured.
    if (!enquiryEndpoint) return;
    e.preventDefault();
    if (status === 'sending') return;
    if (enquiryEndpoint) {
      setStatus('sending');
      try {
        await submitEnquiry(enquiryEndpoint, { name: name.trim(), company: company.trim(), email: email.trim(), message: message.trim() });
        setStatus('sent');
        setName(''); setCompany(''); setEmail(''); setMessage('');
      } catch {
        setStatus('error');
      }
      return;
    }

  };

  return (
    <section className="bg-dark-section py-28 relative overflow-hidden scroll-mt-24" id="contact">
      <DecorativeShapes variant="starburst" className="opacity-[0.08] [&_line]:!stroke-primary-foreground [&_circle]:!stroke-primary-foreground [&_circle]:!fill-primary-foreground" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-[clamp(28px,4.5vw,44px)] font-bold tracking-tight leading-[1.15] text-primary-foreground mb-3 text-center">
          What would you like your business to do better?
        </h2>
        <p className="text-[17px] text-primary-foreground/80 leading-relaxed max-w-[520px] mx-auto mb-10 text-center">
          A clearer report, a simpler workflow or an application your team needs. Tell me where to start; I reply within one working day.
        </p>
        <form
          action="https://formsubmit.co/georgekondylis@msn.com"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-[520px] mx-auto flex flex-col gap-4"
        >
          <input type="hidden" name="_subject" value="New enquiry from Ensight" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://www.ensight.gr/enquiry-sent" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <p className="text-sm text-primary-foreground/80">{enquiryEndpoint ? 'Tell me what you need and I will reply by email.' : 'Send your enquiry here. You may be asked to complete a spam check before it is submitted.'} You can also email <a href="mailto:georgekondylis@msn.com" className="underline">georgekondylis@msn.com</a> directly.</p>
          {status === 'sent' && <p role="status" className="text-sm text-primary-foreground">Thank you — your enquiry has been received. I will reply within one working day.</p>}
          {status === 'error' && <p role="alert" className="text-sm text-primary-foreground">Your enquiry could not be confirmed. Your message is still here; please retry or email georgekondylis@msn.com.</p>}
          <fieldset disabled={status === 'sending'} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              aria-label="Name"
              name="name" autoComplete="name" maxLength={120}
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm"
            />
            <input
              type="text"
              aria-label="Company"
              name="company" autoComplete="organization" maxLength={180}
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm"
            />
            <input
              type="email"
              aria-label="Email"
              name="email" autoComplete="email" maxLength={254}
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sm:col-span-2 w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm"
            />
          </div>
          <textarea
            aria-label="Message"
            name="message" maxLength={5000}
            placeholder="Message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-accent-blue text-white text-base font-semibold px-9 py-4 rounded-lg shadow-lg hover:opacity-90 hover:-translate-y-1 hover:shadow-[0_8px_32px_hsl(var(--primary)/0.35)] active:translate-y-0 transition-all duration-200 self-start"
          >
            {status === 'sending' ? 'Sending…' : 'Send enquiry'}
          </button>
          </fieldset>
          <p className="text-xs text-primary-foreground/70 leading-relaxed">George Kondylis uses your details to respond to your enquiry. Please do not include confidential business data.{!enquiryEndpoint && <> Delivery and spam checking are handled by FormSubmit. <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer" className="underline">Provider privacy notice</a>.</>}</p>
        </form>
      </div>
    </section>
  );
};

export default CTASection;