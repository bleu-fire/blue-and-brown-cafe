import React from "react";

const PHRASES = [
  "Fresh from the oven",
  "A good cup, made slowly",
  "Your usual, or something new",
  "There's room for one more",
];

function MarqueeTrack() {
  return (
    <div className="flex items-center shrink-0">
      {PHRASES.map((phrase) => (
        <span key={phrase} className="inline-flex items-center shrink-0">
          <span className="font-serif italic text-base sm:text-lg tracking-wide text-[#F2EEE4] px-6 sm:px-8">
            {phrase}
          </span>
          <span
            className="text-[#C9A97A] text-sm leading-none select-none"
            aria-hidden="true"
          >
            •
          </span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <div
      className="w-full bg-[#1B3A57] text-[#F2EEE4] overflow-hidden py-3.5"
      aria-label="Café highlights"
    >
      <div className="animate-marquee will-change-transform">
        <MarqueeTrack />
        <div aria-hidden="true" className="flex items-center shrink-0">
          <MarqueeTrack />
        </div>
      </div>
    </div>
  );
}

export default MarqueeStrip;
