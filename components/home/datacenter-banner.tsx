"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, Cpu, HardDrive, Wifi, Lock } from "lucide-react";
import { asset } from "@/lib/paths";

export function DatacenterBanner() {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden border-y border-slate-800/80">
      {/* Background: Real Datacenter Infrastructure Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src={asset("/img/racks-fila-v.jpg")}
          alt="Infraestructura de Racks OneServidores"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.28] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Tarjeta Visual de Telemetría Real */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-7 border border-slate-700/60 bg-slate-900/85 backdrop-blur-xl shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 text-xs">
                <span className="font-bold text-slate-300">DATA CENTER TIER III · SANTIAGO</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  UPTIME 99.85%
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[11px] font-medium flex items-center gap-1.5 mb-1">
                    <Wifi size={13} className="text-[#FF7800]" />
                    <span>Conectividad</span>
                  </div>
                  <div className="text-sm font-bold text-white">1 a 10 Gbps</div>
                  <div className="text-[10px] text-slate-500">Telxius & Lumen</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[11px] font-medium flex items-center gap-1.5 mb-1">
                    <ShieldCheck size={13} className="text-[#FF7800]" />
                    <span>Respaldo</span>
                  </div>
                  <div className="text-sm font-bold text-white">N+1 Redundante</div>
                  <div className="text-[10px] text-slate-500">UPS + Generadores</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[11px] font-medium flex items-center gap-1.5 mb-1">
                    <HardDrive size={13} className="text-[#FF7800]" />
                    <span>Protocolo IP</span>
                  </div>
                  <div className="text-sm font-bold text-white">BGP Gratuito</div>
                  <div className="text-[10px] text-slate-500">Trae tu propio ASN</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[11px] font-medium flex items-center gap-1.5 mb-1">
                    <Cpu size={13} className="text-[#FF7800]" />
                    <span>Hardware</span>
                  </div>
                  <div className="text-sm font-bold text-white">Enterprise Grade</div>
                  <div className="text-[10px] text-slate-500">Intel Xeon / AMD EPYC</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-orange-500/20 text-xs text-slate-300 flex items-center gap-2.5">
                <Lock size={15} className="text-orange-400 shrink-0" />
                <span>Acceso biométrico 24/7 y monitoreo NOC permanente</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha de Contenido */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
              INFRAESTRUCTURA PROPIA
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Data Center Tier III en Chile y Argentina
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Infraestructura diseñada para misiones críticas. Aloja tus aplicaciones, tiendas online y bases de datos con baja latencia para toda Sudamérica y conectividad simétrica garantizada.
            </p>

            <ul className="space-y-3.5 pt-2 text-sm sm:text-base text-slate-200">
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-orange-500/15 flex items-center justify-center shrink-0">
                  <Check size={15} className="text-[#FF7800] stroke-[3]" />
                </div>
                <span>Red de 1 hasta 10 Gbps nacional e internacional con rutas optimizadas</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-orange-500/15 flex items-center justify-center shrink-0">
                  <Check size={15} className="text-[#FF7800] stroke-[3]" />
                </div>
                <span>Panel de control moderno para gestionar tus instancias VPS y DNS en tiempo real</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-orange-500/15 flex items-center justify-center shrink-0">
                  <Check size={15} className="text-[#FF7800] stroke-[3]" />
                </div>
                <span>Latencia inferior a 5 ms dentro de Chile y conexión directa al PIT nacional</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-orange-500/15 flex items-center justify-center shrink-0">
                  <Check size={15} className="text-[#FF7800] stroke-[3]" />
                </div>
                <span>Conexión BGP incluida para anunciar tus propios rangos de IP</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-orange-500/15 flex items-center justify-center shrink-0">
                  <Check size={15} className="text-[#FF7800] stroke-[3]" />
                </div>
                <span>Respaldo eléctrico de alta capacidad N+1 con generadores diésel autónomos</span>
              </li>
            </ul>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                href="/contacto"
                className="inline-block px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#E66000] text-white font-extrabold text-xs uppercase tracking-wider transition shadow-lg shadow-orange-600/30 hover:-translate-y-0.5"
              >
                Solicitar Asesoría Datacenter
              </Link>
              <Link
                href="/colocation"
                className="inline-block px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition border border-white/15"
              >
                Ver Co-Location
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
