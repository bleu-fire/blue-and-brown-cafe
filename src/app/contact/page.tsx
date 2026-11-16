"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useCafe } from "@/context/CafeContext";
import { LOCATIONS } from "@/data/cafeData";

export default function ContactPage() {
  const { t } = useCafe();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("study-group");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message.trim()) {
      setError(
        t({
          en: "Please fill in your name, a valid email, and a short message.",
          fr: "Veuillez renseigner votre nom, un e-mail valide et votre message.",
        })
      );
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <div className="bg-cream text-espresso">
      <section className="paper-grain border-b border-subtle py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">
            {t({ en: "GET IN TOUCH", fr: "NOUS CONTACTER" })}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
            {t({ en: "Questions, Study Groups & Wholesale", fr: "Questions, Groupes d'Étude & Pros" })}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            {t({
              en: "Planning a thesis workshop, remote team sprint, or bean order in Casablanca? Write to our bar team.",
              fr: "Un atelier de révision, un sprint d'équipe ou une commande de grains à Casablanca ? Écrivez-nous.",
            })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-2xl border border-subtle bg-surface p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mint text-espresso">
                  <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h2 className="mt-4 font-display text-2xl font-medium text-espresso">
                  {t({ en: "Message Received", fr: "Message bien reçu" })}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {t({
                    en: `Thank you, ${name}. Our Casablanca team will reply to ${email} within 24 hours.`,
                    fr: `Merci ${name}. Notre équipe à Casablanca vous répondra à ${email} sous 24h.`,
                  })}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="mt-6 rounded-full border border-subtle px-5 py-2 text-xs font-medium text-espresso hover:bg-cream"
                >
                  {t({ en: "Send Another Note", fr: "Envoyer un autre message" })}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-2xl border border-subtle bg-surface p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-espresso">
                      {t({ en: "Full Name", fr: "Nom complet" })}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                      placeholder="Amine El Fassi"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-espresso">
                      {t({ en: "Email Address", fr: "Adresse e-mail" })}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                      placeholder="amine@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-medium text-espresso">
                    {t({ en: "Topic", fr: "Sujet" })}
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                  >
                    <option value="study-group">
                      {t({ en: "Group Study / Workshop Table", fr: "Table d'étude en groupe / Atelier" })}
                    </option>
                    <option value="wholesale">
                      {t({ en: "Office & Wholesale Beans", fr: "Grains pour bureaux & professionnels" })}
                    </option>
                    <option value="feedback">
                      {t({ en: "General Question", fr: "Question générale" })}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-espresso">
                    {t({ en: "Message", fr: "Message" })}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-subtle bg-cream/40 px-3.5 py-2.5 text-sm text-espresso"
                    placeholder={t({
                      en: "Tell us which neighborhood (Maarif or Gauthier) and how we can help...",
                      fr: "Précisez le quartier (Maarif ou Gauthier) et votre besoin...",
                    })}
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-terracotta">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="rounded-full bg-zellige px-6 py-3 text-sm font-medium text-surface transition-colors hover:bg-zellige-hover"
                >
                  {t({ en: "Send Message", fr: "Envoyer le message" })}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-2xl border border-subtle bg-surface p-6">
              <h2 className="font-display text-xl font-medium text-espresso">
                {t({ en: "Direct Channels", fr: "Canaux Directs" })}
              </h2>
              <p className="mt-3 flex items-center gap-2.5 text-sm text-muted">
                <Mail className="h-4 w-4 text-zellige" strokeWidth={1.75} />
                <span>bonjour@locascaffee.ma</span>
              </p>
              <div className="mt-5 space-y-4 border-t border-subtle pt-4">
                {LOCATIONS.map((loc) => (
                  <div key={loc.id} className="text-sm">
                    <p className="font-semibold text-espresso">{t(loc.name)}</p>
                    <p className="mt-1 flex items-center gap-2 text-muted">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-terracotta" strokeWidth={1.75} />
                      <span>{loc.address}</span>
                    </p>
                    <p className="mt-1 flex items-center gap-2 font-mono text-xs text-muted">
                      <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                      <span>{loc.phone}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
