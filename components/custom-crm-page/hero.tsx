export function CustomCrmHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="Custom CRM development"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">
              Solutions / Custom CRM Development
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Custom CRM Development for Growing Businesses
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Stop forcing your sales process into software built for someone else. Custom CRM development gives you a system that tracks exactly what matters to your business, automates the handoffs that break, and costs a fraction of enterprise licensing over three years.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A custom CRM</strong> is a sales and customer management system built specifically for your workflow, data structure, and integration needs. Unlike Salesforce or HubSpot, it does not require your team to adapt to the software. The software adapts to your team.
            </p>
          </div>

          {/* Micro-stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            <div>
              <p className="text-2xl font-semibold text-foreground">6–14 wks</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">to first live build</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-semibold text-foreground">From $5K</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">MVP for small teams</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-semibold text-foreground">You own it</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">No vendor lock-in</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Free Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#comparison"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              Custom vs Salesforce
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
      />
    </section>
  )
}
