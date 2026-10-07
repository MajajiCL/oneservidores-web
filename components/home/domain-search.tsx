"use client";

import { useState } from "react";
import { Search, Globe2 } from "lucide-react";

const domains = [
  { tld: ".com", price: "$12.900", badge: "Global" },
  { tld: ".cl", price: "$12.000", badge: "Chile" },
  { tld: ".net", price: "$13.900", badge: "Red" },
  { tld: ".org", price: "$10.000", badge: "Organización" },
  { tld: ".com.ar", price: "$5.990", badge: "Argentina" },
  { tld: ".online", price: "$4.990", badge: "Popular" }
];

export function DomainSearch() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    window.open(
      `https://portal.oneservidores.com/cart.php?a=add&domain=register&query=${encodeURIComponent(query)}`,
      "_blank"
    );
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-black tracking-widest uppercase">
          REGISTRO DE MARCA Y DOMINIOS
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Encuentra tu Dominio Web
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
          Registra o transfiere tu dominio con DNS administrados de alta velocidad y activación inmediata.
        </p>

        {/* Input con Search y Transfer */}
        <form onSubmit={handleSearch} className="pt-6 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-slate-50 border-2 border-slate-200 rounded-2xl shadow-sm focus-within:border-[#FF6B00] focus-within:bg-white transition-all">
            <div className="flex items-center gap-2.5 w-full px-3">
              <Search size={18} className="text-slate-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe tu dominio (ej: miempresa.cl)..."
                className="w-full bg-transparent py-2.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 outline-none"
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E66000] text-white font-extrabold text-xs uppercase tracking-wider transition shadow-md shadow-orange-600/20"
              >
                Buscar
              </button>
              <a
                href="https://portal.oneservidores.com/cart.php?a=add&domain=transfer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider transition block text-center"
              >
                Transferir
              </a>
            </div>
          </div>
        </form>

        {/* Grid de Extensiones Populares */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {domains.map((d) => (
            <div
              key={d.tld}
              className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center shadow-xs hover:border-[#FF6B00] hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="text-xs font-semibold text-slate-400 group-hover:text-orange-500">
                {d.badge}
              </div>
              <div className="text-xl font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors mt-0.5">
                {d.tld}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">
                {d.price} <span className="text-[10px] font-normal text-slate-400">/año</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
