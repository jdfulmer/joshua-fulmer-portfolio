export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  year: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  status: "published" | "coming-soon";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "design-intel",
    title: "Design Intel",
    subtitle: "AI-Powered Design Ops Dashboard",
    description:
      "Built an internal design operations tool that gives leadership real-time visibility into team workload, client pressure, and delivery metrics across Figma and Asana. Not another dashboard. A system that actually tells you what's happening before it becomes a problem.",
    role: "Design Lead & Builder",
    year: "2024–Present",
    metrics: [
      { label: "Designers Supported", value: "15+" },
      { label: "Data Sources Integrated", value: "4" },
      { label: "Manual Reporting Hours Saved", value: "20+/mo" },
    ],
    tags: ["Design Ops", "AI", "Figma API", "Next.js", "Claude"],
    status: "published",
  },
  {
    slug: "wbd-toolkit",
    title: "WBD Licensee Toolkit",
    subtitle: "Dynamic Brand Asset System for Warner Bros. Discovery",
    description:
      "What started as a straightforward toolkit build for Warner Bros. Discovery licensees turned into something bigger. A dynamic, flexible system serving the entire Consumer Products ecosystem. Partnered with WBD Consumer Products, Amazon Retail, and other major partners to create a platform that scales across all licensees without losing brand integrity.",
    role: "Design Lead",
    year: "2023–2024",
    metrics: [
      { label: "Licensees Supported", value: "All" },
      { label: "Partner Organizations", value: "3+" },
      { label: "Toolkit Evolution", value: "Static to Dynamic" },
    ],
    tags: ["Brand Systems", "Design Systems", "Enterprise", "Consumer Products"],
    status: "published",
  },
  {
    slug: "figma-migration",
    title: "Adobe to Figma Migration",
    subtitle: "Leading a 15-Person Team Through Tool Transformation",
    description:
      "Led the full transition of a 15-designer team from Adobe Creative Suite to Figma. Not just a tool swap. A fundamental shift in how the team collaborates, delivers, and thinks about design systems.",
    role: "Design Lead",
    year: "2023",
    metrics: [
      { label: "Team Size", value: "15" },
      { label: "Status", value: "Case study in progress" },
    ],
    tags: ["Figma", "Change Management", "Design Ops", "Team Leadership"],
    status: "coming-soon",
  },
  {
    slug: "coming-soon",
    title: "More Work Coming",
    subtitle: "New case studies in development",
    description:
      "Additional case studies are being developed. Check back soon.",
    role: "",
    year: "",
    metrics: [],
    tags: [],
    status: "coming-soon",
  },
];
