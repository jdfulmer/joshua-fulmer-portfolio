const brands = [
  "Warner Bros. Discovery",
  "Dr. Dennis Gross",
  "Hasbro",
  "PHLUR",
  "Mattel",
  "Martha Stewart",
  "LEGO",
  "Amazon",
];

export function BrandStrip() {
  return (
    <section className="pb-16 md:pb-20 animate-in-delay-1">
      <p className="text-xs font-mono text-muted tracking-wide uppercase mb-6">
        Brands I&apos;ve collaborated with
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
        {brands.map((brand) => (
          <span key={brand} className="whitespace-nowrap">
            {brand}
          </span>
        ))}
        <span className="text-muted/50">+ 50 more</span>
      </div>
    </section>
  );
}
