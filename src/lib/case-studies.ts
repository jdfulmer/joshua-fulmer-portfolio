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
    year: "Jan 2025 - Present",
    metrics: [
      { label: "Manual Reporting Eliminated", value: "20+hrs/mo" },
      { label: "Designers Protected", value: "12" },
      { label: "Systems Unified", value: "4" },
    ],
    tags: ["Design Ops", "AI", "Figma API", "Next.js", "Claude"],
    status: "published",
    image: "/images/design-intel-activity.png",
  },
  {
    slug: "wbd-toolkit",
    title: "WBD Licensee Toolkit",
    subtitle: "A from-scratch Amazon resource guide that keeps Hasbro, Mattel, LEGO, and every other WBD licensee selling smarter",
    description:
      "WBD's licensees were on their own when it came to Amazon. No single source of truth. No best practices. No alignment with WBD's retail strategy. We built a comprehensive, dynamic toolkit from scratch covering 6 core content areas with a 5-step progression pathway. It stays current automatically, cross-checking Amazon updates so licensees never work from outdated information.",
    role: "Design Lead",
    year: "Jan 2025 - Present",
    metrics: [
      { label: "Core Content Areas", value: "6" },
      { label: "Progression Pathway", value: "5-Step" },
      { label: "Dynamic Updates", value: "Live" },
    ],
    tags: ["Amazon Retail", "Licensee Enablement", "Consumer Products", "Dynamic Content"],
    status: "published",
    image: "/images/wbd-toolkit-hero.svg",
  },
  {
    slug: "figma-migration",
    title: "Adobe to Figma Migration",
    subtitle: "How we turned a static file-passing workflow into real-time multiplayer design and cut revision cycles by 40%",
    description:
      "Migrated a 12-designer team from Adobe Creative Suite to Figma while keeping work shipping across 60+ brands. Transformed a sequential, file-based workflow into real-time multiplayer collaboration and rebuilt the entire vendor approval pipeline from email chains and PDF markups to in-context Figma comments.",
    role: "Design Lead",
    year: "Dec 2024 - Nov 2025",
    metrics: [
      { label: "Reduction in Revision Cycles", value: "40%" },
      { label: "SharePoint/OneDrive File Hosting", value: "Eliminated" },
      { label: "Vendor Approval Pipeline", value: "In-Context" },
      { label: "Multi-Designer Collaboration", value: "Simultaneous" },
    ],
    tags: ["Figma", "Change Management", "Design Ops", "Team Leadership", "Vendor Collaboration", "Platform Migration"],
    status: "published",
    image: "/images/figma-migration-hero.svg",
  },
  {
    slug: "send-it-society",
    title: "Send It Society",
    subtitle: "A 501(c)(3) nonprofit built on mountain bikes and founded for my best friend Matthew",
    description:
      "I founded Send It Society after losing my best friend Matthew to suicide in 2019. He was the one who got me riding after the Marine Corps. The mission is specific: provide a non-clinical healing environment to raise education, awareness, and action for mental health through mountain biking. 85+ events at Galbraith Mountain in Bellingham, WA. Every Saturday since 2019.",
    role: "Founder",
    year: "2019 - Present",
    metrics: [
      { label: "Events Since 2019", value: "85+" },
      { label: "Saturday Rides", value: "Weekly" },
      { label: "Extended Rides", value: "Monthly" },
      { label: "Local Partners", value: "4" },
    ],
    tags: ["501(c)(3) Nonprofit", "Mental Health", "Mountain Biking", "Community", "Bellingham, WA", "Leadership"],
    status: "published",
    image: "/images/send-it-society-hero.svg",
  },
];
