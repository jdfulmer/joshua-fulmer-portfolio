import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side Projects",
  description: "Experiments, tools, and things I build because I can't help it.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Design Intel",
      type: "Internal Tool",
      description:
        "AI-powered design ops dashboard that connects Figma, Asana, and leadership visibility into one system. The thing I use to keep tabs on everything without bugging my team.",
      tags: ["Figma API", "Claude", "Next.js", "Design Ops"],
      link: "/work/design-intel",
    },
  ];

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-24 md:py-32">
        <div className="animate-in">
          <p className="text-sm font-mono text-muted mb-4 tracking-wide uppercase">
            Side Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Things I build because I can&apos;t help it.
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-16">
            Tools, experiments, and the occasional rabbit hole that turns into
            something useful.
          </p>
        </div>

        <div className="space-y-6 animate-in-delay-1">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group block border border-border rounded-2xl p-8 md:p-10 hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono bg-surface border border-border px-3 py-1 rounded-full text-muted">
                  {project.type}
                </span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-muted mb-6 max-w-2xl">{project.description}</p>
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
            </a>
          ))}

          {/* Placeholder slots */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="border border-dashed border-border rounded-2xl p-8 md:p-10 flex items-center justify-center min-h-[200px]"
            >
              <p className="text-sm text-muted font-mono">
                More projects coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
