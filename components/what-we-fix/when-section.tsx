const whenToWorkItems = [
  'Revenue is growing but operations can\'t keep up',
  'You\'ve tried hiring or consultants but the problems persist',
  'You know something is broken but can\'t pinpoint it',
  'Growth has stalled and you\'re not sure why',
  'You\'re ready to build systems, not just fight fires',
  'You want to scale without burning out',
]

export function WhenSection() {
  return (
    <section
      id="when-to-work"
      className="py-28 lg:py-36"
      aria-labelledby="when-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left header */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Right Fit
            </p>
            <h2
              id="when-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance"
            >
              When to work with us.
            </h2>
          </div>

          {/* Right list */}
          <div>
            <ul className="space-y-4">
              {whenToWorkItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-primary"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 7l4 4 6-8" />
                    </svg>
                  </span>
                  <span className="text-lg text-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
