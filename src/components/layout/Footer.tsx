import { Link } from 'react-router-dom';
import ensightLogo from '@/assets/ensight-logo.png';

const Footer = () => (
  <footer className="border-t border-border max-w-[1200px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
    <Link to="/">
      <img src={ensightLogo} alt="Ensight" className="h-6" />
    </Link>
    <div className="flex flex-wrap gap-6">
      <Link to="/#problems" className="text-ordinal-dim text-[13px] hover:text-foreground transition-colors">Services</Link>
      <Link to="/#method" className="text-ordinal-dim text-[13px] hover:text-foreground transition-colors">Method</Link>
      <Link to="/#results" className="text-ordinal-dim text-[13px] hover:text-foreground transition-colors">Results</Link>
      <Link to="/case-studies" className="text-ordinal-dim text-[13px] hover:text-foreground transition-colors">Case Studies</Link>
      <Link to="/data-clarity" className="text-ordinal-dim text-[13px] hover:text-foreground transition-colors">Data Clarity</Link>
      <Link to="/about" className="text-ordinal-dim text-[13px] hover:text-foreground transition-colors">About</Link>
      <Link to="/assessment" className="text-ordinal-dim text-[13px] hover:text-foreground transition-colors">Assessment</Link>
    </div>
    <div className="flex flex-col items-center md:items-end gap-1">
      <a href="mailto:hello@ensight.gr" className="text-[10px] text-ordinal-dim tracking-[1px] hover:text-foreground transition-colors">
        hello@ensight.gr
      </a>
      <div className="text-[10px] text-ordinal-faint tracking-[1px]">
        Athens, Greece
      </div>
    </div>
  </footer>
);

export default Footer;
