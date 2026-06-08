import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { BentoCapabilities } from "@/components/bento-capabilities";
import { Bandwidth } from "@/components/bandwidth";
import { Principles } from "@/components/principles";
import { Sectors } from "@/components/sectors";
import { Spotlight } from "@/components/spotlight";
import { ServicesQuick } from "@/components/services-quick";
import { PartnersMarquee } from "@/components/partners-marquee";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <BentoCapabilities />
      <Bandwidth />
      <Principles />
      <Sectors />
      <Spotlight />
      <ServicesQuick />
      <PartnersMarquee />
      <CTA />
    </>
  );
}
