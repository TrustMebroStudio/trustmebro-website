import { featureContent } from "@/data/site-content";
import { Container } from "@/components/ui/container";
import { PlaceholderImageBlock } from "@/components/ui/placeholder-image-block";
import { SectionShell } from "@/components/ui/section-shell";

export function FeatureSection() {
  return (
    <SectionShell id="features">
      <Container>
        <div className="mb-10 space-y-2 md:space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Game Highlights
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Built for teamwork, blame, and comeback stories
          </h2>
        </div>
        <div className="space-y-16 md:space-y-24">
          {featureContent.map((feature, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={feature.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div className={isReversed ? "md:order-2" : ""}>
                  <PlaceholderImageBlock
                    label={feature.imageLabel}
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    ratioClassName={feature.imageRatioClassName ?? "aspect-[16/10]"}
                    imageClassName={feature.imageClassName}
                  />
                </div>
                <div className={isReversed ? "md:order-1" : ""}>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground md:mt-4">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}
