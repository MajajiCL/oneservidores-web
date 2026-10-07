"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "¿Qué tipo de servidores ofrece OneServidores?",
    a: "Ofrecemos una gama integral que incluye Servidores VPS (KVM con kernel propio y LXC ultra livianos), Servidores Dedicados con hardware físico exclusivo en Santiago de Chile, Web Hosting cPanel con LiteSpeed y servicios de Co-Location en Data Center Tier III."
  },
  {
    q: "¿Cuál es la diferencia entre un Servidor Dedicado y un Servidor VPS?",
    a: "Un servidor dedicado es un equipo físico completo reservado en exclusiva para tu empresa, otorgando 100% de los recursos de CPU, RAM, discos y ancho de banda. Un VPS es una instancia virtualizada dentro de hardware empresarial con recursos garantizados, ofreciendo excelente rendimiento y escalabilidad a un costo más accesible."
  },
  {
    q: "¿Cuál es la diferencia entre una VPS KVM v/s LXC?",
    a: "KVM proporciona virtualización completa de hardware. Permite instalar cualquier kernel, módulos propios, Docker o sistemas operativos personalizados con aislamiento total. LXC comparte el kernel del host mediante contenedores, ofreciendo máxima velocidad de arranque y un uso de recursos sumamente eficiente para aplicaciones web."
  },
  {
    q: "¿Cómo garantizan la seguridad de los datos y servidores?",
    a: "Implementamos múltiples capas defensivas: mitigación de ataques DDoS a nivel de red, firewalls perimetrales, protección de aplicaciones con CpGuard, monitoreo 24/7 de disponibilidad y aislamiento estricto de cuentas mediante CloudLinux OS."
  },
  {
    q: "¿Puedo mejorar los recursos de mi plan en el futuro?",
    a: "Sí. Toda nuestra plataforma está diseñada para escalar sin fricción. Puedes aumentar memoria RAM, núcleos de CPU o espacio de almacenamiento en minutos desde tu área de clientes sin perder tus datos ni configuraciones existentes."
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-black tracking-widest uppercase">
            RESOLVEMOS TUS DUDAS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Conoce los detalles operativos y técnicos de nuestros servicios de infraestructura y hosting.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? "border-2 border-[#FF6B00] shadow-md"
                    : "border border-slate-200 shadow-sm hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className={`text-[15px] sm:text-base font-bold transition-colors ${
                    isOpen ? "text-[#FF6B00]" : "text-slate-900"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-[#FF6B00] text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
