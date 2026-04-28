const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description:
      'We deeply understand your product, customer, team, funnel, and operations to identify what\'s actually broken.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" />
        <path d="M15.5 15.5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategize',
    description:
      'We define what needs to be fixed, what to ignore, and how to position and scale your business.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="14" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="9" y="9" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="16" y="4" width="4" height="17" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M4 13.5L11 8l7-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We implement the systems, tools, workflows, content, and automation needed to support growth.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="12" y="2" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x="2" y="12" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x="12" y="12" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'We help founders and teams operate with clarity, structure, and confidence as the business grows.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 19L8 12l4 3 4-8 3 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="3" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
]

export function ApproachSection() {
  return (
    <section id="how-we-work" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent opacity-60" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance max-w-xl">
            A structured path from broken to scaled.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5 hover:border-border transition-all duration-300 group"
            >
              {/* Number + icon */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-text-dim tracking-widest">{step.number}</span>
                <div className="text-muted-foreground group-hover:text-accent transition-colors duration-200">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Step connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 w-5 h-px bg-border" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
