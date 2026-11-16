"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Wifi, PlugZap, Phone, ExternalLink } from "lucide-react";
import { useCafe } from "@/context/CafeContext";
import { LOCATIONS } from "@/data/cafeData";

export default function LocationsPage() {
  const { t } = useCafe();

  return (
    <div className="bg-cream text-espresso">
      <section className="paper-grain border-b border-subtle py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">
            {t({ en: "CASABLANCA · MOROCCO", fr: "CASABLANCA · MAROC" })}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
            {t({ en: "Two Study-Friendly Spaces", fr: "Deux Espaces Pensés pour l'Étude" })}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            {t({
              en: "Both Maarif and Gauthier bars are equipped with 300 Mbps fiber, outlets at every seat, and dedicated quiet zones.",
              fr: "Nos comptoirs de Maarif et Gauthier disposent de la fibre 300 Mbps, de prises à chaque place et de zones calmes.",
            })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <article
              key={loc.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-subtle bg-surface"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-mint px-3 py-1 font-mono text-xs font-medium text-espresso">
                    {loc.neighborhood}
                  </span>
                  <span className="font-mono text-xs text-zellige">{t(loc.hours)}</span>
                </div>

                <h2 className="mt-4 font-display text-2xl font-medium text-espresso">
                  {t(loc.name)}
                </h2>
                <p className="mt-2 text-sm text-muted">{t(loc.highlight)}</p>

                <ul className="mt-5 space-y-2.5 text-sm text-espresso">
                  <li className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 text-terracotta" strokeWidth={1.75} />
                    <span>{loc.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Wifi className="h-4 w-4 shrink-0 text-zellige" strokeWidth={1.75} />
                    <span>{loc.wifiSpeed}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <PlugZap className="h-4 w-4 shrink-0 text-zellige" strokeWidth={1.75} />
                    <span>{t(loc.outlets)}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-muted" strokeWidth={1.75} />
                    <span className="font-mono text-xs">{loc.phone}</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/order?mode=reserve"
                    className="rounded-full bg-zellige px-5 py-2.5 text-xs font-medium text-surface hover:bg-zellige-hover"
                  >
                    {t({ en: "Reserve a Study Spot", fr: "Réserver une place" })}
                  </Link>
                  <a
                    href={loc.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-subtle px-4 py-2.5 text-xs font-medium text-espresso hover:bg-cream"
                  >
                    <span>{t({ en: "OpenStreetMap", fr: "Itinéraire" })}</span>
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              </div>

              <div className="border-t border-subtle bg-cream">
                <iframe
                  title={`Map — ${loc.neighborhood}`}
                  src={loc.mapEmbedUrl}
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
