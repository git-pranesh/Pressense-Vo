const forItems = [
  'Founder-led businesses ready to scale',
  'Teams stuck between growth and chaos',
  'Companies outgrowing spreadsheets and manual workflows',
  'Enterprise teams that need sharper customer, product, and GTM clarity',
  'Experts and professionals who need systems, visibility, and structure',
]

const notForItems = [
  'Early-stage ideas without traction',
  'Teams looking only for cheap execution',
  'Businesses unwilling to implement change',
  '"Just build me something" requests without clarity',
]

export function WhoSection() {
  return (
    <section id="who-we-work-with" className="py-28 lg:py-36 border-t border-border/40" aria-labelledby="who-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent opacity-60" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Who We Work With</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance max-w-2xl" id="who-heading">
            We work with a select number of serious businesses.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* This is for you */}
          <div className="rounded-2xl border border-border/60 bg-card/30 p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border border-accent/40 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 5.5L3.5 7.5l5-5" stroke="oklch(0.72 0.08 75)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-foreground">This is for you if</span>
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {forItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is not for you */}
          <div className="rounded-2xl border border-border/40 bg-card/15 p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 2l6 6M8 2L2 8" stroke="oklch(0.55 0.012 70)" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-muted-foreground">This is not for you if</span>
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {notForItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                  <span className="text-sm text-text-dim leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
