export function StartFocusedSection() {
  const startingPoints = [
    {
      title: 'Diagnostic',
      description:
        'For businesses that know something is blocking growth but need clarity on what to fix first.',
    },
    {
      title: 'Strategy Sprint',
      description:
        'For teams that need sharper positioning, GTM direction, customer understanding, or execution priorities.',
    },
    {
      title: 'Systems Pilot',
      description:
        'For companies that want to fix one workflow, replace one manual process, or build one internal system before expanding.',
    },
  ]

  return (
    <section
      id="start-focused"
      className="py-28 lg:py-36 relative"
      aria-labelledby="start-focused-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent opacity-60" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">
              Getting Started
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance"
            id="start-focused-heading"
          >
            Start with one focused problem.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            You do not need to begin with a full business transformation. Most clients start
            with a focused diagnostic, strategy sprint, or pilot project, one business
            constraint, one clear roadmap, and one practical next step.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startingPoints.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 flex flex-col gap-5 hover:border-border transition-all duration-300 group"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-text-dim tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            aria-label="Start with a focused diagnostic"
          >
            Start With a Diagnostic
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
