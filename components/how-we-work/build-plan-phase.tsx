const planComponents = [
  {
    title: 'Strategic Roadmap',
    description:
      'A prioritized sequence of initiatives with clear dependencies and milestones.',
  },
  {
    title: 'Operational Playbooks',
    description:
      'Step-by-step systems for repeatable processes — sales, onboarding, delivery, support.',
  },
  {
    title: 'Team Structure Blueprint',
    description:
      'Role definitions, hiring priorities, and accountability frameworks.',
  },
  {
    title: 'Tech & Tool Stack',
    description:
      'Recommended tools and integrations tailored to your workflow and budget.',
  },
  {
    title: 'KPI Dashboard Design',
    description:
      'The metrics that matter, how to track them, and what good looks like.',
  },
]

export function BuildPlanPhase() {
  return (
    <section
      id="build-plan"
      className="py-28 lg:py-36 border-t border-border/40"
      aria-labelledby="build-plan-heading"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Phase header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-semibold flex items-center justify-center">
            2
          </span>
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Phase Two
          </p>
        </div>

        <div className="max-w-4xl mb-12">
          <h2
            id="build-plan-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6 text-balance"
          >
            Build the Plan
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Based on the diagnostic, we design a custom system architecture for your
            business. This isn&apos;t a generic strategy deck. It&apos;s an executable
            blueprint — specific, sequenced, and built for your exact situation.
          </p>

          {/* Timeline */}
          <div className="flex items-center gap-3">
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
              Timeline: 1-2 weeks
            </span>
          </div>
        </div>

        {/* Plan components grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planComponents.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="text-sm font-semibold">{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 p-6 rounded-xl bg-secondary/40 border border-border/40 max-w-2xl">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Note:</span> The plan is
            designed collaboratively. You&apos;ll have input and approval at every stage
            before we move to execution.
          </p>
        </div>
      </div>
    </section>
  )
}
