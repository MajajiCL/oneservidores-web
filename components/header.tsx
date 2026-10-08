"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Phone, LifeBuoy, LogIn, Mail } from "lucide-react";
import { asset } from "@/lib/paths";

export function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[#FF6B00] text-white shadow-md">
      <div className="container flex items-center justify-between h-20">
        {/* Logo oficial OneServidores Chile */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={asset("/img/sitio/logo-oneservidores-white-chile.png")}
            alt="OneServidores.com Chile"
            width={240}
            height={55}
            priority
            className="h-10 sm:h-11 w-auto"
          />
        </Link>

        {/* Desktop Navigation exactamente como el original: texto blanco sobre fondo naranja */}
        <nav
          className="hidden lg:flex items-center gap-2 xl:gap-5"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href="/"
            className="px-2 py-2 text-[14.5px] font-semibold text-white hover:text-white/80 transition-colors"
          >
            Home
          </Link>

          {/* Web Hosting Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("hosting")}
          >
            <Link
              href="/hosting"
              className="px-2 py-2 text-[14.5px] font-semibold text-white hover:text-white/80 transition-colors inline-flex items-center gap-1"
            >
              Web Hosting
              <ChevronDown size={14} className="opacity-90" />
            </Link>

            {openDropdown === "hosting" && (
              <div className="absolute left-0 top-full pt-2 w-72">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 space-y-1 text-gray-900">
                  <Link
                    href="/hosting/cpanel"
                    className="block p-2.5 rounded-lg hover:bg-orange-50 transition group"
                  >
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00]">
                      Web Hosting cPanel
                    </div>
                    <div className="text-xs text-gray-500 font-normal">
                      LiteSpeed Enterprise + Antimalware
                    </div>
                  </Link>
                  <Link
                    href="/hosting/wordpress"
                    className="block p-2.5 rounded-lg hover:bg-orange-50 transition group"
                  >
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00]">
                      Hosting WordPress
                    </div>
                    <div className="text-xs text-gray-500 font-normal">
                      CyberPanel + OpenLiteSpeed
                    </div>
                  </Link>
                  <Link
                    href="/hosting/reseller"
                    className="block p-2.5 rounded-lg hover:bg-orange-50 transition group"
                  >
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00]">
                      Web Hosting Reseller
                    </div>
                    <div className="text-xs text-gray-500 font-normal">
                      Cuentas cPanel independientes y WHM
                    </div>
                  </Link>
                  <Link
                    href="/hosting/high-performance"
                    className="block p-2.5 rounded-lg hover:bg-orange-50 transition group"
                  >
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00]">
                      High Performance NVMe
                    </div>
                    <div className="text-xs text-gray-500 font-normal">
                      Máxima velocidad para sitios de alto tráfico
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Servidores VPS Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("servidores")}
          >
            <Link
              href="/servidores"
              className="px-2 py-2 text-[14.5px] font-semibold text-white hover:text-white/80 transition-colors inline-flex items-center gap-1"
            >
              Servidores VPS
              <ChevronDown size={14} className="opacity-90" />
            </Link>

            {openDropdown === "servidores" && (
              <div className="absolute left-0 top-full pt-2 w-72">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 space-y-1 text-gray-900">
                  <Link
                    href="/vps/kvm"
                    className="block p-2.5 rounded-lg hover:bg-orange-50 transition group"
                  >
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00]">
                      Servidores VPS KVM
                    </div>
                    <div className="text-xs text-gray-500 font-normal">
                      Virtualización completa con root total
                    </div>
                  </Link>
                  <Link
                    href="/vps/lxc"
                    className="block p-2.5 rounded-lg hover:bg-orange-50 transition group"
                  >
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00]">
                      Servidores VPS LXC
                    </div>
                    <div className="text-xs text-gray-500 font-normal">
                      Contenedores Linux ultra livianos
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/dedicados"
            className="px-2 py-2 text-[14.5px] font-semibold text-white hover:text-white/80 transition-colors"
          >
            Servidores Dedicados
          </Link>

          <Link
            href="/colocation"
            className="px-2 py-2 text-[14.5px] font-semibold text-white hover:text-white/80 transition-colors"
          >
            Co-Location
          </Link>

          <Link
            href="/nosotros"
            className="px-2 py-2 text-[14.5px] font-semibold text-white hover:text-white/80 transition-colors"
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className="px-2 py-2 text-[14.5px] font-semibold text-white hover:text-white/80 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpenMobile(!openMobile)}
          className="lg:hidden p-2 text-white hover:text-white/80"
          aria-label="Abrir menú de navegación"
        >
          {openMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {openMobile && (
        <div className="lg:hidden bg-white text-gray-900 border-t border-orange-600 px-6 py-6 space-y-4 shadow-2xl">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-gray-800 hover:text-[#FF6B00]"
            >
              Home
            </Link>
            <Link
              href="/hosting/cpanel"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-gray-800 hover:text-[#FF6B00]"
            >
              Web Hosting
            </Link>
            <Link
              href="/vps/kvm"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-gray-800 hover:text-[#FF6B00]"
            >
              Servidores VPS
            </Link>
            <Link
              href="/dedicados"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-gray-800 hover:text-[#FF6B00]"
            >
              Servidores Dedicados
            </Link>
            <Link
              href="/colocation"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-gray-800 hover:text-[#FF6B00]"
            >
              Co-Location
            </Link>
            <Link
              href="/nosotros"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-gray-800 hover:text-[#FF6B00]"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-gray-800 hover:text-[#FF6B00]"
            >
              Contacto
            </Link>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <a
              href="https://portal.oneservidores.com/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider block text-center shadow"
            >
              Área de clientes
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
