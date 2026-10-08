"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Rocket } from "lucide-react";
import { asset } from "@/lib/paths";

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
    <section id="planes-hosting" className="relative py-20 bg-white overflow-hidden border-b border-gray-100">
      {/* Background overlay idéntico al de Hostiko Elementor original */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src={asset("/img/sitio/second-section-overlay.png")}
          alt="Overlay textura"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header con medidas y fuentes originales exactas: Jost 42px font-weight 600 color #000000 */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <h2 className="text-[42px] font-semibold text-black tracking-normal leading-tight font-['Jost']">
            Web Hosting Cpanel
          </h2>
          <p className="text-[17px] text-black font-normal tracking-[-0.2px] font-['Jost']">
            Nuestros planes de WebHosting cuentan con LiteSpeed, Antimalware, Antivirus, Antispam y más.
          </p>

          {/* Authentic Switcher [MENSUAL] [ANUAL]: Work Sans 12px font-weight 600 uppercase */}
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

        {/* 4 Cards Grid con las especificaciones exactas:
            h4: Jost 24px, weight 500, color #263B5E
            p-price: Jost 62px, weight 500, color #263B5E
            cal-name: Work Sans 16px, color #6A8695
            p-list li: Jost 18px, letter-spacing -0.2px, color #FF7800
            pricing-btn: Work Sans 12px, weight 600, uppercase, height 40px, rounded 2px
        */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((p) => {
            const price = billing === "monthly" ? p.monthlyPrice : p.annualPrice;
            const period = billing === "monthly" ? "/Mensual" : "/Anual";

            return (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-7 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-shadow text-center"
              >
                <div>
                  {/* Plan Name: Jost 24px #263B5E */}
                  <h4 className="text-[24px] font-medium text-[#263B5E] tracking-[-0.5px] font-['Jost'] mb-2">
                    {p.name}
                  </h4>

                  {/* Price: Currency $ + Jost 62px #263B5E + Work Sans 16px #6A8695 */}
                  <div className="flex items-baseline justify-center mb-5">
                    <span className="text-[20px] font-medium text-[#263B5E] mr-1">$</span>
                    <span className="text-[62px] font-medium tracking-tight leading-none text-[#263B5E] font-['Jost']">
                      {price}
                    </span>
                    <span className="text-[16px] font-normal text-[#6A8695] font-work-sans ml-1.5">
                      {period}
                    </span>
                  </div>

                  {/* Rocket Icon Original */}
                  <div className="flex justify-center mb-6">
                    <div className="h-12 w-12 flex items-center justify-center text-[#FF7800]">
                      <Rocket size={34} className="stroke-[1.6]" />
                    </div>
                  </div>

                  {/* Lista de características: Jost 18px, letter-spacing -0.2px, color #FF7800 */}
                  <ul className="space-y-2 text-[18px] font-normal text-[#FF7800] tracking-[-0.2px] font-['Jost'] pb-7 leading-relaxed">
                    <li>{p.ssd}</li>
                    <li>{p.ram}</li>
                    <li>{p.traffic}</li>
                    <li>{p.emails}</li>
                    <li>{p.mysql}</li>
                    <li>{p.subdomains}</li>
                    <li>{p.extraDomains}</li>
                    <li className="font-semibold">Certificado SSL Gratis!</li>
                    <li>Múltiple Versión PHP</li>
                    <li>CloudLinux Incluido</li>
                    <li>CpGuard Antimalware</li>
                    <li>LiteSpeed</li>
                  </ul>
                </div>

                {/* Comprar Ahora: Work Sans 12px font-weight 600 uppercase */}
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

        {/* Botón inferior "Ver más planes de Web Hosting" */}
        <div className="pt-10 flex flex-col items-center justify-center space-y-3">
          <Link
            href="/hosting"
            className="px-8 py-3 rounded-full bg-[#FF7800] hover:bg-[#E66B00] text-white font-semibold text-[14px] font-work-sans transition shadow-md shadow-orange-500/20"
          >
            Ver más planes de Web Hosting
          </Link>
          <div className="text-[13px] text-gray-500 text-center font-['Jost']">
            Valores expresados Sin IVA<br />
            *Puedes Adquirir una IP Dedicada por $3.500+iva Mensual
          </div>
        </div>
      </div>
    </section>
  );
}
