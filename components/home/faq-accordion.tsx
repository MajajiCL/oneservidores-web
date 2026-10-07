"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "¿Qué tipo de servidores ofrece su empresa?",
    a: "En OneServidores ofrecemos una amplia gama de soluciones de infraestructura: Servidores Dedicados con hardware 100% exclusivo, Servidores VPS KVM (con kernel propio), Servidores VPS LXC (contenedores ágiles), VPS optimizados para WordPress (CyberPanel + OpenLiteSpeed), Web Hosting cPanel con LiteSpeed y servicios de Co-Location / Housing en nuestro Data Center en Santiago de Chile."
  },
  {
    q: "¿Cuál es la diferencia entre un servidor dedicado y un servidor VPS?",
    a: "Un Servidor Dedicado es una máquina física completa exclusiva para tu empresa, garantizando el 100% de los recursos de CPU, RAM, discos NVMe/SSD y ancho de banda sin compartirlos con nadie. Un Servidor VPS (Servidor Privado Virtual) es una partición virtual dentro de un servidor de alta potencia que opera de manera autónoma con recursos asignados garantizados, ofreciendo una excelente relación rendimiento-precio y escalabilidad inmediata."
  },
  {
    q: "¿Cómo garantizan la seguridad de los servidores y los datos de los clientes?",
    a: "Implementamos seguridad multicapa: firewall perimetral, protección anti-DDoS activa, sistema de seguridad CpGuard con escaneo de malware en tiempo real, aislamiento seguro con CloudLinux en hosting compartido, copias de seguridad continuas y certificación física en Data Center Tier III con acceso biométrico y vigilancia 24/7."
  },
  {
    q: "¿Cuál es la capacidad de escalabilidad de sus servidores si mi empresa crece?",
    a: "Nuestra infraestructura es 100% elástica. Puedes comenzar con un VPS LXC o KVM básico y aumentar núcleos de vCPU, memoria RAM o espacio SSD en minutos sin necesidad de reinstalar tu sistema operativo ni migrar manualmente de servidor."
  },
  {
    q: "¿Cuál es la diferencia entre una VPS KVM v/s LXC?",
    a: "La diferencia radica en el tipo de virtualización: KVM (Kernel-based Virtual Machine) es virtualización completa de hardware, permitiendo kernel propio y cualquier distribución Linux o Windows con aislamiento absoluto. LXC (Linux Containers) utiliza virtualización a nivel de sistema operativo compartiendo el kernel del host, lo que lo hace mucho más ligero, rápido en arranque y eficiente en uso de memoria RAM."
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7800]">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Encuentra respuestas rápidas a las consultas más comunes sobre nuestros servicios y tecnología.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-orange-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-[#FF7800] text-white rotate-180"
                        : "bg-orange-50 text-[#FF7800]"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-gray-600 leading-relaxed bg-white border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
