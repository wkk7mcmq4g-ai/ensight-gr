import logoHms from '@/assets/logo-hms.png';
import logoQsix from '@/assets/logo-qsix.png';
import logoLoux from '@/assets/logo-loux.png';
import logoMat from '@/assets/logo-myathenstransfers.png';
import logoVm from '@/assets/logo-volunteering-matters.png';

const logos = [
  { src: logoHms, alt: 'HMS' },
  { src: logoQsix, alt: 'QSIX' },
  { src: logoLoux, alt: 'Loux' },
  { src: logoMat, alt: 'myAthensTransfers' },
  { src: logoVm, alt: 'Volunteering Matters' },
];

const LogoStripSection = () => (
  <section className="py-12 overflow-hidden">
    <p className="text-[11px] font-medium tracking-[2px] uppercase text-ordinal-dim text-center mb-8 px-6">
      Trusted by teams across financial services, non-profits, and professional services
    </p>
    <div className="relative w-full">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 px-8 md:px-12">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-14 w-[150px] md:w-[180px] object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
              width={180}
              height={56}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogoStripSection;
