const problems = [
  'Growth feels inconsistent and unpredictable',
  'Marketing is active but not converting enough',
  'Teams don\'t fully understand the customer',
  'Revenue is leaking across the funnel',
  'Operations depend too much on the founder',
  'Too many tools, no real system',
  'Scaling from 10 to 100 feels chaotic',
]

export function ProblemSection() {
  return (
    <section id="what-we-fix" className="py-28 lg:py-36 bg-ink rounded-t-3xl" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-ink-foreground/30" />
              <span className="text-xs tracking-[0.2em] uppercase text-ink-muted font-medium">The Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-ink-foreground text-balance" id="problem-heading">
              Most growth problems are not caused by lack of effort.
              <span className="text-ink-muted font-light"> They usually come from unclear positioning, weak handoffs, manual workflows, misaligned teams, or systems that no longer fit the stage of the business.</span>
            </h2>

            <div className="mt-10 p-6 rounded-2xl border border-ink-border bg-ink-border/60">
              <p className="text-base text-ink-muted leading-relaxed">
                This isn&apos;t a resources problem. It&apos;s a clarity problem. Before you hire more people, run more ads, or build more tools, you need someone to sit inside your business for a week and tell you{' '}
                <span className="text-ink-foreground font-medium">what&apos;s actually broken.</span>
              </p>
            </div>
          </div>

          {/* Right: problem list */}
          <div className="flex flex-col gap-3">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-ink-border bg-ink-border/40 hover:border-ink-border hover:bg-ink-border/80 transition-all duration-200 group"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full border border-ink-muted/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary/60 transition-colors">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <path d="M1.5 4.5L3 6l3.5-4" stroke="#A09A94" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-ink-muted leading-relaxed group-hover:text-ink-foreground transition-colors">
                  {problem}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
