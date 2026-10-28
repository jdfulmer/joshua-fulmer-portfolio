import { Navigation } from "@/components/navigation";

/**
 * Layout for the main site: navigation on top, footer on the bottom.
 * Anything outside this route group (for example /links) renders
 * without the site chrome.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
