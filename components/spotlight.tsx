import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const points = [
  "Datacenter Tier III en Santiago con energía redundante A+B",
  "Conectividad multi-carrier con peering local NAP.cl",
  "Anti-DDoS volumétrico aplicado en el borde de red",
  "Backups gestionados con retención configurable"
];

export function Spotlight() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-fade-y opacity-30" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-brand-radial blur-3xl opacity-60 pointer-events-none" />
      <div className="relative container py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">
              Datacenter
            </div>
            <h2 className="mt-3 text-[30px] lg:text-[44px] font-extrabold tracking-tight leading-[1.05] text-white">
              Un piso técnico pensado para no apagarse jamás.
            </h2>
            <p className="mt-5 max-w-xl text-[15.5px] text-ink-100 leading-relaxed">
              Energía redundante, refrigeración por pasillos confinados, control de acceso
              biométrico y operación humana 24×7. Cada elemento es redundante porque la
              continuidad de tu servicio depende de ello.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14.5px] text-ink-100">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand/15 text-brand ring-1 ring-brand/30">
                    <Check size={12} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/datacenter"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-ink-950 font-semibold hover:bg-brand-600 transition"
              >
                Conocer el datacenter <ArrowRight size={16} />
              </Link>
              <Link
                href="/colocation"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/15 text-white hover:bg-white/5 transition"
              >
                Cotizar colocation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-ink-900/70 p-1 overflow-hidden">
              <div className="aspect-[4/5] rounded-xl relative overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex flex-col">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 border-b border-white/5 flex items-center justify-between px-5"
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand animate-pulseGlow" />
                        <span className="text-[10.5px] text-ink-200 font-mono">RACK-A{(i+1).toString().padStart(2, "0")}</span>
                      </div>
                      <span className="text-[10.5px] text-ink-300 font-mono">{(20 + i*1.7).toFixed(1)} kW</span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-4 right-4 rounded-full border border-brand/40 bg-brand/10 text-brand text-[10.5px] font-semibold px-2.5 py-1 tracking-wide">
                  TIER III · ACTIVO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
