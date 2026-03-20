import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garden Path Fermentation | Brand Consulting",
  description:
    "Social media strategy and brand consulting for a craft brewery's second location in Bellingham, WA. 900% organic social growth in two quarters with minimal ad spend.",
};

export default function GardenPathPage() {
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
            <span className="text-xs font-mono text-muted">July 2024</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">
              Brand Consultant
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Garden Path Fermentation
          </h1>
          <p className="text-xl text-muted mb-12">
            How craft beer industry experience and a community-first strategy drove 900% organic social growth for a brewery&apos;s second location
          </p>
        </div>

        {/* Hero Visual */}
        <div className="animate-in-delay-1 mb-16 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#2d1a0e] p-12 md:p-20 flex flex-col items-center justify-center min-h-[320px] md:min-h-[400px]">
          <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
            The Great Northern Bottle Shop &amp; Lounge
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-white/90 text-center tracking-tight">
            Garden Path Fermentation
          </p>
          <p className="text-sm text-white/40 mt-4 font-mono">
            Bellingham, WA
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "900%", label: "Organic Social Growth" },
            { value: "2", label: "Quarters to Get There" },
            { value: "Minimal", label: "Ad Spend" },
            { value: "Thursday Trivia", label: "Community Anchor" },
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
          {/* What It Was */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              What It Was
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                Garden Path Fermentation was opening a second location in
                Bellingham. The Great Northern Bottle Shop &amp; Lounge. New
                space, new neighborhood, no existing social presence for it.
                They needed someone who could build the content engine from
                scratch and actually understood the industry.
              </p>
              <p>
                I came in as a brand consultant. Social media strategy, asset
                creation, posting schedule, event promotion. The whole thing.
                I built a cadence aligned with when their audience was actually
                online and created the posts, stories, and event content to
                fill it. But the real strategy wasn&apos;t about posting
                frequency. It was about becoming part of Bellingham.
              </p>
              <p>
                I spent years in the craft beer industry before design. I know
                how taproom culture works. I know the terminology. I know what
                trends are coming and which ones are noise. That context meant I
                could write copy that sounded like it came from someone who
                actually drinks the beer, because it did.
              </p>
            </div>
          </section>

          {/* What Worked */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              What Worked
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                The strategy that moved the needle was community-first content.
                Instead of just promoting Garden Path, I started interacting
                with local businesses, highlighting their events, and weaving
                the brewery into the fabric of what was already happening in
                Bellingham. People followed because the account felt like a
                neighbor, not an ad.
              </p>
              <p>
                Thursday night trivia became the anchor. A recurring event that
                gave people a reason to come back every week. It built
                regulars. Regulars brought friends. Friends followed the page.
                That flywheel is what took the account from nothing to 900%
                growth in two quarters with almost no money behind it.
              </p>
              <p>
                This project is different from my enterprise work. No design
                systems. No 12-person teams. Just scrappy brand work for a
                local business using industry knowledge I&apos;ve carried for
                years. It shows range. And it was a hell of a lot of fun.
              </p>
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {[
              "Brand Strategy",
              "Social Media",
              "Content Creation",
              "Craft Beer",
              "Community Building",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono bg-surface border border-border px-3 py-1 rounded-full text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
