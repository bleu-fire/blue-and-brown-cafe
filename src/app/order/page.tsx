"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Minus, Plus, CheckCircle2, ShoppingBag, Calendar } from "lucide-react";
import { useCafe } from "@/context/CafeContext";
import { LOCATIONS, MENU_ITEMS } from "@/data/cafeData";

function OrderContent() {
  const { t, cart, addItem, updateQuantity, clearCart, totalMad } = useCafe();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"pickup" | "reserve">(() =>
    searchParams.get("mode") === "reserve" ? "reserve" : "pickup"
  );

  const [locationId, setLocationId] = useState(LOCATIONS[0].id);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [pickupTime, setPickupTime] = useState("In 15 min");
  const [zone, setZone] = useState("quiet-mezzanine");
  const [seats, setSeats] = useState("1");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState<string | null>(null);

  function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    if (!customerName.trim() || !customerEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      setError(
        t({
          en: "Please enter your name and a valid email address.",
          fr: "Veuillez saisir votre nom et une adresse e-mail valide.",
        })
      );
      return;
    }
    if (mode === "pickup" && cart.length === 0) {
      setError(
        t({
          en: "Add at least one drink or pastry before placing a pickup order.",
          fr: "Ajoutez au moins une boisson ou pâtisserie avant de commander.",
        })
      );
      return;
    }
    setError("");
    const loc = LOCATIONS.find((l) => l.id === locationId) ?? LOCATIONS[0];
    if (mode === "pickup") {
      setConfirmed(
        t({
          en: `Order confirmed for ${customerName} (${totalMad} MAD) at ${loc.neighborhood} · Ready ${pickupTime}.`,
          fr: `Commande confirmée pour ${customerName} (${totalMad} MAD) à ${loc.neighborhood} · Prête (${pickupTime}).`,
        })
      );
      clearCart();
    } else {
      setConfirmed(
        t({
          en: `Study spot reserved for ${customerName} (${seats} seat(s), ${zone}) at ${loc.neighborhood}.`,
          fr: `Place réservée pour ${customerName} (${seats} place(s), ${zone}) à ${loc.neighborhood}.`,
        })
      );
    }
  }

  return (
    <div className="bg-cream text-espresso">
      <section className="paper-grain border-b border-subtle py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">
            {t({ en: "ORDER AHEAD & STUDY SEATS", fr: "COMMANDE & RÉSERVATION" })}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
            {t({ en: "Skip the Queue. Claim Your Desk.", fr: "Gagnez du Temps. Réservez votre Place." })}
          </h1>

          <div className="mt-6 inline-flex rounded-full border border-subtle bg-surface p-1">
            <button
              type="button"
              onClick={() => {
                setMode("pickup");
                setConfirmed(null);
              }}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-colors ${
                mode === "pickup" ? "bg-zellige text-surface" : "text-espresso hover:bg-cream"
              }`}
            >
              <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} />
              <span>{t({ en: "Counter Pickup", fr: "À Emporter" })}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("reserve");
                setConfirmed(null);
              }}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-colors ${
                mode === "reserve" ? "bg-zellige text-surface" : "text-espresso hover:bg-cream"
              }`}
            >
              <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
              <span>{t({ en: "Reserve Study Table", fr: "Réserver une Table" })}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <div className="rounded-2xl border border-subtle bg-surface p-6">
              <h2 className="font-display text-2xl font-medium text-espresso">
                {t({ en: "Your Selection", fr: "Votre Sélection" })}
              </h2>

              {cart.length === 0 ? (
                <p className="mt-3 text-sm text-muted">
                  {t({
                    en: "Your tray is empty. Pick a drink below to start.",
                    fr: "Votre plateau est vide. Choisissez une boisson ci-dessous.",
                  })}
                </p>
              ) : (
                <ul className="mt-4 divide-y divide-subtle">
                  {cart.map(({ item, quantity }) => (
                    <li key={item.id} className="flex items-center justify-between gap-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-espresso">{t(item.name)}</p>
                        <p className="font-mono text-xs text-muted">
                          {item.priceMad} MAD × {quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={`Decrease ${t(item.name)}`}
                          onClick={() => updateQuantity(item.id, -1)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-subtle bg-cream text-espresso"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-5 text-center font-mono text-xs">{quantity}</span>
                        <button
                          type="button"
                          aria-label={`Increase ${t(item.name)}`}
                          onClick={() => updateQuantity(item.id, 1)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-subtle bg-cream text-espresso"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex items-center justify-between border-t border-subtle pt-4">
                <span className="text-sm font-medium text-muted">Total</span>
                <span className="font-mono text-lg font-medium text-espresso tabular-nums">
                  {totalMad} MAD
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-subtle bg-surface p-6">
              <h3 className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">
                {t({ en: "QUICK ADD FAVORITES", fr: "AJOUT RAPIDE" })}
              </h3>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {MENU_ITEMS.slice(0, 6).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => addItem(item)}
                    className="flex items-center justify-between rounded-xl border border-subtle bg-cream/50 px-3.5 py-2.5 text-left text-xs transition-colors hover:border-zellige"
                  >
                    <span className="font-medium text-espresso">{t(item.name)}</span>
                    <span className="font-mono text-zellige">+{item.priceMad} MAD</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            {confirmed ? (
              <div className="rounded-2xl border border-subtle bg-surface p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mint text-espresso">
                  <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h2 className="mt-4 font-display text-2xl font-medium text-espresso">
                  {t({ en: "All Set!", fr: "C'est confirmé !" })}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{confirmed}</p>
                <button
                  type="button"
                  onClick={() => setConfirmed(null)}
                  className="mt-6 rounded-full bg-zellige px-5 py-2.5 text-xs font-medium text-surface hover:bg-zellige-hover"
                >
                  {t({ en: "New Request", fr: "Nouvelle demande" })}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleCheckout}
                noValidate
                className="space-y-4 rounded-2xl border border-subtle bg-surface p-6 sm:p-8"
              >
                <h2 className="font-display text-2xl font-medium text-espresso">
                  {mode === "pickup"
                    ? t({ en: "Pickup Details", fr: "Détails du Retrait" })
                    : t({ en: "Study Spot Reservation", fr: "Réservation de Place" })}
                </h2>

                <div>
                  <label htmlFor="order-location" className="block text-xs font-medium text-espresso">
                    {t({ en: "Casablanca Bar", fr: "Adresse à Casablanca" })}
                  </label>
                  <select
                    id="order-location"
                    value={locationId}
                    onChange={(e) => setLocationId(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {t(loc.name)}
                      </option>
                    ))}
                  </select>
                </div>

                {mode === "pickup" ? (
                  <div>
                    <label htmlFor="pickup-time" className="block text-xs font-medium text-espresso">
                      {t({ en: "Pickup Window", fr: "Heure de retrait" })}
                    </label>
                    <select
                      id="pickup-time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                    >
                      <option value="In 15 min">{t({ en: "In 15 minutes", fr: "Dans 15 minutes" })}</option>
                      <option value="In 30 min">{t({ en: "In 30 minutes", fr: "Dans 30 minutes" })}</option>
                      <option value="In 1 hour">{t({ en: "In 1 hour", fr: "Dans 1 heure" })}</option>
                    </select>
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="reserve-zone" className="block text-xs font-medium text-espresso">
                        {t({ en: "Study Zone", fr: "Zone" })}
                      </label>
                      <select
                        id="reserve-zone"
                        value={zone}
                        onChange={(e) => setZone(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                      >
                        <option value="quiet-mezzanine">
                          {t({ en: "Quiet Mezzanine", fr: "Mezzanine Silencieuse" })}
                        </option>
                        <option value="communal-cedar">
                          {t({ en: "Communal Cedar Table", fr: "Table Commune en Cèdre" })}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="reserve-seats" className="block text-xs font-medium text-espresso">
                        {t({ en: "Seats", fr: "Places" })}
                      </label>
                      <select
                        id="reserve-seats"
                        value={seats}
                        onChange={(e) => setSeats(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="customer-name" className="block text-xs font-medium text-espresso">
                      {t({ en: "Your Name", fr: "Votre nom" })}
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Kenza T."
                      className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                    />
                  </div>
                  <div>
                    <label htmlFor="customer-email" className="block text-xs font-medium text-espresso">
                      {t({ en: "Email", fr: "E-mail" })}
                    </label>
                    <input
                      id="customer-email"
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="kenza@example.com"
                      className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                    />
                  </div>
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-terracotta">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-full bg-zellige px-6 py-3 text-sm font-medium text-surface transition-colors hover:bg-zellige-hover"
                >
                  {mode === "pickup"
                    ? `${t({ en: "Confirm Pickup", fr: "Confirmer la commande" })} · ${totalMad} MAD`
                    : t({ en: "Confirm Study Seat", fr: "Confirmer la réservation" })}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <OrderContent />
    </Suspense>
  );
}
