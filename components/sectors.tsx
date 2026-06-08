"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2, Landmark, BedDouble, Server, HeartPulse, Building, ShieldCheck
} from "lucide-react";

const items = [
  { key: "mision",   name: "Misión Crítica", Icon: Server,      tag: "Sector clave", title: "Infraestructura always-on para operaciones que no pueden detenerse",       tone: "from-soft-orange to-white" },
  { key: "salud",    name: "Salud",         Icon: HeartPulse,  tag: "",             title: "Historias clínicas, telemedicina y continuidad 24×7",                       tone: "from-soft-blue to-white" },
  { key: "gobierno", name: "Gobierno",      Icon: Building,    tag: "",             title: "Servicios públicos digitales con alta disponibilidad",                      tone: "from-ink-50 to-white" },
  { key: "seguridad",name: "Seguridad",     Icon: ShieldCheck, tag: "",             title: "Videovigilancia, SOC y plataformas de respuesta",                           tone: "from-soft-orange to-white" },
  { key: "gaming",   name: "Gaming",        Icon: Gamepad2,    tag: "",             title: "Latencia mínima y capacidad elástica para jugadores",                       tone: "from-soft-blue to-white" },
  { key: "banca",    name: "Banca",         Icon: Landmark,    tag: "",             title: "Transacciones seguras, cumplimiento y resiliencia financiera",              tone: "from-ink-50 to-white" },
  { key: "hoteleria",name: "Hotelería",     Icon: BedDouble,   tag: "",             title: "PMS, reservas y experiencia digital para huéspedes",                        tone: "from-soft-orange to-white" }
];

export function Sectors() {
  const [active, setActive] = useState("mision");

  return (
    <section className="relative bg-ink-50">
      <div className="container py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-bold">
            Soluciones para todo tipo de negocio
          </div>
          <h2 className="mt-3 text-[28px] lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-ink-900">
            <span className="text-gradient-brand">Sectores</span> industriales que atendemos
          </h2>
        </div>

        {/* Sticky tabs row */}
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex items-center justify-center gap-2 min-w-max mx-auto">
            {items.map((it) => {
              const isActive = active === it.key;
              return (
                <button
                  key={it.key}
                  onClick={() => setActive(it.key)}
                  className={
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition border " +
                    (isActive
                      ? "border-brand bg-white text-ink-900 shadow-card"
                      : "border-ink-200 bg-white text-ink-600 hover:text-ink-900 hover:border-ink-300")
                  }
                >
                  <it.Icon size={14} className={isActive ? "text-brand" : "text-ink-400"} />
                  <span className="uppercase tracking-wider">{it.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 text-center text-[11px] uppercase tracking-[0.16em] text-ink-400 font-semibold">
          Sectores que confían en OneServidores
        </div>

        {/* Grid: featured large + others */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Featured */}
          <AnimatePresence mode="wait">
            {items
              .filter((i) => i.key === active)
              .map((it) => (
                <motion.div
                  key={it.key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br ${it.tone} p-8 lg:p-10 min-h-[280px]`}
                >
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-brand text-white text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1">
                    Sector clave
                  </div>
                  <div className="relative h-16 w-16 rounded-2xl bg-white border border-brand/20 flex items-center justify-center shadow-card">
                    <it.Icon size={28} className="text-brand" />
                    <div className="absolute -inset-1 rounded-2xl border border-brand/15 -z-10" />
                  </div>
                  <div className="mt-6">
                    <div className="text-[12px] uppercase tracking-[0.16em] text-brand font-bold">{it.name}</div>
                    <h3 className="mt-2 text-[22px] lg:text-[26px] font-extrabold text-ink-900 leading-tight max-w-md">
                      {it.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Other sectors (skip the active one), show top 4 */}
          {items.filter((i) => i.key !== active).slice(0, 4).map((it) => (
            <motion.button
              key={it.key}
              onClick={() => setActive(it.key)}
              whileHover={{ y: -2 }}
              className={`relative overflow-hidden text-left rounded-2xl border border-ink-200 bg-gradient-to-br ${it.tone} p-6 hover:border-brand/30 transition`}
            >
              <div className="h-12 w-12 rounded-xl bg-white border border-ink-200 flex items-center justify-center shadow-card">
                <it.Icon size={20} className="text-ink-700" />
              </div>
              <div className="mt-4 text-[12px] uppercase tracking-[0.14em] text-ink-500 font-bold">{it.name}</div>
              <div className="mt-1 text-[14px] font-semibold text-ink-800 leading-snug">{it.title}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
