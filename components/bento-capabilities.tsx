"use client";

import Link from "next/link";
import { ArrowUpRight, Server, Cloud, ShieldCheck, Network, Activity, Cable } from "lucide-react";
import { Reveal } from "./reveal";
import { Sparkline } from "./sparkline";

const items = [
  {
    span: "lg:col-span-2 lg:row-span-2",
    Icon: Server,
    title: "Datacenter Tier III",
    body: "Operación always-on con energía A+B, refrigeración por pasillos confinados, control biométrico y NOC 24×7 en Chile.",
    href: "/datacenter",
    feature: true,
    code: "DC · SCL01"
  },
  { span: "lg:col-span-1 lg:row-span-2", Icon: Cloud,       title: "Cloud y VPS",   body: "KVM, LXC y dedicados con NVMe, snapshots y consola web.", href: "/servidores", code: "VPS · KVM" },
  { span: "lg:col-span-1", Icon: Network,     title: "IP Transit",     body: "Múltiples ISPs, AS propio, BGP global.",                     href: "/datacenter", code: "AS · 10G" },
  { span: "lg:col-span-1", Icon: Activity,    title: "NOC 24×7",       body: "Monitoreo continuo con respuesta especializada.",            href: "/soporte",    code: "OPS · 24×7" },
  { span: "lg:col-span-2", Icon: ShieldCheck, title: "Anti-DDoS + WAF",body: "Mitigación volumétrica en el borde y reglas OWASP, sin sobrecosto.", href: "/servicios/seguridad", code: "SEC · WAF" },
  { span: "lg:col-span-2", Icon: Cable,       title: "Colocation",     body: "Aloja tu propio hardware con cross-connects, smart-hands y acceso 24×7.", href: "/colocation", code: "COL · RACK" }
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
            <h2 className="mt-4 text-heading-lg lg:text-display font-bold tracking-tight leading-[1.02] text-bone-white">
              Infraestructura <span className="font-editorial text-bone-white/95">crítica</span><br/>para un mundo conectado
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05} className={it.span}>
              <Link
                href={it.href}
                className={
                  "group relative h-full overflow-hidden rounded-card border border-white/8 transition-all hover:border-brand/40 " +
                  (it.feature
                    ? "bg-gradient-to-br from-brand/15 via-brand/5 to-transparent"
                    : "bg-white/[0.02] hover:bg-white/[0.04]")
                }
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span
                      className={
                        "inline-flex h-10 w-10 items-center justify-center rounded-pill " +
                        (it.feature
                          ? "bg-brand text-void shadow-glow"
                          : "bg-white/5 text-brand border border-white/10")
                      }
                    >
                      <it.Icon size={17} />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate">{it.code}</span>
                      <ArrowUpRight size={15} className="text-slate group-hover:text-brand transition" />
                    </div>
                  </div>

                  <div className={it.feature ? "max-w-md" : ""}>
                    <h3
                      className={
                        "font-bold text-bone-white tracking-tight leading-tight " +
                        (it.feature ? "text-heading lg:text-heading-lg" : "text-subheading")
                      }
                    >
                      {it.title}
                    </h3>
                    <p className={"mt-2 text-slate leading-relaxed " + (it.feature ? "text-body-sm" : "text-[12.5px]")}>
                      {it.body}
                    </p>
                  </div>
                </div>

                {/* Decorative metric for feature cards */}
                {it.title === "Anti-DDoS + WAF" && (
                  <div className="absolute right-5 bottom-3 w-[180px] opacity-90 pointer-events-none">
                    <Sparkline data={[5, 8, 6, 14, 9, 28, 22, 18, 12, 32, 26, 16, 10]} height={48} color="#FFA94D" />
                  </div>
                )}
                {it.title === "Colocation" && (
                  <div className="absolute right-5 bottom-4 pointer-events-none flex gap-1">
                    {[0, 1, 2, 3, 4].map((j) => (
                      <div key={j} className="h-12 w-2 rounded-full bg-white/5 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-brand animate-pulseGlow" style={{ animationDelay: `${j * 0.2}s` }} />
                      </div>
                    ))}
                  </div>
                )}
                {it.title === "NOC 24×7" && (
                  <div className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-pill border border-brand/30 bg-brand/10 px-2.5 py-1">
                    <span className="relative inline-flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                    </span>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-brand">LIVE</span>
                  </div>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
