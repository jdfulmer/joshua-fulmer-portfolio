import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Joshua Fulmer about design leadership, AI-powered design ops, or team leadership roles. Based in Bellingham, WA.",
};

export default function ContactPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-16 md:py-20">
        <div className="max-w-2xl animate-in">
          <p className="text-sm font-mono text-accent mb-4 tracking-wide uppercase">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Let&apos;s talk.
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-12">
            Whether it&apos;s about design leadership, AI-powered tooling,
            or just a good conversation. I&apos;m always open to connecting
            with people who are building something worth building.
          </p>

          <div className="space-y-6 animate-in-delay-1">
            <a
              href="mailto:j.d.fulmer@gmail.com"
              className="group flex items-center justify-between border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm text-muted">j.d.fulmer@gmail.com</p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
              >
                <path d="M4 10h12M12 6l4 4-4 4" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/joshuafulmer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div>
                <p className="font-medium mb-1">LinkedIn</p>
                <p className="text-sm text-muted">Let&apos;s connect on LinkedIn</p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
              >
                <path d="M4 10h12M12 6l4 4-4 4" />
              </svg>
            </a>
          </div>

          <div className="mt-12 animate-in-delay-2">
            <Link
              href="/work"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              &larr; Back to work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
