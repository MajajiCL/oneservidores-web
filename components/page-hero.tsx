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
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-grid mask-fade-y opacity-30" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] bg-brand-radial blur-3xl opacity-60 pointer-events-none" />
      <div className="relative container pt-14 lg:pt-20 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className={right ? "lg:col-span-7" : "lg:col-span-9"}>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-ink-100">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulseGlow" />
                {eyebrow}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight font-extrabold text-white">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-[15.5px] lg:text-[16.5px] leading-relaxed text-ink-100">
                {description}
              </p>
            </Reveal>
            {(primaryCta || secondaryCta) && (
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {primaryCta && (
                    <Link
                      href={primaryCta.href}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-ink-950 font-semibold hover:bg-brand-600 transition shadow-glow"
                    >
                      {primaryCta.label} <ArrowRight size={16} />
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/15 text-white hover:bg-white/5 transition"
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
