import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, MessageSquareText } from 'lucide-react';

export default function ProductPreview() {
  return <figure className="relative m-0 pb-5 sm:pb-12">
    <div aria-hidden="true" className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />
    <Link to="/case-studies/loux-softone-bi#loux-demo" className="relative block rounded-2xl border border-primary/20 bg-white shadow-[0_24px_80px_-24px_hsl(var(--primary)/0.35)] overflow-hidden group">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-muted/40"><span aria-hidden="true" className="flex gap-1"><i className="h-2 w-2 rounded-full bg-primary/25" /><i className="h-2 w-2 rounded-full bg-primary/40" /><i className="h-2 w-2 rounded-full bg-primary/60" /></span><span className="text-[11px] text-muted-foreground ml-2">Ensight / Business Insights</span><ArrowUpRight size={15} className="ml-auto text-primary" /></div>
      <img src="/videos/loux-dashboard-preview.jpg" width="1080" height="1080" alt="Loux Business Insights demonstration: sales comparison, monthly trend and customer contribution" fetchPriority="high" className="w-full h-auto" />
    </Link>
    <div className="hidden sm:flex absolute -left-4 bottom-20 items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-xl max-w-[240px]">
      <CheckCircle2 size={24} className="text-emerald-600 shrink-0" /><div><p className="text-[10px] uppercase tracking-widest text-muted-foreground">Business applications</p><p className="text-sm font-semibold mt-1">A clear next step for every request</p></div>
    </div>
    <div className="hidden sm:flex absolute -right-2 bottom-1 items-start gap-3 rounded-xl bg-[hsl(270,40%,12%)] text-white p-4 shadow-xl max-w-[270px]">
      <MessageSquareText size={22} className="text-violet-300 shrink-0" /><div><p className="text-[10px] uppercase tracking-widest text-violet-300">AI & automation</p><p className="text-sm mt-1">“Which customers explain the change?”</p></div>
    </div>
    <figcaption className="text-[11px] text-muted-foreground mt-3 sm:max-w-[200px]">Real application preview. Demonstration data.</figcaption>
  </figure>;
}
