export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Introduction and value proposition">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />

      {/* Radial glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse at center, #D4CFC8 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Abstract system diagram — top right decorative */}
      <div className="absolute right-0 top-1/4 w-80 h-80 opacity-[0.06] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="160" r="120" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="160" cy="160" r="80" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="160" cy="160" r="40" stroke="currentColor" strokeWidth="0.75" />
          <line x1="40" y1="160" x2="280" y2="160" stroke="currentColor" strokeWidth="0.75" />
          <line x1="160" y1="40" x2="160" y2="280" stroke="currentColor" strokeWidth="0.75" />
          <line x1="75" y1="75" x2="245" y2="245" stroke="currentColor" strokeWidth="0.5" />
          <line x1="245" y1="75" x2="75" y2="245" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="160" cy="40" r="4" fill="currentColor" opacity="0.6" />
          <circle cx="280" cy="160" r="4" fill="currentColor" opacity="0.6" />
          <circle cx="160" cy="280" r="4" fill="currentColor" opacity="0.6" />
          <circle cx="40" cy="160" r="4" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom left subtle diagram */}
      <div className="absolute left-0 bottom-1/4 w-64 h-64 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 256 256" fill="none">
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.75" />
          <rect x="98" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.75" />
          <rect x="176" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.75" />
          <rect x="20" y="98" width="60" height="60" stroke="currentColor" strokeWidth="0.75" />
          <rect x="98" y="98" width="60" height="60" stroke="currentColor" strokeWidth="0.75" />
          <rect x="176" y="98" width="60" height="60" stroke="currentColor" strokeWidth="0.75" />
          <line x1="80" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.75" />
          <line x1="158" y1="50" x2="176" y2="50" stroke="currentColor" strokeWidth="0.75" />
          <line x1="50" y1="80" x2="50" y2="98" stroke="currentColor" strokeWidth="0.75" />
          <line x1="128" y1="80" x2="128" y2="98" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      </div>

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
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance max-w-5xl mb-8">
          We find what&apos;s broken.{' '}
          <span className="text-primary italic font-light">Then we fix it.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 text-pretty">
          Most scaling businesses don&apos;t have a marketing problem or a software problem. They have a diagnosis problem. Nobody has properly mapped what&apos;s actually holding them back. Pressense starts every engagement with a structured diagnostic. Then we build the custom internal tools and systems that fix it — and once the operational foundation is solid, we often step in on go-to-market and growth too.
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
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            aria-label="Start a free diagnostic"
          >
            Start Your Free Diagnostic
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/how-we-work"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
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
