import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Play, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoLoux from '@/assets/logo-loux.png';
import logoFhl from '@/assets/logo-fhl.png';

const demos = [
  { title: 'Loux Business Insights', company: 'Loux', logo: logoLoux, duration: '43 seconds', poster: '/videos/loux-dashboard-preview.jpg', video: '/videos/loux-business-insights.mp4', href: '/case-studies/loux-softone-bi', description: 'Sales, margins, stock and cash, connected to SoftOne.' },
  { title: 'FHL reporting', company: 'FHL', logo: logoFhl, duration: '36 seconds', poster: '/videos/fhl-reporting-preview.jpg?v=20261017-el', video: '/videos/fhl-demo.mp4?v=20261017-el', href: '/case-studies/fhl-entersoft-reporting', description: 'Receivables and open orders, straight from Entersoft.' },
];

export default function VideoShowcase() {
  const [active, setActive] = useState<number | null>(null);
  return <div className="mt-10">
    <p className="text-xs font-semibold tracking-[2px] uppercase text-primary mb-4">See the applications in action</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {demos.map((demo, index) => <article key={demo.company} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <button type="button" onClick={() => setActive(index)} aria-label={'Watch ' + demo.title + ', ' + demo.duration} className="group relative w-full aspect-[16/10] bg-[hsl(270,30%,8%)] overflow-hidden focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary focus-visible:outline-offset-[-4px]">
          <img src={demo.poster} alt="" width="1080" height="1080" loading="lazy" className="h-full w-full object-contain opacity-85 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white ring-8 ring-white/15 shadow-[0_0_40px_hsl(var(--primary)/0.4)] motion-safe:transition-transform motion-safe:group-hover:scale-110"><Play size={26} fill="currentColor" aria-hidden="true" /></span></span>
          <span className="absolute bottom-4 left-5 text-white text-xs font-medium">Watch demo · {demo.duration}</span>
        </button>
        <div className="p-6"><img src={demo.logo} alt={demo.company} className="h-10 w-28 object-contain object-left mb-4" loading="lazy" /><h3 className="text-xl font-semibold mb-2">{demo.title}</h3><p className="text-sm text-muted-foreground mb-4">{demo.description}</p><Link to={demo.href} className="inline-flex gap-2 items-center text-sm font-semibold text-primary hover:underline">Explore the case study <ArrowRight size={15} /></Link></div>
      </article>)}
    </div>
    <Dialog.Root open={active !== null} onOpenChange={(open) => { if (!open) setActive(null); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed z-[201] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-3xl max-h-[92dvh] overflow-y-auto rounded-2xl border border-white/15 bg-[hsl(270,30%,8%)] text-white p-4 sm:p-6 shadow-2xl">
          {active !== null && <>
            <Dialog.Title className="text-lg font-semibold pr-10">{demos[active].title}</Dialog.Title>
            <Dialog.Description className="text-sm text-white/60 mt-1 mb-4">Application walkthrough · {demos[active].duration} · demonstration data</Dialog.Description>
            <video key={demos[active].video} src={demos[active].video} controls autoPlay playsInline preload="metadata" className="w-full max-h-[68dvh] bg-black rounded-lg" aria-label={demos[active].title + ' video demonstration'} />
          </>}
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 bg-white/10 hover:bg-white/20 focus-visible:outline focus-visible:outline-2"><X size={20} /><span className="sr-only">Close video</span></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>;
}
