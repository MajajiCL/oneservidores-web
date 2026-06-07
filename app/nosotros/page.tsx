import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Target, Compass, HeartHandshake, Sparkles, ShieldCheck, Code2 } from "lucide-react";

export const metadata = {
  title: "Nosotros — Quiénes somos en OneServidores",
  description: "Operamos infraestructura crítica desde Chile para clientes en Latinoamérica. Conoce nuestra historia, equipo y principios."
};

const values = [
  { Icon: Target,        title: "Foco en uptime",        body: "Cada decisión pasa por la pregunta: ¿esto reduce o aumenta el riesgo de downtime?" },
  { Icon: Compass,       title: "Operación transparente",body: "Mantenimientos avisados, status page pública e informes post-incidente reales." },
  { Icon: HeartHandshake,title: "Cliente como socio",    body: "Acuerdos largos basados en confianza, no en letra chica de contratos." },
  { Icon: Sparkles,      title: "Mejora continua",       body: "Actualizamos hardware y stack cada ciclo para no quedarnos atrás." },
  { Icon: ShieldCheck,   title: "Seguridad por defecto", body: "Anti-DDoS, WAF y monitoreo incluidos, no cobrados aparte." },
  { Icon: Code2,         title: "Cultura técnica",       body: "Soporte por ingenieros, no por scripts. Te respondemos en el lenguaje correcto." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title={<>Infraestructura <span className="text-gradient-brand">latinoamericana</span> hecha con criterio.</>}
        description="OneServidores opera servicios de datacenter, VPS, dedicados y colocation desde Chile para clientes de toda la región. Sin overselling, sin promesas vacías."
      />

      <section className="relative">
        <div className="container py-20 lg:py-24 grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">Nuestra historia</div>
            <h2 className="mt-3 text-[28px] lg:text-[36px] font-extrabold tracking-tight leading-tight text-white">
              Empezamos como un equipo técnico que necesitaba un proveedor en el que confiar — y terminamos siendo uno.
            </h2>
          </Reveal>
          <div className="lg:col-span-7 space-y-5 text-[15.5px] text-ink-100 leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                OneServidores nace de una experiencia repetida: hosting que prometía y no cumplía,
                soporte que respondía con plantillas y servidores que se caían en el peor
                momento. Decidimos que podíamos hacerlo mejor.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Hoy operamos VPS, servidores dedicados, colocation y hosting cPanel sobre
                infraestructura Tier III en Santiago, con presencia regional en Argentina y
                acuerdos directos con carriers Tier 1. Lo que ofrecemos al cliente es lo que a
                nosotros nos hubiera gustado tener.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Nuestro NOC opera 24×7 desde Chile con ingenieros — no operadores de primer
                nivel — y nuestra red está pensada para que tus servicios no enteren a tu cliente
                de que algo pasó.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-ink-900/40">
        <div className="container py-16 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { v: 10,   suf: "+ años", lbl: "Operando infraestructura" },
            { v: 2,    suf: " países", lbl: "Chile y Argentina" },
            { v: 99.99,suf: "%",      lbl: "Uptime promedio", dec: 2 },
            { v: 24,   suf: "×7",     lbl: "Operación NOC" }
          ].map((m, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="text-center lg:text-left">
                <div className="text-[36px] lg:text-[44px] font-extrabold text-white leading-none tracking-tight">
                  <Counter to={m.v} suffix={m.suf} decimals={m.dec ?? 0} />
                </div>
                <div className="mt-2 text-[12.5px] uppercase tracking-[0.12em] text-brand font-semibold">{m.lbl}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FeatureGrid eyebrow="Cómo trabajamos" title="Seis cosas que no negociamos." features={values} />
      <CTA />
    </>
  );
}
