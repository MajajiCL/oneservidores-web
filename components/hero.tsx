"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HubDiagram } from "./hub-diagram";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-soft-radial pointer-events-none" />
      <div className="absolute inset-0 bg-grid-soft mask-fade-y opacity-60 pointer-events-none" />

      <div className="relative container pt-14 lg:pt-20 pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: copy + CTA */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-soft-orange px-3 py-1.5 text-[12px] font-semibold text-brand uppercase tracking-wider"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulseGlow" />
              OneServidores · Datacenter Hub
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-tight font-extrabold text-ink-900"
            >
              Infraestructura <br className="hidden md:block" />
              que <span className="text-gradient-brand">no descansa</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-600"
            >
              Más de una década diseñando, operando y protegiendo plataformas críticas
              desde Chile hacia el mundo: VPS, dedicados, hosting cPanel, streaming y
              colocation sobre una red propia de 1 a 10 Gbps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-7 flex flex-wrap gap-2.5 text-[12px] text-ink-700 font-semibold uppercase tracking-wider"
            >
              {["Datacenter", "Cloud", "IP Transit", "Anycast", "CDN", "NOC 24×7", "Colocation"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-ink-50 border border-ink-200">{t}</span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-white font-semibold hover:bg-brand-600 transition shadow-glow"
              >
                Cotizar ahora <ArrowRight size={16} />
              </Link>
              <Link
                href="/servidores"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-ink-200 bg-white text-ink-900 hover:bg-ink-50 transition"
              >
                Ver capacidades
              </Link>
            </motion.div>
          </div>

          {/* Right: hub diagram */}
          <div className="lg:col-span-6">
            <HubDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
