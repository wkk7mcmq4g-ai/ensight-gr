import { Link } from 'react-router-dom';
import ensightLogo from '@/assets/ensight-logo.png';

const links = [
  { label: 'Costing & Reporting', href: '/data-clarity' },
  { label: 'AI & Automation', href: '/ai-automation' },
  { label: 'Work', href: '/case-studies' },
  { label: 'How I work', href: '/how-i-work' },
  { label: 'About', href: '/about' },
];

const Footer = () => (
  <footer className="border-t border-border max-w-[1200px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
    <Link to="/">
      <img src={ensightLogo} alt="Ensight" className="h-6" />
    </Link>
    <div className="flex flex-wrap justify-center gap-6">
      {links.map((l) => (
        <Link key={l.href} to={l.href} className="text-ordinal-dim text-[13px] hover:text-foreground transition-colors">
          {l.label}
        </Link>
      ))}
    </div>
    <div className="flex flex-col items-center md:items-end gap-1">
      <a href="mailto:hello@ensight.gr" className="text-[10px] text-ordinal-dim tracking-[1px] hover:text-foreground transition-colors">
        hello@ensight.gr
      </a>
      <div className="text-[10px] text-ordinal-faint tracking-[1px]">
        Athens, Greece
      </div>
      <div className="text-[10px] text-ordinal-faint tracking-[1px]">
        © {new Date().getFullYear()} Ensight · George Kondylis
      </div>
    </div>
  </footer>
);

export default Footer;
