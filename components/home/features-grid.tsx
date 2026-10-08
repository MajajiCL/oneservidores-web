"use client";

import Image from "next/image";
import { asset } from "@/lib/paths";

const features = [
  {
    icon: "/img/sitio/powerful-security-icon.png",
    fallbackImg: "/img/sitio/secure-web-hosting-img.png",
    title: "Red Segura",
    desc: "Nuestro equipo de expertos en seguridad cibernética trabaja incansablemente para identificar y neutralizar cualquier riesgo potencial"
  },
  {
    icon: "/img/sitio/backup-recovery-icon.png",
    fallbackImg: "/img/sitio/system-protection-img.png",
    title: "Continuidad Energética",
    desc: "Nuestro Data Center cuenta con sistema eléctrico redundante, que en caso de fallas seguirá funcionando. También contamos con UPS en cada rack"
  },
  {
    icon: "/img/sitio/monitoring-alerts-icon.png",
    fallbackImg: "/img/sitio/server-protection-img.png",
    title: "Soporte 24/7",
    desc: "Asistencia técnica disponible en todo momento, todos los días del año, para resolver cualquier problema o inquietud de manera rápida y eficiente"
  },
  {
    icon: "/img/sitio/global-data-center-icon.png",
    fallbackImg: "/img/sitio/global-data-center-img.png",
    title: "Data Center Tier III",
    desc: "Nuestros servidores se encuentran en Data Center con certificación Tier III con un uptime del 99.85%"
  },
  {
    icon: "/img/sitio/vps-hosting-icon-img.png",
    fallbackImg: "/img/sitio/mobile-app-server-img.png",
    title: "Servidor Aplicaciones Móviles",
    desc: "Levanta tu aplicación en nuestros servicios de VPS y Servidores Dedicados"
  },
  {
    icon: "/img/sitio/high-performance-icon.png",
    fallbackImg: "/img/sitio/data-center-img.png",
    title: "Protección del servidor",
    desc: "Nuestro sistema permite una protección completa contra los ataques DDoS, con monitoreo preventivo y reactivo"
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Características OneServidores.com
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Ofrecemos una variedad de características diseñadas para satisfacer las necesidades de alojamiento web de manera eficiente y confiable. Con opciones flexibles de almacenamiento, ancho de banda generoso y un equipo de soporte técnico altamente capacitado
          </p>
        </div>

        {/* 6 Clean Minimalist Cards idénticas a la web original */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-gray-200/40 hover:shadow-xl transition-shadow text-center flex flex-col justify-center min-h-[220px]"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
