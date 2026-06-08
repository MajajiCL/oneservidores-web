import { Reveal } from "./reveal";
import { PowerIllu, CoolingIllu, SecurityIllu, NetworkIllu } from "./dc-illustrations";

const items = [
  {
    code: "01",
    title: "Energía A+B",
    body: "Dos rutas eléctricas independientes, UPS dimensionado para sostener carga durante el cambio a generadores diesel. 72 h de autonomía sin reabastecer.",
    Illu: PowerIllu
  },
  {
    code: "02",
    title: "Refrigeración por pasillos",
    body: "Confinamiento de pasillos frío y caliente, free-cooling cuando la temperatura ambiente lo permite. PUE objetivo bajo 1.4.",
    Illu: CoolingIllu
  },
  {
    code: "03",
    title: "Seguridad por capas",
    body: "Acceso biométrico, mantrap, CCTV con retención 60 días, control de visitas con bitácora. Detección VESDA y supresión por gas.",
    Illu: SecurityIllu
  },
  {
    code: "04",
    title: "Red multi-carrier",
    body: "AS propio con sesiones BGP a Tier-1, peering local NAP.cl, CDN regional. Anti-DDoS aplicado en el borde de red.",
    Illu: NetworkIllu
  }
];

export function DatacenterTour() {
  return (
    <section className="relative bg-void border-t border-white/5">
      <div className="container py-24 lg:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">
            TOUR · DATACENTER SCL01
          </div>
          <h2 className="mt-4 text-heading lg:text-heading-lg font-bold tracking-tight leading-[1.05] text-bone-white">
            Cada componente, <span className="font-editorial text-bone-white/95">redundante</span> a propósito
          </h2>
          <p className="mt-5 text-body text-bone-white/70 leading-relaxed max-w-2xl">
            La continuidad de tu servicio se construye en cuatro capas independientes. Si una falla,
            las otras tres mantienen tu plataforma encendida sin que tu cliente se entere.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-3">
          {items.map((it, i) => (
            <Reveal key={it.code} delay={i * 0.08}>
              <div className="group h-full rounded-card border border-white/8 bg-white/[0.02] p-7 hover:border-brand/40 hover:bg-white/[0.04] transition-all">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-slate">
                    {it.code} · LAYER
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-pill border border-brand/30 bg-brand/10 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-brand">
                    <span className="h-1 w-1 rounded-full bg-brand" /> ACTIVO
                  </span>
                </div>
                <div className="bg-void/40 rounded-card p-4 border border-white/5">
                  <it.Illu className="w-full h-auto max-w-[340px] mx-auto" />
                </div>
                <h3 className="mt-6 text-subheading lg:text-heading-sm font-bold text-bone-white tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-2 text-body-sm text-bone-white/65 leading-relaxed">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
