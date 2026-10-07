"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    author: "Felipe Sepúlveda",
    role: "Director de Tecnología",
    company: "LAEFE SpA",
    text: "OneServidores.com ha sido fundamental para el crecimiento y la escalabilidad de nuestra empresa. Sus servidores VPS ofrecen un equilibrio perfecto entre rendimiento, flexibilidad y costo. La facilidad de uso de su plataforma nos ha permitido desplegar rápidamente nuevos servidores y gestionarlos sin problemas. Además, la fiabilidad de su infraestructura y la calidad de su soporte técnico nos han brindado una gran tranquilidad."
  },
  {
    author: "Diego Gil",
    role: "Líder de Infraestructura",
    company: "WoW Ticket SpA",
    text: "Desde que implementamos los servidores de OneServidores.com en nuestra empresa, hemos experimentado una mejora significativa en la seguridad y la privacidad de nuestra red. El soporte técnico receptivo y la disponibilidad con bajísima latencia en Santiago nos han brindado una experiencia excepcional. Recomendaríamos OneServidores.com a cualquier empresa que valore la seguridad y la fiabilidad."
  }
];

export function TestimonialsBanner() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-gradient-to-br from-[#FF6B00] via-[#E65B00] to-[#D94E00] text-white overflow-hidden relative shadow-inner">
      <div className="container relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-black tracking-widest uppercase backdrop-blur-sm">
          TESTIMONIOS DE CLIENTES
        </div>

        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
          La empresa de servidores de confianza en Chile
        </h2>

        {/* 5 Stars */}
        <div className="flex items-center justify-center gap-1.5 text-amber-300">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} className="fill-amber-300 stroke-amber-300" />
          ))}
        </div>

        {/* Quote Card */}
        <div className="relative pt-4">
          <p className="text-base sm:text-xl leading-relaxed text-white/95 max-w-3xl mx-auto font-normal">
            &ldquo;{testimonials[current].text}&rdquo;
          </p>

          <div className="pt-6 space-y-1">
            <div className="text-lg font-bold text-white">
              {testimonials[current].author}
            </div>
            <div className="text-xs text-orange-200 font-medium">
              {testimonials[current].role} · <strong className="text-white">{testimonials[current].company}</strong>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 pt-6">
          <button
            type="button"
            onClick={prev}
            className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all ${
                  current === i ? "w-8 bg-white" : "w-2.5 bg-white/40"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
