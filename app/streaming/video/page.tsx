import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlansGrid } from "@/components/plans-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Tv, Video, Film, Globe2, Gauge, Shield } from "lucide-react";

export const metadata = {
  title: "Video Streaming — Live RTMP, VOD y transcoding",
  description: "Plataforma de video streaming con RTMP, HLS, DASH y transcoding multi-bitrate sobre la red OneServidores."
};

const features = [
  { Icon: Tv,     title: "Live RTMP + HLS/DASH", body: "Ingest RTMP y entrega HLS/DASH para reproducir en cualquier dispositivo." },
  { Icon: Video,  title: "Transcoding multi-bitrate", body: "ABR para que cada espectador reciba la calidad que su conexión permite." },
  { Icon: Film,   title: "Video on Demand",     body: "Sube y publica tu biblioteca con CDN y geo-distribución opcional." },
  { Icon: Globe2, title: "CDN regional",         body: "Distribución desde múltiples PoPs para latencia mínima en LATAM." },
  { Icon: Gauge,  title: "Ancho de banda real",  body: "Hasta 10 Gbps por servidor — el bitrate que pagas es el que recibes." },
  { Icon: Shield, title: "DRM y token auth",     body: "Protege contenido premium con token signing y DRM Widevine opcional." }
];

const plans = [
  { name: "Video Live",  tagline: "Streaming en vivo", price: "$24.990", pricePeriod: "mes",
    features: ["1 ingest RTMP", "Transcoding 720p+1080p", "500 espectadores simultáneos", "HLS + DASH", "Estadísticas"] },
  { name: "Video Pro",   tagline: "Live + VOD",         price: "$49.990", pricePeriod: "mes", highlight: true,
    features: ["3 ingests RTMP", "Transcoding hasta 4K", "2.000 espectadores simultáneos", "200 GB VOD storage", "CDN regional"] },
  { name: "Video Enterprise", tagline: "Multi-canal", price: "Consultar", pricePeriod: "mes",
    features: ["Ingests ilimitados", "Transcoding personalizado", "Audiencia ilimitada", "Storage personalizado", "DRM Widevine", "SLA reforzado"] }
];

const faqs = [
  { q: "¿Soportan OBS Studio y vMix?",      a: "Sí, cualquier encoder que entregue RTMP o RTMPS funciona out-of-the-box." },
  { q: "¿Qué latencia tienen los streams?", a: "HLS estándar: 6-12s. Modo LL-HLS (low-latency): 2-4s. RTMP playback: < 2s." },
  { q: "¿Puedo monetizar con publicidad?",  a: "Sí, los planes Pro y Enterprise soportan VAST/VPAID para insertar anuncios." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Video Streaming"
        title={<>Live, VOD y <span className="text-gradient-brand">transcoding</span> sobre red propia.</>}
        description="Plataforma completa de video streaming con ingest RTMP, ABR, CDN regional y protección de contenido — todo gestionado desde un solo panel."
        primaryCta={{ label: "Cotizar streaming", href: "/cotizar" }}
      />
      <FeatureGrid eyebrow="Capacidades" title="Una plataforma de video lista para escalar a millones de espectadores." features={features} />
      <PlansGrid eyebrow="Planes" title="Desde un canal live hasta operaciones multi-canal." plans={plans} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
