import type { MetadataRoute } from "next";
import { caseStudies, projects } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/links.config";

/**
 * Public routes only. The link-in-bio page (/links) and its aliases
 * (/go, /bio) are intentionally left out: that page is noindex and is
 * meant to be reached from social bios, not search.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/chaos", "/contact", "/projects"];
  const workRoutes = caseStudies.map((c) => `/work/${c.slug}`);
  const projectRoutes = projects.map((p) => `/projects/${p.slug}`);

  return [...staticRoutes, ...workRoutes, ...projectRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
