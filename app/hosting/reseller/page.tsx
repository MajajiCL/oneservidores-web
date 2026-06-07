import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Users, Tag, Briefcase, BarChart3, Headset, Wallet } from "lucide-react";

export const metadata = {
  title: "Reseller Hosting — WHM con marca blanca",
  description: "Lanza tu marca de hosting con WHM, cPanel por cuenta, facturación y soporte de OneServidores en segundo plano."
};

const features = [
  { Icon: Users,    title: "WHM y cPanel por cuenta",  body: "Cuentas individuales con cPanel y cuotas configurables por plan." },
  { Icon: Tag,      title: "Marca blanca total",       body: "DNS, nameservers y panel personalizados con tu marca." },
  { Icon: Briefcase,title: "Templates de planes",      body: "Crea planes con precios y recursos para revender en tu propia tienda." },
  { Icon: BarChart3,title: "Métricas por cuenta",      body: "Consumo de disco, transferencia y carga visible por cuenta y plan." },
  { Icon: Headset,  title: "Soporte de segundo nivel", body: "Nuestro NOC atiende los problemas que escapan a tu equipo." },
  { Icon: Wallet,   title: "Margen real",              body: "Tarifas pensadas para que tu reseller sea negocio, no hobby." }
];

const plans = [
  { name: "Reseller 50",  tagline: "Empezando", price: "$14.990", pricePeriod: "mes",
    features: ["50 cuentas cPanel", "50 GB NVMe", "500 GB tráfico", "WHM completo", "DNS marca blanca"] },
  { name: "Reseller 150", tagline: "En crecimiento", price: "$29.990", pricePeriod: "mes", highlight: true,
    features: ["150 cuentas cPanel", "150 GB NVMe", "1.5 TB tráfico", "WHM completo", "DNS marca blanca", "Backups diarios"] },
  { name: "Reseller 500", tagline: "Operación establecida", price: "$69.990", pricePeriod: "mes",
    features: ["500 cuentas cPanel", "500 GB NVMe", "5 TB tráfico", "Recursos premium", "Soporte prioritario", "Backups + staging"] }
];

const faqs = [
  { q: "¿Mis clientes ven el nombre OneServidores?",
    a: "No. Personalizas nameservers, panel y correos transaccionales con tu marca. Tu cliente ve sólo tu marca." },
  { q: "¿Soporte para mis clientes?",
    a: "Tú das soporte de primer nivel. Cuando escala a infraestructura, nuestro NOC entra en silencio bajo tu marca." },
  { q: "¿Puedo facturar con mi sistema?",
    a: "Sí, exportas datos al sistema que prefieras (WHMCS, Blesta o el tuyo). No te atamos a nada." },
  { q: "¿Hay límites no documentados?",
    a: "No. Lo que ves en el plan es lo que recibes. Sin sobreasignación encubierta." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Reseller Hosting"
        title={<>Lanza tu marca con <span className="text-gradient-brand">WHM</span> y respaldo Tier III.</>}
        description="Revende cuentas de hosting con tu propia marca, mientras OneServidores opera la infraestructura por debajo."
        primaryCta={{ label: "Empezar como reseller", href: "/cotizar" }}
        secondaryCta={{ label: "Hablar con ventas", href: "/contacto" }}
      />
      <FeatureGrid eyebrow="Tu negocio, nuestra operación" title="Todo lo que necesitas para vender hosting con cara de empresa grande." features={features} />
      <PlansGrid eyebrow="Planes reseller" title="Tres tamaños para acompañar tu crecimiento."
        plans={plans} note="¿Más de 500 cuentas? Pasemos a VPS o dedicado dedicado para tu marca." />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
