import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adobe to Figma Migration | Operational Transformation Across 60+ Brands",
  description:
    "How a design lead migrated a 12-person team from Adobe Creative Suite to Figma, transforming a sequential file-passing workflow into multiplayer collaboration with a completely new vendor approval pipeline across 60+ brands.",
};

export default function FigmaMigrationPage() {
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
            <span className="text-xs font-mono text-muted">Dec 2024 - Nov 2025</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">Design Lead</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Adobe to Figma Migration
          </h1>
          <p className="text-xl text-muted mb-12">
            How we turned a static file-passing workflow into real-time multiplayer design and cut revision cycles by 40%
          </p>
        </div>

        {/* Hero Visual */}
        <div className="animate-in-delay-1 mb-16 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-[#0c8ce9] via-[#a259ff] to-[#f24e1e] p-12 md:p-20 flex flex-col items-center justify-center min-h-[320px] md:min-h-[400px]">
          <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
            Platform Migration
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-white/90 text-center tracking-tight">
            Adobe to Figma
          </p>
          <p className="text-sm text-white/40 mt-4 font-mono">
            12 Designers. 60+ Brands. 40% Fewer Revision Cycles.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "40%", label: "Reduction in Revision Cycles" },
            { value: "Eliminated", label: "SharePoint/OneDrive File Hosting" },
            { value: "In-Context", label: "Vendor Approval Pipeline" },
            { value: "Simultaneous", label: "Multi-Designer Collaboration" },
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
                Every design lived as a static file on SharePoint or OneDrive.
                To collaborate, you downloaded the file, worked on it, and
                re-uploaded it. If someone else needed the same file, they
                waited. Version control was a mess. &quot;Final_v3_ACTUAL_FINAL&quot;
                was a running joke that stopped being funny a long time ago.
              </p>
              <p>
                Approvals were worse. We work with multiple vendors across 60+
                brands. Every approval meant exporting the design, emailing it
                to the vendor, waiting for PDF markups, interpreting handwritten
                notes, making changes, re-exporting, and sending it back. One
                round of feedback could take days. Multiply that by the number
                of vendors and brands we support, and you start to see the
                problem.
              </p>
              <p>
                The tools forced a sequential workflow. One person works. Everyone
                else waits. Feedback is async and lossy. Files live in folders
                that nobody can navigate. The team was slower than it needed to
                be, and the bottleneck wasn&apos;t the designers. It was the
                infrastructure.
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
                Swapping Adobe for Figma is easy to say. Getting 12 designers
                with years of Adobe muscle memory to actually make the switch
                is a different thing entirely. This was a change management
                exercise, not a software installation.
              </p>
              <p>
                I started with buy-in. I showed the team what Figma could do
                that Adobe couldn&apos;t. Not feature comparisons. Real
                scenarios from our actual work. Here&apos;s how approvals
                look in Figma. Here&apos;s what happens when two people need
                the same file. Here&apos;s what your Tuesday looks like when
                you don&apos;t have to wait for someone to finish before you
                can start.
              </p>
              <p>
                Then I managed the transition in phases. We didn&apos;t flip a
                switch. We migrated project by project, training as we went.
                New work started in Figma. Legacy work stayed in Adobe until
                it wrapped. The team kept shipping the entire time. No missed
                deadlines. No gaps in delivery. Clients never felt the change.
              </p>
              <p>
                I ran training sessions, built templates, created shared
                libraries, and set up the team&apos;s Figma workspace to
                mirror the way we actually work. Ecomm design is a fringe
                case. The default Figma setup doesn&apos;t account for the
                volume, the vendor complexity, or the approval chains we
                deal with daily. So we adjusted it to fit our workflow
                instead of the other way around.
              </p>
            </div>
          </section>

          {/* What Changed */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              What Changed
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Multiplayer Design",
                  description:
                    "Multiple designers working in the same file at the same time. No more downloading, editing, re-uploading. No more waiting for someone to finish. The team moves together now.",
                },
                {
                  title: "Vendor Approvals Transformed",
                  description:
                    "Vendors view designs directly in Figma, leave comments in context, and approve in place. No more exporting to PDF, emailing markups, or deciphering handwritten notes. Across 60+ brands and multiple vendors, this changed everything.",
                },
                {
                  title: "Team Flexibility",
                  description:
                    "Designers can jump into each other's work, support each other on tight deadlines, and cover gaps without file conflicts. The tool enables a level of flexibility the old setup made impossible.",
                },
                {
                  title: "File Management Eliminated",
                  description:
                    "No more SharePoint. No more OneDrive hosting for design files. Everything lives in Figma, accessible to anyone with the right permissions. Version history is built in. The file system problem just disappeared.",
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
                The approval pipeline alone justified the migration. What used
                to take days of back-and-forth now happens in real time. A
                vendor opens a Figma link, sees the design, leaves a comment
                where the comment belongs, and we resolve it on the spot.
                Across 60+ brands with multiple vendors each, the time savings
                compound fast.
              </p>
              <p>
                But the bigger change was how the team works. Designers
                stopped working in silos. They started jumping into each
                other&apos;s files, offering feedback, picking up overflow
                work without the overhead of file transfers and version
                merges. The team became more fluid. More resilient. When
                someone is out sick or slammed on a deadline, the rest of the
                team can step in without friction.
              </p>
              <p>
                The 40% reduction in revision cycles meant faster delivery to
                clients and higher throughput across the board. That operational
                shift let the team take on more brands without growing
                headcount, turning a workflow change into a real capacity gain.
              </p>
              <p>
                This wasn&apos;t a tool migration. It was an operational
                transformation. We went from a sequential, file-based workflow
                to a real-time, multiplayer one. The team is faster, more
                collaborative, and more flexible than it was before. And we
                made the switch without dropping a single deliverable.
              </p>
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {[
              "Figma",
              "Change Management",
              "Design Ops",
              "Team Leadership",
              "Vendor Collaboration",
              "Platform Migration",
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
