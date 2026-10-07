"use client";

import { useState } from "react";
import { Check, Rocket, ShieldCheck } from "lucide-react";

interface ResellerPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  ssd: string;
  cpanelAccounts: string;
  ramPerAccount: string;
  recommended?: boolean;
}

const resellerPlans: ResellerPlan[] = [
  {
    name: "Aprendiz",
    monthlyPrice: "17.000",
    annualPrice: "200.000",
    ssd: "60 GB Espacio SSD",
    cpanelAccounts: "30 Cuentas cPanel",
    ramPerAccount: "1 GB RAM por cPanel"
  },
  {
    name: "Emprendedor",
    monthlyPrice: "28.000",
    annualPrice: "336.000",
    ssd: "100 GB Espacio SSD",
    cpanelAccounts: "50 Cuentas cPanel",
    ramPerAccount: "2 GB RAM por cPanel"
  },
  {
    name: "Despegando",
    monthlyPrice: "41.000",
    annualPrice: "492.000",
    ssd: "180 GB Espacio SSD",
    cpanelAccounts: "80 Cuentas cPanel",
    ramPerAccount: "3 GB RAM por cPanel",
    recommended: true
  },
  {
    name: "Revendedor Pro",
    monthlyPrice: "57.000",
    annualPrice: "684.000",
    ssd: "250 GB Espacio SSD",
    cpanelAccounts: "100 Cuentas cPanel",
    ramPerAccount: "4 GB RAM por cPanel"
  }
];

export function ResellerPricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7800]">
            INICIA TU PROPIO NEGOCIO DE HOSTING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Reseller Web Hosting cPanel
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Nuestros planes de Reseller WebHosting cuentan con <strong>LiteSpeed</strong>, 
            <strong>Antimalware</strong>, antivirus, antispam y panel WHM con marca blanca.
          </p>

          {/* Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-slate-100 p-1.5 rounded-full border border-gray-200 inline-flex items-center gap-1">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  billing === "monthly"
                    ? "bg-[#FF7800] text-white shadow-md shadow-orange-500/30"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Mensual
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-1.5 ${
                  billing === "annual"
                    ? "bg-[#FF7800] text-white shadow-md shadow-orange-500/30"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Anual
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                  billing === "annual" ? "bg-white text-[#FF7800]" : "bg-orange-200/80 text-[#FF7800]"
                }`}>
                  AHORRO ANUAL
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid with Rocket Icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {resellerPlans.map((p) => {
            const price = billing === "monthly" ? p.monthlyPrice : p.annualPrice;
            const period = billing === "monthly" ? "/Mensual" : "/Año";

            return (
              <div
                key={p.name}
                className={`relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 transition-all duration-200 ${
                  p.recommended
                    ? "border-2 border-[#FF7800] shadow-xl shadow-orange-500/10 scale-[1.02] lg:-translate-y-2 ring-4 ring-orange-500/10"
                    : "border border-gray-200 hover:border-orange-300 hover:shadow-lg shadow-sm"
                }`}
              >
                {p.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF7800] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                    RECOMENDADO
                  </div>
                )}

                <div>
                  {/* Top Rocket Icon & Title */}
                  <div className="text-center pb-6 border-b border-gray-100">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-[#FF7800] mb-3">
                      <Rocket size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-950 mb-2">
                      {p.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 text-[#FF7800]">
                      <span className="text-lg font-bold">$</span>
                      <span className="text-4xl sm:text-5xl font-black tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-bold text-gray-500">
                        {period}
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-400 font-semibold mt-1">
                      Valores Sin IVA
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="py-6 space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2.5 font-bold text-gray-950">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>{p.ssd}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-bold text-[#FF7800]">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>{p.cpanelAccounts}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-semibold text-gray-900">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>{p.ramPerAccount}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>BD MySQL: Ilimitadas</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>Sub Dominios: Ilimitados</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>Dominios Adicionales: Ilimitados</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-emerald-700 font-medium">
                      <Check size={16} className="text-emerald-600 shrink-0" />
                      <span>Certificado SSL Gratis!</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-500 pt-2 border-t border-gray-100">
                      <span>• Panel de Control WHM en Español</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-500">
                      <span>• CloudLinux + CpGuard Antimalware</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-500">
                      <span>• LiteSpeed Web Server</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full font-black text-sm uppercase tracking-wider text-center block bg-[#FF7800] hover:bg-[#E66B00] text-white transition-all shadow-md shadow-orange-500/20"
                  >
                    Comprar Ahora
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            * Valores expresados Sin IVA · Puedes adquirir una IP Dedicada por $3.500+IVA Mensual
          </p>
        </div>
      </div>
    </section>
  );
}
