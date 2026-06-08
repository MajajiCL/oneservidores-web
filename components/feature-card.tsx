"use client";

import { ReactNode } from "react";

export function ShineCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={"h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition card-shine " + className}
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
