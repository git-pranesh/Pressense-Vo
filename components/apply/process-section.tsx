const steps = [
  {
    number: '01',
    title: 'Application Review',
    description:
      'We review every application personally. If there\'s potential alignment, we\'ll reach out within 5 business days.',
  },
  {
    number: '02',
    title: 'Discovery Call',
    description:
      'A 30-minute conversation to understand your situation, goals, and see if our approach fits your needs.',
  },
  {
    number: '03',
    title: 'Diagnostic Proposal',
    description:
      'If we\'re a fit, we\'ll send a tailored proposal with scope, timeline, and investment for the first phase.',
  },
  {
    number: '04',
    title: 'Kickoff',
    description:
      'Once aligned, we start with a deep diagnostic sprint to map the path from where you are to where you need to be.',
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 border-t border-border/40"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            What Happens Next
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance max-w-xl"
            id="process-heading"
          >
            Our process after you apply.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-border/60 to-transparent"
                  aria-hidden="true"
                />
              )}

              <div className="relative p-6 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm h-full">
                {/* Step number */}
                <span className="text-xs font-mono text-primary/60 tracking-wider mb-4 block">
                  {step.number}
                </span>

                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
