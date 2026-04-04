import logoHms from '@/assets/logo-hms.jpg';
import logoQsix from '@/assets/logo-qsix.ico';
import logoLoux from '@/assets/logo-loux.png';
import logoMat from '@/assets/logo-myathenstransfers.png';

const logos = [
  { src: logoHms, alt: 'HMS' },
  { src: logoQsix, alt: 'QSIX' },
  { src: logoLoux, alt: 'Loux' },
  { src: logoMat, alt: 'myAthensTransfers' },
];

const LogoStripSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
    <p className="text-[11px] font-medium tracking-[2px] uppercase text-ordinal-dim text-center mb-8">
      Trusted by teams across financial services, non-profits, and professional services
    </p>
    <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap opacity-40 grayscale">
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className="h-8 md:h-10 w-auto object-contain"
          loading="lazy"
          width={80}
          height={40}
        />
      ))}
    </div>
  </section>
);

export default LogoStripSection;
