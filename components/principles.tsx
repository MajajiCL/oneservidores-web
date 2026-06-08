import { Reveal } from "./reveal";
import { Server, Activity, Globe2, ShieldCheck, Layers3, Eye } from "lucide-react";

const big = {
  eyebrow: "Lo que nos define",
  title:   "Infraestructura crítica",
  body:    "Diseñamos y operamos plataformas preparadas para servicios que requieren máxima disponibilidad, resiliencia y continuidad operacional."
};

const small = [
  { Icon: Activity,   title: "Operación 24×7",         body: "Equipos especializados monitorean infraestructura de forma continua, con NOC 24×7 y respuesta experta para servicios always-on." },
  { Icon: Globe2,     title: "Conectividad sin fronteras", body: "Integramos redes, carriers, plataformas cloud, servicios Anycast y CDN para acercar aplicaciones y contenidos a los usuarios." },
  { Icon: ShieldCheck,title: "Experiencia y confianza",body: "Más de una década acompañando a empresas, proveedores y plataformas que necesitan infraestructura crítica con estándares internacionales." },
  { Icon: Layers3,    title: "Arquitectura escalable", body: "Capacidad de cómputo, red y almacenamiento que crece con tu carga, sin migrar de proveedor ni cambiar de tecnología." },
  { Icon: Eye,        title: "Infraestructura que no descansa", body: "Desde Chile hacia la región, mantenemos servicios disponibles, seguros y conectados a escala global." }
];

export function Principles() {
  return (
    <section className="relative bg-white">
      <div className="container py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-bold">Lo que nos define</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-[28px] lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-ink-900">
              Principios para infraestructura <span className="text-gradient-brand">always-on</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-4 text-[15.5px] text-ink-500 leading-relaxed">
              Cada capacidad existe para mantener servicios críticos disponibles, seguros y conectados a escala regional.
            </p>
          </Reveal>
        </div>

        {/* Big highlight card */}
        <Reveal delay={0.1}>
          <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 lg:p-12">
            <div className="absolute -right-20 -top-20 h-[320px] w-[480px] bg-soft-radial opacity-90 pointer-events-none" />
            <div className="absolute inset-0 bg-grid-soft opacity-[0.04] pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative h-28 w-28 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="absolute inset-2 rounded-2xl border border-brand/40" />
                  <Server size={36} className="text-brand relative z-10" />
                </div>
              </div>
              <div className="lg:col-span-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {big.eyebrow}
                </div>
                <h3 className="mt-3 text-[24px] lg:text-[32px] font-extrabold tracking-tight text-white">
                  {big.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-300 leading-relaxed max-w-3xl">
                  {big.body}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Small cards row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {small.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-ink-200 bg-white p-5 shadow-card hover:shadow-cardHover transition">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-soft-orange text-brand">
                  <p.Icon size={18} />
                </div>
                <div className="mt-4 text-[14.5px] font-bold text-ink-900 leading-snug">{p.title}</div>
                <p className="mt-2 text-[12.5px] text-ink-500 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
