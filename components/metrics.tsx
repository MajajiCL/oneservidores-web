import { metrics } from "@/lib/site";
import { Reveal } from "./reveal";

export function Metrics() {
  return (
    <section className="relative bg-ink-50 border-y border-ink-200">
      <div className="container py-12 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <div className="text-center lg:text-left">
                <div className="text-[28px] lg:text-[32px] font-extrabold tracking-tight text-ink-900 leading-none">
                  {m.value}
                </div>
                <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand">
                  {m.label}
                </div>
                <div className="mt-1 text-[12.5px] text-ink-500 leading-snug">{m.hint}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
