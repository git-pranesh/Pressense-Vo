export function StartupConsultingHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="Consulting for founder-led businesses"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">
              Consulting for Founder-Led Businesses
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            The consulting firm built for founders who want to grow without burning out.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Most consulting firms are built for enterprises. Pressense is built for founders: fast-moving, resource-conscious, and tired of generic advice that does not account for how small teams actually work. We work on GTM strategy, AI systems, operations, and software — and we only take on clients we can genuinely move.
          </p>

          <div className="border-l-2 border-primary/40 pl-5 mb-8 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A consulting firm for startups and founder-led businesses</strong> provides the strategic and operational support that growing companies need but cannot yet justify hiring full-time. Pressense works across GTM strategy, AI workflow systems, custom software, and positioning — as a small embedded team that executes alongside founders rather than handing over slide decks.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">Founder-first</span>
              <span className="text-sm text-muted-foreground">no enterprise playbooks</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">Strategy + build</span>
              <span className="text-sm text-muted-foreground">we execute, not just advise</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">From $500</span>
              <span className="text-sm text-muted-foreground">Founder Advisory Session</span>
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
              href="/how-we-work"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              See How We Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
