import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adobe to Figma Migration",
  description:
    "Case study: Leading a 12-person design team through a full platform migration from Adobe to Figma.",
};

export default function FigmaMigrationPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-24 md:py-32">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-12"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M13 8H3M7 4L3 8l4 4" />
          </svg>
          Back to Work
        </Link>

        <div className="max-w-3xl animate-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-muted">2023</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">Design Lead</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono bg-surface border border-border px-2 py-0.5 rounded-full text-muted">
              Coming Soon
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Adobe to Figma Migration
          </h1>
          <p className="text-xl text-muted mb-12">
            Leading a 12-Person Team Through Tool Transformation
          </p>

          <div className="border border-dashed border-border rounded-2xl p-12 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium mb-2">
              Case study in development
            </p>
            <p className="text-muted max-w-md">
              This case study is being written up. In the meantime, feel free to{" "}
              <Link href="/contact" className="underline hover:text-foreground">
                reach out
              </Link>{" "}
              if you want to hear the full story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
