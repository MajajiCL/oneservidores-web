"use client";

import Image from "next/image";
import { Headphones, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { asset } from "@/lib/paths";

export function SupportBanner() {
  return (
    <section className="relative py-20 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background: Real Technical Support / NOC environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src={asset("/img/pasillo-oscuro-v.jpg")}
          alt="Soporte y NOC OneServidores"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.25] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto text-left space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-3.5 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
          ATENCIÓN INMEDIATA
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Soporte Técnico Especializado 24/7/365
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed">
          Asistencia técnica disponible en todo momento con ingenieros de soporte en español. Resolvemos incidentes críticos de infraestructura, configuración de DNS, cPanel y migraciones.
        </p>

        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/56971550409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs uppercase tracking-wider transition shadow-lg shadow-emerald-600/30 hover:-translate-y-0.5"
          >
            <MessageSquare size={16} />
            <span>Chat WhatsApp Directo</span>
          </a>
          <a
            href="https://portal.oneservidores.com/submitticket.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition border border-white/15"
          >
            <Clock size={16} className="text-orange-400" />
            <span>Crear Ticket de Soporte</span>
          </a>
        </div>
      </div>
    </section>
  );
}
