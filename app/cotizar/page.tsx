import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Cotizar — Solicita una propuesta personalizada",
  description: "Cuéntanos sobre tu proyecto y armamos una propuesta concreta en menos de 24 horas hábiles."
};

const promises = [
  "Respuesta en menos de 24 horas hábiles",
  "Propuesta con planes y precios reales — sin PDF genérico",
  "Asesoría técnica sin compromiso",
  "Migración gratuita en planes equivalentes o superiores"
];

const services = [
  "VPS KVM Linux",
  "VPS LXC Linux",
  "VPS WordPress",
  "Servidor Dedicado",
  "Web Hosting cPanel",
  "Reseller Hosting",
  "Colocation / Housing",
  "Dominios",
  "Asesoría / Otro"
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Cotizar"
        title={<>Una propuesta <span className="text-gradient-brand">a tu medida</span>, sin vueltas.</>}
        description="Llena el formulario o cuéntanos a grandes rasgos qué buscas. Te respondemos con números concretos y plan de implementación."
      />

      <section className="relative">
        <div className="container py-16 lg:py-20 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-7">
              <div className="text-[12.5px] uppercase tracking-[0.14em] text-brand font-semibold">
                Nuestro compromiso
              </div>
              <h3 className="mt-2 text-[22px] font-bold text-white leading-tight">
                Lo que recibirás al enviar este formulario.
              </h3>
              <ul className="mt-6 space-y-3">
                {promises.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14px] text-ink-100">
                    <CheckCircle2 size={18} className="text-brand mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/5 text-[13px] text-ink-200">
                <div>O llámanos directo:</div>
                <div className="mt-1 text-white font-semibold">{site.contact.phones[0]}</div>
                <div className="text-white font-semibold">{site.contact.phones[1]}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <form
              className="rounded-2xl border border-white/10 bg-ink-900/60 p-7 lg:p-9 space-y-5"
              action={`mailto:${site.contact.email}?subject=Cotización`}
              method="post"
              encType="text/plain"
            >
              <div>
                <div className="text-[12.5px] uppercase tracking-[0.14em] text-brand font-semibold">Cotizar</div>
                <div className="mt-1 text-[22px] font-bold text-white">Cuéntanos tu proyecto</div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre y apellido" name="nombre" required />
                <Field label="Empresa o proyecto" name="empresa" />
                <Field label="Correo corporativo" name="correo" type="email" required />
                <Field label="Teléfono / WhatsApp" name="telefono" />
              </div>

              <div>
                <label className="text-[12.5px] uppercase tracking-[0.12em] text-ink-300 font-semibold">Servicio de interés</label>
                <select
                  name="servicio"
                  required
                  className="mt-2 w-full rounded-md bg-ink-950 border border-white/10 px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand"
                >
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Presupuesto mensual aprox." name="presupuesto" placeholder="$50.000 CLP" />
                <Field label="Fecha estimada de inicio" name="fecha" placeholder="Esta semana" />
              </div>

              <div>
                <label className="text-[12.5px] uppercase tracking-[0.12em] text-ink-300 font-semibold">
                  Describe tu necesidad
                </label>
                <textarea
                  name="mensaje"
                  rows={6}
                  required
                  placeholder="Sitio actual, tráfico mensual, cargas técnicas, plazos, lo que sea relevante."
                  className="mt-2 w-full rounded-md bg-ink-950 border border-white/10 px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-[12px] text-ink-300">Cero spam. Tus datos sólo se usan para responder esta cotización.</span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-ink-950 font-semibold hover:bg-brand-600 transition shadow-glow"
                >
                  Enviar cotización
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required = false, placeholder
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-[12.5px] uppercase tracking-[0.12em] text-ink-300 font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md bg-ink-950 border border-white/10 px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand"
      />
    </div>
  );
}
