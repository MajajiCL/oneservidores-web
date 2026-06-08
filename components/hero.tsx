"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AuroraBg } from "./aurora-bg";
import { MagneticBtn } from "./magnetic-btn";
import { SplitText } from "./split-text";
import { SplineScene } from "./spline-scene";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <AuroraBg />

      <div className="relative container pt-12 lg:pt-16 pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: copy + CTA */}
          <div className="lg:col-span-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/70 backdrop-blur-md px-3 py-1.5 text-[12px] font-bold text-brand uppercase tracking-wider shadow-card"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              OneServidores · Datacenter Hub
            </motion.div>

            <h1 className="mt-5 text-[42px] sm:text-[54px] lg:text-[68px] leading-[1.02] tracking-tight font-extrabold text-ink-900">
              <SplitText text="Infraestructura" />
              <br />
              <SplitText text="que no descansa." highlight={["no", "descansa."]} delay={0.18} />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-600"
            >
              Más de una década diseñando, operando y protegiendo plataformas críticas
              desde Chile hacia el mundo: VPS, dedicados, hosting cPanel, streaming y
              colocation sobre una red propia de 1 a 10 Gbps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.7 }}
              className="mt-7 flex flex-wrap gap-2 text-[11.5px] text-ink-700 font-bold uppercase tracking-wider"
            >
              {["Datacenter", "Cloud", "IP Transit", "Anycast", "CDN", "NOC 24×7", "Colocation"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur border border-ink-200">{t}</span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.85 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticBtn
                href="/cotizar"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-brand text-white font-bold hover:bg-brand-600 transition shadow-glow text-[14.5px]"
              >
                Cotizar ahora <ArrowRight size={16} />
              </MagneticBtn>
              <MagneticBtn
                href="/servidores"
                strength={0.2}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-ink-300 bg-white/70 backdrop-blur text-ink-900 hover:bg-white transition text-[14.5px] font-semibold"
              >
                Ver capacidades
              </MagneticBtn>
            </motion.div>
          </div>

          {/* Right: Spline 3D scene */}
          <div className="lg:col-span-6 relative">
            <SplineScene />
          </div>
        </div>
      </div>
    </section>
  );
}
