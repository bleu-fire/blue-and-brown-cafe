import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { MenuSection } from "@/components/MenuSection";
import { StorySection } from "@/components/StorySection";
import { RitualsSection } from "@/components/RitualsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FindUsSection } from "@/components/FindUsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EEE4] text-[#3B2A20]">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MarqueeStrip />
        <MenuSection />
        <StorySection />
        <RitualsSection />
        <TestimonialSection />
        <FindUsSection />
        <NewsletterSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
