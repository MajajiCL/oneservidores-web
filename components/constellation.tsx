"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Cloud, Network, ShieldCheck, Activity } from "lucide-react";

const Scene = dynamic(() => import("./constellation-scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-24 w-24 rounded-full bg-brand/30 blur-3xl animate-pulseGlow" />
    </div>
  )
});

/**
 * Hero visual: Three.js constellation with bloom + floating glass UI cards.
 * The 3D scene fills the right column; glass cards hover above for context.
 */
export function ConstellationHero() {
  return (
    <div className="relative h-[460px] lg:h-[580px] w-full">
      {/* Backdrop blob matching aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,120,0,0.30), rgba(255,228,194,0.18) 40%, transparent 70%)"
          }}
        />
      </div>

      {/* 3D scene */}
      <Scene />

      {/* Floating glass UI cards over the scene */}
      <GlassCard
        className="absolute top-4 left-4 lg:top-8 lg:left-2"
        delay={0.5}
        Icon={Activity}
        title="NOC 24×7"
        value="LIVE"
        sub="Monitoreo activo"
        pulse
      />
      <GlassCard
        className="absolute top-8 right-2 lg:top-12 lg:right-4"
        delay={0.8}
        Icon={Network}
        title="Latencia"
        value="12 ms"
        sub="Red BGP propia"
      />
      <GlassCard
        className="absolute bottom-12 left-2 lg:bottom-20 lg:left-6"
        delay={1.1}
        Icon={ShieldCheck}
        title="Anti-DDoS"
        value="ACTIVO"
        sub="Mitigación en borde"
      />
      <GlassCard
        className="absolute bottom-6 right-4 lg:bottom-10 lg:right-2"
        delay={1.4}
        Icon={Cloud}
        title="Uptime"
        value="99.99%"
        sub="SLA compromiso"
      />
    </div>
  );
}

function GlassCard({
  Icon,
  title,
  value,
  sub,
  className = "",
  delay = 0,
  pulse = false
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
  sub: string;
  className?: string;
  delay?: number;
  pulse?: boolean;
}) {
  return (
    <motion.div
      className={"z-10 pointer-events-none " + className}
      initial={{ opacity: 0, y: 14, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.8 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        className="rounded-2xl border border-white/60 bg-white/65 backdrop-blur-xl shadow-card px-3.5 py-2.5 min-w-[150px]"
        style={{ boxShadow: "0 8px 30px -8px rgba(255,120,0,0.20), 0 1px 0 rgba(255,255,255,0.6) inset" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-soft-orange text-brand">
            <Icon size={15} />
            {pulse && (
              <span className="absolute inset-0 rounded-lg border border-brand opacity-60 animate-ping" />
            )}
          </span>
          <div className="leading-tight">
            <div className="text-[10px] uppercase tracking-wider font-bold text-ink-500">{title}</div>
            <div className="text-[15px] font-extrabold text-ink-900 leading-none mt-0.5">{value}</div>
          </div>
        </div>
        <div className="mt-1.5 pt-1.5 border-t border-ink-100/70 text-[10.5px] text-ink-500">{sub}</div>
      </motion.div>
    </motion.div>
  );
}
