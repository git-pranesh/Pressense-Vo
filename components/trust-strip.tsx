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
    /* MODE D — narrow band, full-bleed dark, py-14 not py-32 */
    <section
      className="py-14 bg-ink overflow-hidden"
      aria-label="Trusted by leading companies"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 mb-6 flex items-center gap-4">
        <span className="eyebrow-on-dark shrink-0">Trusted by brands including</span>
        <div className="h-px flex-1 bg-ink-foreground/10" aria-hidden="true" />
      </div>

      {/* Scrolling marquee — logos duplicate for seamless loop */}
      <div className="relative w-full overflow-hidden" aria-hidden="true">
        <div className="flex animate-marquee gap-0 w-fit">
          {[...brands, ...brands, ...brands, ...brands].map((name, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="text-sm font-medium font-sans tracking-wide text-ink-foreground/60 px-10 whitespace-nowrap">
                {name}
              </span>
              <span className="text-ink-foreground/20 text-xs shrink-0" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
