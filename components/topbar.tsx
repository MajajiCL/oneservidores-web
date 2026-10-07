import { Phone, LifeBuoy, LogIn, Mail } from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
      <div className="container flex items-center justify-between h-9 font-medium">
        {/* Left Badge */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Infraestructura 100% operativa en Santiago</span>
        </div>

        {/* Right Contacts */}
        <div className="flex items-center justify-end w-full sm:w-auto gap-5 font-medium">
          <a
            href="tel:228402574"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={12} className="text-[#FF6B00]" />
            <span>+56 2 2840 2574</span>
          </a>
          <Link
            href="/soporte"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <LifeBuoy size={13} className="text-[#FF6B00]" />
            <span>Soporte 24/7</span>
          </Link>
          <a
            href="https://portal.oneservidores.com/clientarea.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#FF6B00] transition-colors"
          >
            <LogIn size={13} className="text-orange-400" />
            <span>Portal WHMCS</span>
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={13} className="text-[#FF6B00]" />
            <span>Contacto</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
