"use client";

import { useState } from "react";
import { Gauge } from "lucide-react";

const tiers = ["1 Gbps", "2 Gbps", "5 Gbps", "10 Gbps"];

export function Bandwidth() {
  const [idx, setIdx] = useState(3);

  return (
    <section className="relative border-y border-white/5 bg-ink-900/40">
      <div className="container py-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">
            Conectividad
          </div>
          <h2 className="mt-3 text-[28px] lg:text-[36px] font-extrabold tracking-tight leading-tight text-white">
            Desde 1 Gbps hasta 10 Gbps de uplink real por servidor.
          </h2>
          <p className="mt-4 text-[15px] text-ink-100 leading-relaxed">
            Sin overselling: el ancho de banda que contratas es el que tu puerto recibe.
            Escalable bajo demanda y sin migrar de proveedor.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-ink-950/60 p-6 lg:p-8">
            <div className="flex items-center justify-between text-[12.5px] text-ink-200">
              <span className="inline-flex items-center gap-1.5">
                <Gauge size={14} className="text-brand" /> Capacidad del puerto
              </span>
              <span className="font-semibold text-white">{tiers[idx]}</span>
            </div>

            <div className="mt-6 relative h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
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
                      ? "border-brand bg-brand text-ink-950"
                      : "border-white/10 text-ink-100 hover:border-white/20 hover:text-white")
                  }
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-[22px] font-extrabold text-white">{(idx + 1) * 1.25}M</div>
                <div className="text-[12px] text-ink-300">PPS sostenidos</div>
              </div>
              <div>
                <div className="text-[22px] font-extrabold text-white">{(idx + 1) * 12}K</div>
                <div className="text-[12px] text-ink-300">Conexiones / s</div>
              </div>
              <div>
                <div className="text-[22px] font-extrabold text-white">&lt; 4 ms</div>
                <div className="text-[12px] text-ink-300">Latencia intra-DC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
