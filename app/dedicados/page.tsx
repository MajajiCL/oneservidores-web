import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Cpu, HardDrive, Network, Shield, Settings, LifeBuoy } from "lucide-react";

export const metadata = {
  title: "Servidores Dedicados — AMD EPYC e Intel Xeon en Chile",
  description: "Hardware exclusivo en datacenter Tier III. AMD EPYC, Intel Xeon, NVMe RAID y red 10 Gbps con IPMI dedicado."
};

const features = [
  { Icon: Cpu,      title: "CPU de última generación", body: "AMD EPYC Genoa y Intel Xeon Sapphire Rapids. Núcleos físicos, sin contención." },
  { Icon: HardDrive,title: "NVMe RAID por hardware",    body: "Hasta 8 NVMe en RAID 10 con controladora dedicada para máxima IOPS." },
  { Icon: Network,  title: "Red 10 Gbps real",          body: "Uplink de 10 Gbps por servidor con tráfico medido en justo, no compartido." },
  { Icon: Shield,   title: "Anti-DDoS volumétrico",     body: "Mitigación incluida en el borde, sin sobrecostos por evento." },
  { Icon: Settings, title: "IPMI dedicado",             body: "Acceso fuera de banda con consola gráfica y montaje de ISO remoto." },
  { Icon: LifeBuoy, title: "Soporte ingeniería",        body: "Acceso directo a operadores del NOC para troubleshooting técnico real." }
];

const plans = [
  {
    name: "DS-EPYC-S",   tagline: "Web apps y bases medianas", price: "$129.990", pricePeriod: "mes",
    features: ["AMD EPYC 8-core", "32 GB DDR5 ECC", "2× 1 TB NVMe", "Red 1 Gbps", "1 IPv4 + IPv6", "IPMI dedicado"]
  },
  {
    name: "DS-EPYC-M",   tagline: "Producción demandante", price: "$229.990", pricePeriod: "mes", highlight: true,
    features: ["AMD EPYC 16-core", "64 GB DDR5 ECC", "2× 1.92 TB NVMe RAID 1", "Red 1 Gbps", "1 IPv4 + IPv6", "Anti-DDoS"]
  },
  {
    name: "DS-EPYC-L",   tagline: "Bases de datos y BI",   price: "$389.990", pricePeriod: "mes",
    features: ["AMD EPYC 32-core", "128 GB DDR5 ECC", "4× 3.84 TB NVMe RAID 10", "Red 10 Gbps", "2 IPv4 + IPv6", "Backups gestionados"]
  },
  {
    name: "DS-XEON-XL",  tagline: "Workloads enterprise",  price: "Consultar", pricePeriod: "mes",
    features: ["Intel Xeon Platinum", "256 GB+ DDR5 ECC", "NVMe RAID configurable", "Red 10 Gbps", "Bloque IPv4 /29", "SLA reforzado"]
  }
];

const faqs = [
  { q: "¿Cuánto demora la entrega de un dedicado?",
    a: "Stock en Santiago: 24 a 72 horas hábiles. Configuraciones bajo pedido: 5 a 10 días hábiles." },
  { q: "¿Puedo elegir mi propia distro o hipervisor?",
    a: "Sí. Instalamos Debian, Ubuntu, AlmaLinux, Rocky, Windows Server, Proxmox o VMware. También aceptamos ISOs propias." },
  { q: "¿Incluye gestión del sistema operativo?",
    a: "Por defecto es servicio unmanaged. Tenemos planes managed con monitoreo, parches y respuesta 24×7." },
  { q: "¿Qué pasa si el hardware falla?",
    a: "Reemplazo de componente en sitio en menos de 4 horas hábiles. Si la falla es del nodo completo, migramos a uno equivalente con tu última snapshot." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Servidores Dedicados"
        title={<>Hardware <span className="text-gradient-brand">exclusivo</span> en Tier III.</>}
        description="AMD EPYC e Intel Xeon de última generación, NVMe RAID, red 10 Gbps y operación 24×7 en datacenter chileno."
        primaryCta={{ label: "Cotizar dedicado", href: "/cotizar" }}
        secondaryCta={{ label: "Hablar con ingeniería", href: "/contacto" }}
      />
      <FeatureGrid
        eyebrow="Qué incluye"
        title="Pensado para producción seria desde el primer minuto."
        features={features}
      />
      <PlansGrid eyebrow="Configuraciones" title="Cuatro configuraciones base — todas personalizables."
        plans={plans} note="¿Necesitas GPU, almacenamiento masivo o NIC de 25/100 Gbps? Lo armamos a medida." />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
