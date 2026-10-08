"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Qué tipo de servidores ofrece su empresa?",
    a: "En nuestra empresa, ofrecemos una amplia gama de servidores, incluyendo servidores dedicados, servidores VPS (Servidores Privados Virtuales) y opciones de alojamiento web. Cada tipo de servidor tiene sus propias características y beneficios, diseñados para satisfacer las necesidades únicas de nuestros clientes."
  },
  {
    q: "¿Cuál es la diferencia entre un servidor dedicado y un servidor VPS?",
    a: "Un servidor dedicado es un servidor físico completo dedicado exclusivamente a un solo cliente, lo que garantiza un control total sobre los recursos del servidor. Por otro lado, un servidor VPS es una partición virtual en un servidor físico que actúa como un servidor independiente con sus propios recursos asignados, lo que proporciona una solución más flexible y escalable a un costo más bajo que un servidor dedicado."
  },
  {
    q: "¿Cómo garantizan la seguridad de los servidores y los datos de los clientes?",
    a: "La seguridad de los servidores y los datos de nuestros clientes es una prioridad absoluta para nosotros. Implementamos medidas de seguridad robustas, como firewalls, monitoreo de red en tiempo real, cifrado de datos y políticas de acceso estrictas para proteger los servidores y la información confidencial de nuestros clientes contra amenazas cibernéticas."
  },
  {
    q: "¿Cuál es la capacidad de escalabilidad de sus servidores en caso de que mi empresa experimente un crecimiento rápido?",
    a: "Nuestros servidores están diseñados para ser altamente escalables, lo que significa que pueden adaptarse fácilmente a medida que su empresa crece. Ya sea que necesite aumentar la capacidad de almacenamiento, la potencia de procesamiento o la memoria, podemos ajustar rápidamente los recursos de su servidor para satisfacer sus necesidades en evolución, garantizando un rendimiento óptimo en todo momento."
  },
  {
    q: "¿Cuál es la diferencia entre una VPS KVM v/s LXC?",
    a: "KVM utiliza la virtualización completa (también conocida como «virtualización de hardware»), lo que significa que cada VPS funciona como una máquina virtual independiente con su propio kernel y sistema operativo, ofreciendo máxima aislación. LXC, por otro lado, comparte el kernel del sistema operativo host mediante contenedores, haciéndolo más eficiente en uso de memoria RAM y procesamiento."
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Encuentra respuestas rápidas a las consultas más comunes sobre nuestros servicios.
          </p>
        </div>

        {/* Accordion list idéntico a Hostiko */}
        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-200/80 rounded-md overflow-hidden bg-white shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-[15px] font-bold text-gray-800">
                    {faq.q}
                  </span>
                  <span className={`text-[#FF6B00] font-bold shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}>
                    <Plus size={20} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
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
