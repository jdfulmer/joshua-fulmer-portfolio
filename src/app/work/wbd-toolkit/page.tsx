import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WBD Licensee Toolkit | Amazon Retail Strategy for Licensed Sellers",
  description:
    "How we built a dynamic Amazon toolkit from scratch for Warner Bros. Discovery's licensees, giving companies like Hasbro, Mattel, and LEGO always-current best practices for selling WBD IP on Amazon.",
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
            <span className="text-xs font-mono text-muted">Jan 2025 - Present</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">Design Lead</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            WBD Licensee Toolkit
          </h1>
          <p className="text-xl text-muted mb-12">
            A from-scratch Amazon resource guide that keeps Hasbro, Mattel, LEGO, and every other WBD licensee selling smarter on Amazon
          </p>
        </div>

        {/* Hero Visual */}
        <div className="animate-in-delay-1 mb-16 rounded-2xl overflow-hidden border border-border">
          <Image
            src="/images/wbd-toolkit-hero.svg"
            alt="WBD Licensee Toolkit interface showing the 5-step progression pathway, content areas, and dynamic update system for Amazon retail"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "6", label: "Core Content Areas" },
            { value: "5-Step", label: "Progression Pathway" },
            { value: "Live", label: "Dynamic Updates" },
            { value: "Amazon-First", label: "Retail Focus" },
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
                Warner Bros. Discovery licenses its IP to some of the biggest
                names in consumer products. Hasbro. Mattel. LEGO. These
                companies sell WBD-licensed products on Amazon, and Amazon has
                its own playbook. Brand Registry. A+ Content. Sponsored
                Products. DSP. Algorithm changes. It moves fast and the rules
                shift constantly.
              </p>
              <p>
                There was something before we got involved. It wasn&apos;t
                working. Licensees were left figuring out Amazon on their own,
                piecing together outdated info, missing opportunities to align
                with WBD&apos;s retail strategy. There was no single source of
                truth for how to sell WBD IP effectively on the platform.
              </p>
              <p>
                When your licensees underperform on Amazon, it&apos;s not just
                their problem. It&apos;s your IP showing up with weak listings,
                bad storefronts, and missed advertising windows around your
                biggest tentpole moments. WBD needed their partners operating
                at a higher standard. The previous approach couldn&apos;t get
                them there.
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
                We were asked to build a replacement from scratch. Not a patch.
                Not a revision. A completely new toolkit purpose-built for one
                thing: helping WBD licensees succeed on Amazon. Getting
                alignment meant working across WBD leadership, their retail
                strategy team, and the licensees who would actually use it.
              </p>
              <p>
                We worked with the WBD Consumer Products team, Amazon Retail,
                and the licensees themselves to understand what they actually
                needed. The answer was clear. Licensees needed a centralized
                resource guide covering Amazon best practices, organized in a
                way that met them where they were. Whether they were just
                getting Brand Registry set up or running advanced DSP campaigns,
                the toolkit had to support the full range.
              </p>
              <p>
                So we designed a 5-step progression pathway. Start with
                foundation building. End with optimization. Each step
                builds on the last. The toolkit features dark and light
                mode, keyboard-driven search with Ctrl+K, sidebar navigation,
                and step-numbered guidance so licensees always know where they
                are and what comes next. It references the Star Labs portal for
                brand assets and approvals, keeping everything connected.
              </p>
            </div>
          </section>

          {/* What It Covers */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              What It Covers
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Brand Building & Content Creation",
                  detail: "Brand Registry setup, Amazon storefront design, and A+ Content creation. The foundation every licensee needs before anything else works.",
                },
                {
                  name: "Product Listings",
                  detail: "Titles, images, descriptions, and keyword strategy. The basics that most licensees were getting wrong because no one told them the right way.",
                },
                {
                  name: "Advertising",
                  detail: "Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP. From first campaign to full-funnel strategy.",
                },
                {
                  name: "Algorithm & AI Discovery",
                  detail: "Amazon's COSMO algorithm and Rufus AI. How products get discovered is changing. The toolkit keeps licensees ahead of it.",
                },
                {
                  name: "Fulfillment & Fees",
                  detail: "FBA logistics, inventory management, and cost-saving strategies. Operational fundamentals that protect margins.",
                },
                {
                  name: "Seasonal Planning",
                  detail: "Aligning licensee campaigns with WBD tentpole moments. Movie launches, series premieres, franchise anniversaries. Timing is everything.",
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

          {/* The Dynamic Advantage */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Dynamic Advantage
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                The initial build was strong on its own. A comprehensive,
                well-organized Amazon resource guide for WBD licensees. That
                alone was a significant upgrade from what existed before. But
                the even bigger win was making it dynamic.
              </p>
              <p>
                Amazon changes constantly. Advertising features update. Algorithm
                logic shifts. Fee structures get revised. A static guide goes
                stale the moment you publish it. So we built the toolkit to
                stay current. Content updates are visible live, immediately.
                The system cross-checks information against Amazon updates.
                When Amazon changes something, the toolkit reflects it.
              </p>
              <p>
                That means a licensee opening the toolkit today sees
                today&apos;s reality. Not last quarter&apos;s. Not last
                month&apos;s. The current state of Amazon best practices,
                verified and up to date. No one is building campaigns around
                outdated ad specs or deprecated listing features.
              </p>
              <p>
                For WBD, this is the difference between a one-time deliverable
                and a living resource. The toolkit keeps working long after the
                initial build. It keeps every licensee aligned with the latest
                Amazon landscape without anyone having to manually chase
                updates.
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
                WBD&apos;s licensees now have one place to go for everything
                Amazon. Hasbro, Mattel, LEGO, and every other licensed seller
                in the ecosystem can open the toolkit, find exactly what they
                need, and trust that the information is current.
              </p>
              <p>
                The 5-step progression pathway means licensees at every level
                of Amazon maturity get value. A new partner setting up their
                first storefront and an established seller optimizing DSP
                campaigns use the same toolkit. Different starting points, same
                quality of guidance.
              </p>
              <p>
                The dynamic updating eliminated the biggest risk in the old
                approach. Licensees are never working from outdated information.
                That keeps WBD IP represented correctly on the platform and
                keeps licensee campaigns aligned with WBD&apos;s retail
                strategy.
              </p>
              <p>
                The bottom line is speed and compliance. When licensees execute
                faster on Amazon and fewer campaigns get rejected for brand
                misalignment, WBD&apos;s retail revenue benefits directly. The
                toolkit shortens time-to-market for licensee campaigns and
                reduces the back-and-forth that used to slow launches down.
              </p>
              <p>
                This toolkit replaced something that wasn&apos;t working with
                something that keeps getting better. It&apos;s not a document
                someone built once. It&apos;s a living system that evolves with
                Amazon, with WBD&apos;s priorities, and with what licensees
                actually need to win.
              </p>
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {[
              "Amazon Retail",
              "Licensee Enablement",
              "Consumer Products",
              "Dynamic Content",
              "Warner Bros. Discovery",
              "Retail Strategy",
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
