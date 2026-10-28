import Image from "next/image";
import type { Metadata } from "next";
import { FeaturedVideo } from "@/components/links/FeaturedVideo";
import { LinkButton } from "@/components/links/LinkButton";
import {
  BANNER_SIZE,
  BANNER_SRC,
  CADENCE,
  LINKS,
  SHOW_NAME,
  SITE_URL,
  SKY_IMAGE,
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

      <div className="mx-auto flex w-full max-w-[480px] flex-1 flex-col pb-10 pt-0 sm:pt-10">
        {/* Header: the channel banner, used as is */}
        <header className="mb-0">
          <h1 className="sr-only">
            {SHOW_NAME.hero} {SHOW_NAME.aside}. {TAGLINE}.
          </h1>
          <div className="lb-banner relative overflow-hidden sm:rounded-2xl">
            <Image
              src={BANNER_SRC}
              alt={`${SHOW_NAME.hero} ${SHOW_NAME.aside}. Joshua Fulmer in a ball cap and a long grey beard in front of an overcast sky.`}
              width={BANNER_SIZE.width}
              height={BANNER_SIZE.height}
              priority
              sizes="(max-width: 480px) 100vw, 480px"
              className="block h-auto w-full"
            />
          </div>
        </header>

        {/* Featured card, pulled up so the body runs into the first frame */}
        <div className="px-4">
          {featured && (
            <section className="relative z-10 -mt-12 sm:-mt-14" aria-label="Latest episode">
              <FeaturedVideo link={featured} video={video} kicker={CADENCE} />
            </section>
          )}

          {/* Links */}
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
