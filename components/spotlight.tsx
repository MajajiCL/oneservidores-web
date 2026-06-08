import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./reveal";
import { CobeGlobe } from "./cobe-globe";

const points = [
  "1000 Gbps Nacional y 400 Gbps Internacional por rutas redundantes",
  "Datacenter, Cloud, IP Transit, Anycast, CDN, NOC 24×7 y Colocation sobre una arquitectura común",
  "Operación continua para servicios que requieren disponibilidad, resiliencia y continuidad operacional",
  "Seguridad física, lógica y monitoreo proactivo para infraestructura de misión crítica"
];

const pops = [
  { city: "Santiago",     code: "SCL", lat: "33.45°S", ping: "12 ms" },
  { city: "Buenos Aires", code: "BUE", lat: "34.61°S", ping: "28 ms" },
  { city: "Lima",         code: "LIM", lat: "12.04°S", ping: "52 ms" },
  { city: "Miami",        code: "MIA", lat: "25.76°N", ping: "108 ms" }
];

export function Spotlight() {
  return (
    <section className="relative bg-white">
      <div className="container py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-bold">Datacenter · Red</div>
            <h2 className="mt-3 text-[28px] lg:text-[44px] font-extrabold tracking-tight leading-[1.05] text-ink-900">
              Infraestructura crítica desde <span className="text-gradient-brand">Chile</span> hacia el mundo
            </h2>
            <ul className="mt-7 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14.5px] text-ink-600 leading-relaxed">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* PoPs list */}
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {pops.map((p) => (
                <div key={p.code} className="rounded-lg border border-ink-200 bg-white px-3 py-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand">{p.code}</span>
                    <span className="relative inline-flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                    </span>
                  </div>
                  <div className="mt-1 text-[12.5px] font-bold text-ink-900 leading-tight">{p.city}</div>
                  <div className="text-[10.5px] text-ink-500 mt-0.5">{p.ping}</div>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                href="/datacenter"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-white font-semibold hover:bg-brand-600 transition shadow-glow"
              >
                Conocer datacenter <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative">
              <CobeGlobe />
              {/* Floating live latency card */}
              <div className="absolute top-6 right-2 rounded-2xl border border-ink-200 bg-white/85 backdrop-blur-xl shadow-card px-3.5 py-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-soft-orange text-brand">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <div className="text-[9.5px] uppercase tracking-wider font-bold text-ink-500">Live latency</div>
                    <div className="text-[14px] font-extrabold text-ink-900 leading-none mt-0.5">12 ms</div>
                  </div>
                </div>
                <div className="mt-1 pt-1 border-t border-ink-100 text-[10px] text-ink-500">Santiago ↔ Buenos Aires</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
