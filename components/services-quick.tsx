"use client";

import Link from "next/link";
import {
  Server, Boxes, Cpu, Globe, Database, Cable, Users, Tag
} from "lucide-react";

const items = [
  { href: "/vps/kvm",          label: "VPS KVM",        Icon: Server },
  { href: "/vps/lxc",          label: "VPS LXC",        Icon: Boxes },
  { href: "/dedicados",        label: "Dedicados",      Icon: Cpu },
  { href: "/hosting/cpanel",   label: "Web Hosting",    Icon: Globe },
  { href: "/hosting/wordpress",label: "WordPress",      Icon: Database },
  { href: "/colocation",       label: "Colocation",     Icon: Cable },
  { href: "/hosting/reseller", label: "Reseller",       Icon: Users },
  { href: "/dominios",         label: "Dominios",       Icon: Tag }
];

export function ServicesQuick() {
  return (
    <section className="relative">
      <div className="container py-16 lg:py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">
              Servicios
            </div>
            <h2 className="mt-2 text-[26px] lg:text-[32px] font-extrabold tracking-tight text-white">
              Todo lo que necesitas, bajo un mismo proveedor.
            </h2>
          </div>
          <Link href="/servidores" className="text-[13.5px] text-brand font-semibold hover:text-brand-600 transition">
            Ver todos los planes →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {items.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-ink-900/60 px-3 py-5 hover:border-brand/40 hover:bg-ink-900 transition"
            >
              <Icon size={22} className="text-ink-100 group-hover:text-brand transition" />
              <span className="text-[12.5px] font-semibold text-ink-100 group-hover:text-white transition">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
