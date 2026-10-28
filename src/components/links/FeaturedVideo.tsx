import Image from "next/image";
import type { LatestVideo } from "@/lib/youtube";
import type { BioLink } from "@/lib/links.config";
import { LinkIcon } from "./LinkIcon";

/**
 * The big card at the top. Rendered on the server with the video data
 * already resolved, so there is no loading state and no layout shift.
 * The thumbnail box is always 16:9 whether or not a thumbnail exists.
 */
export function FeaturedVideo({ link, video }: { link: BioLink; video: LatestVideo }) {
  return (
    <a
      href={video.url}
      data-link-id={link.id}
      className="lb-card group relative block overflow-hidden rounded-3xl"
    >
      <span className="lb-tape lb-marker absolute left-3 top-3 z-10 rounded-sm px-2.5 py-1 text-sm">
        {link.sublabel ?? "New episode"}
      </span>

      <span className="relative block aspect-video w-full overflow-hidden">
        {video.thumbnail ? (
          <Image
            src={video.thumbnail}
            alt=""
            fill
            priority
            sizes="(max-width: 480px) 100vw, 448px"
            className="object-cover"
          />
        ) : (
          <span className="lb-thumb-fallback absolute inset-0" />
        )}
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#121c33] shadow-lg transition-transform duration-150 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            <LinkIcon name="play" size={30} />
          </span>
        </span>
      </span>

      <span className="flex items-center gap-3 px-4 py-3.5">
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--lb-card-muted)" }}>
            Latest on YouTube
          </span>
          <span className="line-clamp-2 text-base font-semibold leading-snug">
            {video.title}
          </span>
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="lb-chevron shrink-0"
        >
          <path d="m8 5 5 5-5 5" />
        </svg>
      </span>
    </a>
  );
}
