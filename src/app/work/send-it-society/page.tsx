import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send It Society | Mental Wellness Through Mountain Biking",
  description:
    "How a USMC veteran founded a mental wellness nonprofit that uses mountain biking to build community, with 85+ events organized since 2019.",
};

export default function SendItSocietyPage() {
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
            <span className="text-xs font-mono text-muted">2019 - Present</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">Founder</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Send It Society
          </h1>
          <p className="text-xl text-muted mb-12">
            A mental wellness nonprofit built on the simple idea that getting people outside and moving changes everything
          </p>
        </div>

        {/* Hero Visual */}
        <div className="animate-in-delay-1 mb-16 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-[#1a4d2e] via-[#2d5a3f] to-[#0f2d1a] p-12 md:p-20 flex flex-col items-center justify-center min-h-[320px] md:min-h-[400px]">
          <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
            Mental Wellness Nonprofit
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-white/90 text-center tracking-tight">
            Send It Society
          </p>
          <p className="text-sm text-white/40 mt-4 font-mono">
            85+ Events. One Community. Get Outside.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "85+", label: "Events Organized" },
            { value: "2019", label: "Founded" },
            { value: "Active", label: "Community" },
            { value: "Mental Wellness", label: "Focus" },
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
          {/* The Why */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Why
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                I served three deployments in the Marine Corps. Made Sergeant.
                Came home and watched people I served with struggle in ways
                that nobody was talking about. Not the dramatic version you see
                in movies. The quiet kind. The kind where someone stops
                answering the phone and you don&apos;t notice until it&apos;s
                been three weeks.
              </p>
              <p>
                Mental wellness isn&apos;t an abstract concept for me. I&apos;ve
                seen what happens when people lose connection. When the
                structure disappears and nothing replaces it. When you go from
                being surrounded by people who would take a bullet for you to
                sitting alone on a Tuesday with nothing on the calendar.
              </p>
              <p>
                I started riding mountain bikes because it was the one thing
                that turned my brain off. You can&apos;t overthink when
                you&apos;re trying not to hit a tree. And I noticed that
                every time I got someone else on a bike, the same thing
                happened. They stopped carrying whatever they walked in with.
                Even if it was just for an hour.
              </p>
              <p>
                So I built something around that.
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
                Send It Society is not a therapy program. It&apos;s not a
                clinical intervention. It&apos;s a community that gets people
                outside, moving, and around other people who give a damn.
                Mountain biking is the vehicle. The actual work is showing up.
              </p>
              <p>
                We organize group rides, trail days, and community events.
                Low barrier to entry. You don&apos;t need to be a good rider.
                You don&apos;t need to talk about your feelings. You just need
                to show up and pedal. The conversations happen on their own
                when people feel safe enough to have them.
              </p>
              <p>
                I run this the same way I run a design team. Clear structure.
                Consistent cadence. People know when the next event is. They
                know someone is going to be there. They know it&apos;s not
                going to be weird. That reliability is the whole thing.
                Community doesn&apos;t happen by accident. It happens because
                someone keeps showing up and holding the space.
              </p>
              <p>
                I incorporated it as a nonprofit in January 2019. Built a
                board of directors. Set up the operations so it doesn&apos;t
                depend on one person having a good week. The same systems
                thinking that keeps a 12-designer team running across 60+
                brands also keeps a nonprofit running 85+ events over
                multiple years.
              </p>
            </div>
          </section>

          {/* What It Builds */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              What It Builds
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Connection",
                  description:
                    "People who were isolated find a crew. Not a support group. A crew. People who ride together, check in on each other, and actually mean it when they ask how you're doing.",
                },
                {
                  title: "Routine",
                  description:
                    "A regular reason to get outside and move. That sounds simple because it is. But for someone in a rough stretch, having one thing on the calendar that they look forward to can change the trajectory of a week.",
                },
                {
                  title: "Identity Beyond the Past",
                  description:
                    "For veterans especially, the transition out of service can feel like losing who you are. Riding gives people something to be good at, something to work toward, and a community that has nothing to do with rank or deployment history.",
                },
                {
                  title: "Mental Space",
                  description:
                    "An hour on a trail resets your head in a way that nothing else does. The focus required to ride pushes everything else out. You come back to the parking lot a different person than the one who got out of the car.",
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
                Eighty-five events and counting. Each one is a few hours where
                people put their phones away, ride bikes in the dirt, and
                remember what it feels like to be part of something. There
                is no metric that captures what that is worth.
              </p>
              <p>
                Some people came to one ride and never came back. That&apos;s
                fine. Some people came to one ride and haven&apos;t missed
                one since. That&apos;s the point. The door is always open.
                There&apos;s no membership fee, no obligation, no pressure.
                Just a group of people who show up because showing up matters.
              </p>
              <p>
                I started this because I saw a gap. People were struggling and
                the options were either clinical treatment or nothing. Send It
                Society lives in the middle. It&apos;s not therapy. It&apos;s
                not pretending everything is fine. It&apos;s just a bunch of
                people riding bikes and looking out for each other. Sometimes
                that&apos;s enough.
              </p>
              <p>
                This is the most important thing I&apos;ve built. Not because
                of the scale. Because of what it means to the people who
                needed it.
              </p>
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {[
              "Mental Wellness",
              "Nonprofit",
              "Community",
              "Mountain Biking",
              "Leadership",
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
