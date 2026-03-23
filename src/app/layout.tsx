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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
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
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:j.d.fulmer@gmail.com"
                className="hover:text-accent transition-colors"
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
