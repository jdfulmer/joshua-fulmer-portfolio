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
    "Design leader with 18 years of experience building AI-powered tools and systems for design teams. Currently leading design ops at D2E Labs.",
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
        <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Joshua Fulmer &copy; {new Date().getFullYear()}
            </p>
            <div className="flex gap-6 text-sm text-muted">
              <a
                href="https://www.linkedin.com/in/joshuafulmer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@joshuafulmer.com"
                className="hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
