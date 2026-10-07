"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    author: "Felipe Sepulveda",
    company: "LAEFE SpA",
    text: "OneServidores.com ha sido fundamental para el crecimiento y la escalabilidad de nuestra empresa. Sus servidores VPS ofrecen un equilibrio perfecto entre rendimiento, flexibilidad y costo. La facilidad de uso de su plataforma nos ha permitido desplegar rápidamente nuevos servidores y gestionarlos sin problemas. Además, la fiabilidad de su infraestructura y la calidad de su soporte técnico nos han brindado una gran tranquilidad. Recomendaríamos OneServidores.com a cualquier empresa que busque una solución de alojamiento VPS sólida y rentable."
  },
  {
    author: "Diego Gil",
    company: "WoW Ticket SPA",
    text: "Desde que implementamos los servidores de OneServidores.com en nuestra empresa, hemos experimentado una mejora significativa en la seguridad y la privacidad de nuestra red. El soporte técnico receptivo y la disponibilidad global de servidores nos han brindado una experiencia excepcional. Recomendaríamos OneServidores.com a cualquier empresa que valore la seguridad y la fiabilidad."
  }
];

export function TestimonialsBanner() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24 bg-[#FF6B00] text-white overflow-hidden relative">
      {/* Decorative watermark quotes on sides */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/10 text-[180px] font-serif font-black select-none pointer-events-none hidden md:block">
        &ldquo;
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 text-[180px] font-serif font-black select-none pointer-events-none hidden md:block">
        &rdquo;
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          La mejor empresa de Servidores de confianza
        </h2>

        {/* 5 Stars */}
        <div className="flex items-center justify-center gap-1.5 text-yellow-300">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-yellow-300 stroke-yellow-300" />
          ))}
        </div>

        {/* Small square dot separator */}
        <div className="flex justify-center">
          <span className="h-1.5 w-1.5 bg-white/70" />
        </div>

        {/* Quote text */}
        <p className="text-sm sm:text-base leading-relaxed text-white/95 max-w-3xl mx-auto pt-2 font-normal">
          &ldquo;{testimonials[current].text}&rdquo;
        </p>

        {/* Author */}
        <div className="pt-4 space-y-0.5">
          <div className="text-base font-bold text-white">
            {testimonials[current].author}
          </div>
          <div className="text-xs text-white/80">
            {testimonials[current].company}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all ${
                current === i ? "w-6 bg-white" : "w-2.5 bg-white/40"
              }`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
