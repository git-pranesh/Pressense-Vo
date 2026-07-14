const metrics = [
  {
    category: 'Operational Efficiency',
    examples: ['Time-to-delivery', 'Process completion rates', 'Error/rework rates'],
  },
  {
    category: 'Revenue Health',
    examples: ['Pipeline velocity', 'Close rates', 'Revenue per client'],
  },
  {
    category: 'Team Performance',
    examples: ['Capacity utilization', 'Handoff efficiency', 'Response times'],
  },
  {
    category: 'Client Outcomes',
    examples: ['Satisfaction scores', 'Retention rates', 'Referral frequency'],
  },
]

export function MeasurePhase() {
  return (
    <section
      id="measure"
      className="py-28 lg:py-36 border-t border-border/40"
      aria-labelledby="measure-heading"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Phase header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-semibold flex items-center justify-center">
            4
          </span>
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Phase Four
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - content */}
          <div>
            <h2
              id="measure-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance"
            >
              Measure
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Systems without measurement are just guesswork. We establish clear KPIs
              from the start and build tracking into every process we implement.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Before we exit, we ensure you have visibility into what&apos;s working,
              what needs attention, and how to course-correct when things drift.
            </p>

            {/* Timeline */}
            <div className="flex items-center gap-3 mb-10">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-primary"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M10 5v5l3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium text-foreground">
                Timeline: Ongoing (built into execution)
              </span>
            </div>

            {/* What you get */}
            <div className="glass-card rounded-xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                What You Walk Away With
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-primary mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l4 4 6-8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Live KPI dashboard tailored to your business
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-primary mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l4 4 6-8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Automated reporting where possible
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-primary mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l4 4 6-8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Clear benchmarks and targets
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-primary mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l4 4 6-8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Review cadence recommendations
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - metrics categories */}
          <div className="lg:pt-16">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Metrics We Track
            </h3>
            <div className="grid gap-4">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-secondary/40 border border-border/40"
                >
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {m.category}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {m.examples.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
