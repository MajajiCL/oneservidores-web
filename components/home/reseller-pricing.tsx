"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Rocket } from "lucide-react";
import { asset } from "@/lib/paths";

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
    <section className="relative py-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <h2 className="text-[42px] font-semibold text-black tracking-normal leading-tight font-['Jost']">
            Reseller Web Hosting Cpanel
          </h2>
          <p className="text-[17px] text-black font-normal tracking-[-0.2px] font-['Jost']">
            Nuestros planes de Reseller WebHosting cuentan con LiteSpeed, Antimalware, Antivirus, Antispam y más.
          </p>

          {/* Switcher [MENSUAL] [ANUAL] */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex rounded-[3px] border-2 border-[#eee] bg-white overflow-hidden p-0.5">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`w-[120px] py-2 text-[12px] font-semibold uppercase tracking-wider font-work-sans transition-all rounded-[2px] ${
                  billing === "monthly"
                    ? "bg-[#FF7800] text-white"
                    : "bg-white text-[#FF7800] hover:bg-orange-50/50"
                }`}
              >
                MENSUAL
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`w-[120px] py-2 text-[12px] font-semibold uppercase tracking-wider font-work-sans transition-all rounded-[2px] ${
                  billing === "annual"
                    ? "bg-[#FF7800] text-white"
                    : "bg-white text-[#FF7800] hover:bg-orange-50/50"
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
                className="bg-white rounded-2xl p-7 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-shadow text-center"
              >
                <div>
                  <h4 className="text-[24px] font-medium text-[#FF7800] tracking-[-0.5px] font-['Jost'] mb-2">
                    {p.name}
                  </h4>

                  <div className="flex items-baseline justify-center mb-5 text-[#FF7800]">
                    <span className="text-[20px] font-medium mr-1">$</span>
                    <span className="text-[62px] font-medium tracking-tight leading-none font-['Jost']">
                      {price}
                    </span>
                    <span className="text-[16px] font-normal font-work-sans ml-1.5 text-[#FF7800]">
                      {period}
                    </span>
                  </div>

                  <div className="flex justify-center mb-6">
                    <div className="h-12 w-12 flex items-center justify-center text-[#FF7800]">
                      <Rocket size={34} className="stroke-[1.6]" />
                    </div>
                  </div>

                  <ul className="space-y-2 text-[18px] font-normal text-[#FF7800] tracking-[-0.2px] font-['Jost'] pb-7 leading-relaxed">
                    <li>{p.ssd}</li>
                    <li>{p.cpanelAccounts}</li>
                    <li>{p.ramPerAccount}</li>
                    <li>Transferencia Ilimitada</li>
                    <li>Cuentas de correo: ilimitadas</li>
                    <li>BD MySQL: ilimitadas</li>
                    <li>Sub Dominios: ilimitados</li>
                    <li>Dominios Adicionales: ilimitados</li>
                    <li className="font-semibold">Certificado SSL Gratis!</li>
                    <li>Múltiple Versión PHP</li>
                    <li>CloudLinux Incluido</li>
                    <li>CpGuard Antimalware</li>
                    <li>LiteSpeed</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-[40px] flex items-center justify-center rounded-[2px] bg-[#FF7800] hover:bg-[#E66B00] text-white font-semibold text-[12px] uppercase tracking-wider font-work-sans transition shadow-sm"
                  >
                    COMPRAR AHORA
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-10 text-center text-[13px] text-gray-500 font-['Jost']">
          Valores expresados Sin IVA<br />
          *Puedes Adquirir una IP Dedicada por $3.500+iva Mensual
        </div>
      </div>
    </section>
  );
}
