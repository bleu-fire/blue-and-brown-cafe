"use client";

import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="bg-[#1B3A57] text-[#F2EEE4] py-16 sm:py-20 px-6"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left copy */}
        <div className="lg:col-span-6">
          <h2
            id="newsletter-heading"
            className="font-serif text-3xl sm:text-4xl leading-[1.15] tracking-tight text-[#F2EEE4]"
          >
            Good things,{" "}
            <span className="italic text-[#C9A97A]">occasionally.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#F2EEE4]/80 max-w-md leading-relaxed">
            New bakes, seasonal pours, and the odd Sunday gathering. Never more
            than once a month.
          </p>
        </div>

        {/* Right form */}
        <div className="lg:col-span-6">
          {submitted ? (
            <div
              role="status"
              className="flex items-center gap-3 rounded-sm border border-[#F2EEE4]/25 bg-[#1B3A57]/60 px-5 py-4 text-sm text-[#F2EEE4]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A97A] text-[#1B3A57]">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span>
                You&apos;re on the list — we&apos;ll only write when something
                good is out of the oven.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-sm border border-[#F2EEE4]/25 bg-[#24507A]/40 px-4 py-3 text-sm text-[#F2EEE4] placeholder:text-[#F2EEE4]/55 focus:border-[#C9A97A] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-[#F2EEE4] px-6 py-3 text-sm font-medium text-[#1B3A57] hover:bg-[#E8E0D2] transition-colors cursor-pointer shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
