"use client";

import { ReactNode } from "react";

export function ShineCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={"h-full rounded-xl border border-white/10 bg-ink-900/60 p-6 hover:border-brand/40 transition card-shine " + className}
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
