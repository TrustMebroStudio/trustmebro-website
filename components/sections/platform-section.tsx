import Link from "next/link";
import { siteConfig } from "@/config/site";
import { platformContent } from "@/data/site-content";
import { Container } from "@/components/ui/container";
import { SteamIcon } from "@/components/ui/icons";
import { SectionShell } from "@/components/ui/section-shell";

export function PlatformSection() {
  const canShowSteamLink = /^https?:\/\//.test(siteConfig.links.steam);

  return (
    <SectionShell id="platforms">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-muted/40 px-6 py-12 text-center md:px-10">
          <SteamIcon className="mx-auto h-14 w-14 text-slate-200" />
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">
            {platformContent.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {platformContent.description}
          </p>
          {canShowSteamLink ? (
            <Link
              href={siteConfig.links.steam}
              className="mt-6 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Open Steam Page
            </Link>
          ) : null}
        </div>
      </Container>
    </SectionShell>
  );
}
