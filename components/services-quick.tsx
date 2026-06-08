"use client";

import Link from "next/link";
import {
  Server, Boxes, Cpu, Globe, Database, Cable, Users, Tag, Radio, Tv
} from "lucide-react";

const items = [
  { href: "/vps/kvm",          label: "VPS KVM",        Icon: Server,   code: "01" },
  { href: "/vps/lxc",          label: "VPS LXC",        Icon: Boxes,    code: "02" },
  { href: "/dedicados",        label: "DEDICADOS",      Icon: Cpu,      code: "03" },
  { href: "/hosting/cpanel",   label: "WEB HOSTING",    Icon: Globe,    code: "04" },
  { href: "/hosting/wordpress",label: "WORDPRESS",      Icon: Database, code: "05" },
  { href: "/colocation",       label: "COLOCATION",     Icon: Cable,    code: "06" },
  { href: "/streaming/audio",  label: "AUDIO STREAM",   Icon: Radio,    code: "07" },
  { href: "/streaming/video",  label: "VIDEO STREAM",   Icon: Tv,       code: "08" },
  { href: "/hosting/reseller", label: "RESELLER",       Icon: Users,    code: "09" },
  { href: "/dominios",         label: "DOMINIOS",       Icon: Tag,      code: "10" }
];

export function ServicesQuick() {
  return (
    <section className="relative bg-void border-t border-white/5">
      <div className="container py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.20em] text-brand">
            SERVICIOS · DIRECTORIO
          </div>
          <h2 className="mt-4 text-heading lg:text-heading-lg font-bold tracking-tight text-bone-white leading-[1.05]">
            Todo lo que necesitas, <span className="font-editorial text-bone-white/95">bajo</span> un mismo proveedor
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {items.map(({ href, label, Icon, code }) => (
            <Link
              key={label}
              href={href}
              className="group rounded-card border border-white/8 bg-white/[0.015] p-5 hover:border-brand/40 hover:bg-white/[0.03] transition-all relative"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-white/5 text-brand border border-white/10 group-hover:bg-brand group-hover:text-void transition">
                  <Icon size={17} />
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate">{code}</span>
              </div>
              <div className="mt-6 font-mono text-[11.5px] uppercase tracking-[0.18em] text-bone-white group-hover:text-brand transition">
                {label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
