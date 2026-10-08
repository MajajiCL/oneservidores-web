"use client";

import { useState } from "react";
import { Server } from "lucide-react";

type VpsCategory = "lxc" | "kvm" | "wp" | "dedicados";

export function VpsFeatured() {
  const [activeTab, setActiveTab] = useState<VpsCategory>("lxc");

  return (
    <section className="py-16 bg-[#fafafa] border-b border-gray-200">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <h2 className="text-[32px] font-bold text-[#1f2937] tracking-tight uppercase leading-tight">
            {activeTab === "lxc" && "PLANES VPS LXC DESTACADOS"}
            {activeTab === "kvm" && "PLANES VPS KVM DESTACADOS"}
            {activeTab === "wp" && "PLANES VPS WORDPRESS"}
            {activeTab === "dedicados" && "Servidores Dedicados"}
          </h2>
          <p className="text-[15px] text-gray-500 font-normal">
            Data Center Tier III en Chile – Baja latencia para sur america
          </p>
          {activeTab === "wp" && (
            <p className="text-[13px] text-gray-400 font-medium">
              Instalación gratuita de CyberPanel y OpenLiteSpeed
            </p>
          )}

          {/* Category Switcher Tabs */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
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
                className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? "bg-[#FF6B00] text-white shadow-sm shadow-orange-500/20"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: LXC */}
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
                className="bg-white rounded-2xl p-6 shadow-md shadow-gray-200/40 border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-[#FF6B00] mb-0.5">
                    {p.name}
                  </h3>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                    INTEL XEON · 1GB NACIONAL E INTERNACIONAL
                  </div>

                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-1">
                    <span className="text-[15px] font-semibold mr-0.5">$</span>
                    <span className="text-[36px] font-bold tracking-tight leading-none">{p.price}</span>
                    <span className="text-[12px] font-medium ml-1 text-[#FF6B00]">/Mensual</span>
                  </div>

                  <div className="flex justify-center my-3.5">
                    <Server size={28} className="text-[#FF6B00] stroke-[1.5]" />
                  </div>

                  <ul className="space-y-1.5 text-[13px] font-normal text-[#E66B00] pb-5 leading-normal">
                    <li>{p.ssd}</li>
                    <li>{p.cpu}</li>
                    <li>{p.ram}</li>
                    <li>{p.traffic}</li>
                    <li>{p.ips}</li>
                    <li>Virtualización LXC</li>
                    <li>Bajo Ping en Chile y Sudamérica</li>
                    <li>Soporte 24/7</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-semibold text-[11px] uppercase tracking-wider block transition shadow-xs"
                  >
                    COMPRAR AHORA
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: KVM */}
        {activeTab === "kvm" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "PLAN KVM-1",
                price: "9.000",
                ssd: "20 GB Disco SSD",
                cpu: "1 Vcpu",
                ram: "1.5 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN KVM-3",
                price: "32.000",
                ssd: "60 GB Disco SSD",
                cpu: "3 Vcpu",
                ram: "6 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN KVM-6",
                price: "68.000",
                ssd: "140 GB Disco SSD",
                cpu: "6 Vcpu",
                ram: "14 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              }
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-6 shadow-md shadow-gray-200/40 border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-[#FF6B00] mb-0.5">
                    {p.name}
                  </h3>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                    INTEL XEON · 1GB NACIONAL E INTERNACIONAL
                  </div>

                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-1">
                    <span className="text-[15px] font-semibold mr-0.5">$</span>
                    <span className="text-[36px] font-bold tracking-tight leading-none">{p.price}</span>
                    <span className="text-[12px] font-medium ml-1 text-[#FF6B00]">/Mensual</span>
                  </div>

                  <div className="flex justify-center my-3.5">
                    <Server size={28} className="text-[#FF6B00] stroke-[1.5]" />
                  </div>

                  <ul className="space-y-1.5 text-[13px] font-normal text-[#E66B00] pb-5 leading-normal">
                    <li>{p.ssd}</li>
                    <li>{p.cpu}</li>
                    <li>{p.ram}</li>
                    <li>{p.traffic}</li>
                    <li>{p.ips}</li>
                    <li>Virtualización KVM Completa</li>
                    <li>Kernel Propio e ISOs Personalizadas</li>
                    <li>Soporte 24/7</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-semibold text-[11px] uppercase tracking-wider block transition shadow-xs"
                  >
                    COMPRAR AHORA
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: WP */}
        {activeTab === "wp" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "PLAN WP-LXC1",
                price: "9.000",
                ssd: "20 GB Disco SSD",
                cpu: "2 Vcpu",
                ram: "2 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN WP-LXC2",
                price: "18.000",
                ssd: "50 GB Disco SSD",
                cpu: "4 Vcpu",
                ram: "4 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN WP-LXC3",
                price: "35.000",
                ssd: "80 GB Disco SSD",
                cpu: "6 Vcpu",
                ram: "8 GB Ram",
                traffic: "Ilimitada Transferencia",
                ips: "1 IPV4 · 1 IPV6"
              }
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-6 shadow-md shadow-gray-200/40 border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-[#FF6B00] mb-0.5">
                    {p.name}
                  </h3>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                    CYBERPANEL + OPENLITESPEED
                  </div>

                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-1">
                    <span className="text-[15px] font-semibold mr-0.5">$</span>
                    <span className="text-[36px] font-bold tracking-tight leading-none">{p.price}</span>
                    <span className="text-[12px] font-medium ml-1 text-[#FF6B00]">/Mensual</span>
                  </div>

                  <div className="flex justify-center my-3.5">
                    <Server size={28} className="text-[#FF6B00] stroke-[1.5]" />
                  </div>

                  <ul className="space-y-1.5 text-[13px] font-normal text-[#E66B00] pb-5 leading-normal">
                    <li>{p.ssd}</li>
                    <li>{p.cpu}</li>
                    <li>{p.ram}</li>
                    <li>{p.traffic}</li>
                    <li>{p.ips}</li>
                    <li>CyberPanel Instalado Gratis</li>
                    <li>OpenLiteSpeed Cache Activo</li>
                    <li>Soporte 24/7</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-semibold text-[11px] uppercase tracking-wider block transition shadow-xs"
                  >
                    COMPRAR AHORA
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: DEDICADOS */}
        {activeTab === "dedicados" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "PLAN DED-1",
                price: "99.000",
                cpu: "Intel Xeon E3-1240v6",
                ram: "32 GB RAM DDR4",
                storage: "2x 500GB SSD",
                traffic: "Puerto 1 Gbps Dedicado",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN DED-2",
                price: "169.000",
                cpu: "AMD EPYC 7302P",
                ram: "64 GB RAM DDR4",
                storage: "2x 1TB NVMe",
                traffic: "Puerto 1 a 10 Gbps",
                ips: "2 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN DED-3",
                price: "289.000",
                cpu: "Dual Intel Xeon Silver",
                ram: "128 GB RAM DDR4",
                storage: "4x 2TB NVMe RAID",
                traffic: "Puerto 10 Gbps Telxius",
                ips: "5 IPV4 · BGP Gratuito"
              }
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-6 shadow-md shadow-gray-200/40 border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-[#FF6B00] mb-0.5">
                    {p.name}
                  </h3>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                    HARDWARE DEDICADO EXCLUSIVO
                  </div>

                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-1">
                    <span className="text-[15px] font-semibold mr-0.5">$</span>
                    <span className="text-[36px] font-bold tracking-tight leading-none">{p.price}</span>
                    <span className="text-[12px] font-medium ml-1 text-[#FF6B00]">/Mensual</span>
                  </div>

                  <div className="flex justify-center my-3.5">
                    <Server size={28} className="text-[#FF6B00] stroke-[1.5]" />
                  </div>

                  <ul className="space-y-1.5 text-[13px] font-normal text-[#E66B00] pb-5 leading-normal">
                    <li>{p.cpu}</li>
                    <li>{p.ram}</li>
                    <li>{p.storage}</li>
                    <li>{p.traffic}</li>
                    <li>{p.ips}</li>
                    <li>Enlace Tier III en Chile</li>
                    <li>Tráfico Ilimitado</li>
                    <li>Soporte 24/7</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-semibold text-[11px] uppercase tracking-wider block transition shadow-xs"
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
