import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WBD Licensee Toolkit | Dynamic Brand Asset System",
  description:
    "Case study: Building a dynamic brand toolkit for Warner Bros. Discovery licensees in partnership with WBD Consumer Products and Amazon Retail.",
};

export default function WBDToolkitPage() {
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
            <span className="text-xs font-mono text-muted">2023 - 2024</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">Design Lead</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            WBD Licensee Toolkit
          </h1>
          <p className="text-xl text-muted mb-12">
            Dynamic Brand Asset System for Warner Bros. Discovery
          </p>
        </div>

        {/* Placeholder Hero Visual */}
        <div className="animate-in-delay-1 mb-16 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-[#1a1640] via-[#2d1b69] to-[#0f172a] p-12 md:p-20 flex flex-col items-center justify-center min-h-[320px] md:min-h-[400px]">
          <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
            Warner Bros. Discovery
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-white/90 text-center tracking-tight">
            Licensee Toolkit
          </p>
          <p className="text-sm text-white/40 mt-4 font-mono">
            Dynamic Brand Asset System
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "All", label: "Licensees Supported" },
            { value: "3+", label: "Partner Organizations" },
            { value: "Dynamic", label: "From Static Toolkit" },
            { value: "Agnostic", label: "Brand Coverage" },
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
                Warner Bros. Discovery has one of the largest and most complex
                brand portfolios in entertainment. Every licensee, from major
                retail partners to smaller regional brands, needs access to
                accurate, up-to-date brand assets and guidelines. The existing
                approach was fragmented: static toolkits that were outdated
                before they shipped, inconsistent across brands, and a
                bottleneck for everyone involved.
              </p>
              <p>
                The initial brief was straightforward: build a toolkit that
                supports all licensees. But the real challenge was building
                something flexible enough to scale across the entire Consumer
                Products ecosystem without creating a maintenance nightmare.
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
                What started as a requested build evolved into something
                significantly more ambitious. Working directly with the WBD
                Consumer Products team, Amazon Retail, and other key partners,
                we designed a dynamic toolkit system that could adapt to any
                licensee&apos;s needs while maintaining brand integrity across
                the board.
              </p>
              <p>
                The key insight was making it agnostic. Not tied to one brand,
                one format, or one use case. The system needed to serve a
                licensee working on Batman merchandise the same way it served
                one working on Discovery Channel educational content. Different
                brands, different guidelines, same level of support.
              </p>
              <p>
                This meant designing a flexible architecture that separated
                brand-specific content from the toolkit infrastructure itself.
                Guidelines, assets, specifications, and usage rules could all
                be updated independently without rebuilding the entire system.
              </p>
            </div>
          </section>

          {/* Key Partners */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              Partners & Collaboration
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "WBD Consumer Products",
                  role: "Primary stakeholder and brand governance partner. Defined brand requirements and approval workflows.",
                },
                {
                  name: "Amazon Retail",
                  role: "Key distribution partner. Provided retail-specific requirements for asset formats and listing guidelines.",
                },
                {
                  name: "Additional Partners",
                  role: "Regional licensees and specialty partners with unique format and compliance requirements.",
                },
              ].map((partner) => (
                <div
                  key={partner.name}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="font-semibold mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {partner.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Evolution */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Evolution
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                The most interesting part of this project wasn&apos;t the
                initial build. It was the transformation. The original scope
                was a static toolkit: here are the assets, here are the rules,
                go make things. Standard.
              </p>
              <p>
                But as we dug into the actual licensee workflow, it became
                clear that static wasn&apos;t going to cut it. Brands updated
                guidelines frequently. New partners came onboard regularly.
                Asset formats varied wildly based on the distribution channel.
                A PDF guide that was accurate on Monday might be wrong by
                Friday.
              </p>
              <p>
                The pivot to a dynamic system meant licensees always had access
                to the current state of any brand&apos;s requirements, not a
                snapshot from whenever the last PDF was exported. It reduced
                back-and-forth with the brand team, minimized compliance issues,
                and let the Consumer Products team focus on brand strategy
                instead of fielding &quot;is this still the right logo?&quot;
                emails all day.
              </p>
            </div>
          </section>

          {/* The Impact */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Impact
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                The dynamic toolkit now supports all WBD licensees across the
                Consumer Products ecosystem. Brand compliance issues dropped
                significantly because licensees are working from live guidelines
                rather than static documents. The WBD brand team reclaimed
                hours previously spent on repetitive asset and guideline
                requests.
              </p>
              <p>
                Most importantly, the system proved the model. What was built
                for WBD&apos;s specific needs demonstrated a pattern that works
                for any enterprise brand portfolio. A flexible, dynamic
                approach to licensee support that scales without scaling the
                team.
              </p>
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {[
              "Brand Systems",
              "Design Systems",
              "Enterprise",
              "Consumer Products",
              "Warner Bros. Discovery",
              "Amazon Retail",
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
