import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ensightLogo from '@/assets/ensight-logo.png';
import { CONTACT_HREF } from '@/lib/contact';

const navLinks = [
  { label: 'Data & Reporting', href: '/data-clarity' },
  { label: 'AI & Automation', href: '/ai-automation' },
  { label: 'Work', href: '/case-studies' },
  { label: 'How I work', href: '/how-i-work' },
  { label: 'About', href: '/about' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent-blue z-[100]" />

      <nav className="fixed top-1 left-0 right-0 z-[99] px-6 lg:px-12 py-4 flex justify-between items-center bg-background/90 backdrop-blur-2xl border-b border-border">
        <Link to="/">
          <img src={ensightLogo} alt="Ensight" className="h-8" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`text-sm font-medium hover:text-foreground transition-colors ${isActive(link.href) ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={CONTACT_HREF}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[1px] text-white bg-gradient-to-r from-primary to-accent-blue px-5 py-2.5 rounded-lg shadow-sm hover:opacity-90 hover:-translate-y-px transition-all no-underline"
          >
            Book a call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[57px] z-[98] bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-foreground text-base font-medium py-2 border-b border-border/50 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CONTACT_HREF}
            onClick={() => setMobileOpen(false)}
            className="mt-2 block text-center text-[12px] font-medium tracking-[1px] text-white bg-gradient-to-r from-primary to-accent-blue px-5 py-3 rounded-lg no-underline"
          >
            Book a call
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
