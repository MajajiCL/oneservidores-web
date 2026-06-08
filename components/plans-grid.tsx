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
    <section className="relative bg-void border-t border-white/5">
      <div className="container py-24 lg:py-28">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">{eyebrow}</div>
          )}
          <h2 className="mt-4 text-heading lg:text-heading-lg font-bold tracking-tight leading-[1.05] text-bone-white">
            {title}
          </h2>
          {description && <p className="mt-5 text-body text-bone-white/70 leading-relaxed">{description}</p>}
        </div>

        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 ${plans.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-3`}>
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div
                className={
                  "relative h-full rounded-card p-7 transition-all " +
                  (p.highlight
                    ? "border border-brand/40 bg-gradient-to-b from-brand/10 to-transparent shadow-glow"
                    : "border border-white/8 bg-white/[0.02] hover:border-white/20")
                }
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-6 inline-flex items-center rounded-pill bg-brand text-void font-mono text-[9.5px] font-bold uppercase tracking-[0.18em] px-2.5 py-1">
                    MÁS ELEGIDO
                  </div>
                )}
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-brand">{p.tagline}</div>
                <div className="mt-2 text-subheading font-bold text-bone-white">{p.name}</div>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-[34px] font-bold tracking-tight text-bone-white">{p.price}</span>
                  {p.pricePeriod && <span className="font-mono text-[11px] text-slate uppercase tracking-wider">/{p.pricePeriod}</span>}
                </div>
                <Link
                  href={p.ctaHref ?? "/cotizar"}
                  className={
                    "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-pill px-4 py-2.5 text-body-sm font-semibold transition " +
                    (p.highlight
                      ? "bg-bone-white text-void hover:bg-brand"
                      : "border border-storm-gray text-bone-white hover:border-brand hover:shadow-glowSoft")
                  }
                >
                  {p.ctaLabel ?? "Contratar"} <ArrowRight size={14} />
                </Link>
                <div className="mt-6 h-px bg-white/5" />
                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-body-sm text-bone-white/75">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-pill bg-brand/15 text-brand border border-brand/30">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {note && <div className="mt-10 text-center font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate">{note}</div>}
      </div>
    </section>
  );
}
