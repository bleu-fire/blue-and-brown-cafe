"use client";

import React from "react";
import Link from "next/link";
import { Coffee, MapPin, ShoppingBag } from "lucide-react";
import { useCafe } from "@/context/CafeContext";
import { UI_COPY } from "@/data/cafeData";

export function MobileActionBar() {
  const { t, totalItems } = useCafe();

  return (
    <div className="fixed right-0 bottom-0 left-0 z-30 border-t border-subtle bg-surface/95 px-3 py-2 backdrop-blur-sm md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-2">
        <Link
          href="/menu"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-subtle bg-cream px-3 py-2 text-xs font-medium text-espresso"
        >
          <Coffee className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span>{t(UI_COPY.nav.menu)}</span>
        </Link>
        <Link
          href="/locations"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-subtle bg-cream px-3 py-2 text-xs font-medium text-espresso"
        >
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span>{t(UI_COPY.nav.locations)}</span>
        </Link>
        <Link
          href="/order"
          className="flex flex-[1.3] items-center justify-center gap-1.5 rounded-full bg-zellige px-3 py-2 text-xs font-medium text-surface"
        >
          <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span>
            {t(UI_COPY.nav.order)}
            {totalItems > 0 ? ` (${totalItems})` : ""}
          </span>
        </Link>
      </div>
    </div>
  );
}
