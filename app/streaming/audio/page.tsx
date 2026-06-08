import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Radio, Music, Headphones, Mic, Wifi, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Audio Streaming — SHOUTcast, Icecast y autoDJ",
  description: "Servidores de radio online con SHOUTcast, Icecast, autoDJ, panel web y bitrate hasta 320 kbps. Oyentes desde 100 hasta ilimitados."
};

const features = [
  { Icon: Radio,      title: "SHOUTcast + Icecast",  body: "Servidores listos con SHOUTcast v2, Icecast 2.4 y soporte HLS para móviles." },
  { Icon: Music,      title: "autoDJ incluido",      body: "Programación automática 24/7 con biblioteca FTP y rotación de bloques." },
  { Icon: Headphones, title: "Bitrate hasta 320 kbps", body: "Calidad estudio sin saturar a tus oyentes. Soporte MP3 y AAC+." },
  { Icon: Mic,        title: "AutoDJ + Live",        body: "Mezcla emisiones en vivo con la programación automática sin caídas." },
  { Icon: Wifi,       title: "Reproductor embebible",body: "Widget HTML5 personalizable con tu marca para insertar en tu web." },
  { Icon: BarChart3,  title: "Estadísticas en vivo", body: "Oyentes únicos, picos, países y dispositivos en tiempo real." }
];

const plans = [
  { name: "Audio Start",  tagline: "100 oyentes",   price: "$5.990", pricePeriod: "mes",
    features: ["100 oyentes simultáneos", "Bitrate 128 kbps", "5 GB autoDJ", "SHOUTcast/Icecast", "Panel web"] },
  { name: "Audio Pro",    tagline: "500 oyentes",   price: "$12.990", pricePeriod: "mes", highlight: true,
    features: ["500 oyentes simultáneos", "Bitrate 192 kbps", "15 GB autoDJ", "HLS para móviles", "Estadísticas en vivo"] },
  { name: "Audio Elite",  tagline: "Ilimitados",    price: "$29.990", pricePeriod: "mes",
    features: ["Oyentes ilimitados", "Bitrate 320 kbps", "50 GB autoDJ", "Reproductor con marca", "Soporte prioritario"] }
];

const faqs = [
  { q: "¿Puedo usar mi propio dominio?",   a: "Sí, configuramos un subdominio tuyo apuntando al servidor sin costo." },
  { q: "¿Soportan transmisiones HD AAC+?", a: "Sí, en todos los planes Pro y Elite. AAC+ rinde mejor a bajo bitrate manteniendo calidad." },
  { q: "¿Puedo cambiar entre Live y autoDJ?", a: "Sí, en cualquier momento. Cuando entras en vivo, autoDJ pausa automáticamente." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Audio Streaming"
        title={<>Tu radio online, <span className="text-gradient-brand">siempre al aire</span>.</>}
        description="SHOUTcast, Icecast, autoDJ y reproductor embebible para emitir 24/7 con calidad de estudio. Desde 100 oyentes hasta ilimitados."
        primaryCta={{ label: "Cotizar streaming", href: "/cotizar" }}
      />
      <FeatureGrid eyebrow="Características" title="Todo lo que una radio online necesita, sin plugins externos." features={features} />
      <PlansGrid eyebrow="Planes" title="Tres planes según tu audiencia." plans={plans} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
