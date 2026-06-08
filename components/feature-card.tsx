"use client";

import { ReactNode } from "react";

export function ShineCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={
        "h-full rounded-card glass hover:border-brand/30 transition-all relative overflow-hidden " +
        className
      }
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,120,0,0.18), transparent 50%)"
        }}
      />
      <div className="relative z-10 h-full p-6">{children}</div>
    </div>
  );
}
