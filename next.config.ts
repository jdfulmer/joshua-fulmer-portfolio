import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // YouTube thumbnails for the featured card on /links.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
  async redirects() {
    // Short aliases for the link-in-bio page. Query strings (?src=tiktok)
    // pass through to the destination automatically.
    return [
      { source: "/go", destination: "/links", permanent: true },
      { source: "/bio", destination: "/links", permanent: true },
    ];
  },
};

export default nextConfig;
