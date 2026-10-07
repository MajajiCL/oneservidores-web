"use client";

import { useState } from "react";
import { Check, ShieldCheck, Zap, ArrowRight, Star } from "lucide-react";

interface Plan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  ssd: string;
  ram: string;
  emails: string;
  mysql: string;
  subdomains: string;
  extraDomains: string;
  popular?: boolean;
  whmcsUrl: string;
}

const plans: Plan[] = [
  {
    name: "Aprendiz",
    monthlyPrice: "2.200",
    annualPrice: "12.000",
    ssd: "1 GB Espacio SSD",
    ram: "1 GB Memoria RAM",
    emails: "5 Cuentas de correo",
    mysql: "1 BD MySQL",
    subdomains: "2 Sub Dominios",
    extraDomains: "0 Dominios Adicionales",
    whmcsUrl: "https://portal.oneservidores.com/cart.php?a=add&pid=1"
  },
  {
    name: "Emprendedor",
    monthlyPrice: "3.900",
    annualPrice: "26.000",
    ssd: "5 GB Espacio SSD",
    ram: "1.5 GB Memoria RAM",
    emails: "10 Cuentas de correo",
    mysql: "2 BD MySQL",
    subdomains: "4 Sub Dominios",
    extraDomains: "1 Dominio Adicional",
    whmcsUrl: "https://portal.oneservidores.com/cart.php?a=add&pid=2"
  },
  {
    name: "Pyme",
    monthlyPrice: "4.900",
    annualPrice: "50.000",
    ssd: "20 GB Espacio SSD",
    ram: "3 GB Memoria RAM",
    emails: "50 Cuentas de correo",
    mysql: "5 BD MySQL",
    subdomains: "10 Sub Dominios",
    extraDomains: "2 Dominios Adicionales",
    popular: true,
    whmcsUrl: "https://portal.oneservidores.com/cart.php?a=add&pid=3"
  },
  {
    name: "Empresa",
    monthlyPrice: "6.700",
    annualPrice: "70.000",
    ssd: "50 GB Espacio SSD",
    ram: "5 GB Memoria RAM",
    emails: "Cuentas ilimitadas",
    mysql: "10 BD MySQL",
    subdomains: "10 Sub Dominios",
    extraDomains: "3 Dominios Adicionales",
    whmcsUrl: "https://portal.oneservidores.com/cart.php?a=add&pid=4"
  }
];

export function HostingPricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="planes-hosting" className="py-20 bg-slate-50 border-b border-gray-200">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7800]">
            ALTA VELOCIDAD Y CONFIANZA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Web Hosting cPanel
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Nuestros planes de WebHosting cuentan con servidor <strong>LiteSpeed Enterprise</strong>, 
            antimalware <strong>CpGuard</strong>, antivirus, antispam y cPanel en español.
          </p>

          {/* Billing Switcher (Mensual / Anual) */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-white p-1.5 rounded-full border border-gray-300 shadow-sm inline-flex items-center gap-1">
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
                  billing === "annual" ? "bg-white text-[#FF7800]" : "bg-orange-100 text-[#FF7800]"
                }`}>
                  AHORRA
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((p) => {
            const price = billing === "monthly" ? p.monthlyPrice : p.annualPrice;
            const period = billing === "monthly" ? "/Mensual" : "/Anual";

            return (
              <div
                key={p.name}
                className={`relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 transition-all duration-200 ${
                  p.popular
                    ? "border-2 border-[#FF7800] shadow-xl shadow-orange-500/10 scale-[1.02] lg:-translate-y-2 ring-4 ring-orange-500/10"
                    : "border border-gray-200 hover:border-orange-300 hover:shadow-lg shadow-sm"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF7800] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                    MÁS POPULAR
                  </div>
                )}

                <div>
                  {/* Title & Price */}
                  <div className="text-center pb-6 border-b border-gray-100">
                    <h3 className="text-2xl font-black text-gray-950 mb-3">
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

                  {/* Features list */}
                  <ul className="py-6 space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2.5 font-semibold text-gray-900">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>{p.ssd}</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-semibold text-gray-900">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>{p.ram}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>Transferencia Ilimitada</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>{p.emails}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>{p.mysql}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>{p.subdomains}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF7800] shrink-0" />
                      <span>{p.extraDomains}</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-emerald-700 font-medium">
                      <Check size={16} className="text-emerald-600 shrink-0" />
                      <span>Certificado SSL Gratis!</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-500 pt-2 border-t border-gray-100">
                      <span>• Múltiple Versión PHP (7.4 a 8.3)</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-500">
                      <span>• CloudLinux + CpGuard Antimalware</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-500">
                      <span>• LiteSpeed Web Server</span>
                    </li>
                  </ul>
                </div>

                {/* Buy Button */}
                <div className="pt-2">
                  <a
                    href="https://portal.oneservidores.com/clientarea.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-full font-black text-sm uppercase tracking-wider text-center block transition-all shadow-md ${
                      p.popular
                        ? "bg-[#FF7800] hover:bg-[#E66B00] text-white shadow-orange-500/30 hover:shadow-orange-500/50"
                        : "bg-[#FF7800] hover:bg-[#E66B00] text-white shadow-orange-500/20"
                    }`}
                  >
                    Comprar Ahora
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info note */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            * Valores expresados Sin IVA. Puedes adquirir una <strong>IP Dedicada por $3.500 + IVA Mensual</strong>.
          </p>
          <a
            href="https://portal.oneservidores.com/clientarea.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gray-900 hover:bg-black text-white font-bold text-sm transition shadow"
          >
            Ver más planes de Web Hosting
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
