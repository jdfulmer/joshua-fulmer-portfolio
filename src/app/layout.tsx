import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Joshua Fulmer | Design Leadership & AI Solutions",
    template: "%s | Joshua Fulmer",
  },
  description:
    "Design leader with 18 years of experience leading a 12-designer team across 60+ brands including Warner Bros. Discovery. Building AI-powered tooling and operational infrastructure for scaling design teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border px-6 py-12 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Open to design leadership roles
                </p>
                <p className="text-sm text-muted">
                  Currently exploring opportunities where I can build operational
                  infrastructure for scaling design teams.
                </p>
              </div>
              <div className="flex gap-6 text-sm text-muted shrink-0">
                <a
                  href="https://www.linkedin.com/in/joshuafulmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:hello@joshuafulmer.com"
                  className="hover:text-accent transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
            <p className="text-xs text-muted mt-8">
              Joshua Fulmer &copy; {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
