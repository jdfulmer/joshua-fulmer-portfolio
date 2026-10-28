import Image from "next/image";
import type { Metadata } from "next";
import { FeaturedVideo } from "@/components/links/FeaturedVideo";
import { LinkButton } from "@/components/links/LinkButton";
import {
  CADENCE,
  HERO_CARD_OFFSET,
  HERO_IMAGE,
  LINKS,
  SHOW_NAME,
  SITE_URL,
  TAGLINE,
} from "@/lib/links.config";
import { getLatestVideo } from "@/lib/youtube";
import { UtmCampaign } from "./UtmCampaign";

const TITLE = `${SHOW_NAME.hero} ${SHOW_NAME.aside} | Joshua Fulmer`;
const DESCRIPTION = `${TAGLINE}. ${CADENCE}. YouTube, TikTok, Grid & Gutter consulting, and Send It Society rides.`;

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
      <div className="lb-sky" aria-hidden="true" />
      <UtmCampaign />

      <div className="relative mx-auto flex w-full max-w-[480px] flex-1 flex-col pb-10">
        {/* Hero render: title and photo are part of this image */}
        <div className="lb-hero" aria-hidden="true">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            quality={75}
            sizes="(max-width: 480px) 100vw, 480px"
            className="object-cover object-top"
          />
        </div>

        <h1 className="sr-only">
          {SHOW_NAME.hero} {SHOW_NAME.aside}. {TAGLINE}.
        </h1>

        {/* Content starts on the shirt line so the photo runs into the card */}
        <div
          className="px-4"
          style={{ paddingTop: `calc(min(100vw, 480px) * ${HERO_CARD_OFFSET})` }}
        >
          {featured && (
            <section className="relative z-10" aria-label="Latest episode">
              <FeaturedVideo link={featured} video={video} kicker={CADENCE} />
            </section>
          )}

          <nav aria-label="Links" className="mt-5">
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
      </div>
    </>
  );
}
