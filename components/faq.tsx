"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./reveal";

export type FaqItem = { q: string; a: string };

type Props = {
  title?: string;
  items: FaqItem[];
};

export function FAQ({ title = "Preguntas frecuentes", items }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-void border-t border-white/5">
      <div className="container py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">FAQ</div>
            <h2 className="mt-4 text-heading lg:text-heading-lg font-bold tracking-tight leading-[1.05] text-bone-white">
              {title}
            </h2>
            <p className="mt-5 text-body-sm text-bone-white/65 leading-relaxed">
              ¿No encuentras tu pregunta? Escríbenos y te respondemos personalmente.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-2">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={it.q} delay={i * 0.04}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={
                      "w-full text-left rounded-card border bg-white/[0.02] transition-all " +
                      (isOpen ? "border-brand/40" : "border-white/8 hover:border-white/15")
                    }
                  >
                    <div className="flex items-center justify-between px-5 py-4">
                      <span className="text-body-sm font-semibold text-bone-white">{it.q}</span>
                      <ChevronDown
                        size={17}
                        className={"text-brand transition-transform " + (isOpen ? "rotate-180" : "")}
                      />
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: isOpen ? 240 : 0 }}
                    >
                      <div className="px-5 pb-4 text-body-sm text-bone-white/65 leading-relaxed">{it.a}</div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
