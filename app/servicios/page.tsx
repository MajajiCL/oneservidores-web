import { PageHero } from "@/components/page-hero";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { Compass, Wrench, ShieldCheck, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Servicios — Asesorías, Ingeniería y Seguridad",
  description: "Servicios profesionales OneServidores: consultoría tecnológica, ingeniería de implementación y seguridad gestionada."
};

const items = [
  { href: "/servicios/asesorias",  Icon: Compass,     title: "Asesorías",  desc: "Consultoría tecnológica, arquitectura cloud y elección de stack." },
  { href: "/servicios/ingenieria", Icon: Wrench,      title: "Ingeniería", desc: "Implementación, migraciones, hardening y automatización." },
  { href: "/servicios/seguridad",  Icon: ShieldCheck, title: "Seguridad",  desc: "WAF, anti-DDoS, SOC, pentesting y respuesta a incidentes." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title={<>Más allá del servidor: <span className="text-gradient-brand">ingeniería</span> que entiende tu negocio.</>}
        description="Cuando un VPS no basta. Te acompañamos con consultoría, implementación y operación de seguridad para que tu plataforma crezca con tranquilidad."
        primaryCta={{ label: "Hablar con ingeniería", href: "/contacto" }}
      />
      <section className="container py-20 lg:py-24 grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.href} delay={i * 0.06}>
            <Link href={it.href} className="group block h-full rounded-2xl border border-ink-200 bg-white p-7 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-soft-orange text-brand">
                <it.Icon size={22} />
              </div>
              <h2 className="mt-5 text-[22px] font-bold text-ink-900">{it.title}</h2>
              <p className="mt-2 text-[14px] text-ink-500 leading-relaxed">{it.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-brand text-[13.5px] font-semibold">
                Conocer más <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
      <CTA />
    </>
  );
}
