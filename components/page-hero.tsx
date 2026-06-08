import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  right?: ReactNode;
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta, right }: Props) {
  return (
    <section className="relative overflow-hidden bg-void border-b border-white/5">
      <div className="absolute inset-0 bg-orchid-radial opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-void mask-fade-y opacity-50 pointer-events-none" />
      <div className="relative container pt-16 lg:pt-20 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className={right ? "lg:col-span-7" : "lg:col-span-9"}>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/[0.03] backdrop-blur-md px-3.5 py-1.5">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-bone-white/80">
                  {eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-heading-lg sm:text-display-sm lg:text-display font-bold tracking-tight leading-[0.95] text-bone-white">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-body lg:text-subheading text-bone-white/70 leading-relaxed">
                {description}
              </p>
            </Reveal>
            {(primaryCta || secondaryCta) && (
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {primaryCta && (
                    <Link
                      href={primaryCta.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-bone-white text-void font-semibold hover:bg-brand transition shadow-glow text-body-sm"
                    >
                      {primaryCta.label} <ArrowRight size={15} />
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-pill border border-storm-gray text-bone-white hover:border-brand hover:shadow-glowSoft transition text-body-sm font-medium"
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              </Reveal>
            )}
          </div>
          {right && <div className="lg:col-span-5">{right}</div>}
        </div>
      </div>
    </section>
  );
}
