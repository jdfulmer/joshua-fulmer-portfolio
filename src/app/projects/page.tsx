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
      completed: null,
    },
    {
      title: "Amazon Resources",
      type: "Figma Community",
      description:
        "Plug-and-play Figma templates for Amazon sellers. Preview and refine your Brand Story, A+, and Store layouts before uploading. Everything I learned building enterprise Amazon tooling, packaged up and shared for free.",
      tags: ["Figma", "UX/UI Design", "E-Commerce"],
      link: "/work",
      completed: "September 2024",
    },
    {
      title: "Roll 2 Role",
      type: "Creative AI",
      description:
        "AI-generated cinematic assets for a D&D live stream called Roll 2 Role. Used ComfyAI with a custom LoRA database to build contextual scene imagery for the \"For Peace Through Death\" campaign. Not portraits. Full world-building. Got contracted for their next campaign.",
      tags: ["ComfyAI", "LoRA", "World-Building", "Narrative Design"],
      link: "/work",
      completed: "July 2022",
    },
    {
      title: "Garden Path Fermentation",
      type: "Brand Consulting",
      description:
        "Social media strategy and brand consulting for a craft brewery opening a second location in Bellingham, WA. Built the content engine from scratch. 900% organic social growth in two quarters with almost no ad spend.",
      tags: ["Brand Strategy", "Social Media", "Content", "Craft Beer"],
      link: "/work",
      completed: "July 2024",
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
                {project.completed && (
                  <span className="text-xs font-mono text-muted">
                    {project.completed}
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h2>
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
