import { PageHero } from "@/components/page-hero";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { Globe, Rocket, Users, Tag, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Hosting — cPanel, WordPress, Reseller y Dominios",
  description: "Soluciones de hosting de OneServidores: web hosting cPanel, WordPress optimizado, reseller y registro de dominios."
};

const items = [
  { href: "/hosting/cpanel",    Icon: Globe,  title: "Web Hosting cPanel",   desc: "LiteSpeed Enterprise, LSCache, SSL gratis y backups diarios." },
  { href: "/hosting/wordpress", Icon: Rocket, title: "VPS WordPress",        desc: "CyberPanel + OpenLiteSpeed afinado para Core Web Vitals." },
  { href: "/hosting/reseller",  Icon: Users,  title: "Reseller Hosting",     desc: "WHM con marca blanca para revender bajo tu propia marca." },
  { href: "/dominios",          Icon: Tag,    title: "Dominios",             desc: ".cl, .com, .net, .com.ar y +100 extensiones con WHOIS privado." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hosting"
        title={<>Hosting con <span className="text-gradient-brand">LiteSpeed</span> y soporte real.</>}
        description="Desde sitios personales hasta operaciones reseller con miles de cuentas. Elige el plan según el tamaño de tu proyecto."
        primaryCta={{ label: "Cotizar hosting", href: "/cotizar" }}
      />
      <section className="container py-20 lg:py-24 grid sm:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.href} delay={i * 0.05}>
            <Link href={it.href} className="group block rounded-2xl border border-white/10 bg-ink-900/60 p-7 hover:border-brand/40 transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/30">
                <it.Icon size={20} />
              </div>
              <h2 className="mt-5 text-[22px] font-bold text-white">{it.title}</h2>
              <p className="mt-2 text-[14px] text-ink-200 leading-relaxed">{it.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-brand text-[13.5px] font-semibold">
                Ver más <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
      <CTA />
    </>
  );
}
