import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · OneServidores.com",
  description: "Política de privacidad y tratamiento de datos personales de OneServidores.com (PlusGroup SpA)."
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
          Política de Privacidad
        </h1>
        <p className="text-sm text-gray-500 mb-10 pb-6 border-b border-gray-200">
          Última actualización: Octubre 2026 · OneServidores.com (PlusGroup SpA)
        </p>

        <div className="prose prose-slate max-w-none space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            En <strong>OneServidores.com</strong> (operado legalmente por <strong>PlusGroup SpA</strong>, RUT comercial chileno), 
            respetamos su privacidad y nos comprometemos firmemente a proteger sus datos personales y la información de sus servicios alojados.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            1. Información que recopilamos
          </h2>
          <p>
            Recopilamos la información estrictamente necesaria para la prestación y facturación de servicios de infraestructura digital, tales como:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Datos de contacto e identificación: Nombre, RUT o identificación tributaria, dirección comercial y correo electrónico.</li>
            <li>Información de facturación para emisión de Documentos Tributarios Electrónicos (DTE) ante el SII.</li>
            <li>Registros técnicos de conexión (logs de red, IPs de acceso a paneles cPanel y portales de cliente) con fines de seguridad y prevención de fraudes.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            2. Uso de la información
          </h2>
          <p>
            Sus datos personales son utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>La activación, administración y provisión técnica de sus servidores VPS, hosting y dominios.</li>
            <li>Notificaciones operativas críticas (vencimiento de certificados, renovaciones de servicio, alertas de seguridad).</li>
            <li>Atención de tickets de soporte técnico e incidencias reportadas.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            3. Confidencialidad y Seguridad de los Datos
          </h2>
          <p>
            OneServidores no vende, alquila ni comparte su información con terceros para fines publicitarios. 
            Toda la infraestructura física se encuentra en Data Centers con certificación Tier III, protegida por firewalls y protocolos de cifrado SSL/TLS.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            4. Política de Cookies
          </h2>
          <p>
            Nuestro sitio web utiliza cookies esenciales para mantener su sesión activa en el área de clientes (WHMCS) y garantizar el funcionamiento seguro del carrito de compras. Puede configurar su navegador para bloquearlas, aunque algunas funciones del portal podrían verse limitadas.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-8 mb-3">
            5. Contacto sobre Privacidad
          </h2>
          <p>
            Para consultas relacionadas con sus datos o el ejercicio de sus derechos de privacidad, puede contactarnos a través de:
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 mt-4 space-y-1 text-sm font-medium">
            <div><strong>Razón Social:</strong> PlusGroup SpA</div>
            <div><strong>Correo de contacto:</strong> info@oneservidores.com</div>
            <div><strong>Teléfono:</strong> +56 2 2840 2574 / +56 9 7155 0409</div>
            <div><strong>Dirección:</strong> Ahumada 370, Oficina 516, Santiago Centro, Chile</div>
          </div>
        </div>
      </div>
    </div>
  );
}
