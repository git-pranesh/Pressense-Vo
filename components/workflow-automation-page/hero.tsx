import Link from 'next/link'

export function WorkflowAutomationHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="Workflow Automation Consulting"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">
              Workflow Automation Consulting
            </span>
          </div>

          {/* H1 — primary keyword in exact form */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Workflow Automation Consulting for Scaling B2B Teams
          </h1>

          {/* Outcome statement */}
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Replace manual, repetitive operations with documented automated systems. Your team keeps the judgment calls. We eliminate everything else.
          </p>

          {/* AEO Answer Block — positioned after H1, correct extraction target */}
          <div className="border-l-4 border-primary/60 pl-5 mb-8 bg-card/40 py-4 pr-4 rounded-r-xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Workflow automation consulting</span> is the practice of auditing your business processes, identifying which tasks are repetitive and rules-based, designing automated systems to replace them, and building those integrations so your tools work together without manual handoffs.
            </p>
          </div>

          {/* Micro-stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { value: '20+ hrs/week', label: 'reclaimed per client on average' },
              { value: 'From $1,200', label: 'audit and roadmap' },
              { value: '1–4 weeks', label: 'average build timeline' },
            ].map((stat) => (
              <div key={stat.value}>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Free Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link
              href="/ai-workflows-automation"
              className="group inline-flex items-center gap-2 px-9 py-5 rounded-full text-base font-semibold border border-border text-foreground hover:border-foreground/40 transition-all duration-200"
            >
              See Automation Services
            </Link>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
      />
    </section>
  )
}
