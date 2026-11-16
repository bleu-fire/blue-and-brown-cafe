"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "The menu", href: "#menu" },
  { label: "Our little story", href: "#story" },
  { label: "The good stuff", href: "#rituals" },
  { label: "Find us", href: "#find-us" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F2EEE4]/95 backdrop-blur-sm border-b border-[#3B2A20]/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#"
          className="inline-flex items-center gap-3 group focus:outline-none"
          aria-label="Blue & Brown Neighborhood Café home"
        >
          <span className="w-9 h-9 rounded-full bg-[#1B3A57] text-[#F2EEE4] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" x2="6" y1="2" y2="4" />
              <line x1="10" x2="10" y1="2" y2="4" />
              <line x1="14" x2="14" y1="2" y2="4" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#3B2A20]">
              Blue &amp; Brown
            </span>
            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.24em] text-[#6E5B4F] mt-1">
              NEIGHBORHOOD CAFÉ
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-[#3B2A20]/85 hover:text-[#24507A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#find-us"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#24507A] hover:bg-[#1B3A57] text-[#F2EEE4] font-sans text-sm font-medium px-5 py-2.5 rounded-sm transition-colors"
          >
            <span>Come on in</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm text-[#3B2A20] hover:bg-[#E8E0D2] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#F2EEE4] border-t border-[#3B2A20]/10 px-5 py-5 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 font-sans text-base text-[#3B2A20] hover:text-[#24507A] transition-colors border-b border-[#3B2A20]/8 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#find-us"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full bg-[#24507A] hover:bg-[#1B3A57] text-[#F2EEE4] font-sans text-sm font-medium px-5 py-3 rounded-sm transition-colors"
            >
              <span>Come on in</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
