export function CrmErpHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="CRM and ERP systems">
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Solutions / CRM & ERP Systems</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            CRM and ERP systems built around how your business actually operates.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Most businesses do not need more software. They need a clearer operating system for leads, customers, delivery, finance, reporting, ownership, and follow-up. We help design and build CRM and ERP-lite systems that reflect how the business actually runs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/diagnostic" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent">
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
