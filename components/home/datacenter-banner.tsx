"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { asset } from "@/lib/paths";

export function DatacenterBanner() {
  return (
    <section className="relative py-24 bg-[#050608] text-white overflow-hidden border-b border-neutral-900">
      {/* Background overlay original con curvas e ilustración sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image
          src={asset("/img/sitio/banner-overlay.png")}
          alt="Overlay curvas"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Ilustración isométrica original de servidores datacenter */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square">
              <Image
                src={asset("/img/sitio/layout-86-banner.png")}
                alt="Infraestructura OneServidores Datacenter"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(255,107,0,0.15)]"
              />
            </div>
          </div>

          {/* Columna Derecha de Contenido idéntica a la original */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Data Center Tier III
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-normal">
              Contamos con 2 Data Center uno en Chile y otro en Argentina
            </p>

            <ul className="space-y-3.5 pt-2 text-sm sm:text-base text-gray-200">
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Red 1 Hasta 10 GBPS Nacional e Internacional</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Panel de control para manejar tus VPS</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Bajo ping para Chile y el resto del continente</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Conexión BGP Gratuita para nuestros clientes (Trae tus IP)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-[#FF6B00] stroke-[2.5] shrink-0" />
                <span>Respaldo de Energía N+1</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/contacto"
                className="inline-block px-10 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-orange-600/30"
              >
                CONTACTO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
