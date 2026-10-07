"use client";

import { useState } from "react";
import Link from "next/link";
import { Server, Cpu, HardDrive, Network, Check, ArrowRight } from "lucide-react";

type VpsCategory = "lxc" | "kvm" | "wp" | "dedicados";

export function VpsFeatured() {
  const [activeTab, setActiveTab] = useState<VpsCategory>("lxc");

  return (
    <section className="py-20 bg-slate-50 border-b border-gray-200">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7800]">
            VIRTUALIZACIÓN Y HARDWARE DEDICADO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Planes de Servidores Destacados
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Data Center Tier III en Chile – Baja latencia para Sudamérica y red de 1 a 10 Gbps con enlace BGP.
          </p>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("lxc")}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === "lxc"
                  ? "bg-[#FF7800] text-white shadow-md shadow-orange-500/20"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
              }`}
            >
              VPS LXC Linux
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("kvm")}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === "kvm"
                  ? "bg-[#FF7800] text-white shadow-md shadow-orange-500/20"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
              }`}
            >
              VPS KVM Linux
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("wp")}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === "wp"
                  ? "bg-[#FF7800] text-white shadow-md shadow-orange-500/20"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
              }`}
            >
              VPS WordPress (CyberPanel)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("dedicados")}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === "dedicados"
                  ? "bg-[#FF7800] text-white shadow-md shadow-orange-500/20"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
              }`}
            >
              Servidores Dedicados
            </button>
          </div>
        </div>

        {/* TAB CONTENT: LXC */}
        {activeTab === "lxc" && (
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: "PLAN LXC-1",
                price: "5.000",
                cpu: "1 vCPU",
                ram: "1 GB RAM",
                ssd: "10 GB Disco SSD",
                link: "/vps/lxc"
              },
              {
                name: "PLAN LXC-3",
                price: "18.000",
                cpu: "2 vCPU",
                ram: "4 GB RAM",
                ssd: "40 GB Disco SSD",
                popular: true,
                link: "/vps/lxc"
              },
              {
                name: "PLAN LXC-8",
                price: "75.000",
                cpu: "10 vCPU",
                ram: "16 GB RAM",
                ssd: "200 GB Disco SSD",
                link: "/vps/lxc"
              }
            ].map((p) => (
              <div
                key={p.name}
                className={`bg-white rounded-3xl p-7 border flex flex-col justify-between transition-all ${
                  p.popular
                    ? "border-2 border-[#FF7800] shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "border-gray-200 shadow-sm hover:border-orange-200 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="text-center pb-6 border-b border-gray-100">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7800] bg-orange-50 px-2.5 py-1 rounded-full font-bold">
                      INTEL XEON · 1 GBPS
                    </span>
                    <h3 className="text-2xl font-black text-gray-950 mt-3 mb-1">
                      {p.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 text-[#FF7800]">
                      <span className="text-base font-bold">$</span>
                      <span className="text-4xl font-black">{p.price}</span>
                      <span className="text-xs font-semibold text-gray-500">/Mensual</span>
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium">VALOR + IVA</div>
                  </div>

                  <ul className="py-6 space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2.5 font-bold text-gray-950">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.ssd}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-bold text-gray-900">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-semibold text-gray-900">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.ram}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>Transferencia Ilimitada</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>1 IPv4 + 1 IPv6 Incluidas</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-emerald-700 font-medium">
                      <Check size={16} className="text-emerald-600" />
                      <span>Data Center Chile (Baja Latencia)</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://portal.oneservidores.com/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#FF7800] hover:bg-[#E66B00] text-white font-black text-xs uppercase tracking-wider text-center block transition shadow-md shadow-orange-500/20"
                >
                  Comprar Ahora
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB CONTENT: KVM */}
        {activeTab === "kvm" && (
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: "PLAN KVM-1",
                price: "12.000",
                cpu: "1 vCPU",
                ram: "2 GB RAM",
                ssd: "20 GB Disco SSD",
                link: "/vps/kvm"
              },
              {
                name: "PLAN KVM-3",
                price: "28.000",
                cpu: "2 vCPU",
                ram: "6 GB RAM",
                ssd: "50 GB Disco SSD",
                popular: true,
                link: "/vps/kvm"
              },
              {
                name: "PLAN KVM-8",
                price: "96.000",
                cpu: "8 vCPU",
                ram: "24 GB RAM",
                ssd: "250 GB Disco SSD",
                link: "/vps/kvm"
              }
            ].map((p) => (
              <div
                key={p.name}
                className={`bg-white rounded-3xl p-7 border flex flex-col justify-between transition-all ${
                  p.popular
                    ? "border-2 border-[#FF7800] shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "border-gray-200 shadow-sm hover:border-orange-200 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="text-center pb-6 border-b border-gray-100">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7800] bg-orange-50 px-2.5 py-1 rounded-full font-bold">
                      KVM ROOT COMPLETO · 1 GBPS
                    </span>
                    <h3 className="text-2xl font-black text-gray-950 mt-3 mb-1">
                      {p.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 text-[#FF7800]">
                      <span className="text-base font-bold">$</span>
                      <span className="text-4xl font-black">{p.price}</span>
                      <span className="text-xs font-semibold text-gray-500">/Mensual</span>
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium">VALOR + IVA</div>
                  </div>

                  <ul className="py-6 space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2.5 font-bold text-gray-950">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.ssd}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-bold text-gray-900">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-semibold text-gray-900">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.ram}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>Transferencia Ilimitada</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>Kernel Propio & Acceso Root</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-emerald-700 font-medium">
                      <Check size={16} className="text-emerald-600" />
                      <span>Data Center Chile (Tier III)</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://portal.oneservidores.com/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#FF7800] hover:bg-[#E66B00] text-white font-black text-xs uppercase tracking-wider text-center block transition shadow-md shadow-orange-500/20"
                >
                  Comprar Ahora
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB CONTENT: WORDPRESS */}
        {activeTab === "wp" && (
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: "PLAN VPS WP-1",
                price: "14.000",
                cpu: "1 vCPU",
                ram: "2 GB RAM",
                ssd: "15 GB Disco SSD",
                desc: "CyberPanel + OpenLiteSpeed instalados"
              },
              {
                name: "PLAN VPS WP-2",
                price: "25.000",
                cpu: "4 vCPU",
                ram: "4 GB RAM",
                ssd: "25 GB Disco SSD",
                popular: true,
                desc: "Pymes y e-commerce WooCommerce"
              },
              {
                name: "PLAN VPS WP-6",
                price: "120.000",
                cpu: "12 vCPU",
                ram: "10 GB RAM",
                ssd: "150 GB Disco SSD",
                desc: "Agencias con múltiples tiendas"
              }
            ].map((p) => (
              <div
                key={p.name}
                className={`bg-white rounded-3xl p-7 border flex flex-col justify-between transition-all ${
                  p.popular
                    ? "border-2 border-[#FF7800] shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "border-gray-200 shadow-sm hover:border-orange-200 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="text-center pb-6 border-b border-gray-100">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7800] bg-orange-50 px-2.5 py-1 rounded-full font-bold">
                      CYBERPANEL + OPENLITESPEED
                    </span>
                    <h3 className="text-2xl font-black text-gray-950 mt-3 mb-1">
                      {p.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 text-[#FF7800]">
                      <span className="text-base font-bold">$</span>
                      <span className="text-4xl font-black">{p.price}</span>
                      <span className="text-xs font-semibold text-gray-500">/Mensual</span>
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium">VALOR + IVA</div>
                  </div>

                  <ul className="py-6 space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2.5 font-bold text-gray-950">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.ssd}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-bold text-gray-900">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-semibold text-gray-900">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.ram}</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[#FF7800] font-semibold">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>Instalación Gratuita CyberPanel</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[#FF7800] font-semibold">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>OpenLiteSpeed Cache Acelerado</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-emerald-700 font-medium">
                      <Check size={16} className="text-emerald-600" />
                      <span>Data Center Chile</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://portal.oneservidores.com/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#FF7800] hover:bg-[#E66B00] text-white font-black text-xs uppercase tracking-wider text-center block transition shadow-md shadow-orange-500/20"
                >
                  Comprar Ahora
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB CONTENT: DEDICADOS */}
        {activeTab === "dedicados" && (
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: "Dedicado Básico",
                price: "190.000",
                cpu: "Intel Xeon 2660 v2 (10 Cores, 2.2 Turbo 3.0)",
                ram: "32 GB RAM",
                disk: "2x 2TB SSD RAID1",
                ips: "2 IPv4 Incluidas"
              },
              {
                name: "Dedicado Avanzado",
                price: "290.000",
                cpu: "Intel Xeon 2660 v2 (10 Cores)",
                ram: "128 GB RAM",
                disk: "2x 2TB SSD RAID1",
                ips: "2 IPv4 Incluidas",
                popular: true
              },
              {
                name: "Avanzado Pro 3",
                price: "370.000",
                cpu: "2x Intel Xeon 2660 v4 (28 Cores Turbo 3.2)",
                ram: "128 GB RAM",
                disk: "2x 2TB SSD RAID1 NVMe",
                ips: "4 IPv4 Incluidas"
              }
            ].map((p) => (
              <div
                key={p.name}
                className={`bg-white rounded-3xl p-7 border flex flex-col justify-between transition-all ${
                  p.popular
                    ? "border-2 border-[#FF7800] shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "border-gray-200 shadow-sm hover:border-orange-200 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="text-center pb-6 border-b border-gray-100">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7800] bg-orange-50 px-2.5 py-1 rounded-full font-bold">
                      HARDWARE 100% EXCLUSIVO
                    </span>
                    <h3 className="text-2xl font-black text-gray-950 mt-3 mb-1">
                      {p.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 text-[#FF7800]">
                      <span className="text-base font-bold">$</span>
                      <span className="text-4xl font-black">{p.price}</span>
                      <span className="text-xs font-semibold text-gray-500">/Mensual</span>
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium">VALOR + IVA</div>
                  </div>

                  <ul className="py-6 space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2.5 font-bold text-gray-950">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-bold text-gray-900">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.ram}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-semibold text-gray-900">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.disk}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>{p.ips}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800]" />
                      <span>Red 1 Gbps Dedicado Nacional e Internacional</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-emerald-700 font-medium">
                      <Check size={16} className="text-emerald-600" />
                      <span>Alojado en Data Center Tier III (Santiago)</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://portal.oneservidores.com/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#FF7800] hover:bg-[#E66B00] text-white font-black text-xs uppercase tracking-wider text-center block transition shadow-md shadow-orange-500/20"
                >
                  Cotizar Dedicado
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
