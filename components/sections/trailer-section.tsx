import { trailerContent } from "@/data/site-content";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

export function TrailerSection() {
  return (
    <SectionShell id="trailer">
      <Container>
        <div className="mb-8 space-y-2 md:space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Trailer
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {trailerContent.title}
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
            {trailerContent.description}
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-muted/40">
          <div className="relative aspect-video w-full bg-hero-gradient">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-md border border-white/10 bg-black/50 px-3 py-1 text-xs tracking-[0.2em] text-slate-200 uppercase">
                Trailer Coming Soon
              </span>
            </div>
          </div>
          <div className="border-t border-white/10 px-4 py-3 text-sm text-muted-foreground">
            Official trailer embed will be published here.
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
