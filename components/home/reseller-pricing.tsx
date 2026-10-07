"use client";

import { useState } from "react";
import { Rocket } from "lucide-react";

interface ResellerPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  ssd: string;
  cpanelAccounts: string;
  ramPerAccount: string;
}

const resellerPlans: ResellerPlan[] = [
  {
    name: "Aprendiz",
    monthlyPrice: "17000",
    annualPrice: "200000",
    ssd: "60 GB Espacio SSD",
    cpanelAccounts: "30 Cuentas Cpanel",
    ramPerAccount: "1 GB RAM por Cpanel"
  },
  {
    name: "Emprendedor",
    monthlyPrice: "28000",
    annualPrice: "336000",
    ssd: "100 GB Espacio SSD",
    cpanelAccounts: "50 Cuentas Cpanel",
    ramPerAccount: "2 GB RAM por Cpanel"
  },
  {
    name: "Despegando",
    monthlyPrice: "41000",
    annualPrice: "492000",
    ssd: "180 GB Espacio SSD",
    cpanelAccounts: "80 Cuentas Cpanel",
    ramPerAccount: "3 GB RAM por Cpanel"
  },
  {
    name: "Revendedor Pro",
    monthlyPrice: "57000",
    annualPrice: "684000",
    ssd: "250 GB Espacio SSD",
    cpanelAccounts: "100 Cuentas Cpanel",
    ramPerAccount: "4 GB RAM por Cpanel"
  }
];

export function ResellerPricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
            Reseller Web Hosting Cpanel
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Nuestros planes de Reseller WebHosting cuentan con LiteSpeed, Antimalware, Antivirus, Antispam y más.
          </p>

          {/* Switcher [MENSUAL] [ANUAL] */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex rounded border border-[#FF6B00] overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-8 py-2.5 text-xs font-black uppercase tracking-wider transition-all ${
                  billing === "monthly"
                    ? "bg-[#FF6B00] text-white"
                    : "bg-white text-[#FF6B00] hover:bg-orange-50"
                }`}
              >
                MENSUAL
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`px-8 py-2.5 text-xs font-black uppercase tracking-wider transition-all border-l border-[#FF6B00] ${
                  billing === "annual"
                    ? "bg-[#FF6B00] text-white"
                    : "bg-white text-[#FF6B00] hover:bg-orange-50"
                }`}
              >
                ANUAL
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {resellerPlans.map((p) => {
            const price = billing === "monthly" ? p.monthlyPrice : p.annualPrice;
            const period = billing === "monthly" ? "/Mensual" : "/Año";

            return (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  {/* Plan Name in ORANGE */}
                  <h3 className="text-xl font-bold text-[#FF6B00] mb-2">
                    {p.name}
                  </h3>

                  {/* Price in ORANGE */}
                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-4">
                    <span className="text-lg font-bold mr-0.5">$</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs font-bold ml-1 text-[#FF6B00]">
                      {period}
                    </span>
                  </div>

                  {/* Rocket Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="h-12 w-12 flex items-center justify-center text-[#FF6B00]">
                      <Rocket size={32} className="stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Features in Centered Warm Orange */}
                  <ul className="space-y-2 text-[13.5px] font-medium text-[#E66B00] pb-6 leading-relaxed">
                    <li>{p.ssd}</li>
                    <li className="font-bold">{p.cpanelAccounts}</li>
                    <li>{p.ramPerAccount}</li>
                    <li>Transferencia Ilimitada</li>
                    <li>Cuentas de correo: ilimitados</li>
                    <li>BD MySQL: ilimitadas</li>
                    <li>Sub Dominios: ilimitados</li>
                    <li>Dominios Adicionales: ilimitados</li>
                    <li className="font-bold text-[#FF6B00]">Certificado SSL Gratis!</li>
                    <li>Múltiple Versión PHP</li>
                    <li>CloudLinux Incluido</li>
                    <li>CpGuard Antimalware</li>
                    <li>LiteSpeed</li>
                  </ul>
                </div>

                {/* Buy Button */}
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
            );
          })}
        </div>

        {/* Footer info note */}
        <div className="mt-12 text-center space-y-2">
          <div className="text-xs text-gray-500 font-medium">
            Valores expresados Sin IVA
          </div>
          <div className="text-xs text-gray-500 font-semibold">
            *Puedes Adquirir una IP Dedicada por $3.500+iva Mensual
          </div>
        </div>
      </div>
    </section>
  );
}
