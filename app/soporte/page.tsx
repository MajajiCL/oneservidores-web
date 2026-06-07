import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { LifeBuoy, BookOpen, MessageSquare, AlertCircle, Wrench, Activity } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = {
  title: "Soporte — Operación 24×7 y status público",
  description: "Centro de soporte de OneServidores: portal de tickets, status page, base de conocimiento y emergencias 24×7."
};

const features = [
  { Icon: LifeBuoy,     title: "Portal de tickets",       body: `Crea y sigue tickets en ${site.contact.portal} con SLA por prioridad.` },
  { Icon: Activity,     title: "Status page público",     body: "Estado en tiempo real de cada servicio. Suscripción por email/SMS opcional." },
  { Icon: BookOpen,     title: "Base de conocimiento",    body: "Guías prácticas de configuración para los stacks más comunes." },
  { Icon: MessageSquare,title: "WhatsApp para clientes",  body: "Canal directo para consultas operativas durante horario hábil." },
  { Icon: AlertCircle,  title: "Emergencias 24×7",        body: "Línea exclusiva para clientes activos con incidentes en producción." },
  { Icon: Wrench,       title: "Servicios profesionales", body: "Migraciones, hardening y consultoría a tarifa hora-ingeniero." }
];

const faqs = [
  { q: "¿Cuál es el SLA de respuesta?",
    a: "Crítico: 15 minutos · Alto: 1 hora · Normal: 4 horas hábiles. Para clientes con SLA reforzado los tiempos bajan a la mitad." },
  { q: "¿Cómo aviso un incidente fuera de horario?",
    a: "Si tienes tickets activos, usa el portal y márcalo como Crítico. También tenemos un número de emergencias 24×7 para clientes activos." },
  { q: "¿Realizan mantenimientos con aviso previo?",
    a: "Sí. Mantenimientos planificados se anuncian con 7 días de anticipación en status page, email y portal." },
  { q: "¿Cobran por consultas técnicas?",
    a: "Las consultas relativas a tus servicios contratados son gratuitas. Servicios profesionales adicionales (migraciones complejas, optimización) van a tarifa hora-ingeniero." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Soporte"
        title={<>Cuando algo se sale del guión, <span className="text-gradient-brand">contestamos</span>.</>}
        description="Nuestro equipo opera 24×7 desde Chile. Tickets, WhatsApp, status page y emergencias — el canal que te sirva en el momento."
        primaryCta={{ label: "Abrir ticket", href: site.contact.portal }}
        secondaryCta={{ label: "Ver status", href: "https://status.oneservidores.cl" }}
      />
      <FeatureGrid eyebrow="Canales" title="Múltiples vías porque cada incidente es distinto." features={features} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
