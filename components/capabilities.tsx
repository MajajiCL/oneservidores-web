"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, Cpu, Network } from "lucide-react";

const cards = [
  {
    icon: Building2,
    eyebrow: "Datacenter & Colocation",
    title: "Tu hardware en un Tier III, sin sorpresas",
    body:
      "Espacio en rack con energía A+B, generadores redundantes, control de acceso biométrico y enlaces cruzados entre carriers. Operación 24×7 incluida.",
    href: "/colocation",
    cta: "Conocer colocation"
  },
  {
    icon: Cpu,
    eyebrow: "Cloud & Servidores",
    title: "VPS y dedicados afinados para producción",
    body:
      "VPS KVM y LXC con NVMe, snapshots y consola web. Dedicados AMD EPYC e Intel Xeon con red 10 Gbps y panel automatizado.",
    href: "/servidores",
    cta: "Ver planes"
  },
  {
    icon: Network,
    eyebrow: "Red & Seguridad",
    title: "Conectividad propia con mitigación incluida",
    body:
      "Múltiples upstreams Tier 1, peering local, anti-DDoS volumétrico y monitoreo continuo. Te enteras antes de que tu cliente lo note.",
    href: "/datacenter/red",
    cta: "Ver capacidades de red"
  }
];

export function Capabilities() {
  return (
    <section className="relative">
      <div className="container py-20 lg:py-24">
        <div className="max-w-2xl">
          <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">
            Capacidades
          </div>
          <h2 className="mt-3 text-[30px] lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-white">
            Una sola operación, tres capas que se cuidan entre sí.
          </h2>
          <p className="mt-4 text-[15.5px] text-ink-100 leading-relaxed">
            Diseñamos cada capa pensando en la siguiente: el datacenter alimenta a los servidores,
            los servidores se sirven sobre una red propia y la red está vigilada por personas, no
            sólo por sensores.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative rounded-2xl border border-white/10 bg-ink-900/60 p-7 hover:border-brand/40 transition card-shine"
              onMouseMove={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                const r = el.getBoundingClientRect();
                el.style.setProperty("--mx", `${e.clientX - r.left}px`);
                el.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
            >
              <div className="relative z-10">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/30">
                  <c.icon size={20} />
                </div>
                <div className="mt-5 text-[12px] uppercase tracking-[0.14em] text-ink-300">
                  {c.eyebrow}
                </div>
                <h3 className="mt-1.5 text-[20px] font-bold text-white leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] text-ink-200 leading-relaxed">{c.body}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] text-brand font-semibold">
                  {c.cta}
                  <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
