"use client";

import React from "react";
import { useCafe } from "@/context/CafeContext";
import { MenuSection } from "@/components/MenuSection";
import { BrewMatcher } from "@/components/BrewMatcher";

export default function MenuPage() {
  const { t } = useCafe();

  return (
    <div className="bg-cream text-espresso">
      <section className="paper-grain border-b border-subtle py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">
            {t({ en: "DAILY MENU · CASABLANCA", fr: "LA CARTE DU JOUR · CASABLANCA" })}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
            {t({ en: "Honest Beans. Zero Guesswork.", fr: "Grains honnêtes. Zéro compromis." })}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            {t({
              en: "All espresso drinks are pulled as double shots. Oat and almond milk available at no extra charge.",
              fr: "Tous nos espressos sont servis en double extraction. Lait d'avoine et d'amande disponibles sans supplément.",
            })}
          </p>

          <div className="mt-8">
            <BrewMatcher />
          </div>
        </div>
      </section>

      <MenuSection showHeader={false} />
    </div>
  );
}
