import { FeatureSection } from "@/components/sections/feature-section";
import { HeroSection } from "@/components/sections/hero-section";
import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { PlatformSection } from "@/components/sections/platform-section";
import { PressKitSection } from "@/components/sections/press-kit-section";
import { TrailerSection } from "@/components/sections/trailer-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsletterCta id="early-newsletter" className="py-8 md:py-10" />
      <FeatureSection />
      <TrailerSection />
      <PlatformSection />
      <PressKitSection />
      <NewsletterCta />
    </>
  );
}
