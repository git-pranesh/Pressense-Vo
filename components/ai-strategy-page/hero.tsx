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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="AI strategy consulting"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">

          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">
              AI Strategy Consulting
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-4">
            AI Strategy Consulting for Growing Businesses: A Practical Guide
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-foreground mb-6">
            We help founder-led businesses identify exactly where AI will save time and generate revenue, then build the systems to prove it within 30 days.
          </p>

          <div
            className="border-l-2 border-primary/40 pl-5 mb-8"
            aria-label="Definition"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">AI strategy consulting</strong> is a structured engagement that maps your business operations to specific AI applications, prioritises them by ROI and readiness, and produces a phased implementation roadmap your team can execute. Unlike generic advisory, it ends with working pilots, not a PDF.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-6 mb-10"
            aria-label="Key stats"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/diagnostic"
              className="glow-accent inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
            >
              Book a Free Diagnostic
            </Link>
            <Link
              href="#ai-vs-automation"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              AI vs Automation: what is the difference?
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
