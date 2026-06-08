import { PageHero } from "@/components/page-hero";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { Radio, Tv, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Streaming — Audio y Video con ancho de banda real",
  description: "Servicios de audio y video streaming sobre la red OneServidores: SHOUTcast, Icecast, autoDJ, live RTMP y VOD."
};

const items = [
  { href: "/streaming/audio", Icon: Radio, title: "Audio Streaming", desc: "Radio online con SHOUTcast, Icecast y autoDJ. Oyentes ilimitados según plan." },
  { href: "/streaming/video", Icon: Tv,    title: "Video Streaming", desc: "Live RTMP, VOD y transcoding sobre red de 1 a 10 Gbps por servidor." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Streaming"
        title={<>Distribuye <span className="text-gradient-brand">audio y video</span> sin perder calidad.</>}
        description="Servicios pensados para radios online, TV web, plataformas de eventos y streaming bajo demanda, con ancho de banda real y soporte chileno."
        primaryCta={{ label: "Cotizar streaming", href: "/cotizar" }}
      />
      <section className="container py-20 lg:py-24 grid sm:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.href} delay={i * 0.05}>
            <Link href={it.href} className="group block rounded-2xl border border-ink-200 bg-white p-7 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-soft-orange text-brand">
                <it.Icon size={20} />
              </div>
              <h2 className="mt-5 text-[22px] font-bold text-ink-900">{it.title}</h2>
              <p className="mt-2 text-[14px] text-ink-500 leading-relaxed">{it.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-brand text-[13.5px] font-semibold">
                Ver planes <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
      <CTA />
    </>
  );
}
