import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, CONTACT_HREF } from '@/lib/contact';

export default function EnquirySent() {
  return <section className="max-w-[760px] mx-auto px-6 pt-40 pb-24">
    <Helmet><title>Enquiry submitted | Ensight</title><meta name="robots" content="noindex, follow" /></Helmet>
    <p className="text-sm text-primary font-semibold mb-4">Thank you for getting in touch</p>
    <h1 className="text-4xl font-semibold mb-6">Your enquiry has been submitted.</h1>
    <p className="text-muted-foreground leading-relaxed mb-6">I aim to reply within one working day. If you do not hear back, you can contact me directly at <a href={CONTACT_HREF} className="text-primary underline">{CONTACT_EMAIL}</a>.</p>
    <Link to="/" className="text-primary font-semibold underline">Back to Ensight</Link>
  </section>;
}
