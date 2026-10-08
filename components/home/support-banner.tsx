"use client";

import Image from "next/image";
import { asset } from "@/lib/paths";

export function SupportBanner() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden border-b border-neutral-900">
      {/* Background overlay original de soporte */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image
          src={asset("/img/sitio/get-help-overlay.png")}
          alt="Overlay textura soporte"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto text-left space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Soporte 24/7
        </h2>

        <p className="text-base sm:text-lg text-gray-300 font-normal max-w-2xl leading-relaxed">
          Asistencia técnica disponible en todo momento, todos los días del año, para resolver cualquier problema o inquietud de manera rápida y eficiente.
        </p>

        <div className="pt-2">
          <a
            href="https://wa.me/56971550409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-3 rounded-full bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-orange-600/30"
          >
            CONTACTAR SOPORTE
          </a>
        </div>
      </div>
    </section>
  );
}
