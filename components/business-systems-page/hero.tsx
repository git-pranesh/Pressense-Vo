import Link from 'next/link'

export function SystemsHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="Business Systems Consultant"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Business Systems Consultant</span>
          </div>

          {/* H1 — keyword-first, outcome-focused */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-4">
            Business Systems Consultant: Fix the Operations Bottlenecks Slowing Your Growth
          </h1>

          {/* Outcome statement */}
          <p className="text-xl sm:text-2xl font-medium text-foreground mb-6">
            We audit, design, and build the operational systems that let your team run without you in the room.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-8">
            <p className="text-base text-muted-foreground leading-relaxed">
              A business systems consultant diagnoses operational bottlenecks, designs the processes and tools to fix them, and builds the infrastructure that lets a startup or SMB scale without adding headcount or founder dependency. Unlike IT consultants who focus on software procurement, a business systems consultant owns the full system: process, tooling, documentation, and team adoption.
            </p>
          </div>

          {/* Micro-stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { stat: '90 days', label: 'From audit to live systems' },
              { stat: '60%', label: 'Avg. reduction in manual work' },
              { stat: '$1M–$15M', label: 'ARR sweet spot' },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col">
                <span className="text-2xl font-semibold text-foreground">{item.stat}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Free Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link
              href="/playbooks"
              className="group inline-flex items-center gap-2 px-9 py-5 rounded-2xl text-base font-semibold border border-border/40 text-foreground hover:border-primary/40 transition-all duration-200"
            >
              See Our Playbooks
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
