import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Rocket, Gauge, ShieldCheck, RefreshCw, Database, Lock } from "lucide-react";

export const metadata = {
  title: "VPS WordPress — CyberPanel + OpenLiteSpeed afinado",
  description: "WordPress optimizado para Core Web Vitals con CyberPanel, OpenLiteSpeed, LSCache, staging y backups."
};

const features = [
  { Icon: Rocket,     title: "OpenLiteSpeed + LSCache", body: "Servidor optimizado para WordPress, con cache de página y objetos integrado." },
  { Icon: Gauge,      title: "Core Web Vitals verdes",  body: "Stack afinado para puntajes altos en PageSpeed Insights y LCP < 1.5s." },
  { Icon: ShieldCheck,title: "WAF + Anti-DDoS",         body: "Reglas WAF específicas para WP, bloqueo de XML-RPC y mitigación DDoS." },
  { Icon: RefreshCw,  title: "Staging en un click",     body: "Clona producción a staging, prueba cambios y publica sin descargas." },
  { Icon: Database,   title: "Backups gestionados",     body: "Backups diarios con retención de 30 días y restauración granular por archivo." },
  { Icon: Lock,       title: "SSL + parches",           body: "SSL gratuito y actualizaciones de seguridad automáticas del stack." }
];

const plans = [
  { name: "WP Start",  tagline: "1 sitio",  price: "$11.990", pricePeriod: "mes",
    features: ["2 vCPU", "4 GB RAM", "40 GB NVMe", "1 sitio WordPress", "Staging", "Backups diarios"] },
  { name: "WP Pro",    tagline: "Multi-sitio", price: "$24.990", pricePeriod: "mes", highlight: true,
    features: ["4 vCPU", "8 GB RAM", "80 GB NVMe", "10 sitios WordPress", "Staging + WAF", "Backups + Object Cache"] },
  { name: "WP Agency", tagline: "Para agencias", price: "$49.990", pricePeriod: "mes",
    features: ["8 vCPU", "16 GB RAM", "160 GB NVMe", "Sitios ilimitados", "Staging + WAF + CDN", "Soporte prioritario"] }
];

const faqs = [
  { q: "¿Migran mi WordPress sin downtime?",
    a: "Sí. Hacemos la migración en paralelo, validamos el sitio en preview y sólo cambiamos DNS cuando confirmas. Cero downtime." },
  { q: "¿Funciona con WooCommerce y elementos pesados?",
    a: "Sí, el stack está afinado para WooCommerce, Elementor, Divi y constructores visuales. LSCache acelera el checkout también." },
  { q: "¿Puedo instalar plugins de cache propios?",
    a: "No es necesario — LSCache ya está integrado y suele rendir mejor que W3 Total Cache o WP Rocket. Si insistes, puedes." },
  { q: "¿Qué retención tienen los backups?",
    a: "30 días en planes Pro y Agency, 14 días en Start. Restauración granular por archivo o tabla SQL." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="VPS WordPress"
        title={<>WordPress afinado para <span className="text-gradient-brand">picos de tráfico</span>.</>}
        description="CyberPanel + OpenLiteSpeed con LSCache, WAF, staging y backups. Tu WordPress más rápido y más seguro desde el primer minuto."
        primaryCta={{ label: "Cotizar VPS WP", href: "/cotizar" }}
        secondaryCta={{ label: "Migrar mi sitio gratis", href: "/contacto" }}
      />
      <FeatureGrid eyebrow="Optimizado para WP" title="Cada componente del stack es para que WordPress vuele." features={features} />
      <PlansGrid eyebrow="Planes" title="Tres planes según cuántos sitios manejas."
        plans={plans} note="Agencias con más de 25 sitios: hablemos de un plan custom." />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
