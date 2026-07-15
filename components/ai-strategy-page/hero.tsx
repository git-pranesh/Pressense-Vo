import Link from 'next/link'

const stats = [
  { value: 'From $1,500', label: 'strategy engagement' },
  { value: '2–4 weeks', label: 'to a working roadmap' },
  { value: '100%', label: 'implementation-ready output' },
]

export function AIStrategyHero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 overflow-hidden"
      aria-label="AI strategy consulting"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
              AI Strategy Consulting
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-4">
            AI Strategy Consulting for Growing Businesses: A Practical Guide
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-foreground mb-6">
            We help founder-led businesses identify exactly where AI will save time and generate revenue, then build the systems to prove it within 30 days.
          </p>

          <div
            className="border-l-2 border-primary/50 pl-5 mb-8"
            aria-label="Definition"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">AI strategy consulting</strong> is a structured engagement that maps your business operations to specific AI applications, prioritises them by ROI and readiness, and produces a phased implementation roadmap your team can execute. Unlike generic advisory, it ends with working pilots, not a PDF.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10 py-5 border-y border-border/40"
            aria-label="Key stats"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2.5">
                <span className="text-xl font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/diagnostic"
              className="group glow-accent inline-flex items-center gap-3 px-9 py-5 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-highlight transition-all duration-200"
            >
              Book a Free Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 px-9 py-5 rounded-2xl text-base font-semibold border border-border/40 text-foreground hover:border-primary/40 transition-all duration-200"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
