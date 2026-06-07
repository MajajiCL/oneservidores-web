import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export type Plan = {
  name: string;
  tagline: string;
  price: string;
  pricePeriod?: string;
  highlight?: boolean;
  features: string[];
  ctaHref?: string;
  ctaLabel?: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  plans: Plan[];
  note?: string;
};

export function PlansGrid({ eyebrow, title, description, plans, note }: Props) {
  return (
    <section className="relative border-y border-white/5 bg-ink-900/40">
      <div className="container py-20 lg:py-24">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">{eyebrow}</div>
          )}
          <h2 className="mt-3 text-[28px] lg:text-[38px] font-extrabold tracking-tight leading-[1.1] text-white">
            {title}
          </h2>
          {description && <p className="mt-4 text-[15.5px] text-ink-100 leading-relaxed">{description}</p>}
        </div>

        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 ${plans.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4`}>
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div
                className={
                  "h-full rounded-2xl border p-6 lg:p-7 transition relative " +
                  (p.highlight
                    ? "border-brand/40 bg-gradient-to-b from-brand/[0.06] to-transparent shadow-glow"
                    : "border-white/10 bg-ink-950/60 hover:border-white/20")
                }
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-0.5 text-[10.5px] font-bold text-ink-950 uppercase tracking-wider">
                    Más elegido
                  </div>
                )}
                <div className="text-[12px] uppercase tracking-[0.14em] text-ink-300">{p.tagline}</div>
                <div className="mt-1 text-[20px] font-bold text-white">{p.name}</div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-[32px] font-extrabold tracking-tight text-white">{p.price}</span>
                  {p.pricePeriod && <span className="text-[13px] text-ink-300">/{p.pricePeriod}</span>}
                </div>
                <Link
                  href={p.ctaHref ?? "/cotizar"}
                  className={
                    "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[13.5px] font-semibold transition " +
                    (p.highlight
                      ? "bg-brand text-ink-950 hover:bg-brand-600"
                      : "border border-white/15 text-white hover:bg-white/5")
                  }
                >
                  {p.ctaLabel ?? "Contratar"} <ArrowRight size={14} />
                </Link>
                <div className="mt-6 h-px bg-white/5" />
                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-ink-100">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-brand/15 text-brand ring-1 ring-brand/30">
                        <Check size={10} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {note && <div className="mt-8 text-center text-[12.5px] text-ink-300">{note}</div>}
      </div>
    </section>
  );
}
