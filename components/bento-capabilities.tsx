"use client";

import Link from "next/link";
import { ArrowUpRight, Server, Cloud, ShieldCheck, Network, Activity, Cable } from "lucide-react";
import { Reveal } from "./reveal";
import { SpotlightCard } from "./spotlight-card";
import { MiniRack } from "./mini-rack";
import { Sparkline } from "./sparkline";

/**
 * Bento grid (asymmetric) for capabilities — 6 cells on a 4-col grid:
 *   [ big 2x2    ][ tall 1x2 ][ wide 1x1 ]
 *   [            ][          ][ wide 1x1 ]
 *   [ wide 2x1   ][ wide 2x1            ]
 */
const items = [
  {
    span: "lg:col-span-2 lg:row-span-2",
    Icon: Server,
    title: "Datacenter Tier III",
    body: "Operación always-on con energía A+B, refrigeración por pasillos confinados, control biométrico y NOC 24×7 en Chile.",
    href: "/datacenter",
    feature: true
  },
  {
    span: "lg:col-span-1 lg:row-span-2",
    Icon: Cloud,
    title: "Cloud y VPS",
    body: "KVM, LXC y dedicados con NVMe, snapshots y consola web.",
    href: "/servidores"
  },
  {
    span: "lg:col-span-1",
    Icon: Network,
    title: "IP Transit",
    body: "Múltiples ISPs, AS propio, alcance BGP global.",
    href: "/datacenter"
  },
  {
    span: "lg:col-span-1",
    Icon: Activity,
    title: "NOC 24×7",
    body: "Monitoreo continuo con respuesta especializada.",
    href: "/soporte"
  },
  {
    span: "lg:col-span-2",
    Icon: ShieldCheck,
    title: "Anti-DDoS + WAF",
    body: "Mitigación volumétrica en el borde y reglas OWASP, sin sobrecosto por evento.",
    href: "/servicios/seguridad"
  },
  {
    span: "lg:col-span-2",
    Icon: Cable,
    title: "Colocation",
    body: "Aloja tu propio hardware con cross-connects, smart-hands y acceso 24×7.",
    href: "/colocation"
  }
];

function CloudSpec() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 50 a16 16 0 0 1 28 -6 a14 14 0 0 1 25 9 a12 12 0 0 1 -2 23 H22 a14 14 0 0 1 -6 -26 Z"
        fill="#FFE4C2" stroke="#FFC785" strokeWidth="1.2" />
      <path d="M16 50 a16 16 0 0 1 28 -6 a14 14 0 0 1 25 9 a12 12 0 0 1 -2 23 H22 a14 14 0 0 1 -6 -26 Z"
        fill="none" stroke="#FF7800" strokeWidth="0.8" opacity="0.5" />
      <g fill="#FF7800">
        <circle cx="36" cy="70" r="1.6"><animate attributeName="cy" values="70;76;70" dur="2s" repeatCount="indefinite"/></circle>
        <circle cx="50" cy="70" r="1.6"><animate attributeName="cy" values="70;78;70" dur="2.3s" repeatCount="indefinite"/></circle>
        <circle cx="64" cy="70" r="1.6"><animate attributeName="cy" values="70;76;70" dur="1.8s" repeatCount="indefinite"/></circle>
      </g>
    </svg>
  );
}

function LivePulse() {
  return (
    <div className="relative inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-2 py-0.5">
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="text-[10px] uppercase font-bold tracking-wider text-green-700">LIVE</span>
    </div>
  );
}

function RackChips() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="h-12 w-3 rounded bg-gradient-to-b from-ink-800 to-ink-950 relative overflow-hidden">
          <div className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-brand">
            <div className="h-full w-full rounded-full bg-brand" style={{
              animation: `pulseGlow ${1 + i * 0.2}s ease-in-out infinite`
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BentoCapabilities() {
  return (
    <section className="relative bg-white">
      <div className="container py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-bold">
              Capacidades OneServidores
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-[28px] lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-ink-900">
              Infraestructura <span className="text-gradient-brand">crítica</span> para un mundo siempre conectado
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05} className={`${it.span}`}>
              <SpotlightCard className={"h-full"} intensity={it.feature ? 0.28 : 0.18}>
                <Link href={it.href} className="flex h-full flex-col p-6 lg:p-7 relative overflow-hidden">
                  <div className="flex items-start justify-between relative z-10">
                    <div
                      className={
                        "inline-flex h-11 w-11 items-center justify-center rounded-xl " +
                        (it.feature ? "bg-brand text-white shadow-glow" : "bg-soft-orange text-brand")
                      }
                    >
                      <it.Icon size={19} />
                    </div>
                    <ArrowUpRight size={18} className="text-ink-300 group-hover:text-brand transition" />
                  </div>

                  {/* Decorative graphic per card type */}
                  {it.feature && (
                    <div className="absolute right-0 bottom-0 w-[55%] opacity-95 pointer-events-none">
                      <MiniRack className="w-full h-auto" />
                    </div>
                  )}
                  {it.title === "Cloud y VPS" && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[120px] opacity-70 pointer-events-none">
                      <CloudSpec />
                    </div>
                  )}
                  {it.title === "IP Transit" && (
                    <div className="absolute -bottom-1 left-0 right-0 px-2 pointer-events-none">
                      <Sparkline data={[18, 22, 19, 28, 24, 32, 30, 38, 34, 42, 40, 48]} height={30} />
                    </div>
                  )}
                  {it.title === "NOC 24×7" && (
                    <div className="absolute right-4 bottom-4 pointer-events-none">
                      <LivePulse />
                    </div>
                  )}
                  {it.title === "Anti-DDoS + WAF" && (
                    <div className="absolute right-4 bottom-3 w-[170px] opacity-90 pointer-events-none">
                      <Sparkline
                        data={[5, 8, 6, 14, 9, 28, 22, 18, 12, 32, 26, 16, 10]}
                        height={48}
                        color="#FF7800"
                      />
                    </div>
                  )}
                  {it.title === "Colocation" && (
                    <div className="absolute right-4 bottom-2 pointer-events-none">
                      <RackChips />
                    </div>
                  )}

                  <div className={"relative z-10 pt-6 " + (it.feature ? "mt-auto max-w-[60%]" : "mt-auto")}>
                    <h3 className={"font-extrabold text-ink-900 leading-tight " + (it.feature ? "text-[24px] lg:text-[28px]" : "text-[16px]")}>
                      {it.title}
                    </h3>
                    <p className={"mt-2 text-ink-500 leading-relaxed " + (it.feature ? "text-[14.5px]" : "text-[13px]")}>
                      {it.body}
                    </p>
                  </div>
                </Link>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
