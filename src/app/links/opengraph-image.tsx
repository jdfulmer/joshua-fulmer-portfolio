import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BYLINE, EPISODE_LABEL, SHOW_NAME, TAGLINE, TIKTOK_HANDLE } from "@/lib/links.config";

export const alt = `${SHOW_NAME.hero} ${SHOW_NAME.aside}. ${TAGLINE}. Links from Joshua Fulmer.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#15191D";
const ORANGE = "#EE8A2A";

export default async function Image() {
  const root = process.cwd();
  const [anton, marker, avatar] = await Promise.all([
    readFile(join(root, "src/assets/fonts/Anton-Regular.ttf")),
    readFile(join(root, "src/assets/fonts/PermanentMarker-Regular.ttf")),
    readFile(join(root, "public/images/links/avatar.jpg")),
  ]);
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  const label = {
    fontFamily: "Anton",
    fontSize: 22,
    letterSpacing: 6,
    color: INK,
    textTransform: "uppercase" as const,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(170deg, #d3d9df 0%, #c9ced3 50%, #e9ecef 100%)",
          color: INK,
          fontFamily: "Anton",
        }}
      >
        {/* Cloud blobs */}
        <div
          style={{
            position: "absolute",
            left: 90,
            top: 40,
            width: 560,
            height: 170,
            borderRadius: 999,
            background: "rgba(255,255,255,0.55)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            top: 360,
            width: 520,
            height: 170,
            borderRadius: 999,
            background: "rgba(255,255,255,0.5)",
            filter: "blur(40px)",
          }}
        />

        {/* Top labels */}
        <div style={{ ...label, position: "absolute", left: 120, top: 120 }}>{BYLINE}</div>
        <div style={{ ...label, position: "absolute", right: 120, top: 120 }}>{TIKTOK_HANDLE}</div>

        {/* Hero word with the photo over it */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <div
            style={{
              fontSize: 300,
              lineHeight: 0.9,
              letterSpacing: 2,
              color: ORANGE,
              textTransform: "uppercase",
            }}
          >
            {SHOW_NAME.hero}
          </div>
          <img
            src={avatarSrc}
            width={250}
            height={250}
            alt=""
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-125px, -125px)",
              borderRadius: 999,
              border: "8px solid #fff",
              boxShadow: "0 20px 50px rgba(21,25,29,0.3)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 10,
              bottom: -30,
              fontFamily: "Permanent Marker",
              fontSize: 130,
              color: "#fff",
              transform: "rotate(-6deg)",
              textShadow: "0 4px 14px rgba(21,25,29,0.45)",
            }}
          >
            {SHOW_NAME.aside}
          </div>
        </div>

        {/* Bottom labels */}
        <div style={{ ...label, position: "absolute", left: 120, bottom: 110 }}>{TAGLINE}</div>
        <div style={{ ...label, position: "absolute", right: 120, bottom: 110 }}>{EPISODE_LABEL}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: anton, style: "normal", weight: 400 },
        { name: "Permanent Marker", data: marker, style: "normal", weight: 400 },
      ],
    },
  );
}
