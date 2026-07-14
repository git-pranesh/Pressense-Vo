const helpAreas = [
  {
    category: 'Strategy',
    items: [
      'Positioning clarity',
      'Go-to-market architecture',
      'Pricing & packaging',
      'Competitive differentiation',
    ],
  },
  {
    category: 'Operations',
    items: [
      'Workflow & process design',
      'Team structure & hiring plans',
      'Tool consolidation',
      'Reporting & accountability systems',
    ],
  },
  {
    category: 'Growth',
    items: [
      'Funnel diagnostics',
      'Retention mechanics',
      'Revenue model optimization',
      'Scalable acquisition systems',
    ],
  },
]

export function WhatWeHelpWithSection() {
  return (
    <section
      id="what-we-help-with"
      className="py-20 lg:py-28"
      aria-labelledby="help-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="eyebrow mb-4">
            Scope of Work
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance max-w-xl"
            id="help-heading"
          >
            What we typically help with.
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid gap-10 md:grid-cols-3">
          {helpAreas.map((area) => (
            <div key={area.category}>
              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {area.category}
              </h3>
              <ul className="space-y-3">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="mt-0.5 text-primary/60 flex-shrink-0"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.2"
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
    </section>
  )
}
