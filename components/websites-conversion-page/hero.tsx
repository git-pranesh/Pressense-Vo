export function WebsitesConversionHero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 flex flex-col justify-center overflow-hidden pt-20" aria-label="Websites and conversion systems">
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Solutions / Websites & Conversion Systems</span>
          </div>
          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Websites that help buyers understand, trust, and decide.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            A good website does more than look credible. It explains the business, frames the value, guides the buyer, filters the wrong fit, and supports the sales process. We build websites as clarity and conversion systems, not design projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/diagnostic" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent">
              Start With a Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="/how-we-work" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200">
              See How We Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
