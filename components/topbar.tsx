import { Phone, LifeBuoy, LogIn, Mail } from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-[#FF6B00] text-white text-[13px] border-b border-white/20">
      <div className="container flex items-center justify-end h-10 gap-6 sm:gap-8 font-medium">
        <a
          href="tel:228402574"
          className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <Phone size={13} className="text-white" />
          <span>2 2840 2574</span>
        </a>
        <Link
          href="/soporte"
          className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <LifeBuoy size={14} className="text-white" />
          <span>Soporte</span>
        </Link>
        <a
          href="https://portal.oneservidores.com/clientarea.php"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <LogIn size={14} className="text-white" />
          <span>Área de clientes</span>
        </a>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <Mail size={14} className="text-white" />
          <span>Contacto</span>
        </Link>
      </div>
    </div>
  );
}
