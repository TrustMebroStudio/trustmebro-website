import Link from "next/link";
import { heroContent } from "@/data/site-content";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { PlaceholderImageBlock } from "@/components/ui/placeholder-image-block";
import { SectionShell } from "@/components/ui/section-shell";

export function HeroSection() {
  return (
    <SectionShell className="pt-16 md:pt-24">
      <Container>
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-5 md:space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {heroContent.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-7xl">
              {heroContent.title}
            </h1>
            <p className="max-w-3xl text-lg text-slate-200 md:text-2xl">
              {heroContent.tagline}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              {heroContent.subtitle}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              {heroContent.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href={siteConfig.links.steam}
                className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Wishlist on Steam
              </Link>
              <Link
                href={siteConfig.links.trailer}
                className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Watch Trailer
              </Link>
            </div>
          </div>
          <PlaceholderImageBlock
            label={heroContent.keyArt.label}
            src={heroContent.keyArt.src}
            alt={heroContent.keyArt.alt}
            className="shadow-cinematic"
            ratioClassName="aspect-[16/9] md:aspect-[16/10]"
          />
        </div>
      </Container>
    </SectionShell>
  );
}
