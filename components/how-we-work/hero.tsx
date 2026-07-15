export function HowWeWorkHero() {
  return (
    <section
      id="hero"
      className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
      aria-label="Introduction to our process"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="eyebrow-line" />
            <span className="eyebrow">Our Process</span>
          </div>

          {/* H1 */}
          <h1 className="text-hero font-serif font-medium text-foreground text-balance mb-8">
            A system, not a service.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 text-pretty">
            We don&apos;t offer deliverables and disappear. We work inside your business
            for a focused period of time to diagnose, fix, and build the systems that
            allow you to scale.
          </p>

          {/* Phase pills */}
          <div className="flex flex-wrap gap-3">
            {['Diagnose', 'Build the Plan', 'Execute', 'Measure'].map((phase, i) => (
              <span
                key={phase}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-surface border border-border text-foreground"
              >
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center" aria-hidden="true">
                  {i + 1}
                </span>
                {phase}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
