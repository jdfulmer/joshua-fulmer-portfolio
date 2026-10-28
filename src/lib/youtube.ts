import { FALLBACK_VIDEO, YOUTUBE_CHANNEL_ID } from "@/lib/links.config";

export interface LatestVideo {
  title: string;
  url: string;
  /** Absolute thumbnail URL, or null to show the gradient placeholder. */
  thumbnail: string | null;
  published?: string;
}

const RSS_URL = "https://www.youtube.com/feeds/videos.xml";

function decodeXml(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .trim();
}

function pick(xml: string, tag: string): string | null {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? decodeXml(match[1]) : null;
}

/**
 * Latest upload from the channel RSS feed. Cached for an hour by Next's
 * fetch cache, so the page stays static between revalidations. Any
 * failure (network, parse, empty feed) falls back to the static card.
 */
export async function getLatestVideo(): Promise<LatestVideo> {
  const fallback: LatestVideo = { ...FALLBACK_VIDEO };
  if (!YOUTUBE_CHANNEL_ID) return fallback;

  try {
    const res = await fetch(`${RSS_URL}?channel_id=${YOUTUBE_CHANNEL_ID}`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return fallback;

    const xml = await res.text();
    const entry = xml.match(/<entry>([\s\S]*?)<\/entry>/)?.[1];
    if (!entry) return fallback;

    const videoId = pick(entry, "yt:videoId");
    const title = pick(entry, "title");
    if (!videoId || !title) return fallback;

    return {
      title,
      url: `https://www.youtube.com/watch?v=${videoId}`,
      // hqdefault always exists. It is 4:3 with black bars that the
      // 16:9 card crops away with object-fit: cover.
      thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      published: pick(entry, "published") ?? undefined,
    };
  } catch {
    return fallback;
  }
}
