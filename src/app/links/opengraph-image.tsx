import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SHOW_NAME, TAGLINE } from "@/lib/links.config";

export const alt = `${SHOW_NAME.hero} ${SHOW_NAME.aside}. ${TAGLINE}. Links from Joshua Fulmer.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The channel banner as is, cover-cropped from 16:9 to 1200x630. */
export default async function Image() {
  const banner = await readFile(join(process.cwd(), "src/assets/og-banner.jpg"));
  const bannerSrc = `data:image/jpeg;base64,${banner.toString("base64")}`;

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
        <img
          src={bannerSrc}
          width={1200}
          height={675}
          alt=""
          style={{ position: "absolute", left: 0, top: -22, width: 1200, height: 675 }}
        />
      </div>
    ),
    size,
  );
}
