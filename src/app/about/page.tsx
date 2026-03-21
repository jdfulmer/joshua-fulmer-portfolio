import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Design Leader, USMC Veteran, Builder",
  description:
    "18 years of design leadership, from the Marines to managing 12 designers across 60+ brands at D2E Labs.",
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="animate-in">
            <p className="text-sm font-mono text-accent mb-4 tracking-wide uppercase">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              I build the infrastructure that lets design teams do their best work at scale.
            </h1>
          </div>

          {/* Headshot */}
          <div className="animate-in-delay-1 mb-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/headshot.jpg"
                alt="Joshua Fulmer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="animate-in-delay-1 space-y-6 text-lg text-muted leading-relaxed">
            {/* Elevator pitch */}
            <p className="text-xl text-foreground leading-relaxed">
              Design leader. 18 years of experience. Currently leading 12
              designers across 60+ brands, building AI-powered ops tooling, and
              creating the systems that let teams scale without burning out.
            </p>

            <p>
              I&apos;m the kind of leader whose work doesn&apos;t always fit
              neatly into a job title. Strategy. Systems. Hiring and developing
              talent. Building tooling that protects the team. Whatever the
              problem requires.
            </p>

            <p>
              Right now, I lead a team of 12 designers across 60+ brands at D2E
              Labs. I hired many of those designers. I mentor them. I fight for
              their growth. A big part of my job is building a team culture
              where people feel safe to take risks and do ambitious work. The
              other part is building the systems and processes that make that
              possible at scale.
            </p>

            <p>
              I&apos;ve been building AI-powered tools that solve real
              problems — production systems that teams rely on daily. Design
              Intel, internal workflow automation, Claude-powered analysis
              tools. If it makes the team faster or gives leadership better
              visibility, I&apos;m probably building it.
            </p>
          </div>

          <div className="animate-in-delay-2 mt-12">
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              Before All This
            </h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                I served in the United States Marine Corps. That experience
                shaped everything about how I lead people, solve problems, and
                get things done when the stakes matter. You learn fast what real
                accountability looks like when people are counting on you. No
                shortcuts. No excuses.
              </p>
              <p>
                I also spent time in the craft beer industry, which taught me
                more about brand, community, and authentic storytelling than any
                design brief ever could.
              </p>
              <p>
                Military discipline, creative industry hustle, and nearly two
                decades of growing teams and shipping work — that combination
                is what makes my approach different. I build things that work,
                and I build teams that can keep them working after I leave the
                room.
              </p>
            </div>
          </div>

          <div className="animate-in-delay-2 mt-12">
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              Career Timeline
            </h2>
            <div className="space-y-8">
              {/* USMC */}
              <div className="border-l-2 border-border pl-6">
                <p className="text-sm font-mono text-muted tracking-wide uppercase mb-2">
                  United States Marine Corps
                </p>
                <p className="text-lg font-semibold mb-3">
                  Sergeant. Multiple deployments. Multiple specializations.
                </p>
                <div className="space-y-3 text-muted leading-relaxed">
                  <p>
                    Started in infantry, then retrained across multiple
                    specializations — from airfield systems to fire rescue. The
                    Corps needed people who could adapt and lead in unfamiliar
                    territory. Earned the Navy and Marine Corps Achievement
                    Medal and held a DOD SECRET clearance.
                  </p>
                  <p>
                    The leadership lessons from that period are still the
                    foundation of everything I do. Take care of your people.
                    Build systems that don&apos;t break. Stay calm when things
                    go sideways.
                  </p>
                </div>
              </div>

              {/* FAA */}
              <div className="border-l-2 border-border pl-6">
                <p className="text-sm font-mono text-muted tracking-wide uppercase mb-2">
                  FAA Control Tower Operations
                </p>
                <p className="text-lg font-semibold mb-3">
                  Control Tower Operator Permit holder.
                </p>
                <div className="space-y-3 text-muted leading-relaxed">
                  <p>
                    Earned my FAA Control Tower Operator Permit in 2012. Air traffic control is the
                    definition of high-stakes operational work. Zero room for
                    error. Clear communication. Constant situational awareness.
                    Those habits stuck.
                  </p>
                </div>
              </div>

              {/* Design Career */}
              <div className="border-l-2 border-border pl-6">
                <p className="text-sm font-mono text-muted tracking-wide uppercase mb-2">
                  Design Career to Present
                </p>
                <p className="text-lg font-semibold mb-3">
                  From individual contributor to leading 12 designers at D2E Labs.
                </p>
                <div className="space-y-3 text-muted leading-relaxed">
                  <p>
                    The design career started with doing the work. Hands on.
                    Every pixel. Over time that shifted to building teams,
                    hiring designers, developing junior talent, and creating the
                    operational infrastructure that lets a team of 12 handle
                    60+ brands without burning out.
                  </p>
                  <p>
                    Now at D2E Labs (Lunge Marketing / Market Defense), I own
                    design leadership across the organization. That means
                    strategy, team development, tooling, and delivery. I also
                    build AI-powered production tools that are already saving
                    the team 20+ hours per month on manual reporting alone.
                  </p>
                </div>
              </div>

              {/* Certifications & Credentials */}
              <div className="border-l-2 border-border pl-6">
                <p className="text-sm font-mono text-muted tracking-wide uppercase mb-2">
                  Credentials
                </p>
                <p className="text-lg font-semibold mb-3">
                  Beyond design leadership.
                </p>
                <div className="text-muted leading-relaxed">
                  <ul className="space-y-2">
                    <li>FAA Control Tower Operator Permit (2012)</li>
                    <li>Meta Certified Digital Marketing Associate (2024)</li>
                    <li>Navy and Marine Corps Achievement Medal</li>
                    <li>DOD SECRET Clearance (inactive)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-in-delay-3 mt-12">
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              Design Philosophy
            </h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                I believe in operational systems over heroic effort. If your
                team needs a hero to ship on time, your process is broken.
                The best design leaders build infrastructure that lets
                talented people do their best work without burning out.
                That is the job. Everything else is vanity.
              </p>
              <p>
                I build tools that protect people. Capacity planning,
                workload visibility, delivery tracking. Not because I love
                spreadsheets, but because when leadership can see the real
                picture, they stop overloading the team. Good tooling is an
                act of care for the people doing the work.
              </p>
              <p>
                AI is an enabler, not a replacement. I use Claude and other
                AI tools every single day. They make my team faster. They
                eliminate drudge work. They give us time back for the thinking
                that actually matters. But they don&apos;t replace designers.
                They make designers more dangerous.
              </p>
              <p>
                The goal is always the same. Build something that works.
                Build a team that can sustain it. Then get out of the way
                and let them run.
              </p>
            </div>
          </div>

          <div className="animate-in-delay-3 mt-12">
            <h2 className="text-sm font-mono text-muted tracking-wide uppercase mb-6">
              What I Work With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Figma",
                "Claude / Claude Code",
                "Design Systems",
                "Asana",
                "Next.js",
                "Vercel",
                "Figma APIs",
                "Design Ops",
                "Team Leadership",
              ].map((tool) => (
                <div
                  key={tool}
                  className="border border-border rounded-xl px-4 py-3 text-sm text-muted"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="animate-in-delay-3 mt-16 pt-8 border-t border-border">
            <p className="text-lg text-muted mb-6">
              I&apos;m currently exploring design leadership roles. If you&apos;re
              building a team that needs operational infrastructure to scale,
              I&apos;d love to talk.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-medium rounded-full hover:bg-accent-hover transition-colors"
              >
                Get in touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              >
                View my work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
