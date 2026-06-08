import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./reveal";
import { CobeGlobe } from "./cobe-globe";

const points = [
  "1000 Gbps Nacional y 400 Gbps Internacional por rutas redundantes",
  "Datacenter, Cloud, IP Transit, Anycast, CDN, NOC 24×7 y Colocation sobre una arquitectura común",
  "Operación continua para servicios que requieren disponibilidad, resiliencia y continuidad operacional",
  "Seguridad física, lógica y monitoreo proactivo para infraestructura de misión crítica"
];

export function Spotlight() {
  return (
    <section className="relative bg-white">
      <div className="container py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-bold">Datacenter</div>
            <h2 className="mt-3 text-[28px] lg:text-[44px] font-extrabold tracking-tight leading-[1.05] text-ink-900">
              Infraestructura crítica desde <span className="text-gradient-brand">Chile</span> hacia el mundo
            </h2>
            <ul className="mt-7 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14.5px] text-ink-600 leading-relaxed">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Link
                href="/datacenter"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-white font-semibold hover:bg-brand-600 transition shadow-glow"
              >
                Conocer datacenter <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <CobeGlobe />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
