"use client";

import Link from "next/link";
import { ArrowUpRight, Server, Cloud, ShieldCheck, Network, Activity, Cable } from "lucide-react";
import { Reveal } from "./reveal";
import { Sparkline } from "./sparkline";

const featured = {
  Icon: Server,
  title: "Datacenter Tier III",
  body: "Operación always-on con energía A+B redundante, refrigeración por pasillos confinados, control biométrico y NOC 24×7 desde Chile.",
  href: "/datacenter",
  code: "DC · SCL01"
};

const items = [
  { Icon: Cloud,       title: "Cloud y VPS",        body: "KVM, LXC y dedicados con NVMe, snapshots y consola web.",                     href: "/servidores",            code: "VPS · KVM" },
  { Icon: Network,     title: "IP Transit",          body: "Múltiples ISPs, AS propio y alcance BGP global.",                              href: "/datacenter",            code: "AS · 10G" },
  { Icon: Activity,    title: "NOC 24×7",            body: "Monitoreo continuo con respuesta especializada en tu idioma.",                 href: "/soporte",               code: "OPS · 24×7", live: true },
  { Icon: ShieldCheck, title: "Anti-DDoS + WAF",     body: "Mitigación volumétrica en el borde y reglas OWASP, sin sobrecosto por evento.", href: "/servicios/seguridad", code: "SEC · WAF",  spark: true },
  { Icon: Cable,       title: "Colocation",          body: "Aloja tu propio hardware con cross-connects, smart-hands y acceso 24×7.",      href: "/colocation",            code: "COL · RACK", chips: true }
];

export function BentoCapabilities() {
  return (
    <section className="relative bg-void">
      <div className="container py-24 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">
              CAPACIDADES · ONESERVIDORES
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-heading lg:text-heading-lg font-bold tracking-tight leading-[1.05] text-bone-white">
              Infraestructura <span className="font-editorial text-bone-white/95">crítica</span> para un mundo conectado
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Featured card — large left */}
          <Reveal className="lg:row-span-2">
            <Link
              href={featured.href}
              className="group relative block h-full min-h-[420px] overflow-hidden rounded-card-lg border border-white/10 bg-gradient-to-br from-brand/20 via-brand/5 to-transparent p-8 hover:border-brand/50 transition-all"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-12 top-0 h-64 blur-3xl opacity-60"
                style={{ background: "radial-gradient(closest-side, rgba(255,120,0,0.45), transparent 70%)" }}
              />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-pill bg-brand text-void shadow-glow">
                    <featured.Icon size={18} />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-white/60">{featured.code}</span>
                    <ArrowUpRight size={16} className="text-bone-white/40 group-hover:text-brand transition" />
                  </div>
                </div>

                {/* Visual: stacked status mini-rows */}
                <div className="space-y-2">
                  {[
                    { name: "ENERGÍA A+B",   meta: "REDUNDANTE" },
                    { name: "REFRIGERACIÓN", meta: "PUE < 1.4" },
                    { name: "CONECTIVIDAD",  meta: "10 GBPS" },
                    { name: "NOC OPERATIVO", meta: "24 × 7" }
                  ].map((r, i) => (
                    <div key={r.name} className="flex items-center justify-between rounded-pill border border-white/8 bg-void/40 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em]">
                      <span className="flex items-center gap-2 text-bone-white/80">
                        <span className="relative inline-flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60" style={{ animation: `pulseGlow ${1.6 + i * 0.15}s ease-in-out infinite` }} />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                        </span>
                        {r.name}
                      </span>
                      <span className="text-brand">{r.meta}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-heading-sm lg:text-heading font-bold text-bone-white tracking-tight leading-tight">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-body-sm text-bone-white/70 leading-relaxed max-w-md">
                    {featured.body}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Right column — 5 small cards in a 2-column sub-grid */}
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <Link
                href={it.href}
                className="group relative block h-full min-h-[200px] overflow-hidden rounded-card border border-white/8 bg-white/[0.02] p-6 hover:border-brand/40 hover:bg-white/[0.035] transition-all"
              >
                <div className="flex h-full flex-col justify-between gap-5">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-white/5 text-brand border border-white/10 group-hover:bg-brand group-hover:text-void transition">
                      <it.Icon size={16} />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate">{it.code}</span>
                      <ArrowUpRight size={14} className="text-slate group-hover:text-brand transition" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-subheading font-semibold text-bone-white tracking-tight">{it.title}</h3>
                    <p className="mt-1.5 text-[12.5px] text-bone-white/60 leading-relaxed">{it.body}</p>
                  </div>

                  {/* Decorative live indicators */}
                  {it.live && (
                    <div className="inline-flex w-fit items-center gap-1.5 rounded-pill border border-brand/30 bg-brand/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-brand">
                      <span className="relative inline-flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                      </span>
                      LIVE
                    </div>
                  )}
                  {it.spark && (
                    <div className="-mx-1 -mb-1">
                      <Sparkline data={[5, 8, 6, 14, 9, 28, 22, 18, 12, 32, 26, 16, 10]} height={26} color="#FFA94D" strokeWidth={1.4} />
                    </div>
                  )}
                  {it.chips && (
                    <div className="flex items-end gap-1 h-7">
                      {[0, 1, 2, 3, 4, 5].map((j) => (
                        <div key={j} className="w-1.5 rounded-full bg-gradient-to-t from-brand/60 to-brand"
                          style={{ height: `${50 + (j * 8) % 30}%`, animation: `pulseGlow ${1 + j * 0.2}s ease-in-out infinite` }} />
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
