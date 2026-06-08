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
    <section className="relative bg-ink-50">
      <div className="container py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          {eyebrow && (
            <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-bold">{eyebrow}</div>
          )}
          <h2 className="mt-3 text-[28px] lg:text-[38px] font-extrabold tracking-tight leading-[1.1] text-ink-900">
            {title}
          </h2>
          {description && <p className="mt-4 text-[15.5px] text-ink-500 leading-relaxed">{description}</p>}
        </div>

        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 ${plans.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-5`}>
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div
                className={
                  "h-full rounded-2xl p-7 transition relative " +
                  (p.highlight
                    ? "border-2 border-brand bg-white shadow-glow"
                    : "border border-ink-200 bg-white shadow-card hover:shadow-cardHover")
                }
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[10.5px] font-bold text-white uppercase tracking-wider">
                    Más elegido
                  </div>
                )}
                <div className="text-[11.5px] uppercase tracking-[0.16em] text-brand font-bold">{p.tagline}</div>
                <div className="mt-1.5 text-[20px] font-bold text-ink-900">{p.name}</div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-[32px] font-extrabold tracking-tight text-ink-900">{p.price}</span>
                  {p.pricePeriod && <span className="text-[13px] text-ink-500">/{p.pricePeriod}</span>}
                </div>
                <Link
                  href={p.ctaHref ?? "/cotizar"}
                  className={
                    "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[13.5px] font-semibold transition " +
                    (p.highlight
                      ? "bg-brand text-white hover:bg-brand-600"
                      : "border border-ink-300 text-ink-900 hover:bg-ink-50")
                  }
                >
                  {p.ctaLabel ?? "Contratar"} <ArrowRight size={14} />
                </Link>
                <div className="mt-6 h-px bg-ink-100" />
                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-ink-600">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand text-white">
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

        {note && <div className="mt-8 text-center text-[12.5px] text-ink-500">{note}</div>}
      </div>
    </section>
  );
}
