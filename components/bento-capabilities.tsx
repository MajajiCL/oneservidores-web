"use client";

import Link from "next/link";
import { ArrowUpRight, Server, Cloud, ShieldCheck, Network, Activity, Cable } from "lucide-react";
import { Reveal } from "./reveal";
import { SpotlightCard } from "./spotlight-card";

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
                <Link href={it.href} className="flex h-full flex-col p-6 lg:p-7">
                  <div className="flex items-start justify-between">
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
                  <div className="mt-auto pt-6">
                    <h3 className={"font-extrabold text-ink-900 leading-tight " + (it.feature ? "text-[24px] lg:text-[28px]" : "text-[16px]")}>
                      {it.title}
                    </h3>
                    <p className={"mt-2 text-ink-500 leading-relaxed " + (it.feature ? "text-[14.5px] max-w-md" : "text-[13px]")}>
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
