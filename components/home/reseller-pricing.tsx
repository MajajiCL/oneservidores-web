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
    <section className="relative py-16 bg-white overflow-hidden border-b border-gray-100">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
          <h2 className="text-[32px] font-bold text-[#1f2937] tracking-tight leading-tight">
            Reseller Web Hosting Cpanel
          </h2>
          <p className="text-[15px] text-gray-500 font-normal">
            Nuestros planes de Reseller WebHosting cuentan con LiteSpeed, Antimalware, Antivirus, Antispam y más.
          </p>

          {/* Switcher [MENSUAL] [ANUAL] */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex rounded border border-[#FF6B00] overflow-hidden shadow-xs">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-7 py-2 text-[11px] font-bold uppercase tracking-wider transition-all ${
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
                className={`px-7 py-2 text-[11px] font-bold uppercase tracking-wider transition-all border-l border-[#FF6B00] ${
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

        {/* 4 Cards Grid con proporciones exactas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {resellerPlans.map((p) => {
            const price = billing === "monthly" ? p.monthlyPrice : p.annualPrice;
            const period = billing === "monthly" ? "/Mensual" : "/Año";

            return (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-6 shadow-md shadow-gray-200/40 border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-[#FF6B00] mb-1">
                    {p.name}
                  </h3>

                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-3">
                    <span className="text-[15px] font-semibold mr-0.5">$</span>
                    <span className="text-[38px] font-bold tracking-tight leading-none">
                      {price}
                    </span>
                    <span className="text-[12px] font-medium ml-1 text-[#FF6B00]">
                      {period}
                    </span>
                  </div>

                  <div className="flex justify-center mb-5">
                    <div className="h-10 w-10 flex items-center justify-center text-[#FF6B00]">
                      <Rocket size={28} className="stroke-[1.5]" />
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-[13px] font-normal text-[#E66B00] pb-5 leading-normal">
                    <li>{p.ssd}</li>
                    <li>{p.cpanelAccounts}</li>
                    <li>{p.ramPerAccount}</li>
                    <li>Transferencia Ilimitada</li>
                    <li>Cuentas de correo: ilimitadas</li>
                    <li>BD MySQL: ilimitadas</li>
                    <li>Sub Dominios: ilimitados</li>
                    <li>Dominios Adicionales: ilimitados</li>
                    <li className="font-semibold text-[#FF6B00]">Certificado SSL Gratis!</li>
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
                    className="w-full py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-semibold text-[11px] uppercase tracking-wider block transition shadow-xs"
                  >
                    COMPRAR AHORA
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-8 text-center text-[12px] text-gray-400 leading-relaxed">
          Valores expresados Sin IVA<br />
          *Puedes Adquirir una IP Dedicada por $3.500+iva Mensual
        </div>
      </div>
    </section>
  );
}
