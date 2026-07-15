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
    <section
      className="py-10 bg-ink rounded-3xl mx-4 lg:mx-8"
      aria-label="Trusted by leading companies"
    >
      {/* Label */}
      <p className="eyebrow-on-dark text-center mb-8">
        Trusted by brands including
      </p>

      {/* Scrolling marquee */}
      <div className="relative w-full overflow-hidden" aria-hidden="true">
        <div className="flex animate-marquee gap-0">
          {brands.map((name, i) => (
            <span key={`a-${i}`} className="flex items-center flex-shrink-0">
              <span className="text-sm font-medium tracking-wide text-ink-foreground px-8 lg:px-12 whitespace-nowrap opacity-70">
                {name}
              </span>
              <span className="text-ink-foreground/30 text-xs flex-shrink-0" aria-hidden="true">·</span>
            </span>
          ))}
          {brands.map((name, i) => (
            <span key={`b-${i}`} className="flex items-center flex-shrink-0">
              <span className="text-sm font-medium tracking-wide text-ink-foreground px-8 lg:px-12 whitespace-nowrap opacity-70">
                {name}
              </span>
              <span className="text-ink-foreground/30 text-xs flex-shrink-0" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
