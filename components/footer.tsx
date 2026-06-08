import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { asset } from "@/lib/paths";

const cols = [
  {
    title: "Hosting",
    links: [
      { label: "Web Hosting cPanel",      href: "/hosting/cpanel" },
      { label: "Hosting High Performance",href: "/hosting/high-performance" },
      { label: "Hosting Windows",         href: "/hosting/windows" },
      { label: "VPS WordPress",           href: "/hosting/wordpress" },
      { label: "Reseller Hosting",        href: "/hosting/reseller" },
      { label: "Dominios",                href: "/dominios" }
    ]
  },
  {
    title: "Servidores",
    links: [
      { label: "VPS KVM",        href: "/vps/kvm" },
      { label: "VPS LXC",        href: "/vps/lxc" },
      { label: "Dedicados",      href: "/dedicados" },
      { label: "Colocation",     href: "/colocation" }
    ]
  },
  {
    title: "Streaming · Servicios",
    links: [
      { label: "Audio Streaming",  href: "/streaming/audio" },
      { label: "Video Streaming",  href: "/streaming/video" },
      { label: "Asesorías",        href: "/servicios/asesorias" },
      { label: "Ingeniería",       href: "/servicios/ingenieria" },
      { label: "Seguridad",        href: "/servicios/seguridad" }
    ]
  },
  {
    title: "OneServidores",
    links: [
      { label: "Nosotros",       href: "/nosotros" },
      { label: "Datacenter",     href: "/datacenter" },
      { label: "Soporte",        href: "/soporte" },
      { label: "Contacto",       href: "/contacto" },
      { label: "Términos y políticas", href: "/legal" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Image src={asset("/logo-white.png")} alt={site.name} width={200} height={50} className="h-9 w-auto" />
            <p className="mt-5 text-[14px] text-ink-300 leading-relaxed max-w-sm">
              {site.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-[12.5px] text-white rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
              <ShieldCheck size={14} className="text-brand" /> Operación 24×7 — NOC en línea
            </div>
            <div className="mt-6 space-y-2 text-[13.5px] text-ink-300">
              <div className="flex items-start gap-2"><MapPin size={15} className="text-brand mt-0.5" /> {site.contact.address}</div>
              {site.contact.phones.map((p) => (
                <div key={p} className="flex items-center gap-2"><Phone size={15} className="text-brand" /> {p}</div>
              ))}
              <div className="flex items-center gap-2"><Mail size={15} className="text-brand" /> {site.contact.email}</div>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <div className="text-[12.5px] uppercase tracking-[0.14em] text-white font-semibold mb-4">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] text-ink-300 hover:text-brand transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-[12.5px] text-ink-400">
            © {new Date().getFullYear()} {site.name}. Infraestructura que no descansa.
          </div>
          <div className="flex items-center gap-3 text-ink-400">
            <a href={site.social.facebook} aria-label="Facebook" className="hover:text-brand transition"><Facebook size={16} /></a>
            <a href={site.social.twitter}  aria-label="Twitter"  className="hover:text-brand transition"><Twitter  size={16} /></a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-brand transition"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
