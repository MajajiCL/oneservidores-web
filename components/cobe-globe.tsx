"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./cobe-globe-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[520px] mx-auto aspect-square flex items-center justify-center">
      <div className="h-40 w-40 rounded-full bg-gradient-to-br from-brand/40 to-brand-600/40 blur-2xl animate-pulseGlow" />
    </div>
  )
});

export function CobeGlobe() {
  return <Scene />;
}
