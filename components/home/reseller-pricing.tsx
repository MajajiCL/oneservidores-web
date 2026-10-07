"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface ResellerPlan {
  name: string;
  popular?: boolean;
  monthlyPrice: string;
  annualPrice: string;
  ssd: string;
  cpanelAccounts: string;
  ramPerAccount: string;
}

const resellerPlans: ResellerPlan[] = [
  {
    name: "Aprendiz",
    monthlyPrice: "17.000",
    annualPrice: "200.000",
    ssd: "60 GB Espacio SSD NVMe",
    cpanelAccounts: "30 Cuentas cPanel",
    ramPerAccount: "1 GB RAM por cPanel"
  },
  {
    name: "Emprendedor",
    popular: true,
    monthlyPrice: "28.000",
    annualPrice: "336.000",
    ssd: "100 GB Espacio SSD NVMe",
    cpanelAccounts: "50 Cuentas cPanel",
    ramPerAccount: "2 GB RAM por cPanel"
  },
  {
    name: "Despegando",
    monthlyPrice: "41.000",
    annualPrice: "492.000",
    ssd: "180 GB Espacio SSD NVMe",
    cpanelAccounts: "80 Cuentas cPanel",
    ramPerAccount: "3 GB RAM por cPanel"
  },
  {
    name: "Revendedor Pro",
    monthlyPrice: "57.000",
    annualPrice: "684.000",
    ssd: "250 GB Espacio SSD NVMe",
    cpanelAccounts: "100 Cuentas cPanel",
    ramPerAccount: "4 GB RAM por cPanel"
  }
];

export function ResellerPricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-black tracking-widest uppercase">
            PLANES RESELLER & AGENCIAS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Reseller Web Hosting con WHM
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Crea y vende tus propios planes de alojamiento con panel WHM independiente, marca blanca y servidores LiteSpeed ultrarrápidos.
          </p>

          {/* Switcher [MENSUAL] [ANUAL] */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  billing === "monthly"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Pago Mensual
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  billing === "annual"
                    ? "bg-[#FF6B00] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Pago Anual
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {resellerPlans.map((p) => {
            const price = billing === "monthly" ? p.monthlyPrice : p.annualPrice;
            const period = billing === "monthly" ? "/mes" : "/año";

            return (
              <div
                key={p.name}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  p.popular
                    ? "bg-white border-2 border-[#FF6B00] shadow-xl shadow-orange-500/10 scale-[1.02] z-10"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF6B00] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                    RECOMENDADO
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-5">
                    WHM + Cuentas cPanel Autónomas
                  </p>

                  <div className="pb-5 mb-5 border-b border-slate-100">
                    <div className="flex items-baseline text-slate-950">
                      <span className="text-lg font-bold text-slate-500 mr-1">$</span>
                      <span className="text-4xl font-black tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 ml-1.5">
                        {period} + IVA
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700 pb-6">
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.ssd}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.cpanelAccounts}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span>{p.ramPerAccount}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span>Transferencia Mensual Ilimitada</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span>Nameservers Personalizados (DNS Propios)</span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-2 text-[11.5px] text-slate-600">
                      <div className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 stroke-[2.5] shrink-0" />
                        <span>LiteSpeed Web Server</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 stroke-[2.5] shrink-0" />
                        <span>CpGuard Protección Activa</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider block text-center transition-all ${
                      p.popular
                        ? "bg-[#FF6B00] hover:bg-[#E66000] text-white shadow-lg shadow-orange-600/30 hover:-translate-y-0.5"
                        : "bg-slate-900 hover:bg-slate-800 text-white hover:-translate-y-0.5"
                    }`}
                  >
                    CONTRATAR RESELLER
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
