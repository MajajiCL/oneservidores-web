import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Zap, Cpu, Gauge, HardDrive, ShieldCheck, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Hosting High Performance — cPanel NVMe + LiteSpeed",
  description: "Hosting cPanel sobre nodos NVMe afinados, LiteSpeed Enterprise, recursos garantizados y CPU dedicada por cuenta."
};

const features = [
  { Icon: Zap,        title: "LiteSpeed Enterprise",   body: "El servidor web más rápido para cargas reales: 9× más rápido que Apache." },
  { Icon: Cpu,        title: "CPU garantizada",         body: "Cores asignados por cuenta — sin compartirlos con vecinos ruidosos." },
  { Icon: Gauge,      title: "LSCache integrado",       body: "Cache de página, objetos y ESI sin plugins externos." },
  { Icon: HardDrive,  title: "NVMe en RAID 10",         body: "Almacenamiento NVMe enterprise con redundancia para IOPS sostenidos." },
  { Icon: ShieldCheck,title: "Anti-DDoS + WAF",         body: "Protección a nivel de red e Imunify360 a nivel aplicación, incluidos." },
  { Icon: BarChart3,  title: "Estadísticas detalladas", body: "AWStats, GoAccess y métricas de recursos por hora desde cPanel." }
];

const plans = [
  { name: "HP Start", tagline: "PYME", price: "$8.990", pricePeriod: "mes",
    features: ["10 GB NVMe", "1 CPU garantizada", "2 GB RAM dedicada", "Dominios ilimitados", "LSCache + WAF"] },
  { name: "HP Pro",   tagline: "E-commerce", price: "$16.990", pricePeriod: "mes", highlight: true,
    features: ["30 GB NVMe", "2 CPU garantizadas", "4 GB RAM dedicada", "Dominios ilimitados", "Backups diarios", "Object Cache"] },
  { name: "HP Elite", tagline: "Tráfico alto", price: "$32.990", pricePeriod: "mes",
    features: ["100 GB NVMe", "4 CPU garantizadas", "8 GB RAM dedicada", "Sitios ilimitados", "Soporte prioritario", "Staging"] }
];

const faqs = [
  { q: "¿En qué se diferencia del hosting cPanel normal?",  a: "Recursos garantizados (CPU + RAM por cuenta), nodos con NVMe enterprise y densidad de cuentas mucho menor por servidor." },
  { q: "¿Aguanta WooCommerce con Black Friday?",            a: "Sí, este plan está diseñado precisamente para eso. LSCache + Object Cache + NVMe sostienen los picos." },
  { q: "¿Tengo acceso SSH?",                                a: "Sí, en todos los planes HP. Con jail por usuario para mantener seguridad multi-tenant." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hosting High Performance"
        title={<>Hosting cPanel con <span className="text-gradient-brand">recursos garantizados</span>.</>}
        description="Para sitios que ya no caben en hosting compartido pero aún no necesitan un VPS completo. CPU y RAM dedicadas, NVMe enterprise y LSCache."
        primaryCta={{ label: "Ver planes", href: "#planes" }}
        secondaryCta={{ label: "Migrar mi sitio gratis", href: "/contacto" }}
      />
      <FeatureGrid eyebrow="Incluye" title="Performance de VPS, simpleza de hosting." features={features} />
      <div id="planes" />
      <PlansGrid eyebrow="Planes" title="Tres planes con recursos garantizados, no overselling." plans={plans} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
