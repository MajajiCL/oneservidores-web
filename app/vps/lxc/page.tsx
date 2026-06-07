import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Boxes, Gauge, Layers, Zap, Lock, RefreshCw } from "lucide-react";

export const metadata = {
  title: "VPS LXC Linux — Contenedores rápidos y livianos",
  description:
    "VPS LXC con rendimiento cercano a bare-metal y arranque inmediato. Ideal para Node.js, PHP, microservicios y stagings."
};

const features = [
  { Icon: Boxes,    title: "Contenedores Linux",  body: "Tecnología LXC con aislamiento por namespaces y cgroups, eficiente y maduro." },
  { Icon: Gauge,    title: "Rendimiento bare-metal",body: "Sin capa de hipervisor: tu carga corre directamente sobre el kernel del host." },
  { Icon: Layers,   title: "Imágenes prearmadas",  body: "Debian, Ubuntu, AlmaLinux, Rocky o tu plantilla personalizada lista en segundos." },
  { Icon: Zap,      title: "Arranque inmediato",    body: "Boot en menos de 5 segundos, ideal para staging, CI y entornos efímeros." },
  { Icon: Lock,     title: "Aislamiento seguro",    body: "Perfiles AppArmor/SELinux preconfigurados y red privada opcional." },
  { Icon: RefreshCw,title: "Snapshots rápidos",     body: "Toma snapshots en segundos por lo liviano de los contenedores." }
];

const plans = [
  {
    name: "LXC Mini",  tagline: "Pruebas y stagings", price: "$5.990", pricePeriod: "mes",
    features: ["1 vCPU", "2 GB RAM", "30 GB NVMe", "1 IPv4 + IPv6", "Tráfico 2 TB"]
  },
  {
    name: "LXC Start", tagline: "Apps livianas",      price: "$8.990", pricePeriod: "mes", highlight: true,
    features: ["2 vCPU", "4 GB RAM", "60 GB NVMe", "1 IPv4 + IPv6", "Tráfico 4 TB", "Snapshots"]
  },
  {
    name: "LXC Pro",   tagline: "Producción",         price: "$18.990", pricePeriod: "mes",
    features: ["4 vCPU", "8 GB RAM", "120 GB NVMe", "1 IPv4 + IPv6", "Tráfico 8 TB", "Snapshots", "Soporte prioritario"]
  },
  {
    name: "LXC Plus",  tagline: "Cargas mayores",     price: "$34.990", pricePeriod: "mes",
    features: ["8 vCPU", "16 GB RAM", "240 GB NVMe", "2 IPv4 + IPv6", "Tráfico 12 TB", "Backups gestionados"]
  }
];

const faqs = [
  { q: "¿Cuándo conviene LXC sobre KVM?",
    a: "Cuando tu carga es Linux y buscas máximo rendimiento por peso. Microservicios, stagings, runners de CI y workers escalan más por dólar en LXC." },
  { q: "¿Tengo root dentro del contenedor?",
    a: "Sí, root completo dentro del contenedor. Algunas operaciones a nivel kernel quedan filtradas por seguridad, pero el 99% de cargas comunes funciona sin ajustes." },
  { q: "¿Puedo correr Docker dentro del LXC?",
    a: "Sí, soportamos nesting de contenedores. Habilítalo desde el panel o pídelo al soporte." },
  { q: "¿Cómo respaldas mi contenedor?",
    a: "Snapshots manuales o programados desde el panel, con retención configurable. También backups externos opcionales." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="VPS LXC Linux"
        title={<>Contenedores LXC <span className="text-gradient-brand">livianos y rápidos</span>.</>}
        description="Aprovecha rendimiento bare-metal con la flexibilidad de un contenedor. Ideal para staging, microservicios y workloads modernos."
        primaryCta={{ label: "Cotizar VPS LXC", href: "/cotizar" }}
        secondaryCta={{ label: "Comparar con KVM", href: "/vps/kvm" }}
      />
      <FeatureGrid
        eyebrow="Por qué LXC"
        title="Lo mejor de dos mundos: ligero como un contenedor, robusto como un VPS."
        features={features}
      />
      <PlansGrid eyebrow="Planes" title="Cuatro planes pensados para el ciclo de vida de una app."
        description="Empieza con LXC Mini para pruebas y escala a Plus sin migrar de proveedor."
        plans={plans} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
