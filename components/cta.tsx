import Link from "next/link";
import { ArrowRight, Headset } from "lucide-react";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative">
      <div className="container py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 p-10 lg:p-14">
          <div className="absolute -top-20 -right-20 h-[400px] w-[600px] bg-brand-radial blur-3xl opacity-70 pointer-events-none" />
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">
                ¿Listo para empezar?
              </div>
              <h2 className="mt-3 text-[28px] lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-white">
                Conversemos qué necesita realmente tu operación.
              </h2>
              <p className="mt-4 text-[15.5px] text-ink-100 max-w-2xl leading-relaxed">
                Cuéntanos qué quieres alojar y te respondemos con una propuesta concreta —
                no con un PDF genérico. Sin telemarketing, sin presión.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-brand text-ink-950 font-semibold hover:bg-brand-600 transition shadow-glow"
              >
                Cotizar ahora <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${site.contact.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md border border-white/15 text-white hover:bg-white/5 transition"
              >
                <Headset size={16} /> {site.contact.phones[0]}
              </a>
              <div className="text-center text-[12px] text-ink-300">
                Respuesta promedio &lt; 30 min hábiles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
