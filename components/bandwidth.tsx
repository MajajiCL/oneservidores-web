"use client";

import { useState } from "react";
import { Gauge } from "lucide-react";
import { Reveal } from "./reveal";

const tiers = ["1 Gbps", "2 Gbps", "5 Gbps", "10 Gbps"];

export function Bandwidth() {
  const [idx, setIdx] = useState(3);

  return (
    <section className="relative bg-white">
      <div className="container py-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-5">
          <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-bold">Conectividad</div>
          <h2 className="mt-3 text-[26px] lg:text-[36px] font-extrabold tracking-tight leading-tight text-ink-900">
            Desde 1 Gbps hasta <span className="text-gradient-brand">10 Gbps</span> de uplink real por servidor.
          </h2>
          <p className="mt-4 text-[15px] text-ink-500 leading-relaxed">
            Sin overselling: el ancho de banda que contratas es el que tu puerto recibe.
            Escalable bajo demanda y sin migrar de proveedor.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-2xl border border-ink-200 bg-white p-6 lg:p-8 shadow-card">
            <div className="flex items-center justify-between text-[12.5px] text-ink-600">
              <span className="inline-flex items-center gap-1.5">
                <Gauge size={14} className="text-brand" /> Capacidad del puerto
              </span>
              <span className="font-semibold text-ink-900">{tiers[idx]}</span>
            </div>

            <div className="mt-6 relative h-2.5 rounded-full bg-ink-100 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand to-brand-600 transition-all duration-500"
                style={{ width: `${((idx + 1) / tiers.length) * 100}%` }}
              />
            </div>

            <div className="mt-3 grid grid-cols-4 gap-2 text-center">
              {tiers.map((t, i) => (
                <button
                  key={t}
                  onClick={() => setIdx(i)}
                  className={
                    "py-2 rounded-md text-[12.5px] font-semibold transition border " +
                    (i === idx
                      ? "border-brand bg-brand text-white"
                      : "border-ink-200 text-ink-600 hover:border-ink-300 hover:text-ink-900")
                  }
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-[22px] font-extrabold text-ink-900">{(idx + 1) * 1.25}M</div>
                <div className="text-[12px] text-ink-500">PPS sostenidos</div>
              </div>
              <div>
                <div className="text-[22px] font-extrabold text-ink-900">{(idx + 1) * 12}K</div>
                <div className="text-[12px] text-ink-500">Conexiones / s</div>
              </div>
              <div>
                <div className="text-[22px] font-extrabold text-ink-900">&lt; 4 ms</div>
                <div className="text-[12px] text-ink-500">Latencia intra-DC</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
