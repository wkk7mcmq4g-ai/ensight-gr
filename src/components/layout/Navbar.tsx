import { isGreekPath, languageDestination } from '@/lib/languages';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ensightLogo from '@/assets/ensight-logo.png';
import { ENQUIRY_HREF } from '@/lib/contact';

const navLinks = [
  { label: 'Data & Reporting', href: '/data-clarity' },
  { label: 'Business Applications', href: '/business-applications' },
  { label: 'AI & Automation', href: '/ai-automation' },
  { label: 'Work', href: '/case-studies' },
  { label: 'How I work', href: '/how-i-work' },
  { label: 'About', href: '/about' },
];

const Navbar = () => {
  const location = useLocation();
  const greek = isGreekPath(location.pathname);
  const activeLinks = greek ? [
    { label: 'Δεδομένα & Αναφορές', href: '/el/data-clarity' },
    { label: 'Εφαρμογές', href: '/el/business-applications' },
    { label: 'AI & Αυτοματισμοί', href: '/el/ai-automation' },
    { label: 'Έργα', href: '/el#work' },
  ] : navLinks;
  const languageLink = <a href={languageDestination(location.pathname, location.hash)} lang={greek ? 'en' : 'el'} hrefLang={greek ? 'en' : 'el'} className="inline-flex min-h-11 items-center px-2 text-sm font-semibold text-primary" aria-label={greek ? 'Switch to English' : 'Αλλαγή σε ελληνικά'}>{greek ? 'English' : 'Ελληνικά'}</a>;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [location.pathname, location.hash]);

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent-blue z-[100]" />

      <nav className="fixed top-1 left-0 right-0 z-[99] px-6 xl:px-12 py-4 flex justify-between items-center bg-background/90 backdrop-blur-2xl border-b border-border">
        <Link to={greek ? "/el" : "/"}>
          <img src={ensightLogo} alt="Ensight" className="h-8" />
        </Link>

        <div className="xl:hidden ml-auto mr-2">{languageLink}</div>
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-4">
          {languageLink}
          {activeLinks.map((link) => (
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
            href={greek ? "/el#contact" : ENQUIRY_HREF}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[1px] text-white bg-gradient-to-r from-primary to-accent-blue px-5 py-2.5 rounded-lg shadow-sm hover:opacity-90 hover:-translate-y-px transition-all no-underline"
          >
            {greek ? "Ας μιλήσουμε" : "Discuss your project"}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden min-h-11 min-w-11 flex items-center justify-center p-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={greek ? "Μενού" : "Toggle menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onKeyDown={(event) => { if (event.key === "Escape") setMobileOpen(false); }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div id="mobile-navigation" onKeyDown={(event) => { if (event.key === "Escape") setMobileOpen(false); }} className="fixed inset-x-0 top-[80px] max-h-[calc(100dvh-80px)] overflow-y-auto z-[98] bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col gap-4 xl:hidden">
          {activeLinks.map((link) => (
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
            href={greek ? "/el#contact" : ENQUIRY_HREF}
            onClick={() => setMobileOpen(false)}
            className="mt-2 block text-center text-[12px] font-medium tracking-[1px] text-white bg-gradient-to-r from-primary to-accent-blue px-5 py-3 rounded-lg no-underline"
          >
            {greek ? "Ας μιλήσουμε" : "Discuss your project"}
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
