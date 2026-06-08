"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2, Landmark, BedDouble, Server, HeartPulse, Building, ShieldCheck
} from "lucide-react";

const items = [
  { key: "mision",   name: "MISIÓN CRÍTICA",  Icon: Server,      title: "Infraestructura always-on para operaciones que no pueden detenerse",   gradient: "bg-card-gradient-a" },
  { key: "salud",    name: "SALUD",           Icon: HeartPulse,  title: "Historias clínicas, telemedicina y continuidad 24×7",                  gradient: "bg-card-gradient-b" },
  { key: "gobierno", name: "GOBIERNO",        Icon: Building,    title: "Servicios públicos digitales con alta disponibilidad",                 gradient: "bg-card-gradient-c" },
  { key: "seguridad",name: "SEGURIDAD",       Icon: ShieldCheck, title: "Videovigilancia, SOC y plataformas de respuesta",                     gradient: "bg-card-gradient-d" },
  { key: "gaming",   name: "GAMING",          Icon: Gamepad2,    title: "Latencia mínima y capacidad elástica para jugadores",                  gradient: "bg-card-gradient-a" },
  { key: "banca",    name: "BANCA",           Icon: Landmark,    title: "Transacciones seguras, cumplimiento y resiliencia financiera",         gradient: "bg-card-gradient-b" },
  { key: "hoteleria",name: "HOTELERÍA",       Icon: BedDouble,   title: "PMS, reservas y experiencia digital para huéspedes",                   gradient: "bg-card-gradient-c" }
];

export function Sectors() {
  const [active, setActive] = useState("mision");
  const current = items.find((i) => i.key === active)!;

  return (
    <section className="relative bg-void border-t border-white/5">
      <div className="container py-24 lg:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">
            SECTORES · INDUSTRIAS
          </div>
          <h2 className="mt-4 text-heading lg:text-heading-lg font-bold tracking-tight leading-[1.05] text-bone-white">
            Diseñado para sectores donde el <span className="font-editorial text-bone-white/95">downtime</span> cuesta caro
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {items.map((it) => {
            const isActive = active === it.key;
            return (
              <button
                key={it.key}
                onClick={() => setActive(it.key)}
                className={
                  "inline-flex items-center gap-2 px-4 py-2 rounded-pill text-[11px] font-mono uppercase tracking-[0.16em] transition border " +
                  (isActive
                    ? "border-bone-white bg-bone-white text-void"
                    : "border-white/10 bg-transparent text-bone-white/70 hover:text-bone-white hover:border-storm-gray")
                }
              >
                <it.Icon size={13} className={isActive ? "text-void" : "text-brand"} />
                {it.name}
              </button>
            );
          })}
        </div>

        {/* Featured card */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`relative overflow-hidden rounded-card-lg border border-white/10 p-10 lg:p-14 min-h-[320px] ${current.gradient}`}
            >
              <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 rounded-pill bg-void/40 border border-white/15 px-2.5 py-1 backdrop-blur-md">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-bone-white">SECTOR CLAVE</span>
              </div>
              <div className="relative grid lg:grid-cols-12 gap-8 items-center h-full">
                <div className="lg:col-span-2 flex justify-start lg:justify-center">
                  <div className="relative h-20 w-20 rounded-card border border-white/15 bg-void/30 backdrop-blur-md flex items-center justify-center">
                    <current.Icon size={32} className="text-bone-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-bone-white/80">
                    {current.name}
                  </div>
                  <h3 className="mt-3 text-heading lg:text-heading-lg font-bold text-bone-white leading-[1.05] max-w-2xl">
                    {current.title}
                  </h3>
                </div>
              </div>

              {/* Outlined display number */}
              <div className="absolute -bottom-6 right-4 select-none pointer-events-none">
                <span
                  className="font-editorial text-[120px] lg:text-[180px] leading-none"
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                    color: "transparent"
                  }}
                >
                  0{items.findIndex((x) => x.key === active) + 1}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
