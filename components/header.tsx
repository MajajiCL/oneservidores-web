"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ExternalLink, ShieldCheck } from "lucide-react";
import { asset } from "@/lib/paths";

export function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="container flex items-center justify-between h-20">
        {/* Brand Logo with Chilean Flag */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={asset("/logo-chile-naranja.png")}
            alt="OneServidores.com Chile"
            width={240}
            height={55}
            priority
            className="h-10 sm:h-11 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-1"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href="/"
            className="px-3.5 py-2 text-[14px] font-semibold text-gray-800 hover:text-[#FF7800] transition-colors"
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
              className="px-3.5 py-2 text-[14px] font-semibold text-gray-800 hover:text-[#FF7800] transition-colors inline-flex items-center gap-1"
            >
              Web Hosting
              <ChevronDown size={14} className="opacity-60" />
            </Link>

            {openDropdown === "hosting" && (
              <div className="absolute left-0 top-full pt-2 w-72">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2.5 space-y-1">
                  <Link
                    href="/hosting/cpanel"
                    className="block p-2.5 rounded-lg hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7800]">
                      Web Hosting cPanel
                    </div>
                    <div className="text-xs text-gray-500">
                      LiteSpeed Enterprise + Antimalware
                    </div>
                  </Link>
                  <Link
                    href="/hosting/wordpress"
                    className="block p-2.5 rounded-lg hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7800]">
                      Hosting WordPress
                    </div>
                    <div className="text-xs text-gray-500">
                      CyberPanel + OpenLiteSpeed
                    </div>
                  </Link>
                  <Link
                    href="/hosting/reseller"
                    className="block p-2.5 rounded-lg hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7800]">
                      Web Hosting Reseller
                    </div>
                    <div className="text-xs text-gray-500">
                      Cuentas cPanel independientes y WHM
                    </div>
                  </Link>
                  <Link
                    href="/hosting/high-performance"
                    className="block p-2.5 rounded-lg hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7800]">
                      High Performance NVMe
                    </div>
                    <div className="text-xs text-gray-500">
                      Máxima velocidad para sitios de alto tráfico
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/hosting/reseller"
            className="px-3.5 py-2 text-[14px] font-semibold text-gray-800 hover:text-[#FF7800] transition-colors"
          >
            Web Hosting Reseller
          </Link>

          {/* Servidores VPS Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("vps")}
          >
            <Link
              href="/servidores"
              className="px-3.5 py-2 text-[14px] font-semibold text-gray-800 hover:text-[#FF7800] transition-colors inline-flex items-center gap-1"
            >
              Servidores VPS
              <ChevronDown size={14} className="opacity-60" />
            </Link>

            {openDropdown === "vps" && (
              <div className="absolute left-0 top-full pt-2 w-72">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2.5 space-y-1">
                  <Link
                    href="/vps/kvm"
                    className="block p-2.5 rounded-lg hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7800]">
                      Servidores VPS KVM Linux
                    </div>
                    <div className="text-xs text-gray-500">
                      Virtualización de hardware y kernel propio
                    </div>
                  </Link>
                  <Link
                    href="/vps/lxc"
                    className="block p-2.5 rounded-lg hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7800]">
                      Servidores VPS LXC Linux
                    </div>
                    <div className="text-xs text-gray-500">
                      Contenedores ágiles de alto rendimiento
                    </div>
                  </Link>
                  <Link
                    href="/hosting/wordpress"
                    className="block p-2.5 rounded-lg hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7800]">
                      Servidores VPS WordPress
                    </div>
                    <div className="text-xs text-gray-500">
                      CyberPanel y OpenLiteSpeed preconfigurados
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/dedicados"
            className="px-3.5 py-2 text-[14px] font-semibold text-gray-800 hover:text-[#FF7800] transition-colors"
          >
            Servidores Dedicados
          </Link>

          <Link
            href="/colocation"
            className="px-3.5 py-2 text-[14px] font-semibold text-gray-800 hover:text-[#FF7800] transition-colors"
          >
            Co-Location
          </Link>

          <Link
            href="/datacenter"
            className="px-3.5 py-2 text-[14px] font-semibold text-gray-800 hover:text-[#FF7800] transition-colors"
          >
            Data Center
          </Link>

          <Link
            href="/nosotros"
            className="px-3.5 py-2 text-[14px] font-semibold text-gray-800 hover:text-[#FF7800] transition-colors"
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className="px-3.5 py-2 text-[14px] font-semibold text-gray-800 hover:text-[#FF7800] transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://portal.oneservidores.com/clientarea.php"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-[13.5px] font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors inline-flex items-center gap-1.5"
          >
            Área de Clientes
            <ExternalLink size={13} className="opacity-60" />
          </a>
          <a
            href="#planes-hosting"
            className="px-5 py-2.5 rounded-full text-[13.5px] font-bold text-white bg-[#FF7800] hover:bg-[#E66B00] shadow-[0_2px_10px_rgba(255,120,0,0.35)] hover:shadow-[0_4px_16px_rgba(255,120,0,0.45)] transition-all uppercase tracking-wider"
          >
            Comprar Ahora
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="xl:hidden p-2 text-gray-700 hover:text-[#FF7800] rounded-lg"
          aria-label="Abrir menú"
        >
          {openMobile ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {openMobile && (
        <div className="xl:hidden bg-white border-t border-gray-200 px-6 py-6 shadow-xl space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            <Link
              href="/"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Home
            </Link>
            <Link
              href="/hosting/cpanel"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Web Hosting cPanel
            </Link>
            <Link
              href="/hosting/reseller"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Web Hosting Reseller
            </Link>
            <Link
              href="/vps/kvm"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Servidores VPS KVM
            </Link>
            <Link
              href="/vps/lxc"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Servidores VPS LXC
            </Link>
            <Link
              href="/hosting/wordpress"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Servidores VPS WordPress
            </Link>
            <Link
              href="/dedicados"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Servidores Dedicados
            </Link>
            <Link
              href="/colocation"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Co-Location
            </Link>
            <Link
              href="/datacenter"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Data Center Tier III
            </Link>
            <Link
              href="/nosotros"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Contacto
            </Link>
          </div>

          <div className="pt-4 space-y-2">
            <a
              href="https://portal.oneservidores.com/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg text-center font-bold text-gray-800 bg-gray-100 block"
            >
              Área de Clientes
            </a>
            <a
              href="#planes-hosting"
              onClick={() => setOpenMobile(false)}
              className="w-full py-3 rounded-lg text-center font-bold text-white bg-[#FF7800] block"
            >
              Comprar Ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
