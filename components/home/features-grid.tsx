"use client";

import { Shield, Zap, Headphones, Server, Smartphone, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Red Segura & Mitigación DDoS",
    desc: "Filtrado perimetral de tráfico malicioso en tiempo real con monitoreo preventivo y reactivo para mantener tu negocio online ante cualquier ataque."
  },
  {
    icon: Zap,
    title: "Continuidad Energética N+1",
    desc: "Infraestructura eléctrica redundante con respaldo de UPS por rack y generadores diésel automáticos garantizando 99.85% de operatividad ininterrumpida."
  },
  {
    icon: Headphones,
    title: "Soporte Técnico 24/7 en Español",
    desc: "Atención técnica especializada todos los días del año a través de tickets, chat directo y WhatsApp para resolver consultas críticas en minutos."
  },
  {
    icon: Server,
    title: "Data Center Tier III Certificado",
    desc: "Servidores alojados en instalaciones Tier III en Santiago y Buenos Aires con climatización controlada y redundancia en todas las capas críticas."
  },
  {
    icon: Smartphone,
    title: "Ideal para Aplicaciones y APIs",
    desc: "Despliega entornos para aplicaciones móviles, ecommerce, microservicios Docker o bases de datos de alto rendimiento con latencia mínima."
  },
  {
    icon: Lock,
    title: "CpGuard & Protección Integral",
    desc: "Detección proactiva de virus, exploits y malware a nivel de servidor con aislamiento completo por cuenta mediante CloudLinux."
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-black tracking-widest uppercase">
            VENTAJAS COMPETITIVAS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            ¿Por qué elegir OneServidores?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Ofrecemos infraestructura de nivel corporativo adaptada a pymes y empresas en Chile, combinando hardware de alto rendimiento con atención personalizada y humana.
          </p>
        </div>

        {/* 6 Clean Minimalist Modern Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col group"
              >
                <div className="h-12 w-12 rounded-xl bg-orange-50 group-hover:bg-[#FF6B00] text-[#FF6B00] group-hover:text-white flex items-center justify-center mb-6 transition-colors shadow-xs">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
