import { isInternalLink, withUtm, type BioLink } from "@/lib/links.config";
import { LinkIcon } from "./LinkIcon";

export function LinkButton({ link }: { link: BioLink }) {
  const internal = isInternalLink(link.url);

  return (
    <a
      href={withUtm(link.url)}
      data-link-id={link.id}
      data-utm={internal ? "" : undefined}
      className="lb-card group flex items-center gap-4 min-h-14 rounded-2xl px-4 py-3"
    >
      <span className="lb-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
        <LinkIcon name={link.icon} />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-base font-semibold leading-tight">{link.label}</span>
        {link.sublabel && (
          <span className="truncate text-sm leading-snug" style={{ color: "var(--lb-card-muted)" }}>
            {link.sublabel}
          </span>
        )}
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
    </a>
  );
}
