import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { IllusDatacenter, IllusCloud, IllusNetwork } from "./illustrations";

const cards = [
  {
    eyebrow: "Datacenter y Colocation",
    title:   "Datacenter y Colocation",
    body:    "Entornos seguros para servicios críticos: energía, climatización, racks, colocation y operación permanente sobre infraestructura OneServidores.",
    href:    "/colocation",
    Illus:   IllusDatacenter
  },
  {
    eyebrow: "Cloud y Servidores",
    title:   "Cloud y Servidores",
    body:    "VPS, dedicados, hosting y plataformas cloud con conectividad escalable, anti-DDoS y soporte especializado 24×7.",
    href:    "/servidores",
    Illus:   IllusCloud
  },
  {
    eyebrow: "Red, NOC y Seguridad",
    title:   "Red, NOC y Seguridad",
    body:    "IP Transit, ingeniería, NOC/SOC, monitoreo, Anycast, CDN y servicios gestionados para continuidad operacional.",
    href:    "/servicios/seguridad",
    Illus:   IllusNetwork
  }
];

export function Capabilities() {
  return (
    <section className="relative bg-white">
      <div className="container py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-bold">
              Capacidades OneServidores
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-[28px] lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-ink-900">
              Infraestructura <span className="text-gradient-brand">crítica</span> para un mundo siempre conectado
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-ink-200 bg-white p-7 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition flex flex-col">
                <div className="flex justify-center">
                  <c.Illus className="h-44 w-auto" />
                </div>
                <h3 className="mt-5 text-center text-[20px] font-bold text-ink-900">{c.title}</h3>
                <p className="mt-3 text-center text-[14px] text-ink-500 leading-relaxed">{c.body}</p>
                <div className="mt-6 flex justify-center">
                  <Link href={c.href} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:text-brand-600 transition">
                    Conocer más <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
