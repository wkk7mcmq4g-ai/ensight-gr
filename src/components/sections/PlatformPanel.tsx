import { useId } from 'react';

type Props = {
  platform: string;
  client: string;
  className?: string;
};

/**
 * Header panel for a case study that has no photograph. It names the ERP the
 * work was built on (in type, not with the vendor's logo) and draws the idea
 * behind the work: data read out of the ERP and turned into reports. Colours
 * and shapes follow the abstract illustrations used on the other cases.
 */
const PlatformPanel = ({ platform, client, className = '' }: Props) => {
  const uid = useId().replace(/:/g, '');
  const g = (name: string) => `${name}-${uid}`;

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[linear-gradient(135deg,#e4e4ea_0%,#d6d6de_100%)] ${className}`}
      role="img"
      aria-label={`${client}, built on ${platform}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 300"
        preserveAspectRatio="xMaxYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id={g('bar')} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id={g('col')} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id={g('wave')} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#6d28d9" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#6d28d9" stopOpacity="0.55" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* soft background blocks, as in the other illustrations */}
        <rect x="430" y="40" width="120" height="220" fill="#c4c4cc" opacity="0.45" />
        <rect x="560" y="150" width="200" height="40" fill="#c4c4cc" opacity="0.4" />
        <rect x="610" y="20" width="60" height="110" fill="#c4c4cc" opacity="0.3" />

        {/* the ERP: a database cylinder */}
        <g transform="translate(400 100)" opacity="0.9">
          <path d="M0 14 v72 a46 14 0 0 0 92 0 v-72" fill="#cfcfd8" stroke="#8b8b99" strokeWidth="1.5" />
          <ellipse cx="46" cy="14" rx="46" ry="14" fill="#e2e2e8" stroke="#8b8b99" strokeWidth="1.5" />
          <path d="M0 40 a46 14 0 0 0 92 0" fill="none" stroke="#8b8b99" strokeWidth="1.2" />
          <path d="M0 64 a46 14 0 0 0 92 0" fill="none" stroke="#8b8b99" strokeWidth="1.2" />
        </g>

        {/* data flowing out of it */}
        <g fill="none" stroke={`url(#${g('wave')})`} strokeWidth="1">
          {Array.from({ length: 14 }).map((_, i) => {
            const o = i * 3.2;
            return (
              <path
                key={i}
                d={`M492 ${140 + o / 2} C 540 ${90 + o}, 580 ${210 - o}, 640 ${150 + o / 3} S 740 ${80 + o}, 800 ${110 + o / 2}`}
              />
            );
          })}
        </g>

        {/* reports: bars, columns and a ring */}
        <rect x="580" y="52" width="170" height="16" fill={`url(#${g('bar')})`} opacity="0.85" />
        <rect x="580" y="78" width="120" height="16" fill={`url(#${g('bar')})`} opacity="0.7" />
        <rect x="580" y="104" width="145" height="16" fill={`url(#${g('bar')})`} opacity="0.55" />
        <g opacity="0.85">
          <rect x="590" y="226" width="16" height="34" fill={`url(#${g('col')})`} />
          <rect x="614" y="206" width="16" height="54" fill={`url(#${g('col')})`} />
          <rect x="638" y="216" width="16" height="44" fill={`url(#${g('col')})`} />
          <rect x="662" y="192" width="16" height="68" fill={`url(#${g('col')})`} />
        </g>
        <g transform="translate(730 232)" fill="none" strokeWidth="9">
          <circle r="20" stroke="#c7c7f0" />
          <circle r="20" stroke="#6d28d9" strokeDasharray="50 126" opacity="0.85" />
          <circle r="20" stroke="#60a5fa" strokeDasharray="34 126" strokeDashoffset="-54" />
        </g>
      </svg>

      {/* legibility wash behind the name */}
      <div
        className="absolute inset-y-0 left-0 w-2/3 bg-[linear-gradient(90deg,#e4e4ea_0%,#e4e4eacc_45%,transparent_100%)]"
        aria-hidden
      />

      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-1">Built on</div>
        <div className="text-[clamp(26px,3.6vw,38px)] font-bold tracking-tight leading-none text-[hsl(260,45%,18%)]">
          {platform}
        </div>
      </div>
    </div>
  );
};

export default PlatformPanel;
