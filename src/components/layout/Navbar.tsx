import { Link, useLocation } from 'react-router-dom';
import ensightLogo from '@/assets/ensight-logo.png';

const navLinks = [
  { label: 'Problems', href: '/#problems' },
  { label: 'Method', href: '/#method' },
  { label: 'Results', href: '/#results' },
  { label: 'Start', href: '/#start' },
];

const Navbar = () => {
  const location = useLocation();

  const handleAnchorClick = (href: string) => {
    const [path, hash] = href.split('#');
    if (location.pathname === (path || '/') && hash) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Gradient top bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3D1A78] via-primary to-ordinal-green z-[100]" />

      <nav className="fixed top-1 left-0 right-0 z-[99] px-6 md:px-12 py-4 flex justify-between items-center bg-background/90 backdrop-blur-2xl border-b border-border">
        <Link to="/">
          <img src={ensightLogo} alt="Ensight" className="h-8" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleAnchorClick(link.href)}
              className="text-ordinal-dim text-sm font-medium hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/assessment"
            className="font-mono-label text-[11px] font-medium tracking-[1px] text-white bg-ordinal-green px-5 py-2.5 rounded-[10px] shadow-[0_4px_12px_rgba(16,185,129,0.15)] hover:bg-ordinal-green-bright hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(16,185,129,0.25)] transition-all"
          >
            Free Assessment
          </Link>
        </div>

        {/* Mobile: just the CTA */}
        <div className="md:hidden">
          <Link
            to="/assessment"
            className="font-mono-label text-[11px] font-medium tracking-[1px] text-white bg-ordinal-green px-4 py-2 rounded-[10px]"
          >
            Assessment
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
