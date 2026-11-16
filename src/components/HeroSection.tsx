import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full bg-[#F2EEE4] pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <h1 className="font-serif text-[1.75rem] sm:text-4xl lg:text-[2.55rem] xl:text-[2.95rem] sm:whitespace-nowrap font-normal leading-[1.08] tracking-[-0.02em] text-[#3B2A20]">
              Make a little{" "}
              <em className="italic text-[#24507A] font-normal">room</em> for
              slow.
            </h1>

            <p className="mt-6 font-sans text-base sm:text-[17px] leading-relaxed text-[#6E5B4F] max-w-md">
              Honest coffee, warm bakes, and a chair by the window. Stay for one
              cup or the whole afternoon — we&apos;ll keep the kettle on.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-[#24507A] hover:bg-[#1B3A57] text-[#F2EEE4] font-sans text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
              >
                <span>See what&apos;s brewing</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#story"
                className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#3B2A20] hover:text-[#24507A] transition-colors underline underline-offset-4 decoration-[#3B2A20]/25 hover:decoration-[#24507A]"
              >
                <span>Meet your café</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-4">
            <div className="relative w-full max-w-[460px] aspect-[4/5]">
              {/* Photo Frame */}
              <div className="relative w-full h-full overflow-hidden rounded-tr-[88px] md:rounded-tr-[120px] rounded-bl-2xl rounded-tl-xl rounded-br-xl bg-[#E8E0D2] shadow-sm">
                <Image
                  src="/images/blue-brown/hero-latte.png"
                  alt="A speckled ceramic cup of latte with rosetta latte art beside a flaky golden croissant on a warm wooden café table"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
