type Props = {
  platform: string;
  client: string;
  className?: string;
};

/**
 * Header panel for a case study that has no photograph: names the ERP the
 * work was built on, in type rather than with the vendor's logo.
 */
const PlatformPanel = ({ platform, client, className = '' }: Props) => (
  <div
    className={`relative w-full h-full overflow-hidden bg-[hsl(270,40%,6%)] flex flex-col justify-end p-6 ${className}`}
    role="img"
    aria-label={`${client}, built on ${platform}`}
  >
    <div
      className="absolute inset-0"
      aria-hidden
      style={{
        backgroundImage:
          'linear-gradient(rgba(79,70,229,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.08) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />
    <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)]" aria-hidden />
    <div className="relative text-[10px] font-medium tracking-[3px] uppercase text-primary mb-1">Built on</div>
    <div className="relative text-[clamp(28px,4vw,40px)] font-bold tracking-tight leading-none text-white">{platform}</div>
  </div>
);

export default PlatformPanel;
