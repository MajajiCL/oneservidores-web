"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "@/lib/paths";

const slides = [
  {
    id: 1,
    image: "/img/sitio/1-slider.jpg",
    alt: "Oferta Lanzamiento WebHosting 30% OFF OneServidores"
  },
  {
    id: 2,
    image: "/img/sitio/2-slider-1.jpg",
    alt: "Oferta Lanzamiento Servidores VPS 20% OFF OneServidores"
  },
  {
    id: 3,
    image: "/img/sitio/3-slider.png",
    alt: "Oferta Servidores Dedicados OneServidores"
  },
  {
    id: 4,
    image: "/img/sitio/4-slider.jpg",
    alt: "Data Center Tier III OneServidores"
  }
];

export function HeroClassic() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden bg-black w-full select-none">
      {/* Carrusel de Banners Oficiales de Alta Resolución */}
      <div className="relative w-full aspect-[21/9] min-h-[360px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[620px] max-h-[720px]">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={asset(s.image)}
              alt={s.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center w-full h-full"
            />
          </div>
        ))}

        {/* Flechas de navegación del Slider idénticas al original */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slider anterior"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-[#FF6B00] text-white flex items-center justify-center transition backdrop-blur-xs border border-white/20 shadow-lg"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Slider siguiente"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-[#FF6B00] text-white flex items-center justify-center transition backdrop-blur-xs border border-white/20 shadow-lg"
        >
          <ChevronRight size={28} />
        </button>

        {/* Indicadores de puntos inferiores */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full transition-all ${
                currentSlide === i ? "h-2.5 w-7 bg-[#FF6B00]" : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
