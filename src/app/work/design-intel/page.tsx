import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Intel | AI-Powered Design Ops Dashboard",
  description:
    "How a design lead built an AI-powered ops dashboard that eliminated 20+ hours of manual reporting per month and gave leadership real-time visibility into a 12-designer team across 60+ brands.",
};

export default function DesignIntelPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-24 md:py-32">
        {/* Back link */}
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

        {/* Header */}
        <div className="animate-in max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-muted">Jan 2025 - Present</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">
              Design Lead & Builder
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Design Intel
          </h1>
          <p className="text-xl text-muted mb-12">
            How I eliminated 20+ hours of manual reporting and caught burnout before it happened
          </p>
        </div>

        {/* Hero Screenshot */}
        <div className="animate-in-delay-1 mb-16 rounded-2xl overflow-hidden border border-border">
          <Image
            src="/images/design-intel-activity.png"
            alt="Design Intel Activity Dashboard showing team workload, designer scores, client list, and active tasks"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "20+hrs/mo", label: "Manual Reporting Eliminated" },
            { value: "12", label: "Designers Protected" },
            { value: "4", label: "Systems Unified" },
            { value: "Zero", label: "Self-Reporting Required" },
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
          {/* The Problem */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Problem
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                Every Monday I spent two hours pulling data from four different
                places. Figma for the work. Asana for the tickets. Spreadsheets
                for capacity. Slack for the fires nobody logged anywhere.
              </p>
              <p>
                By the time I stitched it all together, the picture was already
                wrong. Someone picked up a rush project. A client added three
                rounds of revisions to a scope that was supposed to be final. A
                designer who looked fine on paper was drowning, and the
                spreadsheet couldn&apos;t tell me that.
              </p>
              <p>
                I lead 12 designers across 60+ brands. My
                job is to see the problems coming before they land. But the tools
                we had made me blind until it was too late. Five-plus hours a
                week, just to build a snapshot that was stale before I finished it.
              </p>
              <p>
                Leadership wanted visibility. The team needed someone watching
                out for overload. And I needed to stop being the bottleneck
                between the data and the decisions.
              </p>
            </div>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Approach
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                I stopped trying to fix the reporting process and built a new one.
              </p>
              <p>
                Design Intel is a single dashboard that pulls live data from
                Figma, Asana, and internal systems. It shows me who&apos;s
                overloaded, which clients are generating the most pressure, and
                where delivery timelines are at risk. All of it updates in real
                time.
              </p>
              <p>
                The stack is Next.js, TypeScript, and Vercel. Claude handles the
                analysis layer, finding patterns in the workload data that a
                human would miss. Things like a designer whose revision count
                tripled in two weeks, or a client whose scope creep pattern
                matches one that caused a missed deadline last quarter.
              </p>
              <p>
                I worked with leadership and project management to define what
                visibility they actually needed and shaped the dashboard around
                those conversations. The goal was a tool that served the people
                making decisions, not just the people pulling data.
              </p>
              <p>
                This wasn&apos;t a side project that grew legs. It was an
                intentional tool built for a specific gap. I designed it to feel
                like something designers would actually open. Not another admin
                panel with charts nobody reads. If it doesn&apos;t feel as clean
                as working in Figma, nobody&apos;s going to use it.
              </p>
            </div>
          </section>

          {/* What It Does */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              What It Does
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Workload Visibility",
                  description:
                    "Shows exactly who's at capacity, who has room, and who's been quietly absorbing work that isn't on their plate. No more guessing from Asana ticket counts.",
                },
                {
                  title: "Client Pressure Mapping",
                  description:
                    "Tracks the signals that predict problems. Revision cycles speeding up. Turnaround windows shrinking. Scope expanding without timeline adjustments. You see it building before it breaks.",
                },
                {
                  title: "Delivery Metrics",
                  description:
                    "Output tracking pulled directly from Figma activity and Asana completion data. Leadership gets the numbers without designers filling out status reports.",
                },
                {
                  title: "AI-Powered Analysis",
                  description:
                    "Claude runs pattern analysis across all four data sources and flags what's coming. Burnout trajectories. Lopsided workload distribution. Delivery risks that aren't obvious yet.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Impact */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Impact
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                Twenty-plus hours of manual reporting, gone. Every month. That
                alone would justify the build. Those hours turned into capacity
                the team could reinvest into actual design work, letting us
                scale output across more brands without adding headcount.
              </p>
              <p>
                But the real value is in what didn&apos;t happen. The burnout
                that got caught at the overload stage. The client escalation that
                got flagged as a pattern before it became an emergency. The
                capacity gap that showed up in the data three weeks before anyone
                would have noticed it in a standup.
              </p>
              <p>
                The biggest shift was in how leadership talks to the design team.
                They stopped asking &quot;how&apos;s everyone doing?&quot; and
                getting a polite &quot;fine.&quot; Now they open Design Intel,
                see the real picture, and come to the conversation with specific
                questions about resourcing and tradeoffs. That&apos;s the
                difference between managing a team and actually leading one.
              </p>
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {[
              "Design Ops",
              "AI",
              "Figma API",
              "Next.js",
              "Claude",
              "TypeScript",
              "Vercel",
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
