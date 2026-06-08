import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Compass, ClipboardCheck, GitBranch, Layers3, Calculator, FileSearch } from "lucide-react";

export const metadata = {
  title: "Asesorías — Consultoría tecnológica y arquitectura",
  description: "Auditoría técnica, diseño de arquitectura cloud, plan de migración y elección de stack. Sin venta dura."
};

const features = [
  { Icon: Compass,        title: "Auditoría técnica",        body: "Revisión completa de tu infraestructura actual: cuellos de botella, riesgos y oportunidades." },
  { Icon: Layers3,        title: "Arquitectura cloud",       body: "Diseño de soluciones híbridas, multi-cloud o on-prem, según tu caso." },
  { Icon: GitBranch,      title: "Plan de migración",        body: "Roadmap detallado con hitos, dependencias y ventanas de mantenimiento." },
  { Icon: ClipboardCheck, title: "Selección de stack",       body: "Te ayudamos a elegir BD, contenedores, orquestadores, CDN y monitoreo." },
  { Icon: Calculator,     title: "TCO y dimensionamiento",   body: "Cálculo realista de costos: hardware, licencias, ancho de banda, operación." },
  { Icon: FileSearch,     title: "Compliance y auditoría",   body: "Apoyo para ISO 27001, PCI-DSS, HIPAA y normativa local chilena." }
];

const faqs = [
  { q: "¿Cómo se factura una asesoría?",      a: "Por hora-ingeniero (UF) o paquete cerrado de horas. Te enviamos el SoW antes de cualquier compromiso." },
  { q: "¿Tengo que contratar infraestructura?", a: "No. Las asesorías son independientes — puedes recibir el diagnóstico y aplicarlo donde quieras." },
  { q: "¿Firman NDA?",                         a: "Por defecto, sí. Si tienes un modelo propio, lo revisamos legal y firmamos." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Asesorías"
        title={<>Consultoría que <span className="text-gradient-brand">resuelve</span>, no que vende.</>}
        description="Te ayudamos a tomar decisiones de infraestructura con criterio técnico, no comercial. Diagnóstico, arquitectura y roadmap accionables."
        primaryCta={{ label: "Solicitar asesoría", href: "/contacto" }}
      />
      <FeatureGrid eyebrow="Servicios" title="Seis áreas donde aportamos valor concreto." features={features} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
