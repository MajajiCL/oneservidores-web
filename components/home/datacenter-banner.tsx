"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export function DatacenterBanner() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Subtle dot matrix pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFF 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left subtle rack visual / spacer */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative rounded-3xl p-8 border border-neutral-800/80 bg-neutral-900/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs text-neutral-400">
                  <span>RACK STATUS · SANTIAGO</span>
                  <span className="text-emerald-400 font-bold">ONLINE</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-neutral-400">
                  <div className="p-2.5 rounded bg-black/60 border border-neutral-800 flex justify-between">
                    <span>UPLINK CARRIER 1</span>
                    <span className="text-neutral-200">10 Gbps TELXIUS</span>
                  </div>
                  <div className="p-2.5 rounded bg-black/60 border border-neutral-800 flex justify-between">
                    <span>UPLINK CARRIER 2</span>
                    <span className="text-neutral-200">10 Gbps LUMEN PIT</span>
                  </div>
                  <div className="p-2.5 rounded bg-black/60 border border-neutral-800 flex justify-between">
                    <span>POWER BACKUP</span>
                    <span className="text-neutral-200">N+1 GENERATOR + UPS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content (Authentic Layout) */}
          <div className="lg:col-span-7 space-y-6 lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Data Center Tier III
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-normal">
              Contamos con 2 Data Center uno en Chile y otro en Argentina
            </p>

            <ul className="space-y-3.5 pt-2 text-sm sm:text-base text-neutral-200">
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Red 1 Hasta 10 GBPS Nacional e Internacional</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Panel de control para manejar tus VPS</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Bajo ping para Chile y el resto del continente</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Conexión BGP Gratuita para nuestros clientes (Trae tus IP)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Respaldo de Energía N+1</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/contacto"
                className="inline-block px-9 py-3 rounded-full bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-orange-600/30"
              >
                CONTACTO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
