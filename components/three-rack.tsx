"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./three-rack-scene"), {
  ssr: false,
  loading: () => (
    <div className="relative h-[460px] lg:h-[560px] w-full flex items-center justify-center">
      <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-brand to-brand-600 shadow-glow animate-pulseGlow" />
    </div>
  )
});

export function ThreeRack() {
  return <Scene />;
}
