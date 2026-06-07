"use client";

import { useState } from "react";
import { sectors } from "@/lib/site";

export function Sectors() {
  const [active, setActive] = useState(0);
  const current = sectors[active];

  return (
    <section className="relative border-y border-white/5 bg-ink-900/40">
      <div className="container py-20 lg:py-24">
        <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">
          Industrias
        </div>
        <h2 className="mt-3 text-[30px] lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-white max-w-2xl">
          Diseñado para sectores donde el downtime cuesta caro.
        </h2>

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-wrap gap-2">
            {sectors.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={
                  "px-4 py-2 rounded-full text-[13px] font-medium transition border " +
                  (i === active
                    ? "border-brand bg-brand text-ink-950"
                    : "border-white/10 text-ink-100 hover:border-white/20 hover:text-white")
                }
              >
                {s.name}
              </button>
            ))}
          </div>
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-ink-950/60 p-8 min-h-[180px]">
            <div className="text-[12.5px] uppercase tracking-[0.14em] text-brand font-semibold">
              {current.name}
            </div>
            <div className="mt-2 text-[20px] lg:text-[22px] font-semibold text-white leading-snug">
              {current.desc}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-[12.5px] text-ink-200">
              <div className="rounded-lg border border-white/10 px-3 py-2.5">SLA 99.99%</div>
              <div className="rounded-lg border border-white/10 px-3 py-2.5">NOC 24×7</div>
              <div className="rounded-lg border border-white/10 px-3 py-2.5">Anti-DDoS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
