"use client";

import { useState } from "react";
import { Server, Cpu, HardDrive, Network, Check } from "lucide-react";

type VpsCategory = "lxc" | "kvm" | "wp" | "dedicados";

export function VpsFeatured() {
  const [activeTab, setActiveTab] = useState<VpsCategory>("lxc");

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-black tracking-widest uppercase">
            COMPUTO DE ALTO RENDIMIENTO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Servidores VPS & Dedicados
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Alojados en Data Center Tier III en Chile con latencia ultra baja para toda Latinoamérica y red simétrica de 1 a 10 Gbps.
          </p>

          {/* Category Switcher Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "lxc", label: "VPS LXC Linux" },
              { id: "kvm", label: "VPS KVM Linux (Root)" },
              { id: "wp", label: "VPS Optimizado WordPress" },
              { id: "dedicados", label: "Servidores Dedicados" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as VpsCategory)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? "bg-[#FF6B00] text-white shadow-md shadow-orange-600/25"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: LXC */}
        {activeTab === "lxc" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {[
              {
                name: "PLAN LXC-1",
                price: "5.000",
                ssd: "10 GB Disco SSD NVMe",
                cpu: "1 vCPU Intel Xeon",
                ram: "1 GB Memoria RAM",
                traffic: "Transferencia Ilimitada",
                ips: "1 IPv4 Dedicada + 1 IPv6"
              },
              {
                name: "PLAN LXC-3",
                popular: true,
                price: "18.000",
                ssd: "40 GB Disco SSD NVMe",
                cpu: "2 vCPU Intel Xeon",
                ram: "4 GB Memoria RAM",
                traffic: "Transferencia Ilimitada",
                ips: "1 IPv4 Dedicada + 1 IPv6"
              },
              {
                name: "PLAN LXC-8",
                price: "75.000",
                ssd: "200 GB Disco SSD NVMe",
                cpu: "10 vCPU Intel Xeon",
                ram: "16 GB Memoria RAM",
                traffic: "Transferencia Ilimitada",
                ips: "1 IPv4 Dedicada + 1 IPv6"
              }
            ].map((p) => (
              <div
                key={p.name}
                className={`relative bg-white rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  p.popular
                    ? "border-2 border-[#FF6B00] shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "border border-slate-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FF6B00] text-white text-[10px] font-black tracking-wider uppercase">
                    MÁS VENDIDO
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{p.name}</h3>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Contenedor Ultraligero LXC
                  </div>

                  <div className="pb-5 mb-5 border-b border-slate-100">
                    <div className="flex items-baseline text-slate-950">
                      <span className="text-lg font-bold text-slate-500 mr-1">$</span>
                      <span className="text-4xl font-black tracking-tight">{p.price}</span>
                      <span className="text-xs font-semibold text-slate-500 ml-1.5">/mes + IVA</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700 pb-6">
                    <div className="flex items-center gap-2.5">
                      <HardDrive size={15} className="text-[#FF6B00] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.ssd}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Cpu size={15} className="text-[#FF6B00] shrink-0" />
                      <span>{p.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Server size={15} className="text-[#FF6B00] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.ram}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Network size={15} className="text-[#FF6B00] shrink-0" />
                      <span>{p.traffic}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={15} className="text-emerald-600 stroke-[3] shrink-0" />
                      <span>{p.ips}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://portal.oneservidores.com/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider block text-center transition-all ${
                    p.popular
                      ? "bg-[#FF6B00] hover:bg-[#E66000] text-white shadow-md shadow-orange-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  CONTRATAR VPS LXC
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: KVM */}
        {activeTab === "kvm" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {[
              {
                name: "PLAN KVM-1",
                price: "9.000",
                ssd: "20 GB Disco SSD",
                cpu: "1 vCPU KVM",
                ram: "1.5 GB RAM Dedicada",
                traffic: "Transferencia Ilimitada",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN KVM-3",
                popular: true,
                price: "32.000",
                ssd: "60 GB Disco SSD",
                cpu: "3 vCPU KVM",
                ram: "6 GB RAM Dedicada",
                traffic: "Transferencia Ilimitada",
                ips: "1 IPV4 · 1 IPV6"
              },
              {
                name: "PLAN KVM-6",
                price: "68.000",
                ssd: "140 GB Disco SSD",
                cpu: "6 vCPU KVM",
                ram: "14 GB RAM Dedicada",
                traffic: "Transferencia Ilimitada",
                ips: "1 IPV4 · 1 IPV6"
              }
            ].map((p) => (
              <div
                key={p.name}
                className={`relative bg-white rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  p.popular
                    ? "border-2 border-[#FF6B00] shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "border border-slate-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FF6B00] text-white text-[10px] font-black tracking-wider uppercase">
                    MÁS ELEGIDO
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{p.name}</h3>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Virtualización Completa KVM · Kernel Propio
                  </div>

                  <div className="pb-5 mb-5 border-b border-slate-100">
                    <div className="flex items-baseline text-slate-950">
                      <span className="text-lg font-bold text-slate-500 mr-1">$</span>
                      <span className="text-4xl font-black tracking-tight">{p.price}</span>
                      <span className="text-xs font-semibold text-slate-500 ml-1.5">/mes + IVA</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700 pb-6">
                    <div className="flex items-center gap-2.5">
                      <HardDrive size={15} className="text-[#FF6B00] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.ssd}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Cpu size={15} className="text-[#FF6B00] shrink-0" />
                      <span>{p.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Server size={15} className="text-[#FF6B00] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.ram}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Network size={15} className="text-[#FF6B00] shrink-0" />
                      <span>{p.traffic}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={15} className="text-emerald-600 stroke-[3] shrink-0" />
                      <span>{p.ips}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://portal.oneservidores.com/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider block text-center transition-all ${
                    p.popular
                      ? "bg-[#FF6B00] hover:bg-[#E66000] text-white shadow-md shadow-orange-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  CONTRATAR VPS KVM
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: WP */}
        {activeTab === "wp" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
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
                popular: true,
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
                className={`relative bg-white rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  p.popular
                    ? "border-2 border-[#FF6B00] shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "border border-slate-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FF6B00] text-white text-[10px] font-black tracking-wider uppercase">
                    RECOMENDADO WP
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{p.name}</h3>
                  <div className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mb-4">
                    CyberPanel + OpenLiteSpeed Preinstalado
                  </div>

                  <div className="pb-5 mb-5 border-b border-slate-100">
                    <div className="flex items-baseline text-slate-950">
                      <span className="text-lg font-bold text-slate-500 mr-1">$</span>
                      <span className="text-4xl font-black tracking-tight">{p.price}</span>
                      <span className="text-xs font-semibold text-slate-500 ml-1.5">/mes + IVA</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700 pb-6">
                    <div className="flex items-center gap-2.5">
                      <HardDrive size={15} className="text-[#FF6B00] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.ssd}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Cpu size={15} className="text-[#FF6B00] shrink-0" />
                      <span>{p.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Server size={15} className="text-[#FF6B00] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.ram}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Network size={15} className="text-[#FF6B00] shrink-0" />
                      <span>{p.traffic}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={15} className="text-emerald-600 stroke-[3] shrink-0" />
                      <span>{p.ips}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://portal.oneservidores.com/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider block text-center transition-all ${
                    p.popular
                      ? "bg-[#FF6B00] hover:bg-[#E66000] text-white shadow-md shadow-orange-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  CONTRATAR VPS WORDPRESS
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: DEDICADOS */}
        {activeTab === "dedicados" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {[
              {
                name: "DEDICADO ENTRY",
                price: "99.000",
                cpu: "Intel Xeon E3-1240v6 (4 Cores / 8 Threads)",
                ram: "32 GB RAM DDR4 ECC",
                storage: "2x 500GB SSD Hardware RAID",
                uplink: "1 Gbps Puerto Dedicado Simétrico",
                ips: "1 IPv4 Incluida + /64 IPv6"
              },
              {
                name: "DEDICADO POWER",
                popular: true,
                price: "169.000",
                cpu: "AMD EPYC 7302P (16 Cores / 32 Threads)",
                ram: "64 GB RAM DDR4 ECC Reg",
                storage: "2x 1TB NVMe Gen4 Enterprise",
                uplink: "1 Gbps a 10 Gbps Burstable",
                ips: "2 IPv4 Incluidas + BGP Gratuito"
              },
              {
                name: "DEDICADO ENTERPRISE",
                price: "289.000",
                cpu: "Dual Intel Xeon Silver 4214R (24C / 48T)",
                ram: "128 GB RAM DDR4 ECC Reg",
                storage: "4x 2TB NVMe Hot-Swap RAID 10",
                uplink: "10 Gbps Red Dedicada Telxius/Lumen",
                ips: "5 IPv4 Incluidas + ASN Directo"
              }
            ].map((p) => (
              <div
                key={p.name}
                className={`relative bg-white rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  p.popular
                    ? "border-2 border-[#FF6B00] shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "border border-slate-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FF6B00] text-white text-[10px] font-black tracking-wider uppercase">
                    ALTA DEMANDA
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{p.name}</h3>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Hardware Físico Exclusivo · Tier III Santiago
                  </div>

                  <div className="pb-5 mb-5 border-b border-slate-100">
                    <div className="flex items-baseline text-slate-950">
                      <span className="text-lg font-bold text-slate-500 mr-1">$</span>
                      <span className="text-4xl font-black tracking-tight">{p.price}</span>
                      <span className="text-xs font-semibold text-slate-500 ml-1.5">/mes + IVA</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700 pb-6">
                    <div className="flex items-center gap-2.5">
                      <Cpu size={15} className="text-[#FF6B00] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Server size={15} className="text-[#FF6B00] shrink-0" />
                      <span>{p.ram}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <HardDrive size={15} className="text-[#FF6B00] shrink-0" />
                      <span>{p.storage}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Network size={15} className="text-[#FF6B00] shrink-0" />
                      <span>{p.uplink}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={15} className="text-emerald-600 stroke-[3] shrink-0" />
                      <span>{p.ips}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://portal.oneservidores.com/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider block text-center transition-all ${
                    p.popular
                      ? "bg-[#FF6B00] hover:bg-[#E66000] text-white shadow-md shadow-orange-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  CONFIGURAR DEDICADO
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
