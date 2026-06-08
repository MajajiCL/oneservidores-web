import Link from "next/link";
import { ArrowRight, Headset } from "lucide-react";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative bg-void">
      <div className="container py-24 lg:py-28">
        <div className="relative overflow-hidden rounded-card-lg border border-white/10 bg-gradient-to-br from-brand/20 via-brand/5 to-transparent p-12 lg:p-16">
          <div className="absolute -top-32 -right-20 h-[460px] w-[640px] blur-3xl opacity-80 pointer-events-none"
            style={{ background: "radial-gradient(closest-side, rgba(255,120,0,0.45), transparent 70%)" }} />
          <div className="absolute inset-0 bg-grid-void opacity-50 pointer-events-none mask-fade-y" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">
                LISTO PARA EMPEZAR
              </div>
              <h2 className="mt-4 text-heading lg:text-display-sm font-bold tracking-tight text-bone-white leading-[0.98]">
                Conversemos qué necesita <span className="font-editorial text-bone-white/95">realmente</span> tu operación.
              </h2>
              <p className="mt-5 text-body text-bone-white/70 max-w-2xl leading-relaxed">
                Cuéntanos qué quieres alojar y te respondemos con una propuesta concreta —
                no con un PDF genérico. Sin telemarketing, sin presión.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-pill bg-bone-white text-void font-bold hover:bg-brand transition text-body-sm shadow-glow"
              >
                Cotizar ahora <ArrowRight size={15} />
              </Link>
              <a
                href={`tel:${site.contact.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-pill border border-bone-white text-bone-white hover:border-brand hover:shadow-glowSoft transition text-body-sm font-medium font-mono tracking-wider"
              >
                <Headset size={15} /> {site.contact.phones[0]}
              </a>
              <div className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate">
                RESPUESTA &lt; 30 MIN HÁBILES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
