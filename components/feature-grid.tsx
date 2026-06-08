import { Reveal } from "./reveal";
import { ShineCard } from "./feature-card";
import { LucideIcon } from "lucide-react";

export type Feature = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  features: Feature[];
  cols?: 2 | 3 | 4;
};

export function FeatureGrid({ eyebrow, title, description, features, cols = 3 }: Props) {
  const colsClass = cols === 4 ? "lg:grid-cols-4" : cols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section className="relative bg-white">
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

        <div className={`mt-12 grid sm:grid-cols-2 ${colsClass} gap-5`}>
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <ShineCard>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-soft-orange text-brand">
                  <f.Icon size={19} />
                </div>
                <h3 className="mt-5 text-[16px] font-bold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">{f.body}</p>
              </ShineCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
