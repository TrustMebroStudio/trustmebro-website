import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import {
  DiscordIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon
} from "@/components/ui/icons";

export function SiteHeader() {
  const socialLinks = [
    { href: siteConfig.social.youtube, label: "YouTube", icon: YouTubeIcon },
    { href: siteConfig.social.instagram, label: "Instagram", icon: InstagramIcon },
    { href: siteConfig.social.x, label: "X", icon: XIcon },
    { href: siteConfig.social.discord, label: "Discord", icon: DiscordIcon }
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <Container className="flex h-24 items-center justify-between gap-3 md:h-28">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="-ml-10 inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:-ml-12"
        >
          <div className="relative h-12 w-64 overflow-hidden md:h-16 md:w-80">
            <Image
              src={siteConfig.branding.logo}
              alt={siteConfig.branding.logoAlt}
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="scale-[1.45] object-contain object-center"
            />
          </div>
        </Link>
        <nav className="flex items-center gap-1.5 md:gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-1.5 text-muted-foreground transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:p-2"
            >
              <Icon />
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
