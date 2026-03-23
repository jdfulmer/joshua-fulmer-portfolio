import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chaos",
  description: "An interactive, non-linear way to explore my career and life, built for brains that don't think in straight lines.",
};

export default function ChaosPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-16 md:py-20">
        <div className="animate-in">
          <p className="text-sm font-mono text-muted mb-4 tracking-wide uppercase">
            Chaos
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Welcome to the chaos.
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10">
            Not everyone processes information the same way, and a linear
            resume doesn't work for every brain. This is a living, interactive
            map of my career, interests, and life outside of work. Zoom in,
            click around, and explore at your own pace.
          </p>
        </div>

        <div className="animate-in-delay-1 rounded-2xl overflow-hidden border border-border aspect-[16/9]">
          <iframe
            src="https://embed.figma.com/board/SC79XcAlp977xgZirGzxfu/Joshua-Fulmer-%7C-FigJam?node-id=0-1&embed-host=share"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
