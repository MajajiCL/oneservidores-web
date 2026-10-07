import { Phone, Mail, HelpCircle, User, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-[#181a1b] border-b border-neutral-800 text-[12px] text-gray-300">
      <div className="container flex items-center justify-between h-9">
        {/* Left: Contact info */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+56228402574"
            className="inline-flex items-center gap-1.5 hover:text-[#FF7800] transition-colors"
          >
            <Phone size={12} className="text-[#FF7800]" />
            <span>2 2840 2574</span>
          </a>
          <a
            href="https://wa.me/56971550409"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#FF7800] transition-colors"
          >
            <Phone size={12} className="text-[#FF7800]" />
            <span>+56 9 7155 0409</span>
          </a>
          <a
            href="mailto:info@oneservidores.com"
            className="hidden md:inline-flex items-center gap-1.5 hover:text-[#FF7800] transition-colors"
          >
            <Mail size={12} className="text-[#FF7800]" />
            <span>info@oneservidores.com</span>
          </a>
        </div>

        {/* Right: Customer Portal, Support, Contact, Flags */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/soporte"
            className="inline-flex items-center gap-1 hover:text-[#FF7800] transition-colors"
          >
            <HelpCircle size={12} className="text-[#FF7800]" />
            <span>Soporte</span>
          </Link>
          <a
            href="https://portal.oneservidores.com/clientarea.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#FF7800] transition-colors font-medium text-white"
          >
            <User size={12} className="text-[#FF7800]" />
            <span>Área de clientes</span>
          </a>
          <Link
            href="/contacto"
            className="hidden sm:inline-flex items-center gap-1 hover:text-[#FF7800] transition-colors"
          >
            <MessageSquare size={12} className="text-[#FF7800]" />
            <span>Contacto</span>
          </Link>
          <div className="flex items-center gap-1.5 pl-2 border-l border-neutral-700 text-xs">
            <span title="Chile">🇨🇱</span>
            <span title="Argentina">🇦🇷</span>
          </div>
        </div>
      </div>
    </div>
  );
}
