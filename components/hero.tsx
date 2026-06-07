"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Server, Network, Shield, Activity, Zap, Globe2 } from "lucide-react";

const tiles = [
  { icon: Server,   title: "Datacenter Tier III",      desc: "Energía y enfriamiento redundantes" },
  { icon: Network,  title: "Red de 1 a 10 Gbps",        desc: "Uplink dedicado por servidor" },
  { icon: Shield,   title: "Mitigación DDoS",           desc: "Filtrado en el borde, sin sobrecostos" },
  { icon: Activity, title: "NOC 24 × 7",                desc: "Personas reales, no scripts" },
  { icon: Zap,      title: "Provisión en 15 minutos",   desc: "Tu VPS listo automáticamente" },
  { icon: Globe2,   title: "Chile + Argentina",         desc: "Presencia regional, latencia baja" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="absolute inset-0 bg-grid mask-fade-y opacity-50" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[1100px] bg-brand-radial blur-3xl opacity-70 pointer-events-none" />

      <div className="relative container pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy + CTA */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12.5px] text-ink-100"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulseGlow" />
              Datacenter Tier III · Chile y Argentina
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-tight font-extrabold text-white"
            >
              Infraestructura que <br className="hidden md:block" />
              <span className="text-gradient-brand">no descansa</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-ink-100"
            >
              VPS KVM y LXC, servidores dedicados, hosting cPanel con LiteSpeed y
              colocation en datacenter Tier III. Red propia desde 1 Gbps hasta 10 Gbps,
              operada 24 × 7 por un NOC en Chile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-ink-950 font-semibold hover:bg-brand-600 transition shadow-glow"
              >
                Cotizar mi servidor <ArrowRight size={16} />
              </Link>
              <Link
                href="/vps/kvm"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/15 text-white hover:bg-white/5 transition"
              >
                Ver planes VPS
              </Link>
              <span className="text-[12.5px] text-ink-300 ml-1">SLA 99.99% · NOC 24×7</span>
            </motion.div>
          </div>

          {/* Right: capability grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {tiles.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
                  className="card-shine relative rounded-xl border border-white/10 bg-white/[0.025] p-4"
                  onMouseMove={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    const r = el.getBoundingClientRect();
                    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    el.style.setProperty("--my", `${e.clientY - r.top}px`);
                  }}
                >
                  <div className="relative z-10">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/30">
                      <t.icon size={17} />
                    </div>
                    <div className="mt-3 text-[14px] font-semibold text-white">{t.title}</div>
                    <div className="mt-1 text-[12.5px] text-ink-200">{t.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
