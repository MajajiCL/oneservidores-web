import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Cable, Building2, Snowflake, KeyRound, Wifi, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Colocation — Aloja tu hardware en datacenter Tier III",
  description: "Espacio en rack con energía A+B, refrigeración por pasillos confinados, acceso biométrico y conectividad multi-carrier."
};

const features = [
  { Icon: Cable,      title: "Conectividad multi-carrier", body: "Acuerdos con Telxius, Sparkle, Level 3 y peering local NAP.cl." },
  { Icon: Building2,  title: "Datacenter Tier III",         body: "Energía redundante A+B, generadores y UPS dimensionados para N+1." },
  { Icon: Snowflake,  title: "Refrigeración por pasillos",  body: "Confinamiento de pasillos frío/caliente para máxima eficiencia térmica." },
  { Icon: KeyRound,   title: "Acceso biométrico 24×7",      body: "Control de acceso por huella + tarjeta, con bitácora completa y CCTV." },
  { Icon: Wifi,       title: "Smart-hands incluido",        body: "Reinicios, cambios de medio, montaje de ISO y operación menor sin costo extra." },
  { Icon: ShieldCheck,title: "Cumplimiento y auditoría",    body: "Trazabilidad completa para auditorías y cumplimiento ISO/PCI." }
];

const plans = [
  {
    name: "Quarter Rack", tagline: "Hasta 10U", price: "Desde $189.990", pricePeriod: "mes",
    features: ["10U útiles", "PDU dual 16A", "20 Mbps committed", "1 IPv4 + IPv6", "Smart-hands básico"]
  },
  {
    name: "Half Rack", tagline: "Hasta 22U", price: "Desde $329.990", pricePeriod: "mes", highlight: true,
    features: ["22U útiles", "PDU dual 32A", "100 Mbps committed", "Bloque /29 IPv4", "Smart-hands incluido", "Acceso 24×7"]
  },
  {
    name: "Full Rack", tagline: "47U útiles", price: "Desde $589.990", pricePeriod: "mes",
    features: ["47U exclusivos", "PDU dual 32A", "500 Mbps committed", "Bloque /28 IPv4", "Smart-hands prioritario", "Cross-connects 2 incluidos"]
  }
];

const faqs = [
  { q: "¿Pueden recibir mi hardware en su bodega?",
    a: "Sí, recibimos equipos, verificamos el inventario y los montamos en tu rack. Te enviamos foto del montaje completado." },
  { q: "¿Qué pasa con mi tráfico si supero lo committed?",
    a: "El tráfico extra se cobra por uso medido en p95, sin overage punitivo. También puedes aumentar el commit." },
  { q: "¿Ofrecen cross-connects con otros proveedores?",
    a: "Sí, dentro del datacenter y a las salas de carrier hotel asociadas. Algunos planes incluyen cross-connects sin costo." },
  { q: "¿Puedo visitar mi rack?",
    a: "Cuando quieras, 24×7, con pre-aviso de 30 minutos para validar identidad. Sin costo." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Colocation / Housing"
        title={<>Aloja tu hardware en un <span className="text-gradient-brand">Tier III</span>.</>}
        description="Espacio en rack en datacenter chileno, con energía y red redundantes, acceso 24×7 y operación humana incluida."
        primaryCta={{ label: "Cotizar colocation", href: "/cotizar" }}
        secondaryCta={{ label: "Conocer el datacenter", href: "/datacenter" }}
      />
      <FeatureGrid
        eyebrow="Infraestructura"
        title="Todo lo que un datacenter debe ofrecer — y nada que tengas que pedir aparte."
        features={features}
      />
      <PlansGrid eyebrow="Tamaños" title="Desde un cuarto de rack hasta una sala dedicada."
        plans={plans} note="Para suite privada (4 o más racks) cotizamos solución a medida." />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
