import { partners } from "@/lib/site";

export function PartnersMarquee() {
  const list = [...partners, ...partners];
  return (
    <section className="relative bg-void border-y border-white/5 overflow-hidden">
      <div className="container py-12">
        <div className="text-center font-mono text-[10.5px] uppercase tracking-[0.20em] text-slate">
          TECNOLOGÍAS · ALIADOS
        </div>
        <div className="mt-6 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void to-transparent z-10" />
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {list.map((p, i) => (
              <span key={i} className="font-mono text-[18px] uppercase tracking-[0.18em] text-bone-white/35">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
