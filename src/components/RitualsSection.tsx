import Image from "next/image";

interface RitualCard {
  number: string;
  image: string;
  alt: string;
  title: string;
  caption: string;
}

const RITUAL_CARDS: RitualCard[] = [
  {
    number: "01",
    image: "/images/blue-brown/ritual-beans.png",
    alt: "Freshly roasted whole coffee beans spilling from a kraft paper bag onto a rustic wooden table",
    title: "Beans worth waking for",
    caption: "Small-lot roasts, rested and dialed in fresh every morning.",
  },
  {
    number: "02",
    image: "/images/blue-brown/ritual-pastry.png",
    alt: "Assortment of freshly baked golden croissants and cardamom knots on a wooden bakery table",
    title: "Something from the oven",
    caption: "Still warm on the cooling rack when we unlock the front door.",
  },
  {
    number: "03",
    image: "/images/blue-brown/ritual-seat.png",
    alt: "Sunlit café corner with a small wooden bistro table, armchair, and ceramic coffee cup by a tall window",
    title: "Your seat is waiting",
    caption: "A sunlit corner, a sturdy table, and nowhere else you have to be.",
  },
];

export function RitualsSection() {
  return (
    <section
      id="rituals"
      className="bg-[#F2EEE4] text-[#3B2A20] py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-12 md:mb-14">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight leading-[1.08] text-[#3B2A20]">
              Little rituals. Lovely{" "}
              <span className="italic text-[#24507A]">details.</span>
            </h2>
          </div>
        </div>

        {/* Cards: horizontal scroll on mobile, 3-column grid on md+ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-7">
          {RITUAL_CARDS.map((card) => (
            <article
              key={card.number}
              className="snap-start min-w-[78vw] sm:min-w-[46vw] md:min-w-0 group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#E8E0D2] transition-transform duration-500 ease-out hover:-translate-y-1.5"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 78vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Dark bottom gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1B3A57]/90 via-[#1B3A57]/25 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <span className="text-xs font-medium tracking-[0.2em] text-[#C9A97A]">
                  {card.number}
                </span>
                <h3 className="mt-1.5 font-serif text-2xl font-normal text-[#F2EEE4] leading-snug">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#F2EEE4]/80 leading-relaxed">
                  {card.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RitualsSection;
