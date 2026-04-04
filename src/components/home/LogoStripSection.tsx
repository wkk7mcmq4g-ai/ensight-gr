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
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
    <p className="text-[11px] font-medium tracking-[2px] uppercase text-ordinal-dim text-center mb-8">
      Trusted by teams across financial services, non-profits, and professional services
    </p>
    <div className="flex items-center justify-center gap-10 md:gap-14 flex-wrap">
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className="h-12 md:h-14 w-[150px] md:w-[180px] object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
          loading="lazy"
          width={180}
          height={56}
        />
      ))}
    </div>
  </section>
);

export default LogoStripSection;
