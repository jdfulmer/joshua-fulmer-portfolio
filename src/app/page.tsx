import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joshua Fulmer | Design Leadership & AI Solutions",
  description:
    "Design leader with 18 years of experience leading 12 designers across 60+ brands including work for Warner Bros. Discovery. Building AI-powered ops tooling that gives leadership real visibility.",
};

export default function Home() {
  const featured = caseStudies.filter((c) => c.status === "published");

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="py-16 md:py-20 lg:py-24 animate-in">
          <p className="text-sm font-mono text-accent mb-6 tracking-wide uppercase">
            Design Leadership &middot; AI Solutions &middot; Design Ops
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            I build the systems that let design teams{" "}
            <span className="text-accent">scale.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            18 years of translating strategy into results. Currently leading
            12 designers across 60+ brands and building AI-powered tooling that gives
            leadership the visibility they actually need.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-medium rounded-full hover:bg-accent-hover transition-colors"
            >
              View Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              About Me
            </Link>
          </div>
        </section>

        {/* Credibility */}
        <section className="pb-16 md:pb-20 animate-in-delay-1">
          <p className="text-xs font-mono text-muted tracking-wide uppercase mb-6">
            Brands I&apos;ve led design for
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            {[
              "Warner Bros. Discovery",
              "Dr. Dennis Gross",
              "Hasbro",
              "PHLUR",
              "Mattel",
              "Martha Stewart",
              "LEGO",
              "Amazon",
            ].map((brand) => (
              <span key={brand} className="whitespace-nowrap">
                {brand}
              </span>
            ))}
            <span className="text-muted/50">+ 50 more</span>
          </div>
        </section>

        {/* Featured Work */}
        <section className="pb-16 md:pb-20 animate-in-delay-2">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase">
              Featured Work
            </h2>
            <Link
              href="/work"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block"
              >
                <article className="border border-border rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full flex flex-col">
                  {/* Thumbnail */}
                  {study.image ? (
                    <div className="relative w-full aspect-[16/9] bg-surface">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#1a1640] via-[#2d1b69] to-[#0f172a] flex items-center justify-center">
                      <p className="text-lg font-semibold text-white/60">{study.title}</p>
                    </div>
                  )}

                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-muted">
                        {study.year}
                      </span>
                      <span className="w-px h-3 bg-border" />
                      <span className="text-xs font-mono text-muted">
                        {study.role}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted mb-6">{study.subtitle}</p>

                    {/* Metrics */}
                    <div className="mt-auto grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      {study.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label}>
                          <p className="text-lg md:text-xl font-semibold text-accent">
                            {metric.value}
                          </p>
                          <p className="text-xs text-muted mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* What I Do */}
        <section className="pb-16 md:pb-20 animate-in-delay-3">
          <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-12">
            How I Work
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Design Leadership",
                description:
                  "12 designers across 60+ brands. I set the direction, protect the team from overload, and make sure the work ships on time. Not by hovering. By building the systems that make it possible.",
              },
              {
                title: "AI-Powered Tooling",
                description:
                  "Production tools built with Claude, Figma APIs, and Next.js. Already saving 20+ hours of manual reporting per month. These are tools my team relies on every day.",
              },
              {
                title: "Design Operations",
                description:
                  "The infrastructure that makes a design team actually function. Workflows, capacity planning, visibility tooling, and delivery tracking. The stuff nobody sees until it's missing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-border rounded-2xl p-8 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300"
              >
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
