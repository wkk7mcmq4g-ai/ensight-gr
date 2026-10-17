import { isGreekPath } from '@/lib/languages';
import { Link, useLocation } from 'react-router-dom';
import ensightLogo from '@/assets/ensight-logo.png';

const links = [
  { label: 'Data & Reporting', href: '/data-clarity' },
  { label: 'Business Applications', href: '/business-applications' },
  { label: 'AI & Automation', href: '/ai-automation' },
  { label: 'Work', href: '/case-studies' },
  { label: 'How I work', href: '/how-i-work' },
  { label: 'About', href: '/about' },
];

const Footer = () => {
  const greek = isGreekPath(useLocation().pathname);
  const activeLinks = greek ? [
    { label: 'Δεδομένα & Αναφορές', href: '/el/data-clarity' },
    { label: 'Εφαρμογές', href: '/el/business-applications' },
    { label: 'AI & Αυτοματισμοί', href: '/el/ai-automation' },
    { label: 'Έργα', href: '/el#work' },
  ] : links;
  return (
  <footer className="border-t border-border max-w-[1200px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
    <Link to={greek ? "/el" : "/"}>
      <img src={ensightLogo} alt="Ensight" className="h-6" />
    </Link>
    <div className="flex flex-wrap justify-center gap-6">
      {activeLinks.map((l) => (
        <Link key={l.href} to={l.href} className="text-ordinal-dim text-[13px] hover:text-foreground transition-colors">
          {l.label}
        </Link>
      ))}
    </div>
    <div className="flex flex-col items-center md:items-end gap-1">
      <a href="mailto:georgekondylis@msn.com" className="text-[10px] text-ordinal-dim tracking-[1px] hover:text-foreground transition-colors">
        georgekondylis@msn.com
      </a>
      <div className="text-[10px] text-ordinal-faint tracking-[1px]">
        {greek ? "Αθήνα, Ελλάδα" : "Athens, Greece"}
      </div>
      <div className="text-[10px] text-ordinal-faint tracking-[1px]">
        © {new Date().getFullYear()} Ensight · George Kondylis
      </div>
    </div>
  </footer>
);
};

export default Footer;
