import { Anton, Inter, Permanent_Marker } from "next/font/google";
import "./links.css";

// Loaded only for this route so the rest of the site does not pay for them.
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

// Brand spec for small labels: Inter Bold, tracked caps.
const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Chrome-free layout for the link-in-bio page. No site navigation and no
 * footer on purpose: this page is reached from social bios only.
 */
export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`linkbio ${anton.variable} ${marker.variable} ${inter.variable} flex-1 flex flex-col`}>
      {children}
    </div>
  );
}
