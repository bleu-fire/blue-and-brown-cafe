"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCafe } from "@/context/CafeContext";
import { PROCESS_STEPS } from "@/data/cafeData";
import { FadeIn } from "@/components/MotionPrimitives";

const ORIGINS = [
  {
    country: "Ethiopia · Yirgacheffe",
    elevation: "1,950–2,100m",
    process: { en: "Washed", fr: "Lavé" },
    notes: { en: "Bergamot, jasmine, white peach", fr: "Bergamote, jasmin, pêche blanche" },
  },
  {
    country: "Colombia · Huila",
    elevation: "1,700m",
    process: { en: "Honey", fr: "Miel (Honey)" },
    notes: { en: "Dark cocoa, roasted almond, panela", fr: "Cacao noir, amande grillée, panela" },
  },
  {
    country: "Brazil · Mogiana",
    elevation: "1,150m",
    process: { en: "Natural", fr: "Nature" },
    notes: { en: "Toasted hazelnut, caramel, low acidity", fr: "Noisette grillée, caramel, douce acidité" },
  },
];

export default function StoryPage() {
  const { t } = useCafe();

  return (
    <div className="bg-cream text-espresso">
      <section className="paper-grain border-b border-subtle py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">
              {t({ en: "OUR STORY", fr: "NOTRE HISTOIRE" })}
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
              {t({
                en: "Global Harvests. Moroccan Warmth.",
                fr: "Récoltes d'ailleurs. Accueil d'ici.",
              })}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {t({
                en: "Founded in Casablanca's Maarif district, locas Caffee was built as a third place between campus, home, and office. We pair transparent small-batch roasting with cedarwood study tables, 300 Mbps fiber, and unhurried Moroccan hospitality.",
                fr: "Fondé au cœur du Maarif à Casablanca, locas Caffee est né comme un troisième lieu entre le campus, la maison et le bureau. Nous unissons torréfaction artisanale transparente, tables en cèdre, fibre 300 Mbps et accueil casablancais.",
              })}
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-subtle bg-surface">
              <Image
                src="/images/roasting-craft.svg"
                alt={t({
                  en: "Pour-over extraction and roasted beans at locas Caffee",
                  fr: "Extraction douce et grains torréfiés chez locas Caffee",
                })}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">
            {t({ en: "SEASONAL HARVESTS", fr: "RÉCOLTES DE SAISON" })}
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium text-espresso">
            {t({ en: "Traceable Single Origins", fr: "Origines Traçables" })}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {ORIGINS.map((origin, i) => (
              <FadeIn key={origin.country} delay={i * 0.05}>
                <article className="rounded-xl border border-subtle bg-surface p-6">
                  <p className="font-mono text-xs font-medium text-terracotta uppercase">
                    {origin.elevation} · {t(origin.process)}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium text-espresso">
                    {origin.country}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{t(origin.notes)}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-subtle bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-medium text-espresso">
            {t({ en: "Four Quiet Steps to a Cleaner Cup", fr: "Quatre Étapes vers une Tasse Nette" })}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="rounded-xl border border-subtle bg-cream/60 p-5">
                <span className="font-mono text-xs font-medium text-zellige">{step.step}</span>
                <h3 className="mt-1.5 font-display text-lg font-medium text-espresso">
                  {t(step.title)}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{t(step.description)}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-zellige px-6 py-3 text-sm font-medium text-surface hover:bg-zellige-hover"
            >
              <span>{t({ en: "Explore the Menu", fr: "Découvrir la carte" })}</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
