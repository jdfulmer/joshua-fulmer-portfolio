import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WBD Licensee Toolkit | Dynamic Brand Asset System",
  description:
    "How we replaced Warner Bros. Discovery's static brand toolkits with a dynamic system serving all licensees across the Consumer Products ecosystem, cutting compliance issues and eliminating repetitive asset requests.",
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
            Turning a static PDF nightmare into a live system serving every WBD licensee
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
            { value: "100%", label: "Licensee Coverage" },
            { value: "3+", label: "Enterprise Partners" },
            { value: "Static to Dynamic", label: "Toolkit Transformation" },
            { value: "Brand-Agnostic", label: "Architecture" },
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
                Warner Bros. Discovery owns one of the biggest brand portfolios
                in entertainment. Batman. Harry Potter. Discovery Channel. HBO.
                Hundreds of licensees need accurate assets and guidelines for
                every one of them.
              </p>
              <p>
                The existing system was static PDFs. A brand team would finalize
                guidelines, export a toolkit, and distribute it. By the time it
                reached licensees, something had already changed. New logo
                lockups. Updated color specs. Revised usage rules. The PDF was
                wrong before the ink was dry.
              </p>
              <p>
                Licensees didn&apos;t know they were working from outdated files.
                They&apos;d build an entire product line around the wrong assets
                and find out during compliance review. The brand team spent hours
                every week answering the same question over and over:
                &quot;Is this still the right logo?&quot;
              </p>
              <p>
                The brief said &quot;build a toolkit that supports all
                licensees.&quot; The real problem was that a static toolkit could
                never support all licensees. Not when guidelines change weekly
                and the brand portfolio spans dozens of properties.
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
                We started where the brief pointed us, but we didn&apos;t stay
                there.
              </p>
              <p>
                Working directly with WBD Consumer Products, Amazon Retail, and
                regional licensee partners, we mapped the actual workflow. What
                we found killed the original plan. Guidelines updated too
                frequently for static delivery. New partners onboarded
                constantly. Asset format requirements varied by distribution
                channel, retail partner, and product category. A single PDF
                couldn&apos;t hold all of that, and maintaining fifty separate
                ones wasn&apos;t an option.
              </p>
              <p>
                So we designed a dynamic system. The core decision was to make
                the architecture brand-agnostic. Separate the toolkit
                infrastructure from the brand-specific content. Batman
                merchandise and Discovery Channel educational materials use the
                same system. Different guidelines, different assets, same level
                of support.
              </p>
              <p>
                Guidelines, assets, specifications, and usage rules update
                independently. No rebuilding the entire system when one brand
                changes a color value. No re-exporting and redistributing PDFs.
                Licensees always see the current state.
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
                  role: "Primary stakeholder. Owned brand governance, defined compliance requirements, and set the approval workflows the system needed to support.",
                },
                {
                  name: "Amazon Retail",
                  role: "Largest distribution partner. Drove the requirements for retail-specific asset formats, listing specifications, and channel-specific guidelines.",
                },
                {
                  name: "Additional Partners",
                  role: "Regional licensees and specialty manufacturers. Each one brought format and compliance requirements that stress-tested the system's flexibility.",
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
                The original scope was a static toolkit. Here are the assets.
                Here are the rules. Standard deliverable.
              </p>
              <p>
                Two weeks into the actual licensee research, we knew that
                wasn&apos;t going to work. We watched a licensee pull a PDF from
                three months ago, build a product mockup with the wrong logo
                treatment, submit it for review, get rejected, and start over.
                That entire cycle took two weeks. It happened constantly.
              </p>
              <p>
                The pivot to dynamic changed everything. Licensees stopped
                working from snapshots and started working from the source. When
                a brand team updated guidelines on Tuesday, every licensee saw
                the change on Tuesday. Not six weeks later when someone
                remembered to re-export the PDF.
              </p>
              <p>
                The compliance back-and-forth dropped immediately. The brand team
                stopped fielding repetitive questions and started spending that
                time on actual brand strategy. And every new licensee that
                onboarded got the same quality of support without anyone building
                them a custom toolkit.
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
                The dynamic toolkit now serves every WBD licensee across the
                entire Consumer Products ecosystem. That&apos;s full coverage,
                where before there were gaps, workarounds, and outdated files
                floating around.
              </p>
              <p>
                Brand compliance issues dropped because the root cause
                disappeared. Licensees aren&apos;t working from stale documents
                anymore. They&apos;re working from live guidelines that update
                the moment the brand team makes a change.
              </p>
              <p>
                The WBD brand team reclaimed the hours they used to spend on
                repetitive asset requests and guideline clarifications. That time
                now goes toward brand strategy instead of answering emails.
              </p>
              <p>
                What matters most is that the system proved a model. What we
                built for WBD works for any enterprise brand portfolio. A
                flexible, dynamic approach to licensee support that scales the
                coverage without scaling the team.
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
