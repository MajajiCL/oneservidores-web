import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Tag, Lock, RefreshCw, ShieldCheck, Search, Settings } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Dominios — Registro, traslado y DNS",
  description: "Registra dominios .cl, .com, .net, .org, .com.ar y más. Panel DNS avanzado, WHOIS privado y candado anti-robo."
};

const features = [
  { Icon: Tag,         title: "100+ extensiones",   body: ".cl, .com, .net, .org, .com.ar, .ar, .io, .dev, .store y más." },
  { Icon: Lock,        title: "WHOIS privado",       body: "Protege tus datos personales sin costo adicional en extensiones que lo permiten." },
  { Icon: RefreshCw,   title: "Renovación automática",body: "Avisos por mail 30/15/7 días antes y opción de auto-renovación." },
  { Icon: ShieldCheck, title: "Candado de transferencia", body: "Evita que tu dominio sea trasladado sin tu consentimiento." },
  { Icon: Settings,    title: "Panel DNS avanzado",  body: "Registros A, AAAA, CNAME, MX, TXT, SRV, CAA y DNSSEC desde un panel claro." },
  { Icon: Search,      title: "Búsqueda inteligente",body: "Sugerencias de extensiones disponibles cuando el .com está tomado." }
];

const popularTlds = [
  { tld: ".cl",     price: "$11.990 / año" },
  { tld: ".com",    price: "$10.990 / año" },
  { tld: ".net",    price: "$12.990 / año" },
  { tld: ".org",    price: "$13.990 / año" },
  { tld: ".com.ar", price: "$9.990 / año" },
  { tld: ".ar",     price: "$8.990 / año" },
  { tld: ".io",     price: "$39.990 / año" },
  { tld: ".dev",    price: "$15.990 / año" }
];

const faqs = [
  { q: "¿Trasladar mi .cl desde otro registrador tiene costo?",
    a: "No. Te ayudamos con el proceso ante NIC Chile sin costo de traslado, sólo pagas la renovación anual." },
  { q: "¿Puedo apuntar mi dominio a un hosting externo?",
    a: "Sí, manejas los nameservers libremente o usas nuestro panel DNS sin contratar hosting con nosotros." },
  { q: "¿Ofrecen email forwarding sin hosting?",
    a: "Sí, hasta 10 reglas de redirección gratuitas con cada dominio registrado." }
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Dominios"
        title={<>Tu dominio, gestionado <span className="text-gradient-brand">en serio</span>.</>}
        description="Registra y administra dominios desde un panel claro, con candado anti-robo, WHOIS privado y panel DNS de nivel profesional."
        primaryCta={{ label: "Buscar mi dominio", href: "#buscar" }}
        secondaryCta={{ label: "Trasladar mi dominio", href: "/contacto" }}
        right={
          <div id="buscar" className="rounded-2xl border border-white/10 bg-ink-900/70 p-5">
            <div className="text-[12.5px] uppercase tracking-[0.14em] text-brand font-semibold">Verifica disponibilidad</div>
            <div className="mt-3 flex">
              <input
                placeholder="tu-dominio"
                className="flex-1 rounded-l-md bg-ink-950 border border-white/10 px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand"
              />
              <select className="bg-ink-950 border-y border-r border-white/10 px-2 text-[13px]">
                <option>.cl</option><option>.com</option><option>.net</option><option>.com.ar</option>
              </select>
              <button className="ml-2 px-4 rounded-md bg-brand text-ink-950 font-semibold text-[13.5px] hover:bg-brand-600 transition">
                Buscar
              </button>
            </div>
            <div className="mt-2 text-[11.5px] text-ink-300">
              Demo visual — para registro usar el portal de clientes.
            </div>
          </div>
        }
      />

      <section className="relative border-y border-white/5 bg-ink-900/40">
        <div className="container py-16 lg:py-20">
          <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">Extensiones populares</div>
          <h2 className="mt-3 text-[26px] lg:text-[32px] font-extrabold tracking-tight text-white">
            Precios sin sorpresas, renovación al mismo costo.
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {popularTlds.map((t, i) => (
              <Reveal key={t.tld} delay={i * 0.04}>
                <div className="rounded-xl border border-white/10 bg-ink-950/60 p-5 hover:border-brand/40 transition">
                  <div className="text-[24px] font-extrabold text-brand tracking-tight">{t.tld}</div>
                  <div className="mt-1 text-[12.5px] text-ink-200">{t.price}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid eyebrow="Por qué con nosotros" title="Lo básico bien hecho y lo avanzado a mano." features={features} />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
