import Image from "next/image";

export function StorySection() {
  return (
    <section
      id="story"
      className="bg-[#1B3A57] text-[#F2EEE4] py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column: rounded photo + tilted tan paper-note tag */}
        <div className="lg:col-span-6 relative pb-5 pr-2 sm:pr-4">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] w-full rounded-2xl overflow-hidden bg-[#24507A]/40">
            <Image
              src="/images/blue-brown/story-interior.png"
              alt="Barista pouring steamed milk at the warm wooden espresso bar inside Blue & Brown Café"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-0 sm:right-2 bg-[#C9A97A] text-[#3B2A20] px-5 py-3 rounded-sm shadow-lg rotate-[2.5deg]">
            <span className="font-serif italic text-base sm:text-lg tracking-tight">
              A place to land
            </span>
          </div>
        </div>

        {/* Right column: editorial story copy */}
        <div className="lg:col-span-6">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight leading-[1.08] text-[#F2EEE4]">
            A good café is a{" "}
            <span className="italic text-[#C9A97A]">feeling.</span>
          </h2>

          <div className="mt-6 space-y-5 text-[#F2EEE4]/85 text-base sm:text-[17px] leading-relaxed max-w-xl">
            <p>
              We opened Blue &amp; Brown with a simple wish: a corner room where
              the morning light hits the wood counter just right, the espresso
              is dialed in with care, and nobody ever feels hurried out of
              their seat.
            </p>
            <p>
              Whether you&apos;re stopping in for a quick cortado before the
              train, sharing a warm pastry with a neighbor, or lingering over a
              book on a rainy afternoon, there&apos;s always a quiet table
              waiting for you here.
            </p>
          </div>

          <p className="mt-8 font-serif italic text-xl text-[#C9A97A]">
            Come as you are.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
