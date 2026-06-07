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
    <section className="relative">
      <div className="container py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">FAQ</div>
            <h2 className="mt-3 text-[28px] lg:text-[36px] font-extrabold tracking-tight leading-[1.1] text-white">
              {title}
            </h2>
            <p className="mt-4 text-[14.5px] text-ink-200 leading-relaxed">
              ¿No encuentras tu pregunta? Escríbenos y te respondemos personalmente, sin formularios eternos.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-2">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={it.q} delay={i * 0.04}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left rounded-xl border border-white/10 bg-ink-900/60 hover:border-white/20 transition"
                  >
                    <div className="flex items-center justify-between px-5 py-4">
                      <span className="text-[14.5px] font-semibold text-white">{it.q}</span>
                      <ChevronDown
                        size={18}
                        className={"text-brand transition-transform " + (isOpen ? "rotate-180" : "")}
                      />
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: isOpen ? 220 : 0 }}
                    >
                      <div className="px-5 pb-4 text-[13.5px] text-ink-200 leading-relaxed">{it.a}</div>
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
