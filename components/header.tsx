"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { asset } from "@/lib/paths";

export function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[#FF6B00] text-white shadow-md">
      <div className="container flex items-center justify-between h-20">
        {/* White Logo with Chilean Flag */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={asset("/logo-white.png")}
            alt="OneServidores.com Chile"
            width={240}
            height={55}
            priority
            className="h-10 sm:h-11 w-auto"
          />
        </Link>

        {/* Desktop Navigation (White text on Orange) */}
        <nav
          className="hidden lg:flex items-center gap-2 xl:gap-4"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href="/"
            className="px-2.5 py-2 text-[14.5px] font-bold text-white hover:text-white/80 transition-colors"
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
              className="px-2.5 py-2 text-[14.5px] font-bold text-white hover:text-white/80 transition-colors inline-flex items-center gap-1"
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
            onMouseEnter={() => setOpenDropdown("vps")}
          >
            <Link
              href="/servidores"
              className="px-2.5 py-2 text-[14.5px] font-bold text-white hover:text-white/80 transition-colors inline-flex items-center gap-1"
            >
              Servidores VPS
              <ChevronDown size={14} className="opacity-90" />
            </Link>

            {openDropdown === "vps" && (
              <div className="absolute left-0 top-full pt-2 w-72">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 space-y-1 text-gray-900">
                  <Link
                    href="/vps/kvm"
                    className="block p-2.5 rounded-lg hover:bg-orange-50 transition group"
                  >
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00]">
                      Servidores VPS KVM Linux
                    </div>
                    <div className="text-xs text-gray-500 font-normal">
                      Virtualización de hardware y kernel propio
                    </div>
                  </Link>
                  <Link
                    href="/vps/lxc"
                    className="block p-2.5 rounded-lg hover:bg-orange-50 transition group"
                  >
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00]">
                      Servidores VPS LXC Linux
                    </div>
                    <div className="text-xs text-gray-500 font-normal">
                      Contenedores ágiles de alto rendimiento
                    </div>
                  </Link>
                  <Link
                    href="/hosting/wordpress"
                    className="block p-2.5 rounded-lg hover:bg-orange-50 transition group"
                  >
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00]">
                      Servidores VPS WordPress
                    </div>
                    <div className="text-xs text-gray-500 font-normal">
                      CyberPanel y OpenLiteSpeed preconfigurados
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/dedicados"
            className="px-2.5 py-2 text-[14.5px] font-bold text-white hover:text-white/80 transition-colors"
          >
            Servidores Dedicados
          </Link>

          <Link
            href="/colocation"
            className="px-2.5 py-2 text-[14.5px] font-bold text-white hover:text-white/80 transition-colors"
          >
            Co-Location
          </Link>

          <Link
            href="/nosotros"
            className="px-2.5 py-2 text-[14.5px] font-bold text-white hover:text-white/80 transition-colors"
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className="px-2.5 py-2 text-[14.5px] font-bold text-white hover:text-white/80 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="lg:hidden p-2 text-white hover:text-white/80 rounded-lg"
          aria-label="Abrir menú"
        >
          {openMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {openMobile && (
        <div className="lg:hidden bg-white text-gray-900 px-6 py-6 shadow-2xl space-y-3 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setOpenMobile(false)}
            className="block py-2 text-base font-bold text-gray-900 border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            href="/hosting/cpanel"
            onClick={() => setOpenMobile(false)}
            className="block py-2 text-base font-bold text-gray-900 border-b border-gray-100"
          >
            Web Hosting cPanel
          </Link>
          <Link
            href="/hosting/reseller"
            onClick={() => setOpenMobile(false)}
            className="block py-2 text-base font-bold text-gray-900 border-b border-gray-100"
          >
            Web Hosting Reseller
          </Link>
          <Link
            href="/vps/kvm"
            onClick={() => setOpenMobile(false)}
            className="block py-2 text-base font-bold text-gray-900 border-b border-gray-100"
          >
            Servidores VPS KVM Linux
          </Link>
          <Link
            href="/vps/lxc"
            onClick={() => setOpenMobile(false)}
            className="block py-2 text-base font-bold text-gray-900 border-b border-gray-100"
          >
            Servidores VPS LXC Linux
          </Link>
          <Link
            href="/dedicados"
            onClick={() => setOpenMobile(false)}
            className="block py-2 text-base font-bold text-gray-900 border-b border-gray-100"
          >
            Servidores Dedicados
          </Link>
          <Link
            href="/colocation"
            onClick={() => setOpenMobile(false)}
            className="block py-2 text-base font-bold text-gray-900 border-b border-gray-100"
          >
            Co-Location
          </Link>
          <Link
            href="/nosotros"
            onClick={() => setOpenMobile(false)}
            className="block py-2 text-base font-bold text-gray-900 border-b border-gray-100"
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            onClick={() => setOpenMobile(false)}
            className="block py-2 text-base font-bold text-gray-900 border-b border-gray-100"
          >
            Contacto
          </Link>
          <div className="pt-2">
            <a
              href="https://portal.oneservidores.com/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg text-center font-bold text-white bg-[#FF6B00] block"
            >
              Área de clientes
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
