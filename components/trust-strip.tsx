const brands = [
  'AstraZeneca',
  'Zoho',
  'Cognizant',
  'Scintel',
  'Tint Tone and Shade',
  'One Magnify',
]

export function TrustStrip() {
  return (
    <section className="py-12 bg-forest rounded-3xl mx-4 lg:mx-8" aria-label="Trusted by leading companies">
      {/* Label */}
      <p className="text-xs uppercase tracking-widest text-forest-muted text-center mb-8">
        Trusted by brands including
      </p>

      {/* Scrolling marquee container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-0">
          {brands.map((name, i) => (
            <span key={`first-${i}`} className="flex items-center flex-shrink-0">
              <span className="text-sm font-medium tracking-wide text-forest-foreground px-8 lg:px-12 whitespace-nowrap">
                {name}
              </span>
              <span className="text-forest-muted/50 text-xs flex-shrink-0">·</span>
            </span>
          ))}
          {brands.map((name, i) => (
            <span key={`second-${i}`} className="flex items-center flex-shrink-0">
              <span className="text-sm font-medium tracking-wide text-forest-foreground px-8 lg:px-12 whitespace-nowrap">
                {name}
              </span>
              <span className="text-forest-muted/50 text-xs flex-shrink-0">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
