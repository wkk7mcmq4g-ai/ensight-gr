import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ensightLogo from '@/assets/ensight-logo.png';

const navLinks = [
  { label: 'Problems', href: '/#problems' },
  { label: 'Method', href: '/#method' },
  { label: 'Results', href: '/#results' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Data Clarity', href: '/data-clarity' },
  { label: 'About', href: '/about' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    const [path, hash] = href.split('#');
    if (location.pathname === (path || '/') && hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-[98] bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="text-foreground text-base font-medium py-2 border-b border-border/50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/assessment"
              onClick={() => setMobileOpen(false)}
              className="font-mono-label text-[11px] font-medium tracking-[1px] text-white bg-ordinal-green px-5 py-3 rounded-[10px] text-center mt-2 no-underline"
            >
              Free Assessment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
