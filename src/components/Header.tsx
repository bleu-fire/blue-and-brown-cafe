"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { useCafe } from "@/context/CafeContext";
import { UI_COPY } from "@/data/cafeData";

const NAV_ITEMS = [
  { href: "/menu", key: "menu" as const },
  { href: "/story", key: "story" as const },
  { href: "/locations", key: "locations" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/contact", key: "contact" as const },
];

export function Header() {
  const { lang, setLang, t, totalItems } = useCafe();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-subtle bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="rounded-sm py-1 focus-visible:outline-2"
          aria-label="locas Caffee home"
          onClick={() => setMobileOpen(false)}
        >
          <BrandMark />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  active ? "text-zellige" : "text-espresso hover:text-zellige"
                }`}
              >
                {t(UI_COPY.nav[item.key])}
                {active && (
                  <span className="absolute right-0 -bottom-0.5 left-0 h-0.5 bg-zellige" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex rounded-full border border-subtle bg-cream p-0.5 font-mono text-xs"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
                lang === "en"
                  ? "bg-zellige text-surface"
                  : "text-muted hover:text-espresso"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
              className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
                lang === "fr"
                  ? "bg-zellige text-surface"
                  : "text-muted hover:text-espresso"
              }`}
            >
              FR
            </button>
          </div>

          <Link
            href="/order"
            className="inline-flex items-center gap-2 rounded-full bg-zellige px-4 py-2 text-sm font-medium text-surface transition-colors hover:bg-zellige-hover"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
            <span>{t(UI_COPY.nav.order)}</span>
            {totalItems > 0 && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-saffron px-1.5 font-mono text-xs font-medium text-espresso">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
            className="rounded-full border border-subtle bg-cream px-2.5 py-1 font-mono text-xs font-medium text-espresso"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-subtle text-espresso"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-subtle bg-surface px-4 pt-3 pb-5 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    active ? "bg-sand text-espresso" : "text-espresso hover:bg-cream"
                  }`}
                >
                  {t(UI_COPY.nav[item.key])}
                </Link>
              );
            })}
            <Link
              href="/order"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-zellige px-4 py-2.5 text-sm font-medium text-surface hover:bg-zellige-hover"
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
              <span>
                {t(UI_COPY.nav.order)} ({totalItems})
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
