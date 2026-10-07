"use client";

import { useState } from "react";
import { Rocket } from "lucide-react";

interface Plan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  ssd: string;
  ram: string;
  traffic: string;
  emails: string;
  mysql: string;
  subdomains: string;
  extraDomains: string;
}

const plans: Plan[] = [
  {
    name: "Aprendiz",
    monthlyPrice: "2200",
    annualPrice: "12000",
    ssd: "1 GB Espacio SSD",
    ram: "1 GB Memoria RAM",
    traffic: "Transferencia Ilimitada",
    emails: "Cuentas de correo: 5",
    mysql: "BD MySQL: 1",
    subdomains: "Sub Dominios: 2",
    extraDomains: "Dominios Adicionales: 0"
  },
  {
    name: "Emprendedor",
    monthlyPrice: "3900",
    annualPrice: "26000",
    ssd: "5 GB Espacio SSD",
    ram: "1.5 GB Memoria RAM",
    traffic: "Transferencia Ilimitada",
    emails: "Cuentas de correo: 10",
    mysql: "BD MySQL: 2",
    subdomains: "Sub Dominios: 4",
    extraDomains: "Dominios Adicionales: 1"
  },
  {
    name: "Pyme",
    monthlyPrice: "4900",
    annualPrice: "50000",
    ssd: "20 GB Espacio SSD",
    ram: "3 GB Memoria RAM",
    traffic: "Transferencia Ilimitada",
    emails: "Cuentas de correo: 50",
    mysql: "BD MySQL: 5",
    subdomains: "Sub Dominios: 10",
    extraDomains: "Dominios Adicionales: 2"
  },
  {
    name: "Empresa",
    monthlyPrice: "6700",
    annualPrice: "70000",
    ssd: "50 GB Espacio SSD",
    ram: "5 GB Memoria RAM",
    traffic: "Transferencia Ilimitada",
    emails: "Cuentas de correo: ilimitados",
    mysql: "BD MySQL: 10",
    subdomains: "Sub Dominios: 10",
    extraDomains: "Dominios Adicionales: 3"
  }
];

export function HostingPricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="planes-hosting" className="py-20 bg-[#f9f9f9] border-b border-gray-200">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
            Web Hosting Cpanel
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Nuestros planes de WebHosting cuentan con LiteSpeed, Antimalware, Antivirus, Antispam y más.
          </p>

          {/* Authentic Switcher [MENSUAL] [ANUAL] */}
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

        {/* 4 Cards Grid (Authentic Hostiko Elementor Styling) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((p) => {
            const price = billing === "monthly" ? p.monthlyPrice : p.annualPrice;
            const period = billing === "monthly" ? "/Mensual" : "/Anual";

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

                  {/* Centered Rocket Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="h-12 w-12 flex items-center justify-center text-[#FF6B00]">
                      <Rocket size={32} className="stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Centered Features in WARM ORANGE */}
                  <ul className="space-y-2 text-[13.5px] font-medium text-[#E66B00] pb-6 leading-relaxed">
                    <li>{p.ssd}</li>
                    <li>{p.ram}</li>
                    <li>{p.traffic}</li>
                    <li>{p.emails}</li>
                    <li>{p.mysql}</li>
                    <li>{p.subdomains}</li>
                    <li>{p.extraDomains}</li>
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

        {/* Footer actions & disclaimer */}
        <div className="mt-12 text-center space-y-3">
          <div>
            <a
              href="/hosting/cpanel"
              className="inline-block px-8 py-3 rounded-full bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              Ver más planes de Web Hosting
            </a>
          </div>
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
