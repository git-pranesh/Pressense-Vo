const transformations = [
  {
    id: 'clarity',
    title: 'Scattered to Strategic',
    before: 'Unclear positioning, inconsistent pricing, reactive growth',
    after:
      'Clear market position, defined offers, predictable acquisition system',
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: 'operations',
    title: 'Chaotic to Consistent',
    before: 'Ad-hoc delivery, quality variance, key person dependencies',
    after:
      'Documented processes, reliable delivery, team that can execute without you',
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    id: 'scale',
    title: 'Founder-Dependent to Scalable',
    before: 'You are the bottleneck, can&apos;t take time off, decisions wait on you',
    after:
      'Leadership team in place, systems that run without you, growth without burnout',
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export function BecomesSection() {
  return (
    <section
      id="becomes"
      className="py-28 lg:py-36"
      aria-labelledby="becomes-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            The Transformation
          </p>
          <h2
            id="becomes-heading"
            className="text-section-title font-serif font-medium text-foreground text-balance"
          >
            What broken becomes when it&apos;s fixed.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map((item) => (
            <article
              key={item.id}
              className="relative p-6 lg:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {item.title}
              </h3>

              {/* Before/After */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground/60 mb-2">
                    Before
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.before}
                  </p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-2">
                    After
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
