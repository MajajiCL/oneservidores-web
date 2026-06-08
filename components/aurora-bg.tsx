"use client";

import { motion } from "framer-motion";

/**
 * Animated aurora mesh-gradient background for hero sections.
 * Pure SVG + CSS, no canvas, no WebGL, no images.
 */
export function AuroraBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base white with very soft warm wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/40 to-white" />

      {/* Aurora blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-20 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,120,0,0.32), transparent 60%)" }}
        animate={{ x: [0, 60, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-10 right-1/4 h-[640px] w-[640px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,169,77,0.28), transparent 60%)" }}
        animate={{ x: [0, -80, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-32 -right-20 h-[460px] w-[460px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,228,194,0.6), transparent 60%)" }}
        animate={{ x: [0, -40, 20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-soft opacity-50 mask-fade-y" />

      {/* Noise texture (cheap CSS noise) */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
        }}
      />
    </div>
  );
}
