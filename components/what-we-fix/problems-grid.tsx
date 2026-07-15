const problems = [
  {
    id: 'positioning',
    title: 'Weak or Unclear Positioning',
    description:
      "You can't articulate why someone should choose you over any alternative, including doing nothing.",
    symptoms: [
      'Competing on price instead of value',
      'Messaging that sounds like everyone else',
      'Prospects ghost after initial interest',
      'Sales team struggles to differentiate',
    ],
  },
  {
    id: 'offer',
    title: 'No Defined or Scalable Offer',
    description:
      "Every project is custom. Pricing is inconsistent. There's no repeatable unit of value.",
    symptoms: [
      'Scope creep on every engagement',
      'Difficulty quoting without deep discovery',
      'Revenue tied to hours worked',
      'Team burnout from reinventing the wheel',
    ],
  },
  {
    id: 'acquisition',
    title: 'No Predictable Acquisition System',
    description:
      'Growth depends on referrals, random outreach, or waiting for inbound that never comes.',
    symptoms: [
      'Feast-or-famine revenue cycles',
      'No clear pipeline visibility',
      'Marketing spend with unclear ROI',
      'Founders still doing most of the selling',
    ],
  },
  {
    id: 'delivery',
    title: 'Broken Delivery Operations',
    description:
      "You close deals but can't deliver consistently. Quality varies. Clients churn.",
    symptoms: [
      'Missed deadlines and scope disputes',
      'Key person dependencies',
      'No standard operating procedures',
      'Client satisfaction declining at scale',
    ],
  },
  {
    id: 'team',
    title: 'Team Without Structure or Accountability',
    description:
      "People are working hard but not on the right things. There's no system for alignment.",
    symptoms: [
      'Unclear roles and responsibilities',
      'Meetings without outcomes',
      'Goals that exist but aren\'t tracked',
      'High performers leaving',
    ],
  },
  {
    id: 'financial',
    title: 'Financial Blind Spots',
    description:
      "Revenue looks good but you don't know if you're actually profitable. Cash flow surprises you.",
    symptoms: [
      'No unit economics clarity',
      'Pricing based on gut feel',
      'Surprised by cash crunches',
      'Can\'t model growth scenarios',
    ],
  },
  {
    id: 'founder',
    title: 'Founder Still Doing Everything',
    description:
      "The business can't run without you. You're the bottleneck for every decision.",
    symptoms: [
      'Working 60+ hours per week',
      'Can\'t take real time off',
      'Team waiting on your approvals',
      'No succession or delegation path',
    ],
  },
]

export function ProblemsGrid() {
  return (
    <section
      id="problems"
      className="py-28 lg:py-36"
      aria-labelledby="problems-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            The Patterns We See
          </p>
          <h2
            id="problems-heading"
            className="text-section-title font-serif font-medium text-foreground text-balance"
          >
            Seven problems that keep businesses stuck.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <article
              key={problem.id}
              className="group relative p-6 lg:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-xs font-medium text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 pr-12">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {problem.description}
              </p>

              {/* Symptoms */}
              <div className="border-t border-border/40 pt-5">
                <p className="text-xs font-medium tracking-widest uppercase text-primary/80 mb-3">
                  Symptoms
                </p>
                <ul className="space-y-2">
                  {problem.symptoms.map((symptom, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
