"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-void">
      {/* Orchid radial ambient — single chromatic note */}
      <div className="pointer-events-none absolute inset-0 bg-orchid-radial opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-grid-void mask-fade-y opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[1100px] blur-3xl opacity-50"
        style={{ background: "radial-gradient(closest-side, rgba(255,120,0,0.45), transparent 70%)" }}
      />

      <div className="relative container pt-16 lg:pt-20 pb-8 lg:pb-12">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-fit"
        >
          <div className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/[0.03] backdrop-blur-md px-3.5 py-1.5">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <span className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-bone-white/80">
              ONESERVIDORES · DATACENTER · CHILE
            </span>
          </div>
        </motion.div>

        {/* Two-tone editorial headline (serif italic + bold sans) */}
        <div className="mx-auto mt-9 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-editorial text-[40px] sm:text-[56px] lg:text-[72px] leading-none text-bone-white/95"
          >
            La infraestructura
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="mt-1 text-display-sm sm:text-display lg:text-[110px] font-extrabold text-bone-white leading-[0.92]"
            style={{ letterSpacing: "-0.05em" }}
          >
            que no descansa.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-7 max-w-2xl text-center text-body lg:text-subheading text-bone-white/70 leading-relaxed"
        >
          Datacenter Tier III en Chile y Argentina. VPS KVM, dedicados AMD EPYC, hosting cPanel
          con LiteSpeed y colocation sobre red propia de 1 a 10 Gbps.
          <span className="text-bone-white"> Provisión en menos de 15 minutos.</span>
        </motion.p>

        {/* Pill CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill bg-bone-white text-void font-semibold hover:bg-brand hover:text-void hover:shadow-glow transition text-body-sm whitespace-nowrap"
          >
            Empezar ahora <ArrowRight size={15} />
          </Link>
          <Link
            href="/servidores"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill border border-storm-gray bg-transparent text-bone-white hover:border-brand hover:shadow-glowSoft transition text-body-sm font-medium whitespace-nowrap"
          >
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full border border-bone-white shrink-0">
              <Play size={9} className="fill-bone-white text-bone-white ml-0.5" />
            </span>
            Ver el datacenter
          </Link>
        </motion.div>

        {/* Coordinate-style status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate"
        >
          <span>SLA 99.99%</span>
          <span className="text-iron">/</span>
          <span>NOC 24·7 · SANTIAGO</span>
          <span className="text-iron">/</span>
          <span>LATENCIA 12 MS</span>
          <span className="text-iron">/</span>
          <span className="text-bone-white/80">CHILE · ARGENTINA</span>
        </motion.div>
      </div>

      {/* Glass dashboard mockup — primary product visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative container pb-20 lg:pb-28"
      >
        <DashboardMockup />
      </motion.div>
    </section>
  );
}
