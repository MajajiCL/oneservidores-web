"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "bg-ink-950/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-white.png"
            alt={site.name}
            width={180}
            height={45}
            priority
            className="h-8 w-auto lg:h-9"
          />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1"
          onMouseLeave={() => setOpenMega(null)}
        >
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMega(item.children ? item.label : null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "px-3.5 py-2 rounded-md text-[14px] font-medium inline-flex items-center gap-1.5",
                  "text-ink-100 hover:text-white hover:bg-white/5 transition"
                )}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className="opacity-60" />}
              </Link>

              {item.children && openMega === item.label && (
                <div className="absolute left-0 top-full pt-3 w-[420px]">
                  <div className="rounded-xl border border-white/10 bg-ink-900/95 backdrop-blur-xl shadow-soft p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 hover:bg-white/5 transition group"
                      >
                        <div className="text-[14px] font-semibold text-white group-hover:text-brand">
                          {child.label}
                        </div>
                        <div className="text-[12.5px] text-ink-200">{child.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/cotizar"
            className="px-4 py-2 text-[14px] rounded-md text-ink-100 hover:text-white hover:bg-white/5 transition"
          >
            Cotizar
          </Link>
          <Link
            href={site.contact.portal}
            className="px-4 py-2 text-[14px] rounded-md bg-brand text-ink-950 font-semibold hover:bg-brand-600 transition inline-flex items-center gap-1.5"
          >
            Mi panel <ArrowRight size={14} />
          </Link>
        </div>

        <button
          onClick={() => setOpenMobile((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white"
          aria-label="Abrir menú"
        >
          {openMobile ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {openMobile && (
        <div className="lg:hidden border-t border-white/5 bg-ink-950">
          <div className="container py-4 space-y-1">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpenMobile(false)}
                  className="block px-3 py-2.5 rounded-md text-[15px] font-medium text-white hover:bg-white/5"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-3 space-y-0.5">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={() => setOpenMobile(false)}
                        className="block px-3 py-2 text-[14px] text-ink-100 hover:text-brand"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 grid grid-cols-2 gap-2">
              <Link href="/cotizar" className="px-4 py-2.5 text-center text-[14px] rounded-md border border-white/10">
                Cotizar
              </Link>
              <Link href={site.contact.portal} className="px-4 py-2.5 text-center text-[14px] rounded-md bg-brand text-ink-950 font-semibold">
                Mi panel
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
