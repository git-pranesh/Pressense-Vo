const executionAreas = [
  {
    title: 'Systems Implementation',
    items: [
      'CRM and pipeline setup',
      'Project management workflows',
      'Communication protocols',
      'Documentation systems',
    ],
  },
  {
    title: 'Process Design',
    items: [
      'Sales and onboarding flows',
      'Delivery and fulfillment SOPs',
      'Client communication cadences',
      'Internal review cycles',
    ],
  },
  {
    title: 'Team Enablement',
    items: [
      'Role clarity and ownership mapping',
      'Training and onboarding materials',
      'Performance frameworks',
      'Meeting structures and rhythms',
    ],
  },
]

export function ExecutePhase() {
  return (
    <section
      id="execute"
      className="py-28 lg:py-36 border-t border-border/40"
      aria-labelledby="execute-heading"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Phase header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-semibold flex items-center justify-center">
            3
          </span>
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Phase Three
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - content */}
          <div>
            <h2
              id="execute-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6 text-balance"
            >
              Execute
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This is where we roll up our sleeves. We don&apos;t just hand you a plan
              and wish you luck. We work alongside your team to implement every system,
              process, and structure we&apos;ve designed.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Execution happens in focused sprints. Each week has clear objectives,
              deliverables, and checkpoints. You&apos;ll see tangible progress —
              not endless meetings about progress.
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
                Timeline: 4-8 weeks (scope dependent)
              </span>
            </div>

            {/* What we do together */}
            <div className="p-6 rounded-xl bg-secondary/40 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What This Looks Like
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">—</span>
                  Weekly working sessions with your team
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">—</span>
                  Async support via Slack or your preferred channel
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">—</span>
                  Sprint reviews to demo completed work
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">—</span>
                  Documentation of everything we build
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - execution areas */}
          <div className="space-y-6 lg:pt-16">
            {executionAreas.map((area, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 border border-border/50"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {area.title}
                </h3>
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-primary shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
