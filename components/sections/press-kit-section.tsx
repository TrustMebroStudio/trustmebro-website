import Link from "next/link";
import { siteConfig } from "@/config/site";
import { pressKitContent } from "@/data/site-content";
import { Container } from "@/components/ui/container";
import { PlaceholderImageBlock } from "@/components/ui/placeholder-image-block";
import { SectionShell } from "@/components/ui/section-shell";

export function PressKitSection() {
  return (
    <SectionShell id="press-kit">
      <Container>
        <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <PlaceholderImageBlock
            label={pressKitContent.visualLabel}
            src={pressKitContent.visualSrc}
            alt={pressKitContent.visualAlt}
            ratioClassName="aspect-[16/10]"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Media
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {pressKitContent.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-muted-foreground">
              {pressKitContent.description}
            </p>
            <Link
              href={siteConfig.links.pressKit}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Open Google Drive Press Kit
            </Link>
          </div>
        </article>
      </Container>
    </SectionShell>
  );
}
