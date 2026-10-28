import Image from "next/image";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FeaturedVideo } from "@/components/links/FeaturedVideo";
import { LinkButton } from "@/components/links/LinkButton";
import { MarkerArrow, MarkerSparkle, MarkerUnderline } from "@/components/links/Doodles";
import { AVATAR_SRC, LINKS, SITE_URL, SKY_IMAGE, TAGLINE } from "@/lib/links.config";
import { getLatestVideo } from "@/lib/youtube";
import { UtmCampaign } from "./UtmCampaign";

const TITLE = "Joshua Fulmer | Links";
const DESCRIPTION =
  "Latest YouTube episode, TikTok, the blog, Grid & Gutter consulting, and Send It Society rides. All in one place.";

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
            className="object-cover"
          />
        )}
      </div>
      <div className="lb-overlay" aria-hidden="true" />

      <UtmCampaign />

      <div className="absolute right-4 top-4 z-10">
        <span className="lb-toggle inline-flex rounded-full p-0.5">
          <ThemeToggle />
        </span>
      </div>

      <div className="mx-auto flex w-full max-w-[480px] flex-1 flex-col px-4 pb-10 pt-14 sm:pt-16">
        {/* Header */}
        <header className="relative mb-8 flex flex-col items-center text-center">
          <MarkerSparkle className="absolute -left-1 top-2 h-8 w-8 sm:left-2" />
          <div className="lb-avatar relative mb-5 h-28 w-28 overflow-hidden rounded-full">
            <Image
              src={AVATAR_SRC}
              alt="Joshua Fulmer"
              width={112}
              height={112}
              priority
              sizes="112px"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="flex flex-col items-center">
            <span className="lb-display relative text-6xl sm:text-7xl">
              Joshua
              <MarkerUnderline className="absolute -bottom-2 left-1/2 h-4 w-[115%] -translate-x-1/2" />
            </span>
            <span
              className="lb-marker mt-3 -rotate-3 text-4xl sm:text-5xl"
              style={{ color: "var(--lb-accent)" }}
            >
              Fulmer
            </span>
          </h1>
          <p className="mt-4 max-w-xs text-base" style={{ color: "var(--lb-muted)" }}>
            {TAGLINE}
          </p>
        </header>

        {/* Featured card */}
        {featured && (
          <section className="relative mb-5" aria-label="Latest video">
            <span
              className="lb-marker absolute -top-7 right-2 z-10 flex items-end gap-1 text-lg"
              aria-hidden="true"
              style={{ color: "var(--lb-ink)" }}
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

        <footer className="mt-10 text-center text-sm" style={{ color: "var(--lb-muted)" }}>
          <p>
            Joshua Fulmer &copy; {new Date().getFullYear()} &middot; Bellingham, WA
          </p>
        </footer>
      </div>
    </>
  );
}
