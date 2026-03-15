import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy for newsletter email collection on ${siteConfig.name}.`,
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `Privacy policy for newsletter email collection on ${siteConfig.name}.`,
    url: `https://${siteConfig.domain}/privacy`,
    images: [{ url: siteConfig.seo.ogImage, alt: siteConfig.seo.ogImageAlt }]
  }
};

export default function PrivacyPage() {
  return (
    <SectionShell className="pt-16 md:pt-20">
      <Container>
        <div className="space-y-2 md:space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Privacy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
            This policy explains how Trust Me Bro Studio handles newsletter
            subscriptions submitted through this website.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <article className="rounded-2xl border border-white/10 bg-muted/40 p-6 md:p-7">
            <h2 className="text-xl font-medium">Collected information</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We collect the email address you submit in the newsletter form.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-muted/40 p-6 md:p-7">
            <h2 className="text-xl font-medium">Purpose of collection</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We use your email to send game updates, reveal announcements, playtest
              notices, and launch-related news for Trust Me Bro.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-muted/40 p-6 md:p-7">
            <h2 className="text-xl font-medium">How to request deletion</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              To delete your newsletter email record, send a request from the subscribed
              address to{" "}
              <a
                href={`mailto:${siteConfig.emails.public.support}`}
                className="text-slate-200 underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {siteConfig.emails.public.support}
              </a>
              . We will process your request as quickly as possible.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-muted/40 p-6 md:p-7">
            <h2 className="text-xl font-medium">Contact email</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              For any privacy questions, contact{" "}
              <a
                href={`mailto:${siteConfig.emails.public.contact}`}
                className="text-slate-200 underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {siteConfig.emails.public.contact}
              </a>
              .
            </p>
          </article>
        </div>
      </Container>
    </SectionShell>
  );
}
