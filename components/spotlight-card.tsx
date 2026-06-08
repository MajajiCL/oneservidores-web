"use client";

import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number; // 0..1
};

/**
 * Card with a soft orange spotlight that follows the cursor.
 * Plain CSS variables — no canvas, no performance hit.
 */
export function SpotlightCard({ children, className = "", intensity = 0.22 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - r.left}px`);
    el.style.setProperty("--sy", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={
        "group relative overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card transition-shadow hover:shadow-cardHover " +
        className
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--sx, 50%) var(--sy, 50%), rgba(255,120,0,${intensity}), transparent 50%)`
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
