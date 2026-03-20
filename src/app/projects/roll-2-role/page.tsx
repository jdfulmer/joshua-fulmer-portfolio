import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roll 2 Role | Creative AI for D&D World-Building",
  description:
    "AI-generated cinematic assets for a D&D live stream. ComfyAI with a custom LoRA database for world-building, character development, and narrative storytelling.",
};

export default function Roll2RolePage() {
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
            <span className="text-xs font-mono text-muted">July 2022</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">Creative AI Lead</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Roll 2 Role
          </h1>
          <p className="text-xl text-muted mb-12">
            AI-generated cinematic assets for a D&amp;D live stream before anyone was talking about AI art
          </p>
        </div>

        {/* Hero Visual */}
        <div className="animate-in-delay-1 mb-16 rounded-2xl overflow-hidden border border-border">
          <Image
            src="/images/roll-2-role-hero.svg"
            alt="Roll 2 Role creative AI visualization showing a fantasy tavern scene with the ComfyAI pipeline for generating cinematic D&D assets"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "1", label: "Campaign Completed" },
            { value: "ComfyAI", label: "Primary Tool" },
            { value: "Contextual", label: "Scene Imagery" },
            { value: "Contracted", label: "For Next Campaign" },
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
                Roll 2 Role is a D&amp;D live streaming group that needed visuals
                to match the tone of their campaign. Not stock fantasy art. Not
                character portraits dropped in as thumbnails. They wanted
                cinematic scene imagery that made viewers feel like they were
                inside the world. The campaign was called &quot;For Peace Through
                Death&quot; and it needed to look like it sounded.
              </p>
              <p>
                This was July 2022. AI image generation existed but nobody was
                using it for production work yet. Most people were still posting
                test outputs on Twitter and calling it a revolution. I was
                already building workflows around it. Real assets for a real
                audience with real expectations.
              </p>
              <p>
                Viewers told the group that the visuals changed how they
                experienced the story. They remembered plot points better. They
                felt more connected to the world. That feedback led directly to
                being contracted for Roll 2 Role&apos;s next campaign, which is
                set in space.
              </p>
            </div>
          </section>

          {/* How It Worked */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              How It Worked
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                I used ComfyAI with an extended LoRA database that I built
                specifically for this project. LoRAs let you fine-tune image
                generation toward a specific visual style or subject. I stacked
                and blended them to maintain consistency across characters,
                environments, and lighting. The goal was a cohesive world, not
                a collection of one-off images.
              </p>
              <p>
                The key difference was context. Most AI art at the time was
                portraits or isolated subjects on blank backgrounds. I was
                generating full scenes. A tavern at dusk with the right number
                of characters in the right positions. A battlefield that
                matched the narrative beats from the session. Imagery that
                served the story instead of just decorating it.
              </p>
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {[
              "ComfyAI",
              "LoRA",
              "World-Building",
              "Narrative Design",
              "D&D",
              "Live Streaming",
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
