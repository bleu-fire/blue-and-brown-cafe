"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useCafe } from "@/context/CafeContext";
import { GALLERY_ITEMS, GalleryItem } from "@/data/cafeData";

const FILTERS = [
  { id: "all" as const, label: { en: "All", fr: "Tout" } },
  { id: "morning" as const, label: { en: "Morning Light", fr: "Lumière Matinale" } },
  { id: "workspace" as const, label: { en: "Study Space", fr: "Espace d'Étude" } },
  { id: "pours" as const, label: { en: "Signature Pours", fr: "Extractions" } },
];

export default function GalleryPage() {
  const { t } = useCafe();
  const [filter, setFilter] = useState<"all" | GalleryItem["category"]>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visible =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="bg-cream text-espresso">
      <section className="paper-grain border-b border-subtle py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">
            {t({ en: "ATMOSPHERE & CRAFT", fr: "ATMOSPHÈRE & SAVOIR-FAIRE" })}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
            {t({ en: "Morning Light & Cedarwood", fr: "Lumière Matinale & Bois de Cèdre" })}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                    active
                      ? "bg-zellige text-surface"
                      : "border border-subtle bg-surface text-espresso hover:bg-sand/50"
                  }`}
                >
                  {t(f.label)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6">
          {visible.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className="group overflow-hidden rounded-2xl border border-subtle bg-surface text-left transition-colors hover:border-terracotta"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.src}
                  alt={t(item.alt)}
                  width={800}
                  height={600}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-espresso">{t(item.caption)}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(selected.caption)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl overflow-hidden rounded-2xl border border-subtle bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-espresso shadow"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <Image
              src={selected.src}
              alt={t(selected.alt)}
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
            <p className="p-4 text-sm text-espresso">{t(selected.caption)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
