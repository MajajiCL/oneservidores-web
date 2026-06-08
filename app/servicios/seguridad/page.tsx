import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { ShieldCheck, Shield, Activity, Bug, Eye, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Seguridad — WAF, Anti-DDoS, SOC y monitoreo gestionado",
  description: "Servicios de seguridad gestionada: WAF, mitigación DDoS, SOC 24×7, pentesting y respuesta a incidentes."
};

const features = [
  { Icon: ShieldCheck, title: "WAF gestionado",          body: "Reglas OWASP Top 10 + custom rules afinadas para tu aplicación." },
  { Icon: Shield,      title: "Anti-DDoS volumétrico",   body: "Mitigación en el borde de red, transparente para tu aplicación." },
  { Icon: Activity,    title: "SOC 24×7",                body: "Centro de operaciones con analistas que detectan y responden incidentes." },
  { Icon: Bug,         title: "Pentesting",              body: "Pruebas de intrusión periódicas con reporte ejecutivo y técnico." },
  { Icon: Eye,         title: "Monitoreo de integridad", body: "Detección de cambios no autorizados en archivos y configuraciones críticas." },
  { Icon: AlertCircle, title: "Respuesta a incidentes",  body: "Equipo en retainer para contener, mitigar y documentar incidentes." }
];

const faqs = [
  { q: "¿Cobran por evento de DDoS?", a: "No. La mitigación está incluida — no hay sobrecosto por evento ni por escalado." },
  { q: "¿Qué incluye el SOC 24×7?",   a: "Monitoreo de logs y eventos, correlación, triage, comunicación con tu equipo y reportes mensuales." },
  { q: "¿Hacen pentest a apps móviles?", a: "Sí, pentest a web, API, móvil (iOS/Android) e infraestructura. Bajo OWASP MASVS / ASVS." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Seguridad"
        title={<>Seguridad <span className="text-gradient-brand">aplicada</span>, no slides de PowerPoint.</>}
        description="Protege tu operación con WAF, anti-DDoS y SOC operados desde Chile. Pentesting periódico y respuesta a incidentes incluidos."
        primaryCta={{ label: "Cotizar seguridad", href: "/cotizar" }}
      />
      <FeatureGrid eyebrow="Servicios" title="Seis capas para una defensa real." features={features} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
