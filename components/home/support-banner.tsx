"use client";

import Link from "next/link";
import { Headphones, Phone, MessageSquare, ArrowRight } from "lucide-react";

export function SupportBanner() {
  return (
    <section className="py-20 bg-[#0f1113] text-white border-b border-neutral-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFF 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30 text-[#FF7800] mx-auto shadow-lg shadow-orange-500/10">
            <Headphones size={32} />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Soporte Técnico 24/7 en Español
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Asistencia técnica real disponible en todo momento, todos los días del año. 
            Te responde un ingeniero en Santiago, sin tickets que demoran horas ni respuestas automatizadas.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/56971550409"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7800] hover:bg-[#E66B00] text-white font-extrabold text-sm uppercase tracking-wider transition shadow-lg shadow-orange-500/30 inline-flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              Hablar por WhatsApp (+56 9 7155 0409)
            </a>

            <Link
              href="/soporte"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm transition text-center"
            >
              Abrir Ticket en Portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
