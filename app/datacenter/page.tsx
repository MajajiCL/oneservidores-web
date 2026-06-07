import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Metrics } from "@/components/metrics";
import { Spotlight } from "@/components/spotlight";
import { Bandwidth } from "@/components/bandwidth";
import { Zap, Snowflake, KeyRound, Shield, Wifi, Building2 } from "lucide-react";

export const metadata = {
  title: "Datacenter — Tier III en Chile",
  description: "Datacenter Tier III con energía redundante, refrigeración por pasillos confinados y conectividad multi-carrier."
};

const features = [
  { Icon: Zap,        title: "Energía A+B",                body: "Dos rutas eléctricas independientes con UPS y generadores diesel N+1." },
  { Icon: Snowflake,  title: "Refrigeración eficiente",   body: "Confinamiento de pasillos frío/caliente, PUE objetivo < 1.4." },
  { Icon: KeyRound,   title: "Acceso biométrico",         body: "Lectores de huella, tarjeta y mantrap. CCTV grabado con retención de 60 días." },
  { Icon: Shield,     title: "Sistemas anti-incendio",    body: "Detección VESDA y supresión por gas FM-200, sin daño a hardware." },
  { Icon: Wifi,       title: "Multi-carrier",             body: "Acuerdos directos con Telxius, Sparkle, Level 3 y peering NAP.cl." },
  { Icon: Building2,  title: "Salas independientes",      body: "Salas separadas para colocation, cloud y telecom, con accesos controlados." }
];

const faqs = [
  { q: "¿Dónde está el datacenter?",
    a: "Santiago de Chile, en zona urbana con doble acometida eléctrica de proveedores distintos." },
  { q: "¿Cómo manejan los cortes de luz?",
    a: "UPS dimensionados para sostener carga durante el cambio a generadores diesel (típicamente 8 segundos). Diesel para 72 horas sin reabastecimiento." },
  { q: "¿Cuál es el SLA del datacenter?",
    a: "99.99% de disponibilidad eléctrica y de enfriamiento, con compensaciones automáticas en caso de incumplimiento." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Datacenter"
        title={<>Un piso técnico pensado para <span className="text-gradient-brand">no apagarse jamás</span>.</>}
        description="Datacenter Tier III en Santiago con energía y enfriamiento redundantes, control de acceso biométrico y operación humana 24×7."
        primaryCta={{ label: "Cotizar colocation", href: "/colocation" }}
        secondaryCta={{ label: "Agendar visita guiada", href: "/contacto" }}
      />
      <Metrics />
      <FeatureGrid eyebrow="Infraestructura" title="Cada elemento es redundante porque la continuidad lo exige."
        features={features} />
      <Bandwidth />
      <Spotlight />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
