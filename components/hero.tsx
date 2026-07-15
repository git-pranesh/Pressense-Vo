export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction and value proposition"
    >
      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-36 pb-28">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div className="eyebrow-line" />
          <span className="eyebrow">Diagnostic-First Build Partner</span>
        </div>

        {/* H1 — text-hero clamp */}
        <h1 className="text-hero font-serif font-medium text-foreground text-balance max-w-5xl mb-8">
          We find what&apos;s broken.{' '}
          <em className="not-italic" style={{ fontStyle: 'italic', fontWeight: 400 }}>
            Then we fix it.
          </em>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 text-pretty">
          Most scaling businesses don&apos;t have a marketing problem or a software problem.
          They have a diagnosis problem. Nobody has properly mapped what&apos;s actually
          holding them back. Pressense starts every engagement with a structured diagnostic.
          Then we fix it through fractional CMO leadership, custom internal software,
          and go-to-market execution.
        </p>

        {/* Stat pills */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-14">
          {[
            { value: '12+', label: 'clients' },
            { value: '90-day', label: 'results' },
            { value: 'AI-accelerated', label: 'delivery' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              <span className="text-base font-semibold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              {i < 2 && <div className="h-3 w-px bg-border/80" aria-hidden="true" />}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/diagnostic"
            className="btn-primary glow-accent"
            aria-label="Start a free diagnostic"
          >
            Start Your Free Diagnostic
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/how-we-work"
            className="btn-secondary"
            aria-label="See how we work"
          >
            See How We Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-3 text-xs text-text-faint tracking-widest uppercase select-none" aria-hidden="true">
          <div className="h-6 w-px bg-border" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
