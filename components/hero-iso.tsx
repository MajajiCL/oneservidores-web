"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cloud, Network, ShieldCheck, Activity, LucideIcon } from "lucide-react";
import { asset } from "@/lib/paths";

/**
 * Hero illustration block: pro illustration (recolored to brand) + matching aurora backdrop
 * + floating capability cards. Designed to BLEND with the page background.
 */
export function HeroIsoIllustration() {
  return (
    <div className="relative w-full">
      {/* Backdrop blob behind illustration — same orange family as aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(255,120,0,0.22), transparent 70%)" }}
        />
        <div
          className="absolute top-[20%] right-0 h-[280px] w-[280px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(255,228,194,0.7), transparent 70%)" }}
        />
      </div>

      {/* Main illustration with soft drop-shadow */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 18px 36px rgba(255,120,0,0.18)) drop-shadow(0 8px 16px rgba(15,23,42,0.10))" }}
        >
          <Image
            src={asset("/illustrations/cloud_hosting_brand.svg")}
            alt="OneServidores cloud hosting infrastructure"
            width={640}
            height={500}
            priority
            className="w-full h-auto max-w-[600px] mx-auto select-none"
          />
        </motion.div>

        {/* Ground shadow ellipse — grounds the illustration in the page */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 h-6 w-[55%] rounded-full opacity-40 blur-md"
          style={{ background: "radial-gradient(closest-side, rgba(255,120,0,0.45), transparent 80%)" }}
        />
      </motion.div>

      {/* Floating capability cards — pinned around the illustration, blend via white/border */}
      <FloatCard
        className="absolute top-[6%] -right-2 lg:right-4"
        delay={0.6}
        Icon={Cloud}
        title="Cloud"
        sub="SLA 99.99%"
      />
      <FloatCard
        className="absolute top-[42%] -left-2 lg:-left-4"
        delay={0.9}
        Icon={Network}
        title="IP Transit"
        sub="10 Gbps · BGP"
        amplitude={6}
      />
      <FloatCard
        className="absolute bottom-[8%] -left-2 lg:left-4"
        delay={1.2}
        Icon={ShieldCheck}
        title="Anti-DDoS"
        sub="Mitigación en borde"
      />
      <FloatCard
        className="absolute bottom-[18%] -right-2 lg:-right-4"
        delay={1.5}
        Icon={Activity}
        title="NOC 24×7"
        sub="Monitoreo continuo"
        amplitude={6}
        pulse
      />
    </div>
  );
}

function FloatCard({
  Icon,
  title,
  sub,
  className = "",
  delay = 0,
  amplitude = -8,
  pulse = false
}: {
  Icon: LucideIcon;
  title: string;
  sub: string;
  className?: string;
  delay?: number;
  amplitude?: number;
  pulse?: boolean;
}) {
  return (
    <motion.div
      className={"z-10 " + className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, amplitude, 0] }}
        transition={{ duration: 4.4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        className="inline-flex items-center gap-2.5 rounded-2xl border border-ink-200 bg-white/90 backdrop-blur-md px-3.5 py-2.5 shadow-card"
      >
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-soft-orange text-brand">
          <Icon size={17} />
          {pulse && (
            <span className="absolute inset-0 rounded-xl border-2 border-brand opacity-50 animate-ping" />
          )}
        </span>
        <div className="leading-tight">
          <div className="text-[12.5px] font-bold text-ink-900">{title}</div>
          <div className="text-[10.5px] text-ink-500">{sub}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
