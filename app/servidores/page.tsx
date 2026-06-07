import { PageHero } from "@/components/page-hero";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { Server, Boxes, Cpu, Cable, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Servidores — VPS KVM, LXC, Dedicados y Colocation",
  description: "Servidores OneServidores: VPS KVM y LXC, dedicados AMD EPYC e Intel Xeon, y colocation en datacenter Tier III."
};

const items = [
  { href: "/vps/kvm",     Icon: Server, title: "VPS KVM",        desc: "Virtualización completa con root real, NVMe, snapshots y consola web." },
  { href: "/vps/lxc",     Icon: Boxes,  title: "VPS LXC",        desc: "Contenedores Linux con rendimiento bare-metal y arranque inmediato." },
  { href: "/dedicados",   Icon: Cpu,    title: "Dedicados",      desc: "AMD EPYC e Intel Xeon, NVMe RAID, red 10 Gbps e IPMI dedicado." },
  { href: "/colocation",  Icon: Cable,  title: "Colocation",     desc: "Aloja tu propio hardware en datacenter Tier III con red multi-carrier." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Servidores"
        title={<>Servidores <span className="text-gradient-brand">de verdad</span>, para producción seria.</>}
        description="Desde un VPS de 2 vCPU hasta racks completos en colocation. Toda nuestra línea opera sobre la misma infraestructura Tier III."
        primaryCta={{ label: "Cotizar servidor", href: "/cotizar" }}
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
