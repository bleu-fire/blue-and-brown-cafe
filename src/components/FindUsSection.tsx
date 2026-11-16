import { ArrowRight } from "lucide-react";

export function FindUsSection() {
  return (
    <section
      id="find-us"
      aria-labelledby="find-us-heading"
      className="bg-[#E8E0D2] py-20 sm:py-28 px-6"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column: details */}
        <div className="lg:col-span-6">
          <h2
            id="find-us-heading"
            className="font-serif text-3xl sm:text-4xl md:text-[44px] leading-[1.12] tracking-tight text-[#3B2A20] mb-10"
          >
            Find your way to{" "}
            <br className="hidden sm:block" />
            the good <span className="italic text-[#24507A]">stuff.</span>
          </h2>

          <div className="divide-y divide-[#3B2A20]/12 border-t border-b border-[#3B2A20]/12">
            <div className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 text-[11px] font-medium tracking-[0.2em] uppercase text-[#6E5B4F]">
                COME BY
              </span>
              <div className="sm:col-span-8 text-[15px] text-[#3B2A20] leading-relaxed">
                <p className="font-medium">214 Linden Street</p>
                <p className="text-[#6E5B4F]">Elm Park, Portland OR</p>
              </div>
            </div>

            <div className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 text-[11px] font-medium tracking-[0.2em] uppercase text-[#6E5B4F]">
                WHEN WE&apos;RE HERE
              </span>
              <div className="sm:col-span-8 text-[15px] text-[#3B2A20] leading-relaxed space-y-0.5">
                <p>Mon – Fri &nbsp; 7am – 4pm</p>
                <p>Sat – Sun &nbsp; 8am – 4pm</p>
              </div>
            </div>

            <div className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 text-[11px] font-medium tracking-[0.2em] uppercase text-[#6E5B4F]">
                SAY HELLO
              </span>
              <div className="sm:col-span-8 text-[15px] text-[#3B2A20] leading-relaxed space-y-0.5">
                <p>
                  <a
                    href="mailto:hello@blueandbrown.cafe"
                    className="hover:text-[#24507A] transition-colors underline-offset-4 hover:underline"
                  >
                    hello@blueandbrown.cafe
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+15032180427"
                    className="text-[#6E5B4F] hover:text-[#24507A] transition-colors underline-offset-4 hover:underline"
                  >
                    (503) 218-0427
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://maps.google.com/?q=214+Linden+Street+Portland+OR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-sm bg-[#24507A] px-6 py-3.5 text-sm font-medium text-[#F2EEE4] hover:bg-[#1B3A57] transition-colors"
            >
              Get directions
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right column: uploaded map image with Blue & Brown Café pin */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl border border-[#3B2A20]/12 bg-[#F2EEE4] p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#EBE4D6]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/blue-brown/find-us-map.jpg"
                alt="Map showing Blue & Brown Café location"
                className="h-full w-full object-cover"
              />

              {/* Blue map pin + crisp white label pill */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5">
                <div className="rounded-full bg-white px-3.5 py-1.5 shadow-md border border-[#3B2A20]/10 whitespace-nowrap">
                  <span className="text-xs font-medium text-[#1B3A57] tracking-tight">
                    Blue &amp; Brown Café
                  </span>
                </div>
                <svg
                  width="30"
                  height="38"
                  viewBox="0 0 28 37"
                  fill="none"
                  aria-hidden="true"
                  className="drop-shadow-md"
                >
                  <path
                    d="M14 0C6.268 0 0 6.268 0 14C0 24.5 14 37 14 37C14 37 28 24.5 28 14C28 6.268 21.732 0 14 0Z"
                    fill="#24507A"
                  />
                  <circle cx="14" cy="14" r="4.8" fill="#F2EEE4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindUsSection;
