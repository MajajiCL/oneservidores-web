"use client";

const features = [
  {
    title: "Red Segura",
    desc: "Nuestro equipo de expertos en seguridad cibernética trabaja incansablemente para identificar y neutralizar cualquier riesgo potencial"
  },
  {
    title: "Continuidad Energética",
    desc: "Nuestro Data Center cuenta con sistema eléctrico redundante, que en caso de fallas seguirá funcionando. También contamos con UPS en cada rack"
  },
  {
    title: "Soporte 24/7",
    desc: "Asistencia técnica disponible en todo momento, todos los días del año, para resolver cualquier problema o inquietud de manera rápida y eficiente"
  },
  {
    title: "Data Center Tier III",
    desc: "Nuestros servidores se encuentran en Data Center con certificación Tier III con un uptime del 99.85%"
  },
  {
    title: "Servidor Aplicaciones Móviles",
    desc: "Levanta tu aplicación en nuestros servicios de VPS y Servidores Dedicados"
  },
  {
    title: "Protección del servidor",
    desc: "Nuestro sistema permite una protección completa contra los ataques DDoS, con monitoreo preventivo y reactivo"
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
            Características OneServidores.com
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Ofrecemos una variedad de características diseñadas para satisfacer las necesidades de alojamiento web de manera eficiente y confiable. Con opciones flexibles de almacenamiento, ancho de banda generoso y un equipo de soporte técnico altamente capacitado
          </p>
        </div>

        {/* 6 Clean Minimalist Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col justify-center min-h-[200px]"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
