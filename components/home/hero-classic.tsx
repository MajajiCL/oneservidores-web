"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";

export function HeroClassic() {
  return (
    <section className="relative overflow-hidden bg-[#06080e] text-white py-16 sm:py-24 border-b border-neutral-800">
      {/* Background with stars & subtle glow */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 75% 40%, rgba(255, 107, 0, 0.25), transparent 50%), radial-gradient(#FFF 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 36px 36px"
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold text-white tracking-widest uppercase backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
            ENLACE 1 A 10 GBPS NACIONAL E INTERNACIONAL · TIER III EN CHILE
          </div>

          {/* Big Promotional Banner Heading (Faithful to original slider) */}
          <div className="space-y-3">
            <div className="inline-block px-4 py-1 rounded-lg bg-[#FF6B00] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
              OFERTA LANZAMIENTO
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              WEBHOSTING <span className="text-[#FF6B00]">30% OFF</span>
            </h1>
            <div className="pt-2">
              <span className="inline-block border-2 border-[#FF6B00] bg-black/60 px-5 py-2 rounded-xl text-base sm:text-xl font-black tracking-widest text-white shadow-md">
                CÓDIGO PROMOCIONAL: <span className="text-yellow-400 font-mono">WEBHOSTING30</span>
              </span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-neutral-300 uppercase tracking-widest pt-1">
              EN PLANES MENSUALES Y ANUALES
            </p>
          </div>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Data Center Tier III en Chile – Baja latencia para Sudamérica. Servidores VPS (KVM & LXC), Dedicados y Web Hosting con servidor LiteSpeed Enterprise y soporte 24/7 en español.
          </p>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#planes-hosting"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#E66000] text-white font-black text-sm uppercase tracking-wider transition shadow-lg shadow-orange-600/30 text-center"
            >
              Comprar Ahora
            </a>
            <Link
              href="/vps/kvm"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition border border-white/20 text-center"
            >
              Ver Servidores VPS
            </Link>
          </div>

          {/* Bottom badge */}
          <div className="pt-6 text-xs text-neutral-500 font-medium">
            * VÁLIDO PARA EL PRIMER CICLO DE CONTRATACIÓN · DATA CENTER TIER III EN LATINOAMÉRICA
          </div>
        </div>
      </div>
    </section>
  );
}
