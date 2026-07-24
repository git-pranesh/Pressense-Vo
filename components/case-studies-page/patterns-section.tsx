import Link from 'next/link'

const patterns = [
  {
    title: 'Sales motion misaligned with buyer journey',
    description:
      'The product evolved, but the sales process didn\'t. Reps are still pitching features instead of solving problems.',
  },
  {
    title: 'Founder bottleneck preventing scale',
    description:
      'Everything runs through one person. There\'s no system, no delegation, and no way to grow without burning out.',
  },
  {
    title: 'Pricing that leaks margin',
    description:
      'Services are scoped ad-hoc, undercharging high-value clients and over-servicing low-value ones.',
  },
  {
    title: 'No operating system for coordination',
    description:
      'Teams work hard but not together. There\'s no shared rhythm, no clear ownership, and no way to prioritise.',
  },
  {
    title: 'Growth without infrastructure',
    description:
      'Revenue is up, but so is chaos. Onboarding is slow, processes are inconsistent, and decisions are unclear.',
  },
]

export function PatternsSection() {
  return (
    <section
      id="patterns"
      className="py-28 lg:py-36 border-t border-border/40"
      aria-labelledby="patterns-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Recurring Themes
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance mb-5"
            id="patterns-heading"
          >
            Patterns we repeatedly fix
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Different industries. Different stages. The same structural problems.{' '}
            <Link
              href="/about"
              className="text-primary hover:text-highlight underline underline-offset-4 transition-colors"
            >
              See the full list
            </Link>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {patterns.map((pattern, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                {pattern.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pattern.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
