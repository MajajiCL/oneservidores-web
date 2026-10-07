import { HeroClassic } from "@/components/home/hero-classic";
import { HostingPricing } from "@/components/home/hosting-pricing";
import { ResellerPricing } from "@/components/home/reseller-pricing";
import { VpsFeatured } from "@/components/home/vps-featured";
import { DomainSearch } from "@/components/home/domain-search";
import { DatacenterBanner } from "@/components/home/datacenter-banner";
import { FeaturesGrid } from "@/components/home/features-grid";
import { TestimonialsBanner } from "@/components/home/testimonials-banner";
import { FaqAccordion } from "@/components/home/faq-accordion";
import { SupportBanner } from "@/components/home/support-banner";
import { PartnersLogos } from "@/components/home/partners-logos";

export default function Home() {
  return (
    <>
      {/* 1. Hero promocional con oferta de lanzamiento */}
      <HeroClassic />

      {/* 2. Web Hosting cPanel con toggle Mensual / Anual */}
      <HostingPricing />

      {/* 3. Reseller Web Hosting cPanel */}
      <ResellerPricing />

      {/* 4. Planes VPS destacados: LXC, KVM, WordPress y Dedicados */}
      <VpsFeatured />

      {/* 5. Buscador de dominios populares */}
      <DomainSearch />

      {/* 6. Franja Data Center Tier III (Contraste oscuro de alto impacto) */}
      <DatacenterBanner />

      {/* 7. Características OneServidores (6 cards limpias) */}
      <FeaturesGrid />

      {/* 8. Franja Naranja de Testimonios y Confianza */}
      <TestimonialsBanner />

      {/* 9. Preguntas Frecuentes con acordeón accesible */}
      <FaqAccordion />

      {/* 10. Soporte 24/7 franja oscura */}
      <SupportBanner />

      {/* 11. Nuestros Partners (cPanel, LiteSpeed, Cloudflare, Telxius) */}
      <PartnersLogos />
    </>
  );
}
