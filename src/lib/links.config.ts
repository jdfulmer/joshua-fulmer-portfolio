/**
 * Link-in-bio config for /links (also reachable at /go and /bio).
 *
 * Everything the page shows is driven from this file. Reorder the LINKS
 * array, flip `enabled`, or change a URL here. No markup changes needed.
 */

export const SITE_URL = "https://joshuafulmer.com";

/* ------------------------------------------------------------------ */
/* Fill these in                                                       */
/* ------------------------------------------------------------------ */

/**
 * YouTube channel id for @joshua-fulmer (starts with "UC", 24 chars).
 * Find it: open the channel page, view source, search for "channel_id=".
 * While this is empty the featured card shows the static fallback.
 */
export const YOUTUBE_CHANNEL_ID = "";

/** Grid & Gutter (AI/UX consulting). TODO: swap for the real site URL. */
export const GRID_AND_GUTTER_URL = "/contact";

/** Send It Society. TODO: swap for the nonprofit's own site URL. */
export const SEND_IT_SOCIETY_URL = "/work/send-it-society";

/** Contact email for the mailto link. TODO: confirm. */
export const CONTACT_EMAIL = "j.d.fulmer@gmail.com";

/** One-line tagline under the name. TODO: write the real one. */
export const TAGLINE = "Design leader. Mountain biker. Builds things in Bellingham, WA.";

/**
 * Sky photo for the page background. Drop a file at
 * public/images/links/sky.jpg (about 1200px wide, under 200KB) and set
 * this to "/images/links/sky.jpg". While null, a CSS gradient sky is used.
 */
export const SKY_IMAGE: string | null = null;

/* ------------------------------------------------------------------ */
/* Fixed values                                                        */
/* ------------------------------------------------------------------ */

export const YOUTUBE_HANDLE = "@joshua-fulmer";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@joshua-fulmer";
export const TIKTOK_HANDLE = "@ffffumbles";
export const TIKTOK_URL = "https://www.tiktok.com/@ffffumbles";

/**
 * The site has no blog data source yet, so this points at the work index.
 * Change it to the blog index once the blog exists.
 */
export const BLOG_URL = "/work";

export const AVATAR_SRC = "/images/links/avatar.jpg";

/** Shown when the YouTube RSS fetch fails or no channel id is set. */
export const FALLBACK_VIDEO = {
  title: "Latest episode on YouTube",
  url: `${YOUTUBE_CHANNEL_URL}/videos`,
};

/** UTM params appended to every internal (joshuafulmer.com) link. */
export const UTM_DEFAULTS = {
  utm_source: "linkinbio",
  utm_medium: "social",
} as const;

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

export type LinkIconName =
  | "play"
  | "youtube"
  | "tiktok"
  | "pen"
  | "home"
  | "briefcase"
  | "bike"
  | "mail";

export interface BioLink {
  /** Stable id, also used as data-link-id for analytics hooks. */
  id: string;
  label: string;
  sublabel?: string;
  url: string;
  icon: LinkIconName;
  /** Featured links render as the big card at the top. */
  featured?: boolean;
  enabled: boolean;
}

export const LINKS: BioLink[] = [
  {
    id: "latest-video",
    label: FALLBACK_VIDEO.title,
    sublabel: "New episode",
    url: FALLBACK_VIDEO.url,
    icon: "play",
    featured: true,
    enabled: true,
  },
  {
    id: "youtube",
    label: "YouTube",
    sublabel: YOUTUBE_HANDLE,
    url: YOUTUBE_CHANNEL_URL,
    icon: "youtube",
    enabled: true,
  },
  {
    id: "tiktok",
    label: "TikTok",
    sublabel: TIKTOK_HANDLE,
    url: TIKTOK_URL,
    icon: "tiktok",
    enabled: true,
  },
  {
    id: "blog",
    label: "Read the blog",
    sublabel: "Case studies and writing",
    url: BLOG_URL,
    icon: "pen",
    enabled: true,
  },
  {
    id: "home",
    label: "joshuafulmer.com",
    sublabel: "Portfolio and about",
    url: "/",
    icon: "home",
    enabled: true,
  },
  {
    id: "grid-and-gutter",
    label: "Work with me",
    sublabel: "Grid & Gutter. AI and UX consulting",
    url: GRID_AND_GUTTER_URL,
    icon: "briefcase",
    enabled: true,
  },
  {
    id: "send-it-society",
    label: "Send It Society",
    sublabel: "Free weekly MTB rides on Galbraith",
    url: SEND_IT_SOCIETY_URL,
    icon: "bike",
    enabled: true,
  },
  {
    id: "contact",
    label: "Contact",
    sublabel: CONTACT_EMAIL,
    url: `mailto:${CONTACT_EMAIL}`,
    icon: "mail",
    enabled: true,
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/** True for links that stay on joshuafulmer.com. */
export function isInternalLink(url: string): boolean {
  return url.startsWith("/") || url.startsWith(SITE_URL);
}

/**
 * Appends the default UTM params to internal links. Relative URLs stay
 * relative. External links and mailto links are returned untouched.
 * utm_campaign is added client side from ?src= (see UtmCampaign.tsx).
 */
export function withUtm(url: string): string {
  if (!isInternalLink(url)) return url;
  const relative = url.startsWith("/");
  const parsed = new URL(url, SITE_URL);
  for (const [key, value] of Object.entries(UTM_DEFAULTS)) {
    parsed.searchParams.set(key, value);
  }
  return relative ? `${parsed.pathname}${parsed.search}${parsed.hash}` : parsed.toString();
}
