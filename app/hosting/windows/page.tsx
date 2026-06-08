import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Globe, Code2, Database, Lock, FileCog, Mail } from "lucide-react";

export const metadata = {
  title: "Hosting Windows — Plesk con ASP.NET y MSSQL",
  description: "Hosting Windows Server con Plesk, ASP.NET, MSSQL, IIS y FTP. Ideal para aplicaciones .NET y legacy ASP."
};

const features = [
  { Icon: Globe,    title: "Plesk + IIS",          body: "Panel Plesk moderno sobre IIS con soporte para múltiples sitios y dominios." },
  { Icon: Code2,    title: "ASP.NET y .NET Core",  body: "ASP.NET WebForms, MVC, Core y .NET 8 con manejadores configurables." },
  { Icon: Database, title: "MSSQL incluido",        body: "Bases SQL Server con backups y management studio web." },
  { Icon: FileCog,  title: "Classic ASP y PHP",    body: "Soporte para apps legacy y combinación PHP-Windows si lo necesitas." },
  { Icon: Mail,     title: "Correo profesional",    body: "Cuentas con MailEnable, webmail y reglas antispam." },
  { Icon: Lock,     title: "SSL gratis",            body: "Let's Encrypt con renovación automática para todos tus dominios." }
];

const plans = [
  { name: "Windows Start",  tagline: "App única", price: "$6.990", pricePeriod: "mes",
    features: ["5 GB NVMe", "1 sitio", "MSSQL 1 GB", "ASP.NET 4.8+", "Plesk básico"] },
  { name: "Windows Business",tagline: "Multi-sitio", price: "$11.990", pricePeriod: "mes", highlight: true,
    features: ["25 GB NVMe", "Sitios ilimitados", "MSSQL 5 GB", ".NET 8 + Core", "Backups diarios"] },
  { name: "Windows Pro",    tagline: "Empresarial", price: "$24.990", pricePeriod: "mes",
    features: ["80 GB NVMe", "Sitios ilimitados", "MSSQL 20 GB", "Recursos premium", "Soporte prioritario"] }
];

const faqs = [
  { q: "¿Soportan .NET 8 / .NET 9?",    a: "Sí, junto con .NET 4.8 para apps legacy. Cambia la versión por sitio desde Plesk." },
  { q: "¿Puedo subir mi base MSSQL?",   a: "Sí, importa .bak desde Plesk o vía Management Studio web." },
  { q: "¿Hay diferencia de precio con Linux?", a: "Sí, las licencias Windows y MSSQL tienen costo. Para apps que no las requieren, Linux es más barato." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hosting Windows"
        title={<>Hosting Windows con <span className="text-gradient-brand">Plesk</span> y MSSQL.</>}
        description="Para aplicaciones ASP.NET, .NET Core y stacks legacy. Plesk moderno, MSSQL incluido y soporte para múltiples versiones de .NET."
        primaryCta={{ label: "Ver planes", href: "#planes" }}
        secondaryCta={{ label: "Migrar mi app", href: "/contacto" }}
      />
      <FeatureGrid eyebrow="Incluye" title="Todo lo que una app Windows necesita en producción." features={features} />
      <div id="planes" />
      <PlansGrid eyebrow="Planes" title="Tres planes según tamaño y complejidad." plans={plans} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
