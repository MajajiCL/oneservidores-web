import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { asset } from "@/lib/paths";

const cols = [
  {
    title: "HOSTING",
    links: [
      { label: "Web Hosting cPanel",       href: "/hosting/cpanel" },
      { label: "High Performance",         href: "/hosting/high-performance" },
      { label: "Windows · Plesk",          href: "/hosting/windows" },
      { label: "WordPress · CyberPanel",   href: "/hosting/wordpress" },
      { label: "Reseller WHM",             href: "/hosting/reseller" },
      { label: "Dominios",                 href: "/dominios" }
    ]
  },
  {
    title: "SERVIDORES",
    links: [
      { label: "VPS KVM",        href: "/vps/kvm" },
      { label: "VPS LXC",        href: "/vps/lxc" },
      { label: "Dedicados",      href: "/dedicados" },
      { label: "Colocation",     href: "/colocation" }
    ]
  },
  {
    title: "STREAMING · SERVICIOS",
    links: [
      { label: "Audio",       href: "/streaming/audio" },
      { label: "Video",       href: "/streaming/video" },
      { label: "Asesorías",   href: "/servicios/asesorias" },
      { label: "Ingeniería",  href: "/servicios/ingenieria" },
      { label: "Seguridad",   href: "/servicios/seguridad" }
    ]
  },
  {
    title: "ONESERVIDORES",
    links: [
      { label: "Nosotros",       href: "/nosotros" },
      { label: "Datacenter",     href: "/datacenter" },
      { label: "Soporte",        href: "/soporte" },
      { label: "Contacto",       href: "/contacto" },
      { label: "Legal",          href: "/legal" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative bg-void border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Image src={asset("/logo-white.png")} alt={site.name} width={200} height={50} className="h-9 w-auto" />
            <p className="mt-6 text-body-sm text-slate leading-relaxed max-w-sm">
              {site.description}
            </p>
            <div className="mt-6 space-y-2.5 text-body-sm text-bone-white/70">
              <div className="flex items-start gap-2"><MapPin size={14} className="text-brand mt-0.5" /> {site.contact.address}</div>
              {site.contact.phones.map((p) => (
                <div key={p} className="flex items-center gap-2 font-mono text-[12.5px] tracking-wider"><Phone size={14} className="text-brand" /> {p}</div>
              ))}
              <div className="flex items-center gap-2 font-mono text-[12.5px]"><Mail size={14} className="text-brand" /> {site.contact.email}</div>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-slate mb-5">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-body-sm text-bone-white/80 hover:text-brand transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate">
            © {new Date().getFullYear()} · {site.name} · INFRAESTRUCTURA QUE NO DESCANSA
          </div>
          <div className="flex items-center gap-3 text-slate">
            <a href={site.social.facebook} aria-label="Facebook" className="hover:text-brand transition"><Facebook size={16} /></a>
            <a href={site.social.twitter}  aria-label="Twitter"  className="hover:text-brand transition"><Twitter  size={16} /></a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-brand transition"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
