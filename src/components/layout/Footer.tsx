import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import ensightLogo from '@/assets/ensight-logo.png';

// Ensight's LinkedIn company page.
const LINKEDIN_URL = 'https://www.linkedin.com/company/ensight-gr';

const links = [
  { label: 'Data & Reporting', href: '/data-clarity' },
  { label: 'Business Applications', href: '/business-applications' },
  { label: 'AI & Automation', href: '/ai-automation' },
  { label: 'Work', href: '/case-studies' },
  { label: 'How I work', href: '/how-i-work' },
  { label: 'About', href: '/about' },
];

const company = [
  'ENSIGHT ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.',
  'Χειρώνος 1, Αθήνα, ΤΚ 11635',
  'ΑΦΜ 803437819',
  'Αρ. ΓΕΜΗ 196904401000',
];

const Footer = () => (
  <footer className="border-t border-border max-w-[1200px] mx-auto px-6 md:px-12">
    <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <Link to="/" className="inline-flex items-center min-h-[44px]">
        <img src={ensightLogo} alt="Ensight" className="h-6" />
      </Link>
      <nav className="flex flex-wrap justify-center gap-x-6" aria-label="Footer">
        {links.map((l) => (
          <Link key={l.href} to={l.href} className="inline-flex items-center min-h-[44px] text-ordinal-dim text-[13px] hover:text-foreground transition-colors">
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <a
          href="mailto:georgekondylis@msn.com"
          className="inline-flex items-center min-h-[44px] text-[12px] text-ordinal-dim tracking-[1px] hover:text-foreground transition-colors"
        >
          georgekondylis@msn.com
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ensight on LinkedIn"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-ordinal-dim hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors"
        >
          <Linkedin size={18} strokeWidth={1.75} />
        </a>
      </div>
    </div>

    <div className="border-t border-border/60 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
      <address className="not-italic text-[12px] leading-relaxed text-ordinal-faint flex flex-col md:flex-row md:flex-wrap items-center md:justify-start gap-x-2">
        {company.map((line, i) => (
          <span key={line} className="whitespace-nowrap">
            {i > 0 && <span aria-hidden className="mr-2 hidden md:inline">·</span>}
            {line}
          </span>
        ))}
      </address>
      <div className="text-[12px] text-ordinal-faint whitespace-nowrap">
        © {new Date().getFullYear()} Ensight · Athens, Greece
      </div>
    </div>
  </footer>
);

export default Footer;
