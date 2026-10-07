"use client";

import Link from "next/link";
import { ArrowRight, Zap, Shield, Server, CheckCircle2, Flame } from "lucide-react";

export function HeroClassic() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-gray-100">
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="container relative z-10">
        {/* PROMO LAUNCH BANNER (Original Style) */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-[#FF6B00] via-[#FF7800] to-[#E66B00] p-4 sm:p-5 text-white shadow-lg shadow-orange-500/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-yellow-300">
                <Flame size={24} className="animate-pulse" />
              </span>
              <div>
                <div className="text-xs uppercase font-extrabold tracking-widest text-orange-100">
                  ⚡ OFERTA DE LANZAMIENTO
                </div>
                <div className="text-base sm:text-lg font-black leading-tight">
                  WEBHOSTING 30% OFF · CÓDIGO PROMOCIONAL:{" "}
                  <span className="underline decoration-wavy decoration-yellow-300 font-mono tracking-wider bg-black/20 px-2 py-0.5 rounded">
                    WEBHOSTING30
                  </span>
                </div>
                <div className="text-xs text-orange-100/90 font-medium mt-0.5">
                  Válido para planes mensuales y anuales por tiempo limitado
                </div>
              </div>
            </div>

            <a
              href="#planes-hosting"
              className="shrink-0 px-6 py-2.5 rounded-full bg-white text-[#E66B00] font-black text-xs sm:text-sm hover:bg-neutral-100 transition shadow-md uppercase tracking-wider"
            >
              Aprovechar 30%
            </a>
          </div>
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 border border-orange-200/80 px-4 py-1.5 text-xs font-bold text-[#E66B00] tracking-wide uppercase">
              <span className="h-2 w-2 rounded-full bg-[#FF7800] animate-ping" />
              ENLACE 1 A 10 GBPS NACIONAL E INTERNACIONAL
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.1]">
              Alojamiento VPS, Servidores y Hosting en{" "}
              <span className="text-[#FF7800]">Chile</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Infraestructura propia en <strong>Santiago de Chile y Argentina</strong> con certificación <strong>Data Center Tier III</strong>. 
              Servidores VPS KVM y LXC, Web Hosting cPanel con LiteSpeed y atención humana rápida 24/7.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#planes-hosting"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7800] hover:bg-[#E66B00] text-white font-extrabold text-base shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all text-center uppercase tracking-wider inline-flex items-center justify-center gap-2"
              >
                Ver Planes de Hosting
                <ArrowRight size={18} />
              </a>
              <Link
                href="/vps/kvm"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-base transition text-center"
              >
                Servidores VPS KVM & LXC
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-950">1 a 10 Gbps</div>
                <div className="text-xs text-gray-500 font-medium">Red por Servidor</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#FF7800]">Tier III</div>
                <div className="text-xs text-gray-500 font-medium">Data Center en Chile</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-950">99.85%</div>
                <div className="text-xs text-gray-500 font-medium">Uptime Garantizado</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#FF7800]">24 × 7</div>
                <div className="text-xs text-gray-500 font-medium">Soporte Local Santiago</div>
              </div>
            </div>
          </div>

          {/* Right Card / Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 text-white shadow-2xl border border-neutral-800">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#FF7800]">
                    <Server size={20} />
                  </span>
                  <div>
                    <div className="font-bold text-base">Infraestructura Crítica</div>
                    <div className="text-xs text-neutral-400">Santiago & Buenos Aires</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Operativo 100%
                </span>
              </div>

              <div className="space-y-4 py-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#FF7800] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-white">Servidor en Santiago:</span>{" "}
                    <span className="text-neutral-300">Quien te responde el soporte también está acá, en español y sin rodeos.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#FF7800] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-white">LiteSpeed Enterprise:</span>{" "}
                    <span className="text-neutral-300">Carga hasta 10 veces más rápida que Apache tradicional en cPanel.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#FF7800] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-white">Seguridad Activa CpGuard:</span>{" "}
                    <span className="text-neutral-300">Antivirus, antimalware, firewall WAF y protección anti-DDoS incluida.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#FF7800] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-white">Activación Inmediata:</span>{" "}
                    <span className="text-neutral-300">Tu servicio funcionando en minutos con pago en pesos chilenos (+IVA).</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Razón Social: PlusGroup SpA</span>
                <span>Ahumada 370, Of. 516</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
