import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Diagnose the real constraint',
    description:
      'We don\'t start with solutions. We start by mapping what\'s actually broken—not what the symptoms suggest.',
  },
  {
    number: '02',
    title: 'Build the fix',
    description:
      'We design systems, not slide decks. Playbooks, processes, and structures your team can actually use.',
  },
  {
    number: '03',
    title: 'Implement with you',
    description:
      'We don\'t hand off and walk away. We work alongside your team to embed the change.',
  },
  {
    number: '04',
    title: 'Measure what matters',
    description:
      'We define success upfront and track it. If it\'s not moving the needle, we adjust.',
  },
  {
    number: '05',
    title: 'Transfer ownership',
    description:
      'The goal is always to make ourselves unnecessary. We build for handoff, not dependency.',
  },
]

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="py-28 lg:py-36"
      aria-labelledby="approach-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Our Method
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance mb-5"
            id="approach-heading"
          >
            How we approach every engagement
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The same structured process, adapted to your context.{' '}
            <Link
              href="/how-we-work"
              className="text-primary hover:text-highlight underline underline-offset-4 transition-colors"
            >
              See the full methodology
            </Link>
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                {/* Number + line */}
                <div className="flex flex-col items-center">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-sm font-semibold text-primary">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="w-px h-full bg-border/60 mt-4" aria-hidden="true" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
