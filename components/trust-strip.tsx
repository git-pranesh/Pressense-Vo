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
    <section className="py-14 border-y border-border/40" aria-label="Trusted by leading companies">
      {/* Label */}
      <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-10">
        Trusted by brands including
      </p>

      {/* Scrolling marquee container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-0">
          {/* First set of brands */}
          {brands.map((name, i) => (
            <span key={`first-${i}`} className="flex items-center flex-shrink-0">
              <span className="text-sm font-medium tracking-wide text-primary px-8 lg:px-12 whitespace-nowrap">
                {name}
              </span>
              <span className="text-primary/30 text-xs flex-shrink-0">·</span>
            </span>
          ))}
          
          {/* Second set of brands (duplicate for seamless loop) */}
          {brands.map((name, i) => (
            <span key={`second-${i}`} className="flex items-center flex-shrink-0">
              <span className="text-sm font-medium tracking-wide text-primary px-8 lg:px-12 whitespace-nowrap">
                {name}
              </span>
              <span className="text-primary/30 text-xs flex-shrink-0">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
