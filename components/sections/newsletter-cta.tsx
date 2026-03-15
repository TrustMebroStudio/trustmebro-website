"use client";

import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import { newsletterContent } from "@/data/site-content";
import { Container } from "@/components/ui/container";
import {
  DiscordIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon
} from "@/components/ui/icons";
import { SectionShell } from "@/components/ui/section-shell";
import { isValidEmail, normalizeEmail } from "@/lib/validators";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  const socialLinks = [
    { href: siteConfig.social.youtube, label: "YouTube", icon: YouTubeIcon },
    { href: siteConfig.social.instagram, label: "Instagram", icon: InstagramIcon },
    { href: siteConfig.social.x, label: "X", icon: XIcon },
    { href: siteConfig.social.discord, label: "Discord", icon: DiscordIcon }
  ];

  const isLoading = status === "loading";
  const hasEmailError = status === "error" && message.toLowerCase().includes("email");
  const statusMessageId = "newsletter-status-message";
  const emailInputId = "newsletter-email-input";
  const statusClassName = useMemo(() => {
    if (status === "success") return "text-emerald-300";
    if (status === "error") return "text-rose-300";
    return "text-muted-foreground";
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = normalizeEmail(email);

    if (!isValidEmail(normalizedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("Submitting...");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: normalizedEmail })
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setMessage(result.message ?? "Subscription failed. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(result.message ?? "Thanks! You are now on the list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <SectionShell id="newsletter">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-black/40 p-6 md:p-10">
          <div className="mb-6 flex items-center gap-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Newsletter</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            {newsletterContent.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            {newsletterContent.description}
          </p>
          <form
            className="mt-6 flex max-w-xl flex-col gap-3 md:flex-row"
            onSubmit={handleSubmit}
            aria-describedby={statusMessageId}
          >
            <label htmlFor={emailInputId} className="sr-only">
              Email address
            </label>
            <input
              id={emailInputId}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={isLoading}
              aria-invalid={hasEmailError}
              aria-describedby={statusMessageId}
              className="h-11 flex-1 rounded-full border border-white/15 bg-black/40 px-4 text-sm outline-none ring-offset-2 transition-colors placeholder:text-muted-foreground focus:ring-2 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-70"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="h-11 rounded-full border border-white/15 bg-white/10 px-6 text-sm font-medium transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "Submitting..." : "Join the List"}
            </button>
          </form>
          <p
            id={statusMessageId}
            className={`mt-3 text-sm ${statusClassName}`}
            aria-live="polite"
          >
            {message || "Get launch updates and playtest announcements."}
          </p>
        </div>
      </Container>
    </SectionShell>
  );
}
