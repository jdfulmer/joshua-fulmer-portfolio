import type { LinkIconName } from "@/lib/links.config";

const paths: Record<LinkIconName, React.ReactNode> = {
  play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none" />,
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.2v5.6l5-2.8z" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: (
    <path
      d="M13.5 3v10.6a3.1 3.1 0 1 1-2.6-3.06M13.5 3c.3 2.6 2 4.3 4.5 4.5"
      strokeWidth="2"
    />
  ),
  pen: (
    <>
      <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3z" />
      <path d="M13.5 8.5l2 2" />
    </>
  ),
  home: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.5" />
      <path d="M9 7.5V5.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5.5v2" />
      <path d="M3 12.5h18" />
    </>
  ),
  bike: (
    <>
      <circle cx="6" cy="16.5" r="3.5" />
      <circle cx="18" cy="16.5" r="3.5" />
      <path d="M6 16.5 9.5 9h4l4.5 7.5M9.5 9 12 16.5M13 5.5h3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </>
  ),
};

export function LinkIcon({
  name,
  size = 22,
  className,
}: {
  name: LinkIconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
