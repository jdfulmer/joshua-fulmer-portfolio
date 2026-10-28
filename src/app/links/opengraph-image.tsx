import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { TAGLINE } from "@/lib/links.config";

export const alt = "Joshua Fulmer. Links to YouTube, TikTok, the blog, and more.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const root = process.cwd();
  const [anton, marker, avatar] = await Promise.all([
    readFile(join(root, "src/assets/fonts/Anton-Regular.ttf")),
    readFile(join(root, "src/assets/fonts/PermanentMarker-Regular.ttf")),
    readFile(join(root, "public/images/links/avatar.jpg")),
  ]);
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          background: "linear-gradient(160deg, #5fa8e6 0%, #a6d2f5 60%, #e9f4fd 100%)",
          color: "#121c33",
          fontFamily: "Anton",
        }}
      >
        {/* Cloud blobs */}
        <div
          style={{
            position: "absolute",
            left: 120,
            top: 70,
            width: 520,
            height: 160,
            borderRadius: 999,
            background: "rgba(255,255,255,0.55)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 330,
            width: 460,
            height: 150,
            borderRadius: 999,
            background: "rgba(255,255,255,0.5)",
            filter: "blur(40px)",
          }}
        />

        <img
          src={avatarSrc}
          width={300}
          height={300}
          alt=""
          style={{
            borderRadius: 999,
            border: "10px solid #fff",
            transform: "rotate(-4deg)",
            boxShadow: "0 20px 50px rgba(18,28,51,0.25)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", marginLeft: 70 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 150, lineHeight: 0.95, letterSpacing: 6 }}>JOSHUA</div>
            <div
              style={{
                width: 560,
                height: 14,
                marginTop: 4,
                borderRadius: 8,
                background: "#ffd400",
                transform: "rotate(-1deg)",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "Permanent Marker",
              fontSize: 96,
              color: "#e85d2a",
              transform: "rotate(-3deg)",
              marginTop: 18,
              marginLeft: 8,
            }}
          >
            Fulmer
          </div>
          <div
            style={{
              fontFamily: "Permanent Marker",
              fontSize: 30,
              color: "#3f4d6b",
              marginTop: 26,
              maxWidth: 620,
            }}
          >
            {TAGLINE}
          </div>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 2,
              color: "#121c33",
              marginTop: 34,
              opacity: 0.8,
            }}
          >
            JOSHUAFULMER.COM/LINKS
          </div>
        </div>
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
