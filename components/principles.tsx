import { Reveal } from "./reveal";
import { Activity, Globe2, ShieldCheck, Layers3, Eye, Server } from "lucide-react";

const items = [
  { Icon: Server,      title: "INFRAESTRUCTURA CRÍTICA",    code: "01" },
  { Icon: Activity,    title: "OPERACIÓN 24×7",             code: "02" },
  { Icon: Globe2,      title: "CONECTIVIDAD SIN FRONTERAS", code: "03" },
  { Icon: ShieldCheck, title: "EXPERIENCIA Y CONFIANZA",    code: "04" },
  { Icon: Layers3,     title: "ARQUITECTURA ESCALABLE",     code: "05" },
  { Icon: Eye,         title: "INFRAESTRUCTURA SIEMPRE ON", code: "06" }
];

export function Principles() {
  return (
    <section className="relative bg-void border-t border-white/5">
      <div className="container py-24 lg:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">
            LO QUE NOS DEFINE
          </div>
          <h2 className="mt-4 text-heading lg:text-heading-lg font-bold tracking-tight text-bone-white leading-[1.05]">
            Principios para una <span className="font-editorial text-bone-white/95">infraestructura</span> always-on
          </h2>
          <p className="mt-5 text-body text-slate max-w-xl leading-relaxed">
            Cada capacidad existe para mantener servicios críticos disponibles, seguros y conectados a escala regional.
          </p>
        </div>

        <div className="mt-14 grid gap-3">
          {items.map((it, i) => (
            <Reveal key={it.code} delay={i * 0.05}>
              <div className="group flex items-center gap-6 rounded-card border border-white/8 bg-white/[0.015] px-6 py-6 lg:py-8 hover:border-brand/40 hover:bg-white/[0.03] transition-all">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-slate w-10">
                  {it.code}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-white/10 bg-white/5 text-brand">
                  <it.Icon size={17} />
                </span>
                <h3 className="font-mono text-[20px] lg:text-[28px] uppercase tracking-[0.16em] text-bone-white group-hover:text-brand transition flex-1">
                  {it.title}
                </h3>
                <span className="hidden sm:inline-flex items-center justify-center h-8 w-8 rounded-pill border border-white/10 text-slate group-hover:text-brand group-hover:border-brand transition">
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
