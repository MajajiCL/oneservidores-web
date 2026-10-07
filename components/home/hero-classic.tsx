"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Copy, Check, ShieldCheck, Zap, Server } from "lucide-react";
import { asset } from "@/lib/paths";

export function HeroClassic() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("WEBHOSTING30");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center border-b border-slate-800/80">
      {/* Background: Real Professional Datacenter Photography with high-end overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={asset("/img/sala-12266914-v.jpg")}
          alt="Data Center Tier III OneServidores"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.38] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Modern multi-layer gradients for depth & readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Columna Principal Izquierda */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge de Infraestructura */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Tier III en Chile & Argentina · Enlace 1 a 10 Gbps</span>
            </div>

            {/* Titular Principal con Impacto y Contraste */}
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-md bg-[#FF6B00] text-white text-xs font-black tracking-wider uppercase shadow-md shadow-orange-600/30">
                OFERTA EXCLUSIVA DE LANZAMIENTO
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Web Hosting & VPS con{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7800] via-orange-400 to-amber-300">
                  30% OFF
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                Infraestructura corporativa de baja latencia en Santiago de Chile. Servidores VPS (KVM & LXC), Web Hosting cPanel con LiteSpeed Enterprise y soporte prioritario 24/7 en español.
              </p>
            </div>

            {/* Cupón Interactivo con Copiar al Clic */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 bg-black/60 border border-orange-500/40 rounded-xl p-1.5 pl-4 backdrop-blur-md">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                  Cupón:
                </span>
                <span className="font-mono font-bold text-sm sm:text-base text-yellow-300 tracking-wider">
                  WEBHOSTING30
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 bg-[#FF6B00] hover:bg-[#E66000] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition shadow"
                  title="Copiar cupón"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="stroke-[3]" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                Válido para planes mensuales y anuales
              </span>
            </div>

            {/* CTAs de Conversión */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#planes-hosting"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65500] hover:from-[#E66000] hover:to-[#CC4400] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 hover:-translate-y-0.5"
              >
                <span>Ver Planes de Hosting</span>
                <ArrowRight size={16} />
              </a>
              <Link
                href="/vps/kvm"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide transition border border-white/20 backdrop-blur-md hover:-translate-y-0.5"
              >
                <span>Explorar Servidores VPS</span>
              </Link>
            </div>

            {/* Micro Badges de Confianza */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#FF7800]" />
                <span>Migración cPanel Gratis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#FF7800]" />
                <span>Uptime 99.85% Garantizado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#FF7800]" />
                <span>Facturación con RUT en Chile</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Card de Especificaciones / Live Specs Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 sm:p-7 bg-slate-900/80 border border-slate-700/60 shadow-2xl backdrop-blur-xl space-y-5">
              {/* Header de la card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#FF6B00]/15 text-[#FF6B00]">
                    <Server size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">
                      Nodo Santiago Tier III
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      LATENCIA LOCAL: &lt; 2 ms
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  OPERATIVO
                </div>
              </div>

              {/* Spec Rows */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">Web Server Engine</span>
                  <span className="font-semibold text-white">LiteSpeed Enterprise</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">Almacenamiento</span>
                  <span className="font-semibold text-white">NVMe / SSD Empresarial</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">Protección Perimetral</span>
                  <span className="font-semibold text-white">Anti-DDoS + CpGuard</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">Tránsito IP</span>
                  <span className="font-semibold text-white">10 Gbps Telxius / Pit Chile</span>
                </div>
              </div>

              {/* Mini CTA en la tarjeta */}
              <div className="pt-1">
                <a
                  href="https://portal.oneservidores.com/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 border border-white/10 transition"
                >
                  <ShieldCheck size={15} className="text-orange-400" />
                  <span>Acceso Inmediato a Portal de Clientes</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
