"use client";

import Image from "next/image";
import { asset } from "@/lib/paths";

const partners = [
  { name: "cPanel", file: "/img/sitio/cpanel.png", height: 38 },
  { name: "LiteSpeed", file: "/img/sitio/logolitespeed.png", height: 42 },
  { name: "Cloudflare", file: "/img/sitio/cloud-flare-img.png", height: 36 },
  { name: "Telxius", file: "/img/sitio/2560px-Telxius_logo.svg.png", height: 32 }
];

export function PartnersLogos() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7800]">
            ALIANZAS Y TECNOLOGÍA
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Nuestros Partners y Tecnologías
          </h2>
          <p className="text-sm text-gray-500">
            Colaboramos con proveedores y tecnologías líderes globales para garantizar máxima disponibilidad y rendimiento.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-85 hover:opacity-100 transition-opacity">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center h-14 px-6 py-2 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={asset(p.file)}
                alt={p.name}
                width={160}
                height={50}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
