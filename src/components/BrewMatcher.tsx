"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { useCafe } from "@/context/CafeContext";
import { MENU_ITEMS } from "@/data/cafeData";

type Mood = "sharp" | "floral" | "iced" | "calm";

const MOOD_MATCHES: Record<
  Mood,
  {
    label: { en: string; fr: string };
    itemId: string;
    reason: { en: string; fr: string };
  }
> = {
  sharp: {
    label: { en: "Bold & Focused", fr: "Corsé & Concentré" },
    itemId: "flat-white",
    reason: {
      en: "A double ristretto with velvety milk—clean momentum for early deadlines.",
      fr: "Un double ristretto au lait velouté—l'élan net pour vos matins studieux.",
    },
  },
  floral: {
    label: { en: "Bright & Floral", fr: "Vif & Floral" },
    itemId: "v60-pour-over",
    reason: {
      en: "Hand-poured Ethiopian Yirgacheffe with bergamot and white peach clarity.",
      fr: "Yirgacheffe d'Éthiopie en extraction douce aux notes de bergamote et pêche.",
    },
  },
  iced: {
    label: { en: "Crisp & Iced", fr: "Frais & Glacé" },
    itemId: "atlas-cold-brew",
    reason: {
      en: "18-hour cold steep over tonic and fresh rosemary for afternoon resets.",
      fr: "Infusion à froid 18h sur tonic vif et romarin frais pour l'après-midi.",
    },
  },
  calm: {
    label: { en: "Warm & Low-Caffeine", fr: "Doux & Apaisant" },
    itemId: "saffron-cardamom-latte",
    reason: {
      en: "Taliouine saffron and crushed cardamom steamed with creamy oat milk.",
      fr: "Safran de Taliouine et cardamome infusés au lait d'avoine onctueux.",
    },
  },
};

export function BrewMatcher() {
  const { t, addItem } = useCafe();
  const [mood, setMood] = useState<Mood>("sharp");
  const match = MOOD_MATCHES[mood];
  const matchedItem = MENU_ITEMS.find((i) => i.id === match.itemId) ?? MENU_ITEMS[0];

  return (
    <div className="rounded-2xl border border-subtle bg-sand/55 p-6 sm:p-8">
      <div className="flex items-center gap-2 font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">
        <Sparkles className="h-4 w-4 text-terracotta" strokeWidth={1.75} />
        <span>{t({ en: "FIND YOUR ROAST", fr: "TROUVER VOTRE CAFÉ" })}</span>
      </div>
      <h3 className="mt-2 font-display text-2xl font-medium text-espresso">
        {t({ en: "Not sure what to sip?", fr: "Indécis sur votre tasse ?" })}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {(Object.keys(MOOD_MATCHES) as Mood[]).map((key) => {
          const active = mood === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setMood(key)}
              aria-pressed={active}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "bg-zellige text-surface"
                  : "border border-subtle bg-surface text-espresso hover:bg-cream"
              }`}
            >
              {t(MOOD_MATCHES[key].label)}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col justify-between gap-4 rounded-xl border border-subtle bg-surface p-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-medium text-espresso">
            {t(matchedItem.name)} ·{" "}
            <span className="font-mono text-sm text-zellige">{matchedItem.priceMad} MAD</span>
          </p>
          <p className="mt-1 text-sm text-muted">{t(match.reason)}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => addItem(matchedItem)}
            className="rounded-full bg-zellige px-4 py-2 text-xs font-medium text-surface transition-colors hover:bg-zellige-hover"
          >
            {t({ en: "Add to Order", fr: "Ajouter" })}
          </button>
          <Link
            href="/order"
            className="inline-flex items-center gap-1 rounded-full border border-subtle px-3 py-2 text-xs font-medium text-espresso hover:bg-cream"
          >
            <span>{t({ en: "Checkout", fr: "Panier" })}</span>
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </div>
  );
}
