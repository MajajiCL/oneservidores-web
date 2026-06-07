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
    <section className="relative">
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

        <div className={`mt-12 grid sm:grid-cols-2 ${colsClass} gap-4`}>
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <ShineCard>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/30">
                  <f.Icon size={18} />
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-[13.5px] text-ink-200 leading-relaxed">{f.body}</p>
              </ShineCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
