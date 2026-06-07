import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Globe, Mail, Zap, Lock, Database, Archive } from "lucide-react";

export const metadata = {
  title: "Web Hosting cPanel — LiteSpeed + LSCache",
  description: "Hosting cPanel con LiteSpeed Enterprise, LSCache, correo profesional, SSL gratis y backups diarios."
};

const features = [
  { Icon: Globe,   title: "cPanel + LiteSpeed",      body: "Panel cPanel familiar con servidor web LiteSpeed Enterprise — más rápido que Apache." },
  { Icon: Mail,    title: "Correo profesional",      body: "Cuentas ilimitadas con webmail, antispam y antivirus integrados." },
  { Icon: Zap,     title: "LSCache + HTTP/3",        body: "Cache automático para WordPress, Joomla y Magento. HTTP/3 y Brotli activados." },
  { Icon: Lock,    title: "SSL Let's Encrypt",       body: "Certificados gratuitos con renovación automática para todos tus dominios." },
  { Icon: Database,title: "Bases MySQL/MariaDB",     body: "Bases ilimitadas con phpMyAdmin y soporte para versiones modernas de PHP." },
  { Icon: Archive, title: "Backups diarios",         body: "Respaldos automáticos diarios con retención y restauración en un click." }
];

const plans = [
  { name: "Start",   tagline: "Sitios personales", price: "$2.990", pricePeriod: "mes",
    features: ["5 GB NVMe", "1 dominio", "10 cuentas de correo", "Tráfico ilimitado", "SSL gratis"] },
  { name: "Business",tagline: "PyMES y emprendimientos", price: "$5.990", pricePeriod: "mes", highlight: true,
    features: ["25 GB NVMe", "Dominios ilimitados", "Correo ilimitado", "LSCache activado", "Backups diarios", "SSL gratis"] },
  { name: "Pro",     tagline: "Tiendas y portafolios grandes", price: "$11.990", pricePeriod: "mes",
    features: ["80 GB NVMe", "Dominios ilimitados", "Correo ilimitado", "Recursos premium", "Soporte prioritario", "Backups + staging"] }
];

const faqs = [
  { q: "¿Puedo migrar mi sitio actual sin costo?",
    a: "Sí. Migramos hasta 5 sitios cPanel gratis al contratar cualquier plan Business o Pro." },
  { q: "¿Qué versión de PHP soportan?",
    a: "PHP 7.4 a 8.4 seleccionable por dominio, con extensiones comunes habilitadas." },
  { q: "¿Tienen acceso SSH?",
    a: "Sí, en los planes Business y Pro habilitamos SSH con jail por usuario." },
  { q: "¿Cómo funcionan los backups?",
    a: "Backups diarios automáticos con retención de 14 días. Restauración a un click desde cPanel." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Web Hosting cPanel"
        title={<>Hosting cPanel con <span className="text-gradient-brand">LiteSpeed Enterprise</span>.</>}
        description="Sitios web y correo profesional sobre servidor LiteSpeed con LSCache, SSL gratis, backups diarios y soporte humano."
        primaryCta={{ label: "Ver planes", href: "#planes" }}
        secondaryCta={{ label: "Migrar mi sitio gratis", href: "/contacto" }}
      />
      <FeatureGrid eyebrow="Incluye" title="Todo lo que un sitio en producción necesita." features={features} />
      <div id="planes" />
      <PlansGrid eyebrow="Planes" title="Tres planes simples, sin letra chica."
        plans={plans} note="Descuento del 15% en planes anuales y 25% en planes a 2 años." />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
