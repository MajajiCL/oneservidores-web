import { Phone, Mail, ShieldCheck, Globe2, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden lg:block bg-void border-b border-white/5 text-[12px] text-slate font-mono uppercase tracking-[0.14em]">
      <div className="container flex items-center justify-between h-9">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <Phone size={11} className="text-brand" />
            {site.contact.phones[0]}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Phone size={11} className="text-brand" />
            {site.contact.phones[1]}
          </span>
          <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
            <Mail size={11} className="text-brand" />
            {site.contact.email}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <Globe2 size={11} className="text-slate" /> ES · CL
          </span>
          <a
            href={site.contact.portal}
            className="inline-flex items-center gap-1 text-ash hover:text-brand transition"
          >
            Acceso Clientes <ChevronRight size={10} />
          </a>
          <span className="inline-flex items-center gap-1.5">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <ShieldCheck size={11} className="text-brand" /> NOC 24×7
          </span>
        </div>
      </div>
    </div>
  );
}
