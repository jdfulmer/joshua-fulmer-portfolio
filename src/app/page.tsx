import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  const featured = caseStudies.filter((c) => c.status === "published");

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="py-24 md:py-32 lg:py-40 animate-in">
          <p className="text-sm font-mono text-muted mb-6 tracking-wide uppercase">
            Design Leadership / AI Solutions / Design Ops
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
            I build the systems that help design teams do their best work.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            18 years of translating strategy into results. Currently leading a
            team of 15+ designers and building AI-powered tooling that gives
            leadership the visibility they actually need. Not another dashboard
            nobody checks.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
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
              className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full border border-border hover:border-foreground transition-colors"
            >
              About Me
            </Link>
          </div>
        </section>

        {/* Featured Work */}
        <section className="pb-24 md:pb-32 animate-in-delay-2">
          <div className="flex items-center justify-between mb-12">
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

          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block"
              >
                <article className="border border-border rounded-2xl p-8 md:p-10 hover:border-foreground/20 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
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
                        <p className="text-lg md:text-xl font-semibold">
                          {metric.value}
                        </p>
                        <p className="text-xs text-muted mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* What I Do */}
        <section className="pb-24 md:pb-32 animate-in-delay-3">
          <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-12">
            What I Bring to the Table
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Design Leadership",
                description:
                  "Managing teams, setting direction, and making sure the work actually ships. 15+ designers across multiple clients and verticals.",
              },
              {
                title: "AI-Powered Tooling",
                description:
                  "Building real tools with Claude, Figma APIs, and whatever else gets the job done. Not theoretical. In production, solving real problems.",
              },
              {
                title: "Design Operations",
                description:
                  "The systems behind the systems. Workflows, processes, and visibility tools that let teams move fast without breaking things.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-border rounded-2xl p-8"
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
