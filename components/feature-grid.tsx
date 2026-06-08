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

        <div className={`mt-12 grid sm:grid-cols-2 ${colsClass} gap-3`}>
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <ShineCard>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-white/5 border border-white/10 text-brand">
                  <f.Icon size={17} />
                </div>
                <h3 className="mt-5 text-subheading font-semibold text-bone-white tracking-tight">{f.title}</h3>
                <p className="mt-2 text-body-sm text-bone-white/65 leading-relaxed">{f.body}</p>
              </ShineCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
