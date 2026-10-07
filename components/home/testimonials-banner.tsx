"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    author: "Felipe Sepúlveda",
    role: "CEO / Fundador",
    company: "LAEFE SpA",
    text: "OneServidores.com ha sido fundamental para el crecimiento y la escalabilidad de nuestra empresa. Sus servidores VPS ofrecen un equilibrio perfecto entre rendimiento, flexibilidad y costo. La facilidad de uso de su plataforma nos ha permitido desplegar rápidamente nuevos servidores y gestionarlos sin problemas. Además, la fiabilidad de su infraestructura y la calidad de su soporte técnico nos han brindado una gran tranquilidad. Recomendaríamos OneServidores a cualquier empresa que busque una solución de alojamiento sólida y rentable."
  },
  {
    author: "Diego Gil",
    role: "Director de Tecnología",
    company: "WoW Ticket SpA",
    text: "Desde que migramos nuestra infraestructura a OneServidores.com, hemos experimentado una estabilidad y velocidad incomparables para nuestros eventos de alta concurrencia. La capacidad de contar con soporte técnico en Chile que responde de inmediato ante cualquier eventualidad nos da una tranquilidad invaluable. Recomiendo totalmente a OneServidores."
  }
];

export function TestimonialsBanner() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-24 bg-gradient-to-r from-[#FF6B00] via-[#FF7800] to-[#E66B00] text-white overflow-hidden relative">
      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4">
          La mejor empresa de Servidores de confianza
        </h2>

        {/* 5 Stars */}
        <div className="flex items-center justify-center gap-1.5 text-yellow-300 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} className="fill-yellow-300" />
          ))}
        </div>

        {/* Quote Box */}
        <div className="relative bg-black/15 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
          <Quote size={40} className="text-white/30 mx-auto mb-4" />
          
          <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed italic text-white/95 mb-6">
            &ldquo;{t.text}&rdquo;
          </p>

          <div className="pt-4 border-t border-white/20">
            <div className="text-lg font-black text-white">{t.author}</div>
            <div className="text-sm font-semibold text-orange-100">{t.company}</div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    current === i ? "w-8 bg-white" : "w-2.5 bg-white/40"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
