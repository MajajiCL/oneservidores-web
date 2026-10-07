"use client";

import { useState } from "react";
import { Check, ShieldCheck, Zap } from "lucide-react";

interface Plan {
  name: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: string;
  annualPrice: string;
  annualSavings?: string;
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
    monthlyPrice: "2.200",
    annualPrice: "12.000",
    annualSavings: "Ahorra $14.400",
    ssd: "1 GB Espacio SSD NVMe",
    ram: "1 GB Memoria RAM",
    traffic: "Transferencia Ilimitada",
    emails: "5 Cuentas de Correo",
    mysql: "1 Base de Datos MySQL",
    subdomains: "2 Subdominios",
    extraDomains: "0 Dominios Adicionales"
  },
  {
    name: "Emprendedor",
    popular: true,
    badge: "MÁS POPULAR",
    monthlyPrice: "3.900",
    annualPrice: "26.000",
    annualSavings: "Ahorra $20.800",
    ssd: "5 GB Espacio SSD NVMe",
    ram: "1.5 GB Memoria RAM",
    traffic: "Transferencia Ilimitada",
    emails: "10 Cuentas de Correo",
    mysql: "2 Bases de Datos MySQL",
    subdomains: "4 Subdominios",
    extraDomains: "1 Dominio Adicional"
  },
  {
    name: "Pyme",
    monthlyPrice: "4.900",
    annualPrice: "50.000",
    annualSavings: "Ahorra $8.800",
    ssd: "20 GB Espacio SSD NVMe",
    ram: "3 GB Memoria RAM",
    traffic: "Transferencia Ilimitada",
    emails: "50 Cuentas de Correo",
    mysql: "5 Bases de Datos MySQL",
    subdomains: "10 Subdominios",
    extraDomains: "2 Dominios Adicionales"
  },
  {
    name: "Empresa",
    badge: "MÁXIMA POTENCIA",
    monthlyPrice: "6.700",
    annualPrice: "70.000",
    annualSavings: "Ahorra $10.400",
    ssd: "50 GB Espacio SSD NVMe",
    ram: "5 GB Memoria RAM",
    traffic: "Transferencia Ilimitada",
    emails: "Cuentas de Correo Ilimitadas",
    mysql: "10 Bases de Datos MySQL",
    subdomains: "10 Subdominios",
    extraDomains: "3 Dominios Adicionales"
  }
];

export function HostingPricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="planes-hosting" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container">
        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-black tracking-widest uppercase">
            PLANES DE WEB HOSTING CPANEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Alojamiento Web Rápido y Seguro
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Servidores con tecnología <strong className="text-slate-800">LiteSpeed Enterprise</strong>, discos SSD NVMe, aislamiento CloudLinux y protección activa contra malware.
          </p>

          {/* Toggle Mensual / Anual */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  billing === "monthly"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Pago Mensual
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                  billing === "annual"
                    ? "bg-[#FF6B00] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Pago Anual</span>
                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                  billing === "annual" ? "bg-white/20 text-white" : "bg-orange-100 text-[#FF6B00]"
                }`}>
                  AHORRA HASTA 50%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid de 4 Cards Modernas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((p) => {
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
                {/* Popular Badge Top */}
                {p.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF6B00] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                    {p.badge}
                  </div>
                )}
                {!p.popular && p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider">
                    {p.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="text-xl font-black text-slate-900 mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-5">
                    cPanel + LiteSpeed + SSL
                  </p>

                  {/* Price */}
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
                    {billing === "annual" && p.annualSavings && (
                      <div className="text-[11px] font-bold text-emerald-600 mt-1">
                        {p.annualSavings}
                      </div>
                    )}
                  </div>

                  {/* Lista de Especificaciones con Checkmarks */}
                  <div className="space-y-3 text-xs text-slate-700 pb-6">
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span className="font-semibold text-slate-900">{p.ssd}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span>{p.ram}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span>{p.traffic}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span>{p.emails}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span>{p.mysql}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span>{p.subdomains}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                      <span>{p.extraDomains}</span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-2 text-[11.5px] text-slate-600">
                      <div className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 stroke-[2.5] shrink-0" />
                        <span className="font-medium text-slate-800">Certificado SSL Let&apos;s Encrypt Gratis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 stroke-[2.5] shrink-0" />
                        <span>Múltiples versiones PHP (7.4 a 8.3)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 stroke-[2.5] shrink-0" />
                        <span>CpGuard Antivirus & Antimalware</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón de Compra */}
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
                    CONTRATAR PLAN
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote informativo */}
        <div className="pt-10 text-center text-xs text-slate-500">
          ¿Tienes dudas sobre qué plan elegir o requieres una migración desde otro proveedor?{" "}
          <a
            href="https://wa.me/56971550409"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B00] font-bold hover:underline"
          >
            Habla con un asesor por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
