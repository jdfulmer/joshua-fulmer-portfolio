import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BYLINE, CADENCE, EPISODE_LABEL, SHOW_NAME, TAGLINE, TIKTOK_HANDLE } from "@/lib/links.config";

export const alt = `${SHOW_NAME.hero} ${SHOW_NAME.aside}. ${TAGLINE}. Links from Joshua Fulmer.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#15191D";

/**
 * The cleaned channel banner, cropped to 1200x630, with the small labels
 * laid back on in roughly their original spots.
 */
export default async function Image() {
  const root = process.cwd();
  const [anton, banner] = await Promise.all([
    readFile(join(root, "src/assets/fonts/Anton-Regular.ttf")),
    readFile(join(root, "public/images/links/banner.jpg")),
  ]);
  const bannerSrc = `data:image/jpeg;base64,${banner.toString("base64")}`;

  const label = {
    fontFamily: "Anton",
    fontSize: 20,
    letterSpacing: 5,
    color: INK,
    textTransform: "uppercase" as const,
    position: "absolute" as const,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#d3d9df",
          overflow: "hidden",
        }}
      >
        {/* 16:9 banner, cover-cropped to 1200x630 */}
        <img
          src={bannerSrc}
          width={1200}
          height={675}
          alt=""
          style={{ position: "absolute", left: 0, top: -22, width: 1200, height: 675 }}
        />
        <div style={{ ...label, left: 248, top: 228 }}>{BYLINE}</div>
        <div style={{ ...label, left: 76, top: 300 }}>{TIKTOK_HANDLE}</div>
        <div style={{ ...label, right: 70, top: 300 }}>{CADENCE}</div>
        <div style={{ ...label, left: 248, top: 377 }}>{TAGLINE}</div>
        <div style={{ ...label, right: 250, top: 377 }}>{EPISODE_LABEL}</div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }],
    },
  );
}
