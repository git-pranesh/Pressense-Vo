export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Introduction and value proposition">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-accent opacity-60" />
          <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">
            Diagnostic-First Build Partner
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] tracking-tight text-foreground text-balance max-w-5xl mb-8">
          We find what&apos;s broken.{' '}
          <span className="italic font-normal">Then we fix it.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 text-pretty">
          Most scaling businesses don&apos;t have a marketing problem or a software problem. They have a diagnosis problem. Nobody has properly mapped what&apos;s actually holding them back. Pressense starts every engagement with a structured diagnostic. Then we fix it through fractional CMO leadership, custom internal software, and go-to-market execution, all in one place.
        </p>

        {/* Metrics bar */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-12">
          {[
            { value: '12+', label: 'clients' },
            { value: '90-day', label: 'results' },
            { value: 'AI-accelerated', label: 'delivery' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              <span className="text-lg font-semibold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <div className="h-3 w-px bg-border/60 last:hidden" />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/diagnostic"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            aria-label="Start a free diagnostic"
          >
            Start Your Free Diagnostic
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/how-we-work"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            aria-label="See how we work"
          >
            See How We Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-3 text-xs text-text-dim tracking-widest uppercase">
          <div className="h-6 w-px bg-border" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
