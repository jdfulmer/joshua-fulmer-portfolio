import Link from "next/link";
import Image from "next/image";
import { caseStudies, projects } from "@/lib/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in design leadership, AI-powered tooling, and design operations. Plus consulting, community, and independent projects.",
};

export default function WorkPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-16 md:py-20">
        <div className="animate-in">
          <p className="text-sm font-mono text-accent mb-4 tracking-wide uppercase">
            Work
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Selected Work
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-16">
            Each project represents a different dimension of leading design at
            scale — from AI tooling to change management to community building.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-6 animate-in-delay-1">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block"
            >
              <article className="border border-border rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                {study.image && (
                  <div className="relative w-full aspect-[16/9] bg-surface">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-8 md:p-10">
                <div className="md:flex md:items-start md:justify-between md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                        {study.category}
                      </span>
                      {study.year && (
                        <>
                          <span className="w-px h-3 bg-border" />
                          <span className="text-xs font-mono text-muted">
                            {study.year}
                          </span>
                        </>
                      )}
                      {study.role && (
                        <>
                          <span className="w-px h-3 bg-border" />
                          <span className="text-xs font-mono text-muted">
                            {study.role}
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-muted mb-4">{study.subtitle}</p>

                    {study.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono bg-surface border border-border px-3 py-1 rounded-full text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {study.metrics.length > 0 && (
                    <div className="mt-6 md:mt-0 flex gap-8 md:gap-6 md:text-right">
                      {study.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <p className="text-xl font-semibold text-accent">
                            {metric.value}
                          </p>
                          <p className="text-xs text-muted mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="mt-20 animate-in-delay-2">
          <h2 className="text-sm font-mono text-accent mb-8 tracking-wide uppercase">
            Additional Projects
          </h2>
          <p className="text-muted mb-8 max-w-2xl">
            Tools, experiments, and consulting work outside the day job.
          </p>
          <div className="space-y-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block border border-border rounded-2xl p-8 md:p-10 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  <span className="w-px h-3 bg-border" />
                  <span className="text-xs font-mono text-muted">
                    {project.completed}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mb-6 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-surface border border-border px-3 py-1 rounded-full text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
