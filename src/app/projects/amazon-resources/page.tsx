import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon Resources | Figma Community Templates for Amazon Sellers",
  description:
    "Plug-and-play Figma templates for Amazon sellers. Preview and refine your Brand Story, A+ Content, and Store layouts before uploading to Amazon.",
};

export default function AmazonResourcesPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-24 md:py-32">
        {/* Back link */}
        <Link
          href="/projects"
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
          Back to Projects
        </Link>

        {/* Header */}
        <div className="animate-in max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-muted">September 2024</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">Creator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Amazon Resources
          </h1>
          <p className="text-xl text-muted mb-12">
            Everything I know about Amazon content design, packaged into free Figma templates anyone can use
          </p>
        </div>

        {/* Gradient Hero */}
        <div className="animate-in-delay-1 mb-16 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-[#ff9900] via-[#e47911] to-[#232f3e] p-12 md:p-20 flex flex-col items-center justify-center min-h-[320px] md:min-h-[400px]">
          <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
            Figma Community
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-white/90 text-center tracking-tight">
            Amazon Resources
          </p>
          <p className="text-sm text-white/40 mt-4 font-mono">
            Templates for Sellers
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "5", label: "Amazon Content Types" },
            { value: "Free", label: "Community Resource" },
            { value: "Plug & Play", label: "Template System" },
            { value: "Live", label: "Character Counter" },
          ].map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl md:text-3xl font-semibold">
                {metric.value}
              </p>
              <p className="text-sm text-muted mt-1">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="animate-in-delay-2 max-w-3xl space-y-16">
          {/* What It Is */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              What It Is
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                Amazon has rules for everything. Image dimensions. Character
                limits. Module layouts. If you get any of it wrong, your content
                gets rejected or looks broken. Most sellers figure this out
                through trial and error. I built a way to skip the pain.
              </p>
              <p>
                Amazon Resources is a plug-and-play Figma template system. You
                open it, drop in your images and copy, and see exactly how your
                content will look on Amazon before you upload anything. Visual
                previews of every module. A flow visualization that shows how
                modules connect. A character counter widget that enforces
                Amazon&apos;s copy restrictions in real time so you never submit
                something that gets bounced.
              </p>
              <p>
                This is the same knowledge that powers the enterprise toolkit I
                built for Warner Bros. Discovery. Same expertise, different
                audience. Shared for free on Figma Community because sellers
                shouldn&apos;t have to guess.
              </p>
            </div>
          </section>

          {/* What It Covers */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              What It Covers
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed mb-8">
              <p>
                The system started with Brand Story and keeps expanding. Each
                content type has its own template with accurate module layouts,
                dimension specs, and copy constraints.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  name: "Brand Story",
                  detail:
                    "The foundation. Four module cards and a background image that tell your brand narrative on every product page.",
                },
                {
                  name: "Enhanced A+",
                  detail:
                    "Standard A+ Content modules. Comparison charts, image headers, text overlays. The content that replaces your basic product description.",
                },
                {
                  name: "Premium A+",
                  detail:
                    "Interactive carousels, video modules, hotspot images. The upgrade that most sellers qualify for but never use because the specs are confusing.",
                },
                {
                  name: "Brand Store",
                  detail:
                    "Multi-page storefront layouts. Navigation, hero banners, product grids. Your entire brand experience on Amazon, previewed before you build it.",
                },
                {
                  name: "DSP",
                  detail:
                    "Demand-Side Platform ad creatives. Display and video ad specs for Amazon's programmatic advertising system.",
                },
              ].map((area) => (
                <div
                  key={area.name}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="font-semibold mb-2">{area.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {area.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {["Figma", "UX/UI Design", "E-Commerce", "Amazon", "Community Tool"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-surface border border-border px-3 py-1 rounded-full text-muted"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
