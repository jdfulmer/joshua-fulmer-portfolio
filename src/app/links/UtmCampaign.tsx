"use client";

import { useEffect } from "react";

/**
 * Reads ?src= from the page URL (for example /links?src=tiktok) and
 * stamps it onto every internal link as utm_campaign. Runs after
 * hydration so the page itself can stay static and cached.
 */
export function UtmCampaign() {
  useEffect(() => {
    const src = new URLSearchParams(window.location.search).get("src");
    if (!src) return;

    const campaign = src.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 32);
    if (!campaign) return;

    document
      .querySelectorAll<HTMLAnchorElement>("a[data-utm]")
      .forEach((anchor) => {
        const url = new URL(anchor.href, window.location.origin);
        url.searchParams.set("utm_campaign", campaign);
        anchor.href = url.toString();
      });
  }, []);

  return null;
}
