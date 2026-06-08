"use client";

import Link from "next/link";
import {
  Server, Boxes, Cpu, Globe, Database, Cable, Users, Tag, Radio, Tv
} from "lucide-react";

const items = [
  { href: "/vps/kvm",          label: "VPS KVM",        Icon: Server },
  { href: "/vps/lxc",          label: "VPS LXC",        Icon: Boxes },
  { href: "/dedicados",        label: "Dedicados",      Icon: Cpu },
  { href: "/hosting/cpanel",   label: "Web Hosting",    Icon: Globe },
  { href: "/hosting/wordpress",label: "WordPress",      Icon: Database },
  { href: "/colocation",       label: "Colocation",     Icon: Cable },
  { href: "/streaming/audio",  label: "Streaming",      Icon: Radio },
  { href: "/streaming/video",  label: "Video",          Icon: Tv },
  { href: "/hosting/reseller", label: "Reseller",       Icon: Users },
  { href: "/dominios",         label: "Dominios",       Icon: Tag }
];

export function ServicesQuick() {
  return (
    <section className="relative bg-ink-50">
      <div className="container py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-bold">Servicios</div>
          <h2 className="mt-2 text-[26px] lg:text-[32px] font-extrabold tracking-tight text-ink-900">
            Todo lo que necesitas, <span className="text-gradient-brand">bajo un mismo proveedor</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {items.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-white px-3 py-6 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-soft-orange text-brand group-hover:bg-brand group-hover:text-white transition">
                <Icon size={20} />
              </div>
              <span className="text-[12.5px] font-semibold text-ink-700 group-hover:text-ink-900 transition">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
