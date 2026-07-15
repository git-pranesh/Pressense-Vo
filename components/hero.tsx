export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-background"
      aria-label="Introduction and value proposition"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-40 pb-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-12">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">Diagnostic-First Build Partner</span>
        </div>

        {/* H1 — Billboard: clamp(56px, 10vw, 120px), weight 400 */}
        <h1 className="text-hero font-serif text-foreground text-balance max-w-5xl mb-10">
          We find what&apos;s broken.{' '}
          <span className="relative inline-block italic">
            Then we fix it.
            {/* SVG burnt-amber underline stroke */}
            <svg
              aria-hidden="true"
              viewBox="0 0 320 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-2 left-0 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M4 13 C 60 4, 130 16, 200 10 C 250 6, 290 14, 316 9"
                stroke="#C1541C"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-14 text-pretty font-sans">
          Most scaling businesses don&apos;t have a marketing problem or a software
          problem. They have a diagnosis problem. Pressense starts with a structured
          diagnostic — then fixes it through fractional CMO leadership, custom
          internal software, and go-to-market execution.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="/diagnostic"
            className="btn-primary"
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

        {/* Inline stat strip */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
          {[
            { value: '12+', label: 'clients served' },
            { value: '90-day', label: 'typical results' },
            { value: 'AI-accelerated', label: 'delivery' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="text-base font-medium font-sans text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-sans">{stat.label}</span>
              {i < 2 && <div className="ml-6 h-3 w-px bg-border hidden sm:block" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
