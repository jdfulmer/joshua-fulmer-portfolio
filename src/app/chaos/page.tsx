import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chaos",
  description: "The messy middle. Where ideas live before they become something.",
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
            The messy middle.
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10">
            Where ideas live before they become something. This is the
            whiteboard, the sticky notes, the half-formed thoughts that
            eventually turn into real work.
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
