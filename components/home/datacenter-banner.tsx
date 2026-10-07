"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, Server, Globe2 } from "lucide-react";

export function DatacenterBanner() {
  return (
    <section className="relative py-24 bg-[#0a0c0e] text-white overflow-hidden border-y border-neutral-800">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FF7800 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 text-xs font-bold text-[#FF7800] uppercase tracking-wider">
              <Server size={14} />
              CERTIFICACIÓN INTERNACIONAL
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Data Center Tier III en Chile
            </h2>

            <p className="text-lg text-neutral-300 font-normal">
              Contamos con <strong>2 Data Centers propios</strong>: uno en Santiago de Chile y otro en Argentina, 
              diseñados con redundancia total de energía, clima y conectividad.
            </p>

            <ul className="space-y-4 pt-2 text-base text-neutral-200">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#FF7800] shrink-0" />
                <span><strong>Red 1 Hasta 10 GBPS</strong> Nacional e Internacional sin saturación.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#FF7800] shrink-0" />
                <span><strong>Panel de control autónomo</strong> para manejar, reiniciar y clonar tus VPS.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#FF7800] shrink-0" />
                <span><strong>Bajo ping para Chile</strong> y todo el Cono Sur con interconexión directa PIT.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#FF7800] shrink-0" />
                <span><strong>Conexión BGP Gratuita</strong> para nuestros clientes (Trae tu propio segmento de IPs).</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#FF7800] shrink-0" />
                <span><strong>Respaldo de Energía N+1</strong> con UPS en cada rack y generadores diésel autónomos.</span>
              </li>
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-3.5 rounded-full bg-[#FF7800] hover:bg-[#E66B00] text-white font-black text-sm uppercase tracking-wider transition shadow-lg shadow-orange-500/30"
              >
                Contacto Comercial
              </Link>
              <Link
                href="/datacenter"
                className="px-7 py-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm transition"
              >
                Conoce el Data Center
              </Link>
            </div>
          </div>

          {/* Right Metrics Box */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-900/90 rounded-3xl p-8 border border-neutral-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div className="text-xl font-bold">Especificaciones Tier III</div>
                <span className="text-xs font-mono text-[#FF7800] bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  99.85% SLA
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                  <div className="text-xs text-neutral-400 font-mono uppercase">Conectividad</div>
                  <div className="text-lg font-bold text-white mt-0.5">PIT Chile + Enlace Telxius & Lumen</div>
                  <div className="text-xs text-neutral-500 mt-1">Tránsito IP directo multi-homed BGP4</div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                  <div className="text-xs text-neutral-400 font-mono uppercase">Climatización</div>
                  <div className="text-lg font-bold text-white mt-0.5">Pasillo Frío / Caliente Confinado</div>
                  <div className="text-xs text-neutral-500 mt-1">Temperatura constante 21°C ± 2°C</div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                  <div className="text-xs text-neutral-400 font-mono uppercase">Seguridad Física</div>
                  <div className="text-lg font-bold text-white mt-0.5">Control Biométrico + CCTV 24/7</div>
                  <div className="text-xs text-neutral-500 mt-1">Monitoreo continuo in-situ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
