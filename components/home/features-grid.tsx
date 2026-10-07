"use client";

import { Shield, Zap, Headphones, Server, Smartphone, Lock } from "lucide-react";

const features = [
  {
    title: "Red Segura",
    desc: "Nuestro equipo de expertos en seguridad cibernética trabaja para identificar y neutralizar cualquier riesgo potencial de intrusión o malware.",
    icon: Shield
  },
  {
    title: "Continuidad Energética",
    desc: "Nuestro Data Center cuenta con sistema eléctrico redundante N+1 que garantiza operación continua ante cualquier corte eléctrico externo, con UPS por rack.",
    icon: Zap
  },
  {
    title: "Soporte 24/7",
    desc: "Asistencia técnica disponible en todo momento, todos los días del año, para resolver cualquier duda o emergencia técnica de forma rápida y humana.",
    icon: Headphones
  },
  {
    title: "Data Center Tier III",
    desc: "Nuestros servidores se encuentran alojados en salas certificadas Tier III en Santiago de Chile, con disponibilidad y uptime garantizado del 99.85%.",
    icon: Server
  },
  {
    title: "Servidor Aplicaciones Móviles",
    desc: "Levanta tu backend, base de datos PostgreSQL/MySQL o APIs móviles en nuestros servicios de VPS de alta velocidad con latencia ultra baja.",
    icon: Smartphone
  },
  {
    title: "Protección del Servidor",
    desc: "Mitigación completa y activa contra ataques DDoS en capa 3, 4 y 7, respaldada por monitoreo preventivo y reactivo de nuestra red.",
    icon: Lock
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-slate-50 border-b border-gray-200">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7800]">
            ESTÁNDAR DE EXCELENCIA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Características OneServidores.com
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Ofrecemos características diseñadas para satisfacer las necesidades de alojamiento web 
            y misión crítica de manera eficiente, confiable y con soporte local en Santiago.
          </p>
        </div>

        {/* 6 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#FF7800] border border-orange-100 mb-6 group-hover:scale-110 group-hover:bg-[#FF7800] group-hover:text-white transition-all duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF7800] transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
