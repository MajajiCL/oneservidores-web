"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/paths";

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
          ? "bg-void/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={asset("/logo-white.png")}
            alt={site.name}
            width={200}
            height={50}
            priority
            className="h-8 w-auto lg:h-9"
          />
          <span className="hidden md:inline-flex items-center gap-1 rounded-pill border border-white/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.18em] text-slate">
            <span className="text-brand">·</span> EST 2014
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-0.5"
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
                  "px-3.5 py-2 rounded-pill text-body-sm font-medium inline-flex items-center gap-1.5",
                  "text-bone-white/80 hover:text-bone-white hover:bg-white/5 transition"
                )}
              >
                {item.label}
                {item.children && <ChevronDown size={13} className="opacity-50" />}
              </Link>

              {item.children && openMega === item.label && (
                <div className="absolute left-0 top-full pt-3 w-[420px]">
                  <div className="rounded-card glass-strong p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-pill px-3 py-2.5 hover:bg-white/5 transition group"
                      >
                        <div className="text-body-sm font-semibold text-bone-white group-hover:text-brand">
                          {child.label}
                        </div>
                        <div className="text-[11.5px] text-slate mt-0.5">{child.desc}</div>
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
            href={site.contact.portal}
            className="px-5 py-2 rounded-pill text-body-sm font-medium border border-storm-gray text-bone-white hover:border-brand hover:shadow-glowSoft transition"
          >
            Mi panel
          </Link>
          <Link
            href="/cotizar"
            className="px-5 py-2 rounded-pill text-body-sm font-semibold bg-void border border-bone-white text-bone-white hover:border-brand hover:bg-brand/10 hover:shadow-glowSoft transition inline-flex items-center gap-1.5"
          >
            Cotizar <ArrowRight size={13} />
          </Link>
        </div>

        <button
          onClick={() => setOpenMobile((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-pill border border-white/10 text-bone-white"
          aria-label="Abrir menú"
        >
          {openMobile ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {openMobile && (
        <div className="lg:hidden border-t border-white/5 bg-void">
          <div className="container py-4 space-y-1">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpenMobile(false)}
                  className="block px-3 py-2.5 rounded-pill text-body font-medium text-bone-white hover:bg-white/5"
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
                        className="block px-3 py-2 text-body-sm text-slate hover:text-brand"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 grid grid-cols-2 gap-2">
              <Link href={site.contact.portal} className="px-4 py-2.5 text-center text-body-sm rounded-pill border border-storm-gray text-bone-white">
                Mi panel
              </Link>
              <Link href="/cotizar" className="px-4 py-2.5 text-center text-body-sm rounded-pill border border-bone-white text-bone-white">
                Cotizar
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
