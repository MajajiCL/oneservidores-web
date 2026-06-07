import { partners } from "@/lib/site";

export function PartnersMarquee() {
  const list = [...partners, ...partners];
  return (
    <section className="relative border-y border-white/5 overflow-hidden">
      <div className="container py-10">
        <div className="text-center text-[12.5px] uppercase tracking-[0.14em] text-ink-300 font-semibold">
          Tecnologías y aliados con los que operamos
        </div>
        <div className="mt-6 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent z-10" />
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {list.map((p, i) => (
              <span key={i} className="text-[18px] lg:text-[20px] font-semibold text-ink-200/80 tracking-tight">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
