"use client";

import { useState } from "react";
import { Search, Globe, ArrowRight } from "lucide-react";

const domains = [
  { tld: ".com", price: "$12.900", desc: "El más popular del mundo" },
  { tld: ".cl", price: "$12.000", desc: "Tu identidad en Chile" },
  { tld: ".net", price: "$13.900", desc: "Ideal para redes y tecnología" },
  { tld: ".org", price: "$10.000", desc: "Organizaciones y proyectos" },
  { tld: ".com.ar", price: "US$ 5.99", desc: "Presencia comercial en Argentina" },
  { tld: ".ar", price: "US$ 8.99", desc: "Dominio oficial de Argentina" }
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
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7800]">
            REGISTRO Y TRANSFERENCIA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Dominios Populares
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Busca tu próximo dominio y asegúralo al instante con DNS gestionado y protección Whois.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="pt-4 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-slate-50 border-2 border-gray-200 rounded-2xl sm:rounded-full shadow-inner focus-within:border-[#FF7800] transition">
              <div className="flex items-center gap-3 pl-4 w-full">
                <Globe size={20} className="text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Escribe el nombre de tu empresa o idea (ej: miempresa.cl)"
                  className="w-full bg-transparent py-3 text-sm sm:text-base font-semibold text-gray-900 placeholder:text-gray-400 outline-none"
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl sm:rounded-full bg-[#FF7800] hover:bg-[#E66B00] text-white font-black text-sm uppercase tracking-wider transition shadow-md shadow-orange-500/20"
                >
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* TLD cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {domains.map((d) => (
            <div
              key={d.tld}
              className="bg-slate-50 rounded-2xl p-5 border border-gray-200 text-center hover:border-orange-300 hover:shadow-md transition group"
            >
              <div className="text-2xl font-black text-gray-900 group-hover:text-[#FF7800] transition-colors">
                {d.tld}
              </div>
              <div className="text-lg font-black text-[#FF7800] mt-1">
                {d.price}
              </div>
              <div className="text-[11px] text-gray-400 mt-1">/Año + IVA</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
