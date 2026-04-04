import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ensightLogo from '@/assets/ensight-logo.png';

const navLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
];

const serviceOptions = [
  { label: 'Operational Transformation', desc: 'Process-first change for mid-market teams', href: '/#start' },
  { label: 'Data Clarity', desc: 'Assess your data readiness', href: '/data-clarity' },
];

const assessmentOptions = [
  { label: 'Process Debt', desc: 'Operational efficiency audit', href: '/assessment' },
  { label: 'Data Clarity', desc: 'Data readiness check', href: '/data-clarity-assessment' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const assessmentRef = useRef<HTMLDivElement>(null);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAssessmentOpen(false);
    const [path, hash] = href.split('#');
    if (location.pathname === (path || '/') && hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (assessmentRef.current && !assessmentRef.current.contains(e.target as Node)) {
        setAssessmentOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3D1A78] via-primary to-ordinal-green z-[100]" />

      <nav className="fixed top-1 left-0 right-0 z-[99] px-6 md:px-12 py-4 flex justify-between items-center bg-background/90 backdrop-blur-2xl border-b border-border">
        <Link to="/">
          <img src={ensightLogo} alt="Ensight" className="h-8" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {/* Services dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => { setServicesOpen((v) => !v); setAssessmentOpen(false); }}
              className="inline-flex items-center gap-1 text-ordinal-dim text-sm font-medium hover:text-foreground transition-colors"
            >
              Services
              <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2 w-[260px] bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                >
                  {serviceOptions.map((opt) => (
                    <Link
                      key={opt.href}
                      to={opt.href}
                      onClick={() => handleAnchorClick(opt.href)}
                      className="block px-5 py-3.5 hover:bg-accent transition-colors no-underline border-b border-border last:border-0"
                    >
                      <div className="text-sm font-bold text-foreground">{opt.label}</div>
                      <div className="text-[11px] text-ordinal-dim">{opt.desc}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-ordinal-dim text-sm font-medium hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Assessment dropdown */}
          <div className="relative" ref={assessmentRef}>
            <button
              onClick={() => { setAssessmentOpen((v) => !v); setServicesOpen(false); }}
              className="inline-flex items-center gap-1.5 font-mono-label text-[11px] font-medium tracking-[1px] text-white bg-ordinal-green px-5 py-2.5 rounded-[10px] shadow-[0_4px_12px_rgba(16,185,129,0.15)] hover:bg-ordinal-green-bright hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(16,185,129,0.25)] transition-all"
            >
              Free Assessment
              <ChevronDown size={14} className={`transition-transform duration-200 ${assessmentOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {assessmentOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-[240px] bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                >
                  {assessmentOptions.map((opt) => (
                    <Link
                      key={opt.href}
                      to={opt.href}
                      onClick={() => setAssessmentOpen(false)}
                      className="block px-5 py-3.5 hover:bg-accent transition-colors no-underline border-b border-border last:border-0"
                    >
                      <div className="text-sm font-bold text-foreground">{opt.label}</div>
                      <div className="text-[11px] text-ordinal-dim">{opt.desc}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
            <div className="space-y-1">
              <div className="font-mono-label text-[9px] tracking-[2px] uppercase text-ordinal-dim mb-1">Services</div>
              {serviceOptions.map((opt) => (
                <Link
                  key={opt.href}
                  to={opt.href}
                  onClick={() => handleAnchorClick(opt.href)}
                  className="block px-4 py-3 bg-card border border-border rounded-xl no-underline"
                >
                  <div className="text-sm font-bold text-foreground">{opt.label}</div>
                  <div className="text-[11px] text-ordinal-dim">{opt.desc}</div>
                </Link>
              ))}
            </div>
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
            <div className="mt-2 space-y-2">
              <div className="font-mono-label text-[9px] tracking-[2px] uppercase text-ordinal-dim mb-1">Free Assessments</div>
              {assessmentOptions.map((opt) => (
                <Link
                  key={opt.href}
                  to={opt.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 bg-card border border-border rounded-xl no-underline"
                >
                  <div className="text-sm font-bold text-foreground">{opt.label}</div>
                  <div className="text-[11px] text-ordinal-dim">{opt.desc}</div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
