"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Testimonial {
  quote: string;
  caption: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The kind of place where they remember your coffee, but never mind if you change your mind.",
    caption: "PRIYA & SAM · SATURDAY MORNINGS",
  },
  {
    quote:
      "I came in to answer two emails and stayed for a second cardamom knot and an hour of quiet.",
    caption: "MARCUS · TUESDAY REGULAR",
  },
  {
    quote:
      "Warm light, good music at half-volume, and the best oat cortado within twenty blocks.",
    caption: "ELENA · ELM PARK NEIGHBOR",
  },
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      aria-label="Neighborhood voices"
      className="bg-[#D6E1E3] py-20 sm:py-28 px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span
          aria-hidden="true"
          className="block font-serif text-5xl sm:text-6xl leading-none text-[#C9A97A] select-none mb-4"
        >
          &ldquo;
        </span>

        <div className="min-h-[150px] sm:min-h-[140px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.figure
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-[34px] leading-[1.3] text-[#3B2A20] tracking-tight">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#6E5B4F]">
                {current.caption}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Choose a neighbor quote"
        >
          {TESTIMONIALS.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.caption}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show quote ${idx + 1} of ${TESTIMONIALS.length}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-6 bg-[#1B3A57]"
                    : "w-2 bg-[#3B2A20]/25 hover:bg-[#3B2A20]/45"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
