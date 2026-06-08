import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { CobeGlobe } from "./cobe-globe";

const points = [
  { metric: "1000 / 400 Gbps", label: "BACKBONE NACIONAL · INTL" },
  { metric: "Tier III",         label: "DATACENTER · SANTIAGO" },
  { metric: "AS · BGP",         label: "RED PROPIA · MULTI-CARRIER" },
  { metric: "Anti-DDoS",        label: "MITIGACIÓN EN BORDE · 24×7" }
];

const pops = [
  { city: "SANTIAGO",    code: "SCL", ping: "12 ms",  status: "ACTIVO" },
  { city: "BUENOS AIRES",code: "BUE", ping: "28 ms",  status: "ACTIVO" },
  { city: "LIMA",        code: "LIM", ping: "52 ms",  status: "ACTIVO" },
  { city: "MIAMI",       code: "MIA", ping: "108 ms", status: "ACTIVO" }
];

export function Spotlight() {
  return (
    <section className="relative bg-void border-t border-white/5">
      <div className="container py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">
              DATACENTER · RED GLOBAL
            </div>
            <h2 className="mt-4 text-heading lg:text-display-sm font-bold tracking-tight leading-[0.98] text-bone-white">
              Infraestructura <span className="font-editorial text-bone-white/95">crítica</span> desde Chile
            </h2>

            <div className="mt-9 grid grid-cols-2 gap-3">
              {points.map((p) => (
                <div key={p.label} className="rounded-card border border-white/8 bg-white/[0.02] p-4">
                  <div className="text-[22px] font-bold text-bone-white leading-none tracking-tight">{p.metric}</div>
                  <div className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate">{p.label}</div>
                </div>
              ))}
            </div>

            {/* PoPs */}
            <div className="mt-6 rounded-card border border-white/8 bg-white/[0.015] divide-y divide-white/5">
              <div className="px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-[0.20em] text-slate flex items-center justify-between">
                <span>POPS LATAM</span>
                <span className="text-bone-white">{pops.length} ACTIVOS</span>
              </div>
              {pops.map((p) => (
                <div key={p.code} className="px-4 py-3 flex items-center justify-between font-mono text-[11.5px]">
                  <div className="flex items-center gap-3">
                    <span className="relative inline-flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                    </span>
                    <span className="text-bone-white tracking-wider">{p.code}</span>
                    <span className="text-slate uppercase tracking-[0.16em] text-[10px]">{p.city}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate">
                    <span>{p.ping}</span>
                    <span className="text-brand text-[10px] uppercase tracking-[0.16em]">{p.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                href="/datacenter"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-pill border border-bone-white text-bone-white hover:border-brand hover:bg-brand/10 hover:shadow-glowSoft transition text-body-sm font-semibold"
              >
                Conocer el datacenter <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative">
              <CobeGlobe />
              {/* Floating latency card */}
              <div className="absolute top-6 right-2 rounded-card glass-strong px-4 py-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-pill bg-brand/15 text-brand border border-brand/30">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate">LIVE LATENCY</div>
                    <div className="text-[15px] font-bold text-bone-white leading-none mt-0.5">12 ms</div>
                  </div>
                </div>
                <div className="mt-1.5 pt-1.5 border-t border-white/10 font-mono text-[10px] uppercase tracking-[0.16em] text-slate">SCL ↔ BUE</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
