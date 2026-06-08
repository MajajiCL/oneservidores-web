"use client";

import { motion } from "framer-motion";
import { Building2, Cloud, Network, Globe2, Activity, Cable } from "lucide-react";

const nodes = [
  { icon: Building2, title: "Datacenter",  body: "Zonas seguras para infraestructura crítica.",       pos: "top-0 left-0" },
  { icon: Cloud,     title: "Cloud",       body: "Cómputo, almacenamiento y plataformas escalables.",  pos: "top-0 right-0" },
  { icon: Cable,     title: "Colocation",  body: "Racks, energía, conectividad y asistencia remota.",  pos: "top-1/2 -translate-y-1/2 left-0" },
  { icon: Network,   title: "IP Transit",  body: "Múltiples ISPs, AS propio y alcance BGP.",           pos: "top-1/2 -translate-y-1/2 right-0" },
  { icon: Activity,  title: "NOC 24×7",    body: "Monitoreo continuo y respuesta especializada.",      pos: "bottom-0 left-0" },
  { icon: Globe2,    title: "Anycast · CDN", body: "Entrega global de contenido con baja latencia.",   pos: "bottom-0 right-0" }
];

export function HubDiagram() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* connectors */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <g stroke="#CBD5E1" strokeWidth="0.35" strokeDasharray="0.8 0.8" fill="none">
          <line x1="50" y1="50" x2="14" y2="14" />
          <line x1="50" y1="50" x2="86" y2="14" />
          <line x1="50" y1="50" x2="14" y2="50" />
          <line x1="50" y1="50" x2="86" y2="50" />
          <line x1="50" y1="50" x2="14" y2="86" />
          <line x1="50" y1="50" x2="86" y2="86" />
        </g>
      </svg>

      {/* center hub */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-28 w-28 rounded-3xl bg-gradient-to-br from-brand to-brand-600 shadow-glow flex items-center justify-center">
          <div className="absolute inset-1.5 rounded-[20px] bg-white/15 backdrop-blur-sm" />
          <div className="relative z-10 text-white font-extrabold tracking-tight text-[15px] text-center leading-tight">
            One<br/>Servidores
          </div>
        </div>
      </motion.div>

      {/* nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.title}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
          className={`absolute ${n.pos} w-[200px]`}
        >
          <div className="rounded-xl border border-ink-200 bg-white p-3.5 shadow-card">
            <div className="flex items-start gap-2.5">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-soft-orange text-brand">
                <n.icon size={15} />
              </div>
              <div>
                <div className="text-[12.5px] font-bold text-ink-900 leading-tight">{n.title}</div>
                <div className="mt-0.5 text-[11px] text-ink-500 leading-snug">{n.body}</div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
