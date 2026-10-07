import Link from "next/link";
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin, ChevronRight, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200 text-sm">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Intro & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Servicios de Data Center en Chile y Argentina. Conectividad desde 1GBPS Hasta 10GBPS de Red en tu Servidor
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#FF6B00] hover:text-[#FF6B00] transition"
              >
                <Facebook size={14} />
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#FF6B00] hover:text-[#FF6B00] transition"
              >
                <Twitter size={14} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#FF6B00] hover:text-[#FF6B00] transition"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Link Rápido */}
          <div className="lg:col-span-2">
            <h4 className="text-gray-900 font-bold text-base mb-4">
              Link Rápido
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "/" },
                { label: "Nosotros", href: "/nosotros" },
                { label: "Soporte", href: "/soporte" },
                { label: "Contacto", href: "/contacto" },
                { label: "Términos y condiciones", href: "/terminos-condiciones" },
                { label: "Política de privacidad", href: "/politica-privacidad" }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FF6B00] transition flex items-center gap-1.5"
                  >
                    <span className="text-[#FF6B00] font-bold text-xs">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Servicios */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-900 font-bold text-base mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Web Hosting", href: "/hosting/cpanel" },
                { label: "Reseller Web Hosting", href: "/hosting/reseller" },
                { label: "Co-Location", href: "/colocation" },
                { label: "Servidores Dedicados", href: "/dedicados" },
                { label: "Servidores VPS LXC", href: "/vps/lxc" },
                { label: "Servidores VPS KVM", href: "/vps/kvm" },
                { label: "Servidores VPS Wordpress", href: "/hosting/wordpress" }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FF6B00] transition flex items-center gap-1.5"
                  >
                    <span className="text-[#FF6B00] font-bold text-xs">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-gray-900 font-bold text-base mb-4">
              Contacto
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#FF6B00] shrink-0" />
                <a href="tel:228402574" className="hover:text-[#FF6B00] transition">
                  2 2840 2574
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-[#FF6B00] shrink-0" />
                <a href="https://wa.me/56971550409" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition">
                  +56 9 7155 0409
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#FF6B00] shrink-0" />
                <a href="mailto:info@oneservidores.com" className="hover:text-[#FF6B00] transition">
                  info@oneservidores.com
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin size={14} className="text-[#FF6B00] shrink-0 mt-0.5" />
                <span>Ahumada 370 Oficina 516</span>
              </div>
            </div>

            <div className="pt-3 text-xs text-gray-500 font-bold">
              By PlusGroup SPA ®
            </div>

            <div className="pt-1 text-xs text-gray-500 flex items-center gap-2">
              <span>Selecciona tu país:</span>
              <span title="Chile">🇨🇱</span>
              <span title="Argentina">🇦🇷</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} OneServidores.com · Todos los derechos reservados.
          </div>
          <div>
            Data Center Tier III en Santiago de Chile
          </div>
        </div>
      </div>
    </footer>
  );
}
