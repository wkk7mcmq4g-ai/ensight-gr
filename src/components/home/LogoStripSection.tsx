import logoHms from '@/assets/logo-hms.png';
import logoQsix from '@/assets/logo-qsix.png';
import logoLoux from '@/assets/logo-loux.png';
import logoMat from '@/assets/logo-myathenstransfers.png';
import logoVm from '@/assets/logo-volunteering-matters.png';

const logos = [
  { src: logoHms, alt: 'HMS', className: 'h-7 md:h-8' },
  { src: logoQsix, alt: 'QSIX', className: 'h-8 md:h-9' },
  { src: logoLoux, alt: 'Loux', className: 'h-9 md:h-10' },
  { src: logoMat, alt: 'myAthensTransfers', className: 'h-7 md:h-8' },
  { src: logoVm, alt: 'Volunteering Matters', className: 'h-7 md:h-8' },
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
          className={`${logo.className} w-auto max-w-[160px] md:max-w-[180px] object-contain opacity-50 hover:opacity-90 transition-opacity duration-300`}
          loading="lazy"
        />
      ))}
    </div>
  </section>
);

export default LogoStripSection;
