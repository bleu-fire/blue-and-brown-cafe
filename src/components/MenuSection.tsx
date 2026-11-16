"use client";

import { useState } from "react";

type MenuCategory = "Coffee bar" | "From the oven" | "All day";

interface MenuItem {
  name: string;
  tag?: string;
  description: string;
  price: string;
}

const MENU_CATEGORIES: MenuCategory[] = [
  "Coffee bar",
  "From the oven",
  "All day",
];

const MENU_ITEMS: Record<MenuCategory, MenuItem[]> = {
  "Coffee bar": [
    {
      name: "House espresso",
      tag: "House favorite",
      description:
        "Our house blend — cocoa, toasted almond, a little bright at the finish.",
      price: "$3.50",
    },
    {
      name: "Flat white",
      description:
        "Velvety milk over a double ristretto. Small, round and serious.",
      price: "$4.75",
    },
    {
      name: "Honey oat latte",
      tag: "A little sweet",
      description:
        "Wildflower honey, oat milk and a whisper of cinnamon on top.",
      price: "$5.50",
    },
    {
      name: "Slow morning pour-over",
      description:
        "Single origin, brewed by hand. Ask what's on the bar today.",
      price: "$5.00",
    },
  ],
  "From the oven": [
    {
      name: "Cultured butter croissant",
      tag: "House favorite",
      description:
        "Twenty-seven flaky layers, laminated by hand and baked before sunrise.",
      price: "$4.25",
    },
    {
      name: "Cardamom morning knot",
      tag: "A little sweet",
      description:
        "Twisted brioche dough with freshly ground green cardamom and pearl sugar.",
      price: "$4.75",
    },
    {
      name: "Brown butter almond bostock",
      description:
        "Toasted brioche soaked in orange blossom syrup with warm frangipane.",
      price: "$5.25",
    },
    {
      name: "Seasonal fruit galette",
      description:
        "Crisp rye pastry crust folded around orchard fruit and lemon thyme.",
      price: "$5.50",
    },
  ],
  "All day": [
    {
      name: "Soft-boiled egg & sourdough",
      tag: "House favorite",
      description:
        "Thick country toast, cultured butter, flaky sea salt and fresh chives.",
      price: "$8.50",
    },
    {
      name: "Whipped ricotta tartine",
      tag: "A little sweet",
      description:
        "Roasted figs, wildflower honey and cracked black pepper on warm levain.",
      price: "$10.50",
    },
    {
      name: "Warm farro & herb bowl",
      description:
        "Charred seasonal greens, preserved lemon vinaigrette and toasted hazelnuts.",
      price: "$12.50",
    },
    {
      name: "Aged cheddar & apple melt",
      description:
        "Griddled sourdough with sharp white cheddar, crisp apple and whole-grain mustard.",
      price: "$11.50",
    },
  ],
};

export interface MenuSectionProps {
  showHeader?: boolean;
}

export function MenuSection({ showHeader = true }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState<MenuCategory>("Coffee bar");
  const [showAll, setShowAll] = useState(false);
  const items = MENU_ITEMS[activeTab];

  return (
    <section
      id="menu"
      className="bg-[#E8E0D2] text-[#3B2A20] py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column */}
        {showHeader && (
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight leading-[1.08] text-[#3B2A20]">
              Made for the{" "}
              <span className="italic text-[#24507A]">moment.</span>
            </h2>

            <p className="mt-6 text-[#6E5B4F] text-base leading-relaxed max-w-md">
              A short menu, done with care. Beans roasted a few streets over,
              pastry laminated by hand before sunrise, and nothing rushed out
              the door.
            </p>
          </div>
        )}

        {/* Right column */}
        <div className={showHeader ? "lg:col-span-7" : "lg:col-span-12"}>
          {/* Interactive tabs */}
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex flex-wrap gap-6 sm:gap-8 border-b border-[#3B2A20]/12"
          >
            {MENU_CATEGORIES.map((category) => {
              const isActive = !showAll && activeTab === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => {
                    setShowAll(false);
                    setActiveTab(category);
                  }}
                  className={`-mb-px pb-3.5 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                    isActive
                      ? "border-[#24507A] text-[#3B2A20]"
                      : "border-transparent text-[#6E5B4F] hover:text-[#3B2A20]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Menu list */}
          {showAll ? (
            <div className="space-y-10 pt-8">
              {MENU_CATEGORIES.map((category) => (
                <div key={category}>
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#24507A] pb-3 border-b border-[#3B2A20]/12">
                    {category}
                  </h3>
                  <ul className="divide-y divide-[#3B2A20]/12 border-b border-[#3B2A20]/12">
                    {MENU_ITEMS[category].map((item) => (
                      <li
                        key={`${category}-${item.name}`}
                        className="py-5 sm:py-6 px-2 -mx-2 rounded-lg flex items-start justify-between gap-6 transition-colors duration-200 hover:bg-[#3B2A20]/[0.03]"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h4 className="font-serif text-xl sm:text-[22px] font-normal text-[#3B2A20] leading-snug">
                              {item.name}
                            </h4>
                            {item.tag && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#F2EEE4] border border-[#3B2A20]/12 text-[10px] font-medium uppercase tracking-[0.14em] text-[#6E5B4F]">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 text-sm text-[#6E5B4F] leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <span className="font-sans text-base font-medium text-[#24507A] tabular-nums shrink-0 pt-1">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul
              role="tabpanel"
              className="divide-y divide-[#3B2A20]/12 border-b border-[#3B2A20]/12"
            >
              {items.map((item) => (
                <li
                  key={item.name}
                  className="py-5 sm:py-6 px-2 -mx-2 rounded-lg flex items-start justify-between gap-6 transition-colors duration-200 hover:bg-[#3B2A20]/[0.03]"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#3B2A20] leading-snug">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#F2EEE4] border border-[#3B2A20]/12 text-[10px] font-medium uppercase tracking-[0.14em] text-[#6E5B4F]">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm text-[#6E5B4F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <span className="font-sans text-base font-medium text-[#24507A] tabular-nums shrink-0 pt-1">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="inline-flex items-center text-sm font-medium text-[#24507A] hover:text-[#1B3A57] transition-colors cursor-pointer"
            >
              <span>{showAll ? "Back to tabs" : "See the full menu"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
