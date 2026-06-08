import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Wrench, Server, RefreshCw, Lock, GitBranch, Zap } from "lucide-react";

export const metadata = {
  title: "Ingeniería — Implementación, migración y hardening",
  description: "Servicios de ingeniería para implementar, migrar, hardenizar y automatizar tu infraestructura con cero downtime."
};

const features = [
  { Icon: Server,    title: "Implementación llave en mano", body: "Diseño, deploy y entrega documentada de tu plataforma lista para producción." },
  { Icon: RefreshCw, title: "Migraciones sin downtime",     body: "Cambio de proveedor o nube con tráfico activo, sin interrumpir el servicio." },
  { Icon: Lock,      title: "Hardening de servidores",       body: "Bastionado siguiendo CIS Benchmarks, firewalling y monitoreo de integridad." },
  { Icon: GitBranch, title: "CI/CD y automatización",       body: "Pipelines de despliegue, IaC con Terraform/Ansible y rollback automático." },
  { Icon: Wrench,    title: "Mantenimiento gestionado",      body: "Parches, actualizaciones y operación delegada bajo SLA medible." },
  { Icon: Zap,       title: "Optimización de performance",   body: "Tuning de BD, cache, kernel y red para sostener picos de tráfico." }
];

const faqs = [
  { q: "¿Garantizan tiempos de migración?",  a: "Sí, con SoW firmado: si nos pasamos del plazo, asumimos el sobrecosto." },
  { q: "¿Trabajan con AWS, GCP y Azure?",     a: "Sí, además de OpenStack, VMware y bare-metal. La infraestructura final puede vivir donde elijas." },
  { q: "¿Dejan documentación?",               a: "Siempre. Diagramas, runbooks y procedimientos para que tu equipo opere sin depender de nosotros." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Ingeniería"
        title={<>Ingeniería que <span className="text-gradient-brand">entrega</span>, no que cobra horas.</>}
        description="Implementaciones, migraciones, hardening y automatización con foco en resultado. Documentadas y entregadas a tu equipo."
        primaryCta={{ label: "Hablar con ingeniería", href: "/contacto" }}
      />
      <FeatureGrid eyebrow="Capacidades" title="Seis frentes donde tu equipo nos puede sumar." features={features} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
