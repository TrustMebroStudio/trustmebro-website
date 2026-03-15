import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Contact the ${siteConfig.name} team for inquiries and support.`,
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Contact the ${siteConfig.name} team for inquiries and support.`,
    url: `https://${siteConfig.domain}/contact`,
    images: [{ url: siteConfig.seo.ogImage, alt: siteConfig.seo.ogImageAlt }]
  }
};

const contactCards = [
  {
    title: "General inquiries",
    description:
      "For business, press, and general questions about Trust Me Bro.",
    email: siteConfig.emails.public.contact
  },
  {
    title: "Support / bug reports",
    description: "For technical support, gameplay issues, and bug reports.",
    email: siteConfig.emails.public.support
  }
];

export default function ContactPage() {
  return (
    <SectionShell className="pt-16 md:pt-20">
      <Container>
        <div className="space-y-2 md:space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Get in touch
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            Reach out to the Trust Me Bro Studio team using the channel that fits your
            request.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/10 bg-muted/40 p-6 md:p-7"
            >
              <h2 className="text-xl font-medium">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {card.description}
              </p>
              <a
                href={`mailto:${card.email}`}
                className="mt-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {card.email}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
