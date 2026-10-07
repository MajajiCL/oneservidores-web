import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { asset } from "@/lib/paths";

export function Footer() {
  return (
    <footer className="relative bg-[#111315] text-gray-300 border-t border-neutral-800">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Data Center intro */}
          <div className="lg:col-span-4 space-y-5">
            <Image
              src={asset("/logo-white.png")}
              alt="OneServidores.com"
              width={220}
              height={50}
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-400 leading-relaxed pr-6">
              Servicios de Data Center en Chile y Argentina. Conectividad desde 1 GBPS hasta 10 GBPS de Red en tu Servidor con soporte local en Santiago.
            </p>
            <div className="flex items-center gap-3 text-gray-400 pt-2">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#FF7800] hover:text-white transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#FF7800] hover:text-white transition"
              >
                <Twitter size={16} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#FF7800] hover:text-white transition"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Link Rápido */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-base font-bold mb-4 tracking-tight">
              Link Rápido
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#FF7800] transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-[#FF7800] transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="hover:text-[#FF7800] transition">
                  Soporte
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#FF7800] transition">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones" className="hover:text-[#FF7800] transition">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-[#FF7800] transition">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-base font-bold mb-4 tracking-tight">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/hosting/cpanel" className="hover:text-[#FF7800] transition">
                  Web Hosting cPanel
                </Link>
              </li>
              <li>
                <Link href="/hosting/reseller" className="hover:text-[#FF7800] transition">
                  Reseller Web Hosting
                </Link>
              </li>
              <li>
                <Link href="/colocation" className="hover:text-[#FF7800] transition">
                  Co-Location / Housing
                </Link>
              </li>
              <li>
                <Link href="/dedicados" className="hover:text-[#FF7800] transition">
                  Servidores Dedicados
                </Link>
              </li>
              <li>
                <Link href="/vps/lxc" className="hover:text-[#FF7800] transition">
                  Servidores VPS LXC Linux
                </Link>
              </li>
              <li>
                <Link href="/vps/kvm" className="hover:text-[#FF7800] transition">
                  Servidores VPS KVM Linux
                </Link>
              </li>
              <li>
                <Link href="/hosting/wordpress" className="hover:text-[#FF7800] transition">
                  Servidores VPS WordPress
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white text-base font-bold mb-4 tracking-tight">
              Contacto
            </h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#FF7800] shrink-0" />
                <a href="tel:+56228402574" className="hover:text-white transition">
                  2 2840 2574
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#FF7800] shrink-0" />
                <a href="https://wa.me/56971550409" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  +56 9 7155 0409
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#FF7800] shrink-0" />
                <a href="mailto:info@oneservidores.com" className="hover:text-white transition">
                  info@oneservidores.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin size={15} className="text-[#FF7800] shrink-0 mt-0.5" />
                <span>Ahumada 370, Oficina 516, Santiago — Chile</span>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 text-xs text-gray-500 font-semibold">
              By PlusGroup SPA ®
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} OneServidores.com · Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/politica-privacidad" className="hover:text-gray-300 transition">
              Privacidad
            </Link>
            <Link href="/terminos-condiciones" className="hover:text-gray-300 transition">
              Términos
            </Link>
            <a
              href="https://portal.oneservidores.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7800] text-gray-400 font-medium transition"
            >
              Portal WHMCS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
