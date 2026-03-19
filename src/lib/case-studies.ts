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
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "design-intel",
    title: "Design Intel",
    subtitle: "How I eliminated 20+ hours of manual reporting and caught burnout before it happened",
    description:
      "I was spending 5+ hours a week stitching together Figma, Asana, and spreadsheets just to answer one question: is anyone about to break? So I built the answer. A single AI-powered dashboard that cut 20+ hours of monthly reporting and catches workload problems before they become resignations.",
    role: "Design Lead & Builder",
    year: "2024\u2013Present",
    metrics: [
      { label: "Reporting Eliminated", value: "20+hrs/mo" },
      { label: "Designers Supported", value: "15+" },
      { label: "Systems Unified", value: "4" },
    ],
    tags: ["Design Ops", "AI", "Figma API", "Next.js", "Claude"],
    status: "published",
    image: "/images/design-intel-activity.png",
  },
  {
    slug: "wbd-toolkit",
    title: "WBD Licensee Toolkit",
    subtitle: "Turning a static PDF nightmare into a live system serving every WBD licensee",
    description:
      "WBD's brand guidelines were outdated before the PDFs finished downloading. Licensees worked from wrong assets. The brand team spent their days answering 'is this still the right logo?' We replaced the static toolkit with a dynamic system that now serves every licensee across the Consumer Products ecosystem, with live guidelines that stay current without manual updates.",
    role: "Design Lead",
    year: "2023\u20132024",
    metrics: [
      { label: "Licensee Coverage", value: "100%" },
      { label: "Enterprise Partners", value: "3+" },
      { label: "Toolkit Transformation", value: "Static to Dynamic" },
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
