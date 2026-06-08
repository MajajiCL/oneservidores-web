import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Reveal } from "./reveal";

const rows = [
  { label: "8 vCPU · 16 GB · 240 GB NVMe", one: "$24.990", aws: "$118.400", do: "$72.000", hetz: "$28.500" },
  { label: "32 GB RAM + Anti-DDoS",         one: "Incluido", aws: "Add-on",   do: "Add-on",  hetz: "Incluido" },
  { label: "Soporte en español 24×7",       one: true,       aws: false,      do: false,     hetz: false },
  { label: "Migración gratuita",            one: true,       aws: false,      do: "Limitada",hetz: false },
  { label: "Sin permanencia",               one: true,       aws: true,       do: true,      hetz: true },
  { label: "Ancho de banda incluido",       one: "10 Gbps",  aws: "Por uso",  do: "5 TB",    hetz: "20 TB" },
  { label: "Tiempo de provisión",           one: "< 15 min", aws: "5 min",    do: "5 min",   hetz: "30 min" }
];

const headers = [
  { name: "OneServidores", featured: true },
  { name: "AWS Lightsail" },
  { name: "DigitalOcean" },
  { name: "Hetzner" }
];

function Cell({ v, featured = false }: { v: string | boolean; featured?: boolean }) {
  if (typeof v === "boolean") {
    return v ? (
      <Check size={16} className={featured ? "text-brand" : "text-bone-white/55"} />
    ) : (
      <X size={16} className="text-iron" />
    );
  }
  return (
    <span className={"font-mono text-[12px] tracking-wide " + (featured ? "text-brand font-semibold" : "text-bone-white/75")}>
      {v}
    </span>
  );
}

export function ComparePricing() {
  return (
    <section className="relative bg-void border-t border-white/5">
      <div className="container py-24 lg:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">
            COMPARATIVA · MISMO HARDWARE
          </div>
          <h2 className="mt-4 text-heading lg:text-heading-lg font-bold tracking-tight leading-[1.05] text-bone-white">
            Mejor precio que un hyperscaler, <span className="font-editorial text-bone-white/95">sin</span> sacrificar SLA
          </h2>
          <p className="mt-5 text-body text-bone-white/70 leading-relaxed max-w-2xl">
            Comparación referencial sobre un VPS de 8 vCPU · 16 GB · 240 GB NVMe, precios mensuales en CLP
            con conversión aproximada a Junio 2026. Sin overselling. Tu carga, tus reglas.
          </p>
        </div>

        <Reveal>
          <div className="mt-12 rounded-card-lg border border-white/8 bg-white/[0.015] overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-12 px-4 lg:px-6 py-4 border-b border-white/8 bg-white/[0.02]">
              <div className="col-span-12 lg:col-span-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate self-center">
                MÉTRICA
              </div>
              {headers.map((h) => (
                <div
                  key={h.name}
                  className={
                    "col-span-3 lg:col-span-2 text-center font-mono uppercase tracking-[0.14em] text-[11px] " +
                    (h.featured ? "text-brand font-bold" : "text-bone-white/70")
                  }
                >
                  {h.featured && (
                    <div className="inline-flex mb-1 items-center gap-1 rounded-pill bg-brand/15 border border-brand/30 px-2 py-0.5 text-[9px]">
                      ★ TÚ
                    </div>
                  )}
                  <div className={h.featured ? "text-bone-white font-bold" : ""}>{h.name}</div>
                </div>
              ))}
            </div>

            {/* Data rows */}
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={
                  "grid grid-cols-12 px-4 lg:px-6 py-4 items-center border-b border-white/5 last:border-0 " +
                  (i % 2 === 0 ? "bg-white/[0.012]" : "")
                }
              >
                <div className="col-span-12 lg:col-span-4 text-body-sm text-bone-white/85 font-medium">
                  {r.label}
                </div>
                <div className="col-span-3 lg:col-span-2 flex items-center justify-center"><Cell v={r.one}  featured /></div>
                <div className="col-span-3 lg:col-span-2 flex items-center justify-center"><Cell v={r.aws} /></div>
                <div className="col-span-3 lg:col-span-2 flex items-center justify-center"><Cell v={r.do} /></div>
                <div className="col-span-3 lg:col-span-2 flex items-center justify-center"><Cell v={r.hetz} /></div>
              </div>
            ))}

            {/* Footer CTA */}
            <div className="px-6 py-6 border-t border-white/8 bg-gradient-to-r from-brand/10 to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-brand">AHORRO ANUAL TÍPICO</div>
                <div className="mt-1 text-heading-sm font-bold text-bone-white">$1.120.920 CLP</div>
                <div className="text-[11px] text-slate font-mono">vs AWS Lightsail con specs equivalentes</div>
              </div>
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-bone-white text-void font-semibold hover:bg-brand transition shadow-glow text-body-sm"
              >
                Calcular mi ahorro <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-slate text-center">
          PRECIOS REFERENCIALES · CONSULTA TU CASO ESPECÍFICO
        </div>
      </div>
    </section>
  );
}
