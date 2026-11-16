import React from "react";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-espresso"
      >
        <path
          d="M5 24V12C5 6.8 9 3.5 14 3.5C19 3.5 23 6.8 23 12V24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <ellipse
          cx="14"
          cy="15"
          rx="4.2"
          ry="5.8"
          transform="rotate(-14 14 15)"
          stroke="#C4704A"
          strokeWidth="1.5"
        />
        <path
          d="M13 10.2C14.8 13.2 13.2 16.8 15 19.8"
          stroke="#2B547E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-espresso">
          locas
        </span>
        <span className="font-mono text-[10px] font-medium tracking-[0.22em] text-muted uppercase">
          CAFFEE
        </span>
      </span>
    </span>
  );
}
