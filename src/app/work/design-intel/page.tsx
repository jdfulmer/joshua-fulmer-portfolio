import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Intel — AI-Powered Design Ops Dashboard",
  description:
    "Case study: Building an internal design operations tool that gives leadership real-time visibility into team workload and delivery metrics.",
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
            <span className="text-xs font-mono text-muted">2024–Present</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">
              Design Lead & Builder
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Design Intel
          </h1>
          <p className="text-xl text-muted mb-12">
            AI-Powered Design Ops Dashboard
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "15+", label: "Designers Supported" },
            { value: "4", label: "Data Sources Integrated" },
            { value: "20+/mo", label: "Manual Hours Saved" },
            { value: "Real-time", label: "Visibility for Leadership" },
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
                Leading 15+ designers across multiple clients and verticals
                means you need to know what&apos;s happening. Not in a
                micromanagement way — in a &quot;someone&apos;s about to burn
                out and I need to see it before they tell me&quot; way.
              </p>
              <p>
                The data existed in pieces: Figma had the work, Asana had the
                tickets, spreadsheets had the capacity plans, and Slack had the
                fires. None of it talked to each other, and by the time I
                manually compiled a picture of where the team stood, it was
                already outdated.
              </p>
              <p>
                Leadership needed visibility. The team needed protection from
                overload. And I needed something that didn&apos;t require me to
                spend 5+ hours a week just figuring out what was happening.
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
                I built Design Intel from the ground up — a single dashboard
                that pulls from Figma, Asana, and internal data to give me
                (and leadership) a real-time picture of team health, workload
                distribution, and delivery velocity.
              </p>
              <p>
                This wasn&apos;t a weekend project that got out of hand. It was
                an intentional tool built to solve a specific operational gap.
                The stack is Next.js, TypeScript, and Vercel, with Claude
                handling the analysis layer — identifying patterns in workload
                data that a human would miss until it was too late.
              </p>
              <p>
                The key design decision: make it feel like a tool designers
                would actually want to use, not another admin panel. If it
                doesn&apos;t feel like working in Figma, nobody&apos;s going to
                check it.
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
                    "Real-time view of who's working on what, how much capacity each designer has, and where the pressure points are across the team.",
                },
                {
                  title: "Client Pressure Mapping",
                  description:
                    "Tracks client-side demand signals — revision cycles, turnaround expectations, and scope creep patterns — before they become problems.",
                },
                {
                  title: "Delivery Metrics",
                  description:
                    "Actual output tracking tied to Figma activity and Asana completion rates, giving leadership the numbers they need without designers self-reporting.",
                },
                {
                  title: "AI-Powered Analysis",
                  description:
                    "Claude analyzes patterns across all data sources to flag potential issues: approaching burnout, uneven workload distribution, delivery risks.",
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
                Design Intel eliminated 20+ hours of manual reporting per month.
                But the real value isn&apos;t in the time saved — it&apos;s in
                the problems caught early. Workload imbalances that would have
                led to burnout. Client delivery risks that would have surfaced
                as emergencies. Capacity gaps that would have been invisible
                until they weren&apos;t.
              </p>
              <p>
                It changed how leadership engages with the design team. Instead
                of asking &quot;how&apos;s everyone doing?&quot; and getting a
                polite &quot;fine,&quot; they can see the real picture and have
                informed conversations about resourcing, priorities, and
                tradeoffs.
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
