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
    <section id="planes-hosting" className="relative py-16 bg-white overflow-hidden border-b border-gray-100">
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
        {/* Section Header con tamaños idénticos a Elementor (h2: 32px) */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
          <h2 className="text-[32px] font-bold text-[#1f2937] tracking-tight leading-tight">
            Web Hosting Cpanel
          </h2>
          <p className="text-[15px] text-gray-500 font-normal">
            Nuestros planes de WebHosting cuentan con LiteSpeed, Antimalware, Antivirus, Antispam y más.
          </p>

          {/* Authentic Switcher [MENSUAL] [ANUAL] */}
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

        {/* 4 Cards Grid con tamaños y tipografía exactos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((p) => {
            const price = billing === "monthly" ? p.monthlyPrice : p.annualPrice;
            const period = billing === "monthly" ? "/Mensual" : "/Anual";

            return (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-6 shadow-md shadow-gray-200/40 border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow text-center"
              >
                <div>
                  {/* Plan Name */}
                  <h3 className="text-[17px] font-semibold text-[#FF6B00] mb-1">
                    {p.name}
                  </h3>

                  {/* Price exacto: 38px, no 60px */}
                  <div className="flex items-baseline justify-center text-[#FF6B00] mb-3">
                    <span className="text-[15px] font-semibold mr-0.5">$</span>
                    <span className="text-[38px] font-bold tracking-tight leading-none">
                      {price}
                    </span>
                    <span className="text-[12px] font-medium ml-1 text-[#FF6B00]">
                      {period}
                    </span>
                  </div>

                  {/* Rocket Icon Original */}
                  <div className="flex justify-center mb-5">
                    <div className="h-10 w-10 flex items-center justify-center text-[#FF6B00]">
                      <Rocket size={28} className="stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Lista de características: 13px con interlineado natural */}
                  <ul className="space-y-1.5 text-[13px] font-normal text-[#E66B00] pb-5 leading-normal">
                    <li>{p.ssd}</li>
                    <li>{p.ram}</li>
                    <li>{p.traffic}</li>
                    <li>{p.emails}</li>
                    <li>{p.mysql}</li>
                    <li>{p.subdomains}</li>
                    <li>{p.extraDomains}</li>
                    <li className="font-semibold text-[#FF6B00]">Certificado SSL Gratis!</li>
                    <li>Múltiple Versión PHP</li>
                    <li>CloudLinux Incluido</li>
                    <li>CpGuard Antimalware</li>
                    <li>LiteSpeed</li>
                  </ul>
                </div>

                {/* Comprar Ahora */}
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

        {/* Botón inferior "Ver más planes de Web Hosting" */}
        <div className="pt-8 flex flex-col items-center justify-center space-y-2.5">
          <Link
            href="/hosting"
            className="px-7 py-2.5 rounded-full bg-[#FF6B00] hover:bg-[#E66000] text-white font-semibold text-[13px] transition shadow-md shadow-orange-500/20"
          >
            Ver más planes de Web Hosting
          </Link>
          <div className="text-[12px] text-gray-400 text-center leading-relaxed">
            Valores expresados Sin IVA<br />
            *Puedes Adquirir una IP Dedicada por $3.500+iva Mensual
          </div>
        </div>
      </div>
    </section>
  );
}
