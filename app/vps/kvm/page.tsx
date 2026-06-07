import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Cpu, HardDrive, Shield, Zap, GitBranch, Terminal } from "lucide-react";

export const metadata = {
  title: "VPS KVM Linux — Virtualización completa con root real",
  description:
    "VPS KVM con CPU dedicada, NVMe RAID, snapshots, IPv6 y consola web. Provisión automática en 15 minutos."
};

const features = [
  { Icon: Cpu,       title: "vCPU dedicada",          body: "Cores virtualizados sobre AMD EPYC e Intel Xeon de última generación, sin overselling." },
  { Icon: HardDrive, title: "NVMe en RAID",           body: "Almacenamiento totalmente NVMe con redundancia, IOPS reales para bases de datos exigentes." },
  { Icon: Shield,    title: "Anti-DDoS incluido",     body: "Filtrado volumétrico en el borde de red, transparente para tu aplicación." },
  { Icon: Zap,       title: "Provisión < 15 min",     body: "Tu VPS está listo en minutos: elige plan, sistema operativo y a producción." },
  { Icon: GitBranch, title: "Snapshots y backups",    body: "Snapshots manuales o programados y backups gestionados con retención configurable." },
  { Icon: Terminal,  title: "Consola web + KVM",      body: "Accede por SSH o consola web tipo IPMI incluso si tu firewall te dejó fuera." }
];

const plans = [
  {
    name: "KVM Start", tagline: "Para proyectos iniciales", price: "$9.990", pricePeriod: "mes",
    features: ["2 vCPU dedicadas", "4 GB RAM", "60 GB NVMe", "1 IPv4 + IPv6", "Tráfico 4 TB", "Linux a elección"]
  },
  {
    name: "KVM Pro", tagline: "Aplicaciones en producción", price: "$24.990", pricePeriod: "mes", highlight: true,
    features: ["4 vCPU dedicadas", "8 GB RAM", "120 GB NVMe", "1 IPv4 + IPv6", "Tráfico 8 TB", "Snapshots semanales", "Anti-DDoS"]
  },
  {
    name: "KVM Business", tagline: "Cargas de mayor demanda", price: "$49.990", pricePeriod: "mes",
    features: ["8 vCPU dedicadas", "16 GB RAM", "240 GB NVMe", "1 IPv4 + IPv6", "Tráfico 12 TB", "Backups gestionados", "Soporte prioritario"]
  },
  {
    name: "KVM Scale", tagline: "Clusters y workloads pesados", price: "$89.990", pricePeriod: "mes",
    features: ["16 vCPU dedicadas", "32 GB RAM", "480 GB NVMe", "2 IPv4 + IPv6", "Tráfico 20 TB", "Backups + snapshots", "SLA reforzado"]
  }
];

const faqs = [
  { q: "¿Qué diferencia un VPS KVM de un LXC?",
    a: "KVM es virtualización completa con kernel propio: corres cualquier sistema operativo (incluido Windows en planes que lo permitan). LXC son contenedores Linux más livianos y rápidos, pero comparten kernel con el host." },
  { q: "¿Tengo acceso root y puedo instalar lo que quiera?",
    a: "Sí, root real desde el primer minuto. Puedes instalar paneles, compilar kernels, abrir puertos, todo lo que necesites." },
  { q: "¿Cómo escalo cuando me quedo corto?",
    a: "Upgrade de RAM/CPU en línea con reinicio breve, y migración a planes superiores sin cambiar de IP. Sin migrar de proveedor." },
  { q: "¿Hay backups incluidos?",
    a: "Desde el plan Pro incluimos snapshots semanales. Puedes activar backups externos a tu cuenta de S3/B2 con un click." },
  { q: "¿Qué SLA ofrecen?",
    a: "99.99% de disponibilidad mensual con compensación automática en caso de incumplimiento." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="VPS KVM Linux"
        title={<>VPS KVM con <span className="text-gradient-brand">root real</span> y NVMe.</>}
        description="Virtualización completa sobre hardware AMD EPYC e Intel Xeon. Snapshots, consola web, IPv6 y anti-DDoS incluidos. Tu VPS listo en 15 minutos."
        primaryCta={{ label: "Cotizar VPS KVM", href: "/cotizar" }}
        secondaryCta={{ label: "Comparar con LXC", href: "/vps/lxc" }}
      />
      <FeatureGrid
        eyebrow="Por qué KVM"
        title="Aislamiento de hardware, control total."
        description="Cada VPS recibe vCPU dedicada y memoria garantizada. Sin vecinos ruidosos, sin sorpresas de rendimiento."
        features={features}
      />
      <PlansGrid
        eyebrow="Planes"
        title="Cuatro tamaños para cubrir cualquier carga."
        description="Precios en CLP, mensuales y sin permanencia. Descuentos en planes anuales."
        plans={plans}
        note="¿Necesitas más recursos o configuración personalizada? Hablemos en /cotizar."
      />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
