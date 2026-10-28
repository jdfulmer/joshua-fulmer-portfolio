import Image from "next/image";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FeaturedVideo } from "@/components/links/FeaturedVideo";
import { LinkButton } from "@/components/links/LinkButton";
import { MarkerArrow } from "@/components/links/Doodles";
import {
  AVATAR_SRC,
  BYLINE,
  CADENCE,
  EPISODE_LABEL,
  LINKS,
  SHOW_NAME,
  SITE_URL,
  SKY_IMAGE,
  TAGLINE,
  TIKTOK_HANDLE,
} from "@/lib/links.config";
import { getLatestVideo } from "@/lib/youtube";
import { UtmCampaign } from "./UtmCampaign";

const TITLE = `${SHOW_NAME.hero} ${SHOW_NAME.aside} | Joshua Fulmer`;
const DESCRIPTION = `${TAGLINE}. Latest episode, YouTube, TikTok, Grid & Gutter consulting, and Send It Society rides.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // Reachable from bios only. Keep it out of search but let crawlers follow.
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/links` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/links`,
    siteName: "Joshua Fulmer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default async function LinksPage() {
  const video = await getLatestVideo();
  const enabled = LINKS.filter((link) => link.enabled);
  const featured = enabled.find((link) => link.featured);
  const rest = enabled.filter((link) => !link.featured);

  return (
    <>
      {/* Background */}
      <div className="lb-sky" aria-hidden="true">
        {SKY_IMAGE && (
          <Image
            src={SKY_IMAGE}
            alt=""
            fill
            priority
            quality={60}
            sizes="100vw"
            className="object-cover object-top"
          />
        )}
      </div>
      <div className="lb-overlay" aria-hidden="true" />

      <UtmCampaign />

      <div className="absolute right-4 top-4 z-20">
        <span className="lb-toggle inline-flex rounded-full p-0.5">
          <ThemeToggle />
        </span>
      </div>

      <div className="mx-auto flex w-full max-w-[480px] flex-1 flex-col px-4 pb-10 pt-16 sm:pt-20">
        {/* Header, styled after the channel banner */}
        <header className="relative mb-10">
          <div className="lb-label flex items-center justify-between px-1">
            <span>{BYLINE}</span>
            <span>{TIKTOK_HANDLE}</span>
          </div>

          <h1 className="relative mt-3 flex flex-col items-center">
            <span className="lb-display lb-hero relative z-0 text-[5.75rem] sm:text-[6.5rem]">
              {SHOW_NAME.hero}
            </span>
            {/* Photo overlaps the hero word, as in the banner */}
            <span className="lb-avatar absolute left-1/2 top-1/2 z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
              <Image
                src={AVATAR_SRC}
                alt="Joshua Fulmer"
                width={128}
                height={128}
                priority
                sizes="128px"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="lb-marker lb-aside absolute -bottom-5 right-3 z-20 -rotate-6 text-5xl sm:right-5 sm:text-6xl">
              {SHOW_NAME.aside}
            </span>
          </h1>

          <div className="lb-label mt-8 flex items-start justify-between gap-4 px-1">
            <span>{TAGLINE}</span>
            <span className="shrink-0 text-right">{EPISODE_LABEL}</span>
          </div>
          <p className="lb-label mt-2 px-1 text-center" style={{ color: "var(--lb-muted)" }}>
            {CADENCE}
          </p>
        </header>

        {/* Featured card */}
        {featured && (
          <section className="relative mb-5" aria-label="Latest video">
            <span
              className="lb-marker absolute -top-7 right-2 z-10 flex items-end gap-1 text-lg"
              aria-hidden="true"
              style={{ color: "var(--lb-text)" }}
            >
              watch this
              <MarkerArrow className="-mb-3 h-9 w-9 -rotate-12" />
            </span>
            <FeaturedVideo link={featured} video={video} />
          </section>
        )}

        {/* Links */}
        <nav aria-label="Links">
          <ul className="flex flex-col gap-3">
            {rest.map((link) => (
              <li key={link.id}>
                <LinkButton link={link} />
              </li>
            ))}
          </ul>
        </nav>

        <footer className="lb-label mt-10 text-center" style={{ color: "var(--lb-muted)" }}>
          <p>Joshua Fulmer &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}
