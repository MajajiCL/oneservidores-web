import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, MessageSquare, Headset, Clock } from "lucide-react";

export const metadata = {
  title: "Contacto — Hablemos",
  description: "Hablemos sobre tu proyecto: ventas, soporte técnico o consultas comerciales. Respondemos en menos de 30 minutos hábiles."
};

const channels = [
  { Icon: Phone,        title: "Por teléfono",         body: site.contact.phones.join(" · "),       hint: "Horario hábil 9:00 a 19:00 CLT" },
  { Icon: Mail,         title: "Por correo",            body: site.contact.email,                    hint: "Respuesta < 30 min hábiles" },
  { Icon: MessageSquare,title: "WhatsApp Business",    body: site.contact.phones[1],                hint: "Ideal para coordinaciones rápidas" },
  { Icon: Headset,      title: "Portal de soporte",    body: "portal.oneservidores.com",            hint: "Tickets con SLA medido" },
  { Icon: MapPin,       title: "Visítanos",             body: site.contact.address,                  hint: "Reuniones con cita previa" },
  { Icon: Clock,        title: "Emergencias 24×7",     body: "NOC siempre disponible",              hint: "Para clientes activos" }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={<>Hablemos sobre <span className="text-gradient-brand">tu proyecto</span>.</>}
        description="Cuéntanos qué necesitas y te respondemos rápido, con criterio y sin formularios eternos. Sin telemarketing."
      />

      <section className="relative">
        <div className="container py-16 lg:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="rounded-xl border border-white/10 bg-ink-900/60 p-5 hover:border-brand/40 transition">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/30">
                      <c.Icon size={18} />
                    </div>
                    <div>
                      <div className="text-[14.5px] font-semibold text-white">{c.title}</div>
                      <div className="mt-0.5 text-[13.5px] text-ink-100">{c.body}</div>
                      <div className="mt-1 text-[12px] text-ink-300">{c.hint}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-7">
            <form
              className="rounded-2xl border border-white/10 bg-ink-900/60 p-7 lg:p-9 space-y-5"
              action={`mailto:${site.contact.email}`}
              method="post"
              encType="text/plain"
            >
              <div>
                <div className="text-[12.5px] uppercase tracking-[0.14em] text-brand font-semibold">
                  Formulario directo
                </div>
                <div className="mt-1 text-[20px] font-bold text-white">Cuéntanos qué necesitas</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre" name="nombre" required />
                <Field label="Empresa" name="empresa" />
                <Field label="Correo" name="correo" type="email" required />
                <Field label="Teléfono" name="telefono" />
              </div>
              <Field label="Asunto" name="asunto" required />
              <div>
                <label className="text-[12.5px] uppercase tracking-[0.12em] text-ink-300 font-semibold">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-md bg-ink-950 border border-white/10 px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[12px] text-ink-300">Al enviar aceptas nuestra política de privacidad.</span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-ink-950 font-semibold hover:bg-brand-600 transition"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[12.5px] uppercase tracking-[0.12em] text-ink-300 font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md bg-ink-950 border border-white/10 px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand"
      />
    </div>
  );
}
