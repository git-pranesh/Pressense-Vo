const brands = [
  'AstraZeneca',
  'Zoho',
  'Cognizant',
  'Scintel',
  'Tint Tone and Shade',
  'One Magnify',
]

// Duplicate for seamless infinite scroll
const marqueeItems = [...brands, ...brands]

export function TrustStrip() {
  return (
    <section className="py-14 border-y border-border/40 overflow-hidden" aria-label="Trusted by leading companies">
      {/* Label */}
      <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-10">
        Trusted by
      </p>

      {/* Scrolling marquee — pauses on hover */}
      <div
        className="relative flex"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <div
          className="flex items-center gap-0 animate-marquee whitespace-nowrap"
          aria-hidden="true"
        >
          {marqueeItems.map((name, i) => (
            <span key={i} className="flex items-center">
              <span className="text-sm font-medium tracking-wide text-primary px-10">
                {name}
              </span>
              <span className="text-primary/30 text-xs select-none">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
