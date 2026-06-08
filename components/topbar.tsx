import { Phone, Mail, ShieldCheck, Globe2, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden lg:block bg-ink-50 border-b border-ink-200 text-[12.5px] text-ink-600">
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
            <Globe2 size={13} className="text-ink-400" /> ES
          </span>
          <a
            href={site.contact.portal}
            className="inline-flex items-center gap-1 text-ink-700 hover:text-brand transition"
          >
            Acceso Clientes <ChevronRight size={12} />
          </a>
          <span className="inline-flex items-center gap-1.5 text-ink-700">
            <ShieldCheck size={13} className="text-brand" /> Soporte 24×7
          </span>
        </div>
      </div>
    </div>
  );
}
