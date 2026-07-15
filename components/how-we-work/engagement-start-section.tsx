export function EngagementStartSection() {
  const engagementTypes = [
    {
      title: 'Focused Diagnostic',
      description:
        'A short engagement to understand the business, identify bottlenecks, map revenue leakage, and define the highest-priority next steps.',
    },
    {
      title: 'Strategy Sprint',
      description:
        'A focused strategy engagement for positioning, GTM, customer understanding, offer structure, execution priorities, or operating direction.',
    },
    {
      title: 'Pilot Build',
      description:
        'A practical implementation sprint to fix one workflow, build one internal tool, improve one funnel, or create one system that supports scale.',
    },
    {
      title: 'Advisory or Implementation',
      description:
        'After the first engagement, we decide whether ongoing advisory, systems work, or implementation support makes sense.',
    },
  ]

  return (
    <section
      id="engagement-start"
      className="py-28 lg:py-36"
      aria-labelledby="engagement-start-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            How Engagements Start
          </p>
          <h2
            id="engagement-start-heading"
            className="text-display font-serif font-medium text-foreground mb-6 text-balance"
          >
            How engagements usually start.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most clients do not begin with a large transformation. They begin with a focused
            first step that gives both sides clarity before expanding the work.
          </p>
        </div>

        {/* Engagement types grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {engagementTypes.map((type, i) => (
            <div
              key={i}
              className="rounded-2xl bg-card border border-border p-8 flex flex-col gap-5 hover:border-border transition-all duration-300 group"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-text-dim tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="max-w-3xl">
          <p className="text-base text-muted-foreground leading-relaxed italic">
            This keeps the work practical, lower-risk, and grounded in what the business
            actually needs.
          </p>
        </div>
      </div>
    </section>
  )
}
