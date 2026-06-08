"use client";

import { motion } from "framer-motion";

/**
 * Hand-drawn isometric hero illustration — no Three.js, no libraries.
 * Pure SVG with isometric projection, gradients, drop shadows and CSS animations.
 * Style: clean, light, illustrative — same idiom as premium tech landings.
 */
export function HeroIsoIllustration() {
  return (
    <div className="relative w-full">
      {/* soft backdrop glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side at 55% 50%, rgba(255,120,0,0.20), transparent 65%)"
        }}
      />

      <motion.svg
        viewBox="0 0 720 620"
        className="w-full h-auto max-w-[640px] mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <defs>
          {/* TOWER GRADIENTS — 3 faces */}
          <linearGradient id="towerFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F1F5F9" />
          </linearGradient>
          <linearGradient id="towerRight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="towerTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>

          {/* DRUM gradients */}
          <linearGradient id="drumFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
          <radialGradient id="drumTop" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#CBD5E1" />
          </radialGradient>

          {/* BRAND */}
          <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FF7800" />
            <stop offset="1" stopColor="#FFA94D" />
          </linearGradient>
          <radialGradient id="brandSoft" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#FFE4C2" />
            <stop offset="1" stopColor="#FFFFFF" />
          </radialGradient>

          {/* Cloud gradient */}
          <linearGradient id="cloud" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F1F5F9" />
          </linearGradient>

          {/* Shadow filter */}
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="360" cy="555" rx="280" ry="22" fill="#FF7800" opacity="0.10" filter="url(#soft)" />

        {/* ===== STORAGE DRUM (right side, slightly behind) ===== */}
        <g transform="translate(470 230)">
          {/* drum body — 4 stacked disks (isometric) */}
          {[0, 1, 2, 3].map((i) => {
            const y = i * 56;
            return (
              <g key={i} transform={`translate(0 ${y})`}>
                {/* side */}
                <path
                  d={`M -90 0 L -90 50 Q -90 75 0 75 Q 90 75 90 50 L 90 0 Z`}
                  fill={i === 1 ? "url(#brand)" : "url(#drumFront)"}
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                />
                {/* top ellipse (lighter) */}
                <ellipse
                  cx="0" cy="0" rx="90" ry="22"
                  fill={i === 0 ? "url(#drumTop)" : "#FFFFFF"}
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                />
                {/* dot grid on side */}
                {i !== 1 && Array.from({ length: 10 }).map((_, j) => {
                  const a = -Math.PI / 2 + (j / 10) * Math.PI - Math.PI / 2 + Math.PI / 20;
                  const x = Math.cos(a) * 70;
                  const yy = Math.sin(a) * 18 + 28;
                  return <circle key={j} cx={x} cy={yy} r="2.5" fill="#94A3B8" />;
                })}
                {/* center stripe for brand disk */}
                {i === 1 && (
                  <>
                    <rect x="-30" y="22" width="60" height="14" rx="3" fill="#FFFFFF" opacity="0.4" />
                    <circle cx="0" cy="29" r="4" fill="#FFFFFF">
                      <animate attributeName="r" values="4;6;4" dur="1.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0.5;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}
              </g>
            );
          })}
        </g>

        {/* ===== MAIN TOWER (server, isometric box) ===== */}
        <g transform="translate(220 110)">
          {/* TOP face (parallelogram) */}
          <polygon
            points="0,0 180,0 240,40 60,40"
            fill="url(#towerTop)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />
          {/* small top vents */}
          {[60, 100, 140].map((x) => (
            <line key={x} x1={x} y1="14" x2={x + 60} y2="34" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          ))}

          {/* RIGHT face (parallelogram) */}
          <polygon
            points="180,0 240,40 240,340 180,300"
            fill="url(#towerRight)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />
          {/* side label */}
          <rect x="195" y="55" width="32" height="240" rx="4" fill="#FFFFFF" opacity="0.3" />

          {/* FRONT face (rectangle) */}
          <rect x="0" y="0" width="180" height="300" fill="url(#towerFront)" stroke="#CBD5E1" strokeWidth="1.5" />

          {/* Brand bar at top of front */}
          <rect x="14" y="14" width="152" height="34" rx="6" fill="url(#brand)" />
          <text x="90" y="36" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="800" fill="white" textAnchor="middle" letterSpacing="2">
            ONESERVIDORES
          </text>

          {/* Server unit rows */}
          {[68, 110, 152, 194, 236].map((y, i) => (
            <g key={i}>
              <rect x="14" y={y} width="152" height="32" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
              {/* horizontal slots */}
              {Array.from({ length: 5 }).map((_, j) => (
                <rect key={j} x={26 + j * 26} y={y + 10} width="20" height="12" rx="1.5" fill="#CBD5E1" />
              ))}
              {/* LED */}
              <circle cx={152} cy={y + 16} r="3.5" fill="#FF7800">
                <animate
                  attributeName="opacity"
                  values="0.4;1;0.4"
                  dur={`${1.2 + i * 0.18}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={142} cy={y + 16} r="3" fill="#FFC785">
                <animate
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur={`${1.4 + i * 0.22}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          {/* Bottom power strip */}
          <rect x="14" y="278" width="152" height="6" rx="2" fill="url(#brand)" />
        </g>

        {/* ===== FLOATING CARDS ===== */}
        {/* Cloud card (top-right) */}
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <g transform="translate(540 80)">
            <rect x="0" y="0" width="120" height="60" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
            <rect x="0" y="0" width="120" height="60" rx="14" fill="url(#brandSoft)" opacity="0.6" />
            {/* mini cloud icon */}
            <path d="M 22 38 a 10 10 0 0 1 20 -4 a 8 8 0 0 1 14 6 a 7 7 0 0 1 -1 14 H 28 a 8 8 0 0 1 -6 -16 Z" fill="#FF7800" opacity="0.9" />
            <text x="70" y="32" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700" fill="#0F172A">Cloud</text>
            <text x="70" y="46" fontSize="9" fontFamily="Inter, sans-serif" fill="#64748B">99.99% SLA</text>
          </g>
        </motion.g>

        {/* Network card (left, mid) */}
        <motion.g
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <g transform="translate(60 280)">
            <rect x="0" y="0" width="130" height="60" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
            {/* network glyph */}
            <g stroke="#FF7800" strokeWidth="2" fill="none">
              <circle cx="24" cy="30" r="4" fill="#FF7800" />
              <circle cx="46" cy="18" r="3" fill="#FFA94D" />
              <circle cx="46" cy="42" r="3" fill="#FFA94D" />
              <line x1="24" y1="30" x2="46" y2="18" />
              <line x1="24" y1="30" x2="46" y2="42" />
            </g>
            <text x="60" y="28" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700" fill="#0F172A">IP Transit</text>
            <text x="60" y="42" fontSize="9" fontFamily="Inter, sans-serif" fill="#64748B">10 Gbps · BGP</text>
          </g>
        </motion.g>

        {/* Shield card (bottom-left) */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <g transform="translate(30 440)">
            <rect x="0" y="0" width="140" height="60" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
            {/* shield glyph */}
            <path d="M 24 18 L 24 36 Q 24 48 36 48 Q 48 48 48 36 L 48 18 L 36 14 Z" fill="#FF7800" opacity="0.15" stroke="#FF7800" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 30 32 L 35 37 L 44 26" stroke="#FF7800" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="62" y="28" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700" fill="#0F172A">Anti-DDoS</text>
            <text x="62" y="42" fontSize="9" fontFamily="Inter, sans-serif" fill="#64748B">Mitigación en borde</text>
          </g>
        </motion.g>

        {/* NOC card (right, bottom) */}
        <motion.g
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
        >
          <g transform="translate(560 410)">
            <rect x="0" y="0" width="130" height="60" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
            {/* pulse */}
            <g stroke="#FF7800" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M 18 30 L 26 30 L 30 18 L 38 42 L 42 30 L 50 30" />
            </g>
            <circle cx="34" cy="30" r="12" fill="none" stroke="#FF7800" strokeWidth="1" opacity="0.4">
              <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <text x="62" y="28" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700" fill="#0F172A">NOC 24×7</text>
            <text x="62" y="42" fontSize="9" fontFamily="Inter, sans-serif" fill="#64748B">Monitoreo continuo</text>
          </g>
        </motion.g>

        {/* ===== CONNECTOR LINES (animated dashes between tower and drum) ===== */}
        <g stroke="#FF7800" strokeWidth="1.5" fill="none" strokeDasharray="4 5" opacity="0.55">
          <path d="M 400 240 Q 450 220 470 240">
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.4s" repeatCount="indefinite" />
          </path>
          <path d="M 400 290 Q 450 290 470 296">
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.6s" repeatCount="indefinite" />
          </path>
          <path d="M 400 340 Q 450 360 470 352">
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.8s" repeatCount="indefinite" />
          </path>
        </g>

        {/* ===== FLOATING PARTICLES ===== */}
        {[
          { cx: 150, cy: 130, r: 3, dur: 6 },
          { cx: 600, cy: 200, r: 2.5, dur: 7 },
          { cx: 480, cy: 100, r: 2, dur: 5 },
          { cx: 220, cy: 500, r: 2, dur: 6.5 },
          { cx: 620, cy: 340, r: 3, dur: 7.2 },
          { cx: 100, cy: 350, r: 2.5, dur: 5.5 }
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#FF7800" opacity="0.4">
            <animate attributeName="cy" values={`${p.cy};${p.cy - 12};${p.cy}`} dur={`${p.dur}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur={`${p.dur}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Decorative dotted ring around tower top */}
        <g transform="translate(310 110)" opacity="0.25">
          <circle cx="0" cy="0" r="86" fill="none" stroke="#FF7800" strokeWidth="1.5" strokeDasharray="2 6">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite" />
          </circle>
        </g>
      </motion.svg>
    </div>
  );
}
