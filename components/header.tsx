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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="container flex items-center justify-between h-20">
        {/* Logo de OneServidores con Marca */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={asset("/img/sitio/logo-oneservidores-white-chile.png")}
            alt="OneServidores.com Chile"
            width={220}
            height={50}
            priority
            className="h-10 w-auto filter invert brightness-0 hover:opacity-90 transition"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href="/"
            className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-[#FF6B00] transition-colors rounded-lg hover:bg-slate-50"
          >
            Inicio
          </Link>

          {/* Web Hosting Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("hosting")}
          >
            <Link
              href="/hosting"
              className={`px-3 py-2 text-sm font-bold transition-colors rounded-lg flex items-center gap-1 ${
                openDropdown === "hosting" ? "text-[#FF6B00] bg-orange-50" : "text-slate-700 hover:text-[#FF6B00] hover:bg-slate-50"
              }`}
            >
              <span>Web Hosting</span>
              <ChevronDown size={14} className="opacity-70" />
            </Link>

            {openDropdown === "hosting" && (
              <div className="absolute left-0 top-full pt-2 w-80">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 space-y-1">
                  <Link
                    href="/hosting/cpanel"
                    className="block p-3 rounded-xl hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00]">
                      Web Hosting cPanel
                    </div>
                    <div className="text-xs text-slate-500 font-normal">
                      LiteSpeed Enterprise + Antimalware CpGuard
                    </div>
                  </Link>
                  <Link
                    href="/hosting/wordpress"
                    className="block p-3 rounded-xl hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00]">
                      Hosting WordPress
                    </div>
                    <div className="text-xs text-slate-500 font-normal">
                      Optimizado con CyberPanel y OpenLiteSpeed
                    </div>
                  </Link>
                  <Link
                    href="/hosting/reseller"
                    className="block p-3 rounded-xl hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00]">
                      Web Hosting Reseller
                    </div>
                    <div className="text-xs text-slate-500 font-normal">
                      Cuentas cPanel independientes con WHM
                    </div>
                  </Link>
                  <Link
                    href="/hosting/high-performance"
                    className="block p-3 rounded-xl hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00]">
                      High Performance NVMe
                    </div>
                    <div className="text-xs text-slate-500 font-normal">
                      Máxima velocidad para sitios de alto tráfico
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Servidores Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("servidores")}
          >
            <Link
              href="/servidores"
              className={`px-3 py-2 text-sm font-bold transition-colors rounded-lg flex items-center gap-1 ${
                openDropdown === "servidores" ? "text-[#FF6B00] bg-orange-50" : "text-slate-700 hover:text-[#FF6B00] hover:bg-slate-50"
              }`}
            >
              <span>Servidores</span>
              <ChevronDown size={14} className="opacity-70" />
            </Link>

            {openDropdown === "servidores" && (
              <div className="absolute left-0 top-full pt-2 w-80">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 space-y-1">
                  <Link
                    href="/vps/kvm"
                    className="block p-3 rounded-xl hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00]">
                      Servidores VPS KVM
                    </div>
                    <div className="text-xs text-slate-500 font-normal">
                      Virtualización completa con acceso root total
                    </div>
                  </Link>
                  <Link
                    href="/vps/lxc"
                    className="block p-3 rounded-xl hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00]">
                      Servidores VPS LXC
                    </div>
                    <div className="text-xs text-slate-500 font-normal">
                      Contenedores Linux de alta eficiencia
                    </div>
                  </Link>
                  <Link
                    href="/dedicados"
                    className="block p-3 rounded-xl hover:bg-orange-50/70 transition group"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00]">
                      Servidores Dedicados
                    </div>
                    <div className="text-xs text-slate-500 font-normal">
                      Hardware físico exclusivo en Tier III
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/colocation"
            className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-[#FF6B00] transition-colors rounded-lg hover:bg-slate-50"
          >
            Co-Location
          </Link>

          <Link
            href="/dominios"
            className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-[#FF6B00] transition-colors rounded-lg hover:bg-slate-50"
          >
            Dominios
          </Link>

          <Link
            href="/datacenter"
            className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-[#FF6B00] transition-colors rounded-lg hover:bg-slate-50"
          >
            Data Center
          </Link>

          <Link
            href="/contacto"
            className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-[#FF6B00] transition-colors rounded-lg hover:bg-slate-50"
          >
            Contacto
          </Link>
        </nav>

        {/* Action Button: Área de Clientes */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://portal.oneservidores.com/clientarea.php"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E66000] text-white font-extrabold text-xs uppercase tracking-wider transition shadow-md shadow-orange-600/20 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <LogIn size={14} />
            <span>Área de Clientes</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpenMobile(!openMobile)}
          className="lg:hidden p-2 text-slate-800 hover:text-[#FF6B00]"
          aria-label="Abrir menú de navegación"
        >
          {openMobile ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {openMobile && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-[#FF6B00]"
            >
              Inicio
            </Link>
            <Link
              href="/hosting/cpanel"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-[#FF6B00]"
            >
              Web Hosting cPanel
            </Link>
            <Link
              href="/hosting/reseller"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-[#FF6B00]"
            >
              Reseller Hosting
            </Link>
            <Link
              href="/vps/kvm"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-[#FF6B00]"
            >
              Servidores VPS KVM
            </Link>
            <Link
              href="/colocation"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-[#FF6B00]"
            >
              Co-Location
            </Link>
            <Link
              href="/datacenter"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-[#FF6B00]"
            >
              Data Center Tier III
            </Link>
            <Link
              href="/contacto"
              onClick={() => setOpenMobile(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-[#FF6B00]"
            >
              Contacto
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://portal.oneservidores.com/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#FF6B00] text-white font-black text-xs uppercase tracking-wider block text-center shadow"
            >
              Área de Clientes
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
