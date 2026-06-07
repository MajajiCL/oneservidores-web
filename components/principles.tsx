import { principles } from "@/lib/site";
import { Check } from "lucide-react";

export function Principles() {
  return (
    <section className="relative">
      <div className="container py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[12.5px] uppercase tracking-[0.16em] text-brand font-semibold">
              Principios
            </div>
            <h2 className="mt-3 text-[30px] lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-white">
              Lo que nos importa cuando nadie mira.
            </h2>
            <p className="mt-4 text-[15.5px] text-ink-100 leading-relaxed">
              No vendemos cajas, vendemos disponibilidad. Estos seis principios guían
              cada decisión de ingeniería y soporte.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {principles.map((p) => (
              <div key={p.title} className="flex gap-3">
                <div className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand ring-1 ring-brand/30">
                  <Check size={14} />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-white">{p.title}</div>
                  <div className="mt-1 text-[13.5px] text-ink-200 leading-relaxed">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
