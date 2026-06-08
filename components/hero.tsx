"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Activity } from "lucide-react";
import { AuroraBg } from "./aurora-bg";
import { MagneticBtn } from "./magnetic-btn";
import { SplitText } from "./split-text";
import { DashboardMockup } from "./dashboard-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <AuroraBg />

      <div className="relative container pt-14 lg:pt-20 pb-8 lg:pb-12">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-fit"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white/70 backdrop-blur-md px-3.5 py-1.5 text-[12px] font-semibold text-ink-700 shadow-card">
            <Sparkles size={13} className="text-brand" />
            Nuevo · VPS WordPress con CyberPanel ya disponible
            <ArrowRight size={13} className="text-brand" />
          </div>
        </motion.div>

        {/* Headline */}
        <h1 className="mx-auto mt-7 max-w-5xl text-center text-[44px] sm:text-[60px] lg:text-[80px] leading-[0.98] tracking-[-0.03em] font-extrabold text-ink-900">
          <SplitText text="Infraestructura cloud" />
          <br className="hidden sm:block" />
          <span className="block mt-1">
            <SplitText text="que no descansa." highlight={["no", "descansa."]} delay={0.25} />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mx-auto mt-6 max-w-2xl text-center text-[16px] lg:text-[18px] leading-relaxed text-ink-500"
        >
          Datacenter Tier III en Chile y Argentina. VPS, dedicados, hosting cPanel
          y colocation sobre una red propia de 1 a 10 Gbps.
          <span className="text-ink-900 font-semibold"> Operación 24×7</span>,
          provisión en menos de 15 minutos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticBtn
            href="/cotizar"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-ink-900 text-white font-bold hover:bg-ink-800 transition shadow-card text-[14.5px]"
          >
            Empezar ahora <ArrowRight size={16} />
          </MagneticBtn>
          <MagneticBtn
            href="/servidores"
            strength={0.18}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-ink-200 bg-white/80 backdrop-blur text-ink-900 hover:bg-white transition text-[14.5px] font-semibold"
          >
            Ver planes y precios
          </MagneticBtn>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-ink-500"
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-brand" /> SLA 99.99%
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Activity size={13} className="text-brand" /> NOC 24×7
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap size={13} className="text-brand" /> Provisión &lt; 15 min
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            Sin permanencia · Migración gratuita
          </span>
        </motion.div>
      </div>

      {/* Dashboard mockup — the visual centerpiece */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative container pb-16 lg:pb-24"
      >
        <DashboardMockup />
      </motion.div>
    </section>
  );
}
