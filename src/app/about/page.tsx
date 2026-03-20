import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "18 years of design leadership, from the Marines to managing 12 designers across 60+ brands at D2E Labs.",
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="animate-in">
            <p className="text-sm font-mono text-muted mb-4 tracking-wide uppercase">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              The short version: I solve problems and build things that work.
            </h1>
          </div>

          {/* Headshot - swap src when photo is available */}
          <div className="animate-in-delay-1 mb-12">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-stone-300 to-stone-500 dark:from-stone-700 dark:to-stone-900 border border-border flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-semibold text-white/80">
                JF
              </span>
            </div>
          </div>

          <div className="animate-in-delay-1 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m a design leader with 18 years of experience doing the
              kind of work that doesn&apos;t always fit neatly into a job title.
              Strategy. Systems. Team building. Tooling. Whatever the problem
              requires.
            </p>

            <p>
              Right now, I lead a team of 12 designers across 60+ brands at D2E Labs.
              Market Defense is part of D2E. We handle design across multiple clients and
              verticals, and I spend a lot of my time making sure the team has
              what they need to do great work. Whether that&apos;s better
              processes, better tools, or just getting out of the way.
            </p>

            <p>
              I&apos;ve been building AI-powered tools that actually solve
              real problems. Not just prototypes or proofs of concept, but
              production systems that teams rely on daily. Design Intel,
              internal workflow automation, Claude-powered analysis tools.
              If it makes the team faster or gives leadership better
              visibility, I&apos;m probably building it.
            </p>
          </div>

          <div className="animate-in-delay-2 mt-16">
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-8">
              Before All This
            </h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                I served in the United States Marine Corps. That experience
                shaped everything about how I approach leadership, problem
                solving, and getting things done when the stakes matter. No
                shortcuts, no excuses.
              </p>
              <p>
                I also spent time in the craft beer industry, which taught me
                more about brand, community, and authentic storytelling than
                any design brief ever could.
              </p>
              <p>
                The combination of those experiences. Military discipline,
                creative industry hustle, and nearly two decades of design
                leadership. That&apos;s what makes my approach different. I
                don&apos;t just make things look good. I make things work.
              </p>
            </div>
          </div>

          <div className="animate-in-delay-3 mt-16">
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-8">
              What I Work With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Figma",
                "Claude / Claude Code",
                "Design Systems",
                "Asana",
                "Next.js",
                "Vercel",
                "Figma APIs",
                "Design Ops",
                "Team Leadership",
              ].map((tool) => (
                <div
                  key={tool}
                  className="border border-border rounded-xl px-4 py-3 text-sm text-muted"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
