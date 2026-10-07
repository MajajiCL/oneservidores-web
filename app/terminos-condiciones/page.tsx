import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones · OneServidores.com",
  description: "Términos y condiciones del servicio de hosting, VPS y servidores de OneServidores.com (PlusGroup SpA)."
};

export default function TerminosCondicionesPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-gray-500 mb-10 pb-6 border-b border-gray-200">
          Última actualización: Octubre 2026 · OneServidores.com (PlusGroup SpA)
        </p>

        <div className="prose prose-slate max-w-none space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            Bienvenido a <strong>OneServidores.com</strong>, plataforma de servicios de alojamiento y telecomunicaciones operada por <strong>PlusGroup SpA</strong>. 
            Al contratar cualquiera de nuestros servicios (Web Hosting cPanel, VPS KVM, VPS LXC, Servidores Dedicados, Dominios o Colocation), 
            usted acepta cumplir con los presentes Términos y Condiciones.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            1. Provisión y Activación de Servicios
          </h2>
          <p>
            Los servicios de Web Hosting y VPS con medios de pago automatizados se activan en un plazo estimado de 5 a 30 minutos tras la confirmación del pago. 
            En el caso de Servidores Dedicados y Colocation que requieran aprovisionamiento de hardware específico, el plazo de entrega será coordinado con el cliente al momento de la orden.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            2. Política de Uso Aceptable (AUP)
          </h2>
          <p>
            Queda estrictamente prohibido utilizar los recursos de OneServidores para:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Envío de correo no solicitado (SPAM) masivo o ilícito.</li>
            <li>Alojamiento o distribución de contenido malicioso, virus, botnets o phishing.</li>
            <li>Ataques dirigidos a terceros (Denegación de Servicio DoS/DDoS) o escaneo no autorizado de redes.</li>
            <li>Actividades que infrinjan la legislación chilena o internacional vigente en materia de propiedad intelectual.</li>
          </ul>
          <p>
            El incumplimiento flagrante de esta política facultará a OneServidores a suspender preventivamente el servicio para salvaguardar la reputación y estabilidad de la red.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            3. Disponibilidad y SLA
          </h2>
          <p>
            Nuestros servidores se encuentran alojados en salas con certificación <strong>Tier III</strong> en Santiago de Chile y Buenos Aires, 
            con una disponibilidad de red mensual garantizada del 99.85%, exceptuando ventanas de mantenimiento programadas informadas previamente.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            4. Copias de Seguridad y Responsabilidad
          </h2>
          <p>
            En servicios VPS KVM y Servidores Dedicados no administrados, el cliente tiene acceso root exclusivo y es el principal responsable de la administración de su sistema operativo y de la custodia de sus copias de seguridad periódicas.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            5. Pagos, Renovaciones y Precios
          </h2>
          <p>
            Todos los precios publicados en el sitio web están expresados en pesos chilenos (CLP) o dólares estadounidenses (USD) y se entienden <strong>Sin IVA</strong>, aplicándose el impuesto legal correspondiente al momento de la facturación.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            6. Jurisdicción y Contacto
          </h2>
          <p>
            Para todos los efectos legales, las partes se someten a la competencia de los tribunales ordinarios de justicia de la ciudad de Santiago de Chile.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 mt-4 space-y-1 text-sm font-medium">
            <div><strong>Empresa:</strong> PlusGroup SpA</div>
            <div><strong>Sitio web:</strong> https://oneservidores.cl</div>
            <div><strong>Soporte:</strong> info@oneservidores.com</div>
            <div><strong>Oficinas:</strong> Ahumada 370, Oficina 516, Santiago — Chile</div>
          </div>
        </div>
      </div>
    </div>
  );
}
