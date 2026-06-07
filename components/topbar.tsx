import { Phone, Mail, ShieldCheck, Globe2, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden lg:block bg-ink-900/80 border-b border-white/5 text-[12.5px] text-ink-200">
      <div className="container flex items-center justify-between h-9">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <Phone size={13} className="text-brand" />
            {site.contact.phones[0]}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Phone size={13} className="text-brand" />
            {site.contact.phones[1]}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mail size={13} className="text-brand" />
            {site.contact.email}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-brand" />
            Soporte 24 × 7 — NOC en línea
          </span>
          <a
            href={site.contact.portal}
            className="inline-flex items-center gap-1 text-ink-100 hover:text-brand transition"
          >
            Portal de clientes <ChevronRight size={12} />
          </a>
          <span className="inline-flex items-center gap-1.5 text-ink-300">
            <Globe2 size={13} /> ES
          </span>
        </div>
      </div>
    </div>
  );
}
