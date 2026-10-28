/**
 * Hand-drawn marker accents. Decorative only, hidden from assistive tech.
 */

export function MarkerUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 18"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="var(--lb-marker)"
      strokeWidth="6"
      strokeLinecap="round"
    >
      <path d="M4 11c40-6 80-7 120-4 35 2 70 2 112-3" />
      <path d="M26 15c50-3 100-4 150-2" opacity="0.7" />
    </svg>
  );
}

export function MarkerArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 60"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6c18 2 40 14 48 42" />
      <path d="M44 40l12 10 8-14" />
    </svg>
  );
}

export function MarkerSparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="var(--lb-marker)"
      strokeWidth="3.5"
      strokeLinecap="round"
    >
      <path d="M20 4v12M20 24v12M4 20h12M24 20h12" />
      <path d="M9 9l6 6M25 25l6 6M31 9l-6 6M15 25l-6 6" opacity="0.7" />
    </svg>
  );
}
