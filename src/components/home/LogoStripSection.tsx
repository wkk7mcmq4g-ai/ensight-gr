import logo1 from '@/assets/logo-placeholder-1.png';
import logo2 from '@/assets/logo-placeholder-2.png';
import logo4 from '@/assets/logo-placeholder-4.png';
import logo5 from '@/assets/logo-placeholder-5.png';

const logos = [logo1, logo2, logo4, logo5];

const LogoStripSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
    <p className="text-[11px] font-medium tracking-[2px] uppercase text-ordinal-dim text-center mb-8">
      Trusted by teams across financial services, non-profits, and professional services
    </p>
    <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap opacity-40 grayscale">
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`Client ${i + 1}`}
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
