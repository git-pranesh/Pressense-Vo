import Link from 'next/link'

const steps = [
  {
    number: '01',
    phase: 'Describe',
    tagline: 'Tell us what your team does every day',
    description:
      'In a 30-minute session, you walk us through your daily tasks. Which ones are manual. Which tools are involved. Which steps feel the most repetitive. We record everything and map it.',
    deliverable: 'Process map with automation candidates identified',
  },
  {
    number: '02',
    phase: 'Prioritise',
    tagline: 'We rank by impact and ease of build',
    description:
      'Not every manual task is worth automating. We score each one by the time it costs you, the frequency it runs, and the complexity of building it. You get a ranked shortlist with projected hours saved per workflow.',
    deliverable: 'Automation priority matrix with ROI estimates',
  },
  {
    number: '03',
    phase: 'Build',
    tagline: 'We design and build the integrations',
    description:
      'We select the right tool for each workflow. Make, n8n, Zapier, or custom API code. We build the connections, test every edge case, and document how each automation works so your team can maintain it.',
    deliverable: 'Working automations with full documentation and test results',
  },
  {
    number: '04',
    phase: 'Hand Over',
    tagline: 'You own it, we support it',
    description:
      'We run a live walkthrough with your team, hand over all documentation, and monitor for 30 days post-launch. Most clients stay on retainer for ongoing workflow builds as their operations evolve.',
    deliverable: '30-day post-launch support and team training session',
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
          Describe your daily tasks in 30 minutes. We map out exactly which to automate.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
          Our workflow automation consulting engagement runs in four stages. Every stage ends with a concrete deliverable you keep.
        </p>

        {/* 4-step process — numbered visual */}
        <div className="relative">
          {/* Connector line for desktop */}
          <div
            className="hidden lg:block absolute left-[2.25rem] top-12 bottom-12 w-px bg-border/40"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300 lg:pl-24 relative"
              >
                {/* Step number badge */}
                <div
                  className="absolute left-6 top-8 lg:flex hidden w-9 h-9 rounded-full bg-primary/10 border border-primary/30 items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                </div>

                {/* Mobile number */}
                <p className="text-xs font-bold text-primary mb-1 lg:hidden">{step.number}</p>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{step.phase}</h3>
                    <p className="text-sm font-medium text-primary/80 mb-3">{step.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  <div className="sm:w-64 shrink-0">
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-1">
                      Deliverable
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.deliverable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-muted-foreground leading-relaxed">
          See real workflow examples in our{' '}
          <Link href="/playbooks" className="text-primary hover:underline">
            operations playbooks
          </Link>
          , or{' '}
          <Link href="/diagnostic" className="text-primary hover:underline">
            book a free diagnostic
          </Link>{' '}
          to start with your own process map.
        </p>
      </div>
    </section>
  )
}
