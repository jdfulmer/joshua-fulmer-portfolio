import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Joshua Fulmer.",
};

export default function ContactPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto py-16 md:py-20">
        <div className="max-w-2xl animate-in">
          <p className="text-sm font-mono text-muted mb-4 tracking-wide uppercase">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Let&apos;s talk.
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Whether it&apos;s about design leadership, AI-powered tooling,
            or just a good conversation. I&apos;m always open to connecting
            with people who are building something worth building.
          </p>

          <div className="space-y-6 animate-in-delay-1">
            <a
              href="mailto:hello@joshuafulmer.com"
              className="group flex items-center justify-between border border-border rounded-2xl p-6 hover:border-foreground/20 transition-all duration-300"
            >
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm text-muted">hello@joshuafulmer.com</p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all"
              >
                <path d="M4 10h12M12 6l4 4-4 4" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/joshuafulmer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-border rounded-2xl p-6 hover:border-foreground/20 transition-all duration-300"
            >
              <div>
                <p className="font-medium mb-1">LinkedIn</p>
                <p className="text-sm text-muted">Connect with me</p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all"
              >
                <path d="M4 10h12M12 6l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
