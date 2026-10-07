"use client";

import { useState } from "react";
import { Server } from "lucide-react";

type VpsCategory = "lxc" | "kvm" | "wp" | "dedicados";

export function VpsFeatured() {
  const [activeTab, setActiveTab] = useState<VpsCategory>("lxc");

  return (
    <section className="py-20 bg-[#f9f9f9] border-b border-gray-200">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight uppercase">
            {activeTab === "lxc" && "PLANES VPS LXC DESTACADOS"}
            {activeTab === "kvm" && "PLANES VPS KVM DESTACADOS"}
            {activeTab === "wp" && "PLANES VPS WORDPRESS"}
            {activeTab === "dedicados" && "Servidores Dedicados"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Data Center Tier III en Chile – Baja latencia para sur america
          </p>
          {activeTab === "wp" && (
            <p className="text-xs text-gray-500 font-semibold">
              Instalación gratuita de CyberPanel y OpenLiteSpeed
            </p>
          )}

          {/* Category Switcher */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "lxc", label: "VPS LXC Linux" },
              { id: "kvm", label: "VPS KVM Linux" },
              { id: "wp", label: "VPS WordPress" },
              { id: "dedicados", label: "Servidores Dedicados" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as VpsCategory)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? "bg-[#FF6B00] text-white shadow-md shadow-orange-500/20"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB LXC */}
        {activeTab === "lxc" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "PLAN LXC-1",
                price: "5.000",
                ssd: "10 GB Disco SSD",
                cpu: "1 Vcpu",
                ram: "1 GB Vcpu",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN LXC-3",
                price: "18.000",
                ssd: "40 GB Disco SSD",
                cpu: "2 Vcpu",
                ram: "4 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN LXC-8",
                price: "75.000",
                ssd: "200 GB Disco SSD",
                cpu: "10 Vcpu",
                ram: "16 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              }
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#FF6B00] mb-1">
                    {p.name}
                  </h3>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">
                    INTEL XEON · 1GB NACIONAL E INTERNACIONAL
                  </div>

                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-1">
                    <span className="text-lg font-bold mr-0.5">$</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      {p.price}
                    </span>
                    <span className="text-xs font-bold ml-1 text-[#FF6B00]">
                      /Mensual
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium mb-4">
                    VALOR + IVA
                  </div>

                  <div className="flex justify-center mb-5">
                    <div className="h-10 w-10 flex items-center justify-center text-[#FF6B00]">
                      <Server size={28} className="stroke-[1.5]" />
                    </div>
                  </div>

                  <ul className="space-y-2 text-[13.5px] font-medium text-[#E66B00] pb-6 leading-relaxed">
                    <li>{p.ssd}</li>
                    <li>{p.cpu}</li>
                    <li>{p.ram}</li>
                    <li>{p.traffic}</li>
                    <li>{p.ips}</li>
                    <li className="font-bold text-[#FF6B00]">Data Center Chile</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold text-xs uppercase tracking-wider block transition shadow"
                  >
                    COMPRAR AHORA
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB KVM */}
        {activeTab === "kvm" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "PLAN KVM-1",
                price: "12.000",
                ssd: "20 GB Disco SSD",
                cpu: "1 Vcpu",
                ram: "2 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN KVM-3",
                price: "28.000",
                ssd: "50 GB Disco SSD",
                cpu: "2 Vcpu",
                ram: "6 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN KVM-8",
                price: "96.000",
                ssd: "250 GB Disco SSD",
                cpu: "8 Vcpu",
                ram: "24 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              }
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#FF6B00] mb-1">
                    {p.name}
                  </h3>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">
                    KVM ROOT COMPLETO · DATA CENTER CHILE
                  </div>

                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-1">
                    <span className="text-lg font-bold mr-0.5">$</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      {p.price}
                    </span>
                    <span className="text-xs font-bold ml-1 text-[#FF6B00]">
                      /Mensual
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium mb-4">
                    VALOR + IVA
                  </div>

                  <div className="flex justify-center mb-5">
                    <div className="h-10 w-10 flex items-center justify-center text-[#FF6B00]">
                      <Server size={28} className="stroke-[1.5]" />
                    </div>
                  </div>

                  <ul className="space-y-2 text-[13.5px] font-medium text-[#E66B00] pb-6 leading-relaxed">
                    <li>{p.ssd}</li>
                    <li>{p.cpu}</li>
                    <li>{p.ram}</li>
                    <li>{p.traffic}</li>
                    <li>{p.ips}</li>
                    <li className="font-bold text-[#FF6B00]">Kernel Propio y Root Completo</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold text-xs uppercase tracking-wider block transition shadow"
                  >
                    COMPRAR AHORA
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB WORDPRESS */}
        {activeTab === "wp" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "PLAN VPS WP-1",
                price: "14.000",
                ssd: "15 GB Disco SSD",
                cpu: "1 Vcpu",
                ram: "2 GB Vcpu",
                panel: "CyberPanel + OpenLiteSpeed"
              },
              {
                name: "PLAN VPS WP-2",
                price: "25.000",
                ssd: "25 GB Disco SSD",
                cpu: "4 Vcpu",
                ram: "4 GB Vcpu",
                panel: "CyberPanel + OpenLiteSpeed"
              },
              {
                name: "PLAN VPS WP-6",
                price: "120.000",
                ssd: "150 GB Disco SSD",
                cpu: "12 Vcpu",
                ram: "10 GB Vcpu",
                panel: "CyberPanel + OpenLiteSpeed"
              }
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#FF6B00] mb-1">
                    {p.name}
                  </h3>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">
                    CYBERPANEL & OPENLITESPEED
                  </div>

                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-1">
                    <span className="text-lg font-bold mr-0.5">$</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      {p.price}
                    </span>
                    <span className="text-xs font-bold ml-1 text-[#FF6B00]">
                      /Mensual
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium mb-4">
                    VALOR + IVA
                  </div>

                  <div className="flex justify-center mb-5">
                    <div className="h-10 w-10 flex items-center justify-center text-[#FF6B00]">
                      <Server size={28} className="stroke-[1.5]" />
                    </div>
                  </div>

                  <ul className="space-y-2 text-[13.5px] font-medium text-[#E66B00] pb-6 leading-relaxed">
                    <li>{p.ssd}</li>
                    <li>{p.cpu}</li>
                    <li>{p.ram}</li>
                    <li className="font-bold">{p.panel}</li>
                    <li className="font-bold text-[#FF6B00]">Instalación Gratuita</li>
                    <li>Data Center Chile</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold text-xs uppercase tracking-wider block transition shadow"
                  >
                    COMPRAR AHORA
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB DEDICADOS */}
        {activeTab === "dedicados" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dedicado Básico",
                price: "190.000",
                cpu: "Intel Xeon 2660 v2 (10 Cores 2.2 Ghz)",
                ram: "32 GB Ram",
                disk: "2x2TB SSD RAID1",
                ips: "2 IPV4"
              },
              {
                name: "Dedicado Avanzado",
                price: "290.000",
                cpu: "Intel Xeon 2660 v2 (10 Cores)",
                ram: "128 GB Ram",
                disk: "2x2TB SSD RAID1",
                ips: "2 IPV4"
              },
              {
                name: "Avanzado Pro 3",
                price: "370.000",
                cpu: "2x Intel Xeon 2660 v4 (28 Cores 2.0 Ghz Turbo 3.2)",
                ram: "128 GB Ram",
                disk: "2x2TB SSD RAID1 NVMe",
                ips: "2 IPV4"
              }
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#FF6B00] mb-1">
                    {p.name}
                  </h3>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">
                    HARDWARE DEDICADO EXCLUSIVO
                  </div>

                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-1">
                    <span className="text-lg font-bold mr-0.5">$</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      {p.price}
                    </span>
                    <span className="text-xs font-bold ml-1 text-[#FF6B00]">
                      /Mensual
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium mb-4">
                    VALOR + IVA
                  </div>

                  <div className="flex justify-center mb-5">
                    <div className="h-10 w-10 flex items-center justify-center text-[#FF6B00]">
                      <Server size={28} className="stroke-[1.5]" />
                    </div>
                  </div>

                  <ul className="space-y-2 text-[13.5px] font-medium text-[#E66B00] pb-6 leading-relaxed">
                    <li>{p.cpu}</li>
                    <li>{p.disk}</li>
                    <li>{p.ram}</li>
                    <li>{p.ips}</li>
                    <li className="font-bold text-[#FF6B00]">Red 1 Gbps Dedicada</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold text-xs uppercase tracking-wider block transition shadow"
                  >
                    COMPRAR AHORA
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
