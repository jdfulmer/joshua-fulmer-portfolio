import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send It Society | Mental Health Through Mountain Biking",
  description:
    "How a USMC veteran founded a 501(c)(3) nonprofit that uses mountain biking to raise education, awareness, and action for mental health. 85+ events since 2019.",
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
            <span className="w-px h-3 bg-border" />
            <span className="text-xs font-mono text-muted">501(c)(3)</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Send It Society
          </h1>
          <p className="text-xl text-muted mb-12">
            A non-clinical healing environment that raises education, awareness, and action for mental health through mountain biking
          </p>
        </div>

        {/* Hero Visual */}
        <div className="animate-in-delay-1 mb-16 rounded-2xl overflow-hidden border border-border">
          <Image
            src="/images/send-it-society-hero.svg"
            alt="Send It Society illustration showing mountain bikers riding trails through Pacific Northwest forest at Galbraith Mountain"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Impact Metrics */}
        <div className="animate-in-delay-1 grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-2xl p-8 mb-16">
          {[
            { value: "85+", label: "Events Since 2019" },
            { value: "Weekly", label: "Saturday Rides" },
            { value: "Monthly", label: "Extended Rides" },
            { value: "4", label: "Local Partners" },
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
                My best friend Matthew got me riding. After I came home from the
                Marine Corps, he was the one who put me on a bike and kept me
                moving. That was his thing. He knew what being outside and on
                the trail did for your head. He knew it because he lived it.
              </p>
              <p>
                In early 2019, I lost Matthew to suicide.
              </p>
              <p>
                That is not something you process and move past. It is
                something you carry. And the question it left me with was
                simple. What do I do with this. Not in a philosophical way. In
                a practical way. What do I actually build.
              </p>
              <p>
                Matthew showed me that riding was medicine. Not the clinical
                kind. The kind where you are moving and breathing and too
                focused on the trail to stay inside your own head. The kind
                where conversations happen naturally because you are side by
                side, not face to face in an office. I knew that worked. I had
                lived it. So I built something around it.
              </p>
            </div>
          </section>

          {/* The Structure */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Structure
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                Send It Society is a 501(c)(3) nonprofit. The mission is
                specific: provide a non-clinical healing environment to raise
                education, awareness, and action for mental health through
                mountain biking. Not therapy. Not a support group. A place
                where people ride bikes and talk about the stuff that matters
                when they are ready.
              </p>
              <p>
                Every Saturday at 11 AM we meet at Galbraith Mountain in
                Bellingham, WA. The format is deliberate. We start with a
                beginner-guided trail run so nobody gets left behind. Then we
                split by skill level for group laps. Mental health
                conversations are built into the ride structure. Not forced.
                Not scheduled. Just built in. The trail does the work.
              </p>
              <p>
                Last Saturday of each month is an extended group ride starting
                at noon. Longer loops. More time together. Same ethos.
              </p>
              <p>
                I run this the same way I run a design team. Clear structure.
                Consistent cadence. People know when the next ride is. They
                know someone is going to be there. That reliability is the
                whole thing. Community does not happen by accident. It happens
                because someone keeps showing up and holding the space.
              </p>
            </div>
          </section>

          {/* The Team */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Team
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                This does not run on one person. Levi Hill and Mikel lead
                rides. Brian &quot;Avocabro&quot; Doner is a team rider and
                ride lead. These are people who showed up, kept showing up,
                and took ownership. That is how you know it is real. When
                other people carry it forward without being asked.
              </p>
              <p>
                I set up the operations so it does not depend on me having a
                good week. The same systems thinking that keeps a 12-designer
                team running across 60+ brands also keeps a nonprofit running
                85+ events over multiple years.
              </p>
            </div>
          </section>

          {/* The Community */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Community
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Local Roots",
                  description:
                    "Postdoc Brewing, Whistle Workwear, Special Brews, and Crucible Brewing partner with us. This is a Bellingham thing. Local businesses backing a local mission. That is how community actually works.",
                },
                {
                  title: "Low Barrier",
                  description:
                    "You do not need to be a good rider. You do not need to talk about your feelings. You just need to show up and pedal. The beginner-guided format means nobody gets dropped. The conversations happen on their own when people feel safe enough.",
                },
                {
                  title: "Consistent Presence",
                  description:
                    "Every Saturday since 2019. Weekly rides plus monthly extended rides. For someone in a rough stretch, having one thing on the calendar that they can count on changes the trajectory of a week.",
                },
                {
                  title: "Non-Clinical Space",
                  description:
                    "The options were clinical treatment or nothing. Send It Society lives in the middle. Not therapy. Not pretending everything is fine. Just people riding bikes and looking out for each other. Sometimes that is enough.",
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

          {/* The Point */}
          <section>
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              The Point
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                Eighty-five events and counting. Each one is a few hours where
                people put their phones away, ride bikes in the dirt, and
                remember what it feels like to be part of something. There is
                no metric that captures what that is worth.
              </p>
              <p>
                Some people came to one ride and never came back. That is
                fine. Some people came to one ride and have not missed one
                since. That is the point. The door is always open. No
                membership fee. No obligation. No pressure. Just a group of
                people who show up because showing up matters.
              </p>
              <p>
                Matthew would have loved this. Not because of what it became.
                Because of what it is. People on bikes, outside, taking care
                of each other.
              </p>
              <p>
                This is the most important thing I have built.
              </p>
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {[
              "501(c)(3) Nonprofit",
              "Mental Health",
              "Mountain Biking",
              "Community",
              "Bellingham, WA",
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
