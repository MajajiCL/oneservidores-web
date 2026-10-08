"use client";

import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";
import { asset } from "@/lib/paths";

const domains = [
  { tld: ".com", price: "$12.900" },
  { tld: ".net", price: "$13.900" },
  { tld: ".org", price: "$10.000" },
  { tld: ".cl", price: "$12.000" },
  { tld: ".com.ar", price: "$5.99" },
  { tld: ".ar", price: "$8.99" }
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
    <section className="relative py-20 bg-white border-b border-gray-100 overflow-hidden">
      {/* Background overlay de dominios */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-5 w-96 h-96">
        <Image
          src={asset("/img/sitio/domian-checker-bg.png")}
          alt="Globo dominios"
          fill
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Dominios Populares
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Busca tu próximo dominio
        </p>

        {/* Search input with Search and Transfer buttons */}
        <form onSubmit={handleSearch} className="pt-4 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-white border-2 border-gray-200 rounded-md shadow-xs focus-within:border-[#FF6B00] transition">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar dominio..."
              className="w-full bg-transparent px-4 py-2.5 text-sm font-semibold text-gray-900 placeholder:text-gray-400 outline-none"
            />
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold text-xs uppercase tracking-wider transition"
              >
                Search
              </button>
              <a
                href="https://portal.oneservidores.com/cart.php?a=add&domain=transfer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider transition block text-center"
              >
                Transfer
              </a>
            </div>
          </div>
        </form>

        {/* 6 TLDs Grid */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {domains.map((d) => (
            <div
              key={d.tld}
              className="bg-white rounded-xl p-5 border border-gray-200 text-center shadow-xs hover:border-[#FF6B00] hover:shadow-md transition group"
            >
              <div className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">
                {d.tld}
              </div>
              <div className="text-lg font-bold text-[#FF6B00] mt-1">
                {d.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
