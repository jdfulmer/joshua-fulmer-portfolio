"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  { name: "Warner Bros. Discovery", logo: "/images/brands/warner-bros-discovery.png" },
  { name: "Dr. Dennis Gross", logo: "/images/brands/dr-dennis-gross.png" },
  { name: "Hasbro", logo: "/images/brands/hasbro.svg" },
  { name: "PHLUR", logo: "/images/brands/phlur.png" },
  { name: "Mattel", logo: "/images/brands/mattel.png" },
  { name: "Martha Stewart", logo: "/images/brands/martha-stewart.svg" },
  { name: "LEGO", logo: "/images/brands/lego.png" },
  { name: "Amazon", logo: null },
];

export function BrandStrip() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  return (
    <section className="pb-16 md:pb-20 animate-in-delay-1">
      <p className="text-xs font-mono text-muted tracking-wide uppercase mb-6">
        Brands I&apos;ve led design for
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
        {brands.map((brand) => (
          <span
            key={brand.name}
            className="relative whitespace-nowrap cursor-default hover:text-foreground transition-colors"
            onMouseEnter={() => setHoveredBrand(brand.name)}
            onMouseLeave={() => setHoveredBrand(null)}
          >
            {brand.name}
            {brand.logo && hoveredBrand === brand.name && (
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none animate-logo-in">
                <span className="block bg-white rounded-xl shadow-lg shadow-black/10 border border-border p-3">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={60}
                    className="h-10 w-auto object-contain"
                    unoptimized
                  />
                </span>
              </span>
            )}
          </span>
        ))}
        <span className="text-muted/50">+ 50 more</span>
      </div>
    </section>
  );
}
