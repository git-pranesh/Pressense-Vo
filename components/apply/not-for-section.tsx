const notForItems = [
  'Looking for a quick fix or silver bullet',
  'Not ready to act on the recommendations',
  'Want advice without accountability',
  'Need a full-time hire instead of a strategic partner',
  'Prefer theory over implementation',
]

export function NotForSection() {
  return (
    <section
      id="not-for"
      className="py-20 lg:py-28 border-t border-border/40"
      aria-labelledby="not-for-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left - Text */}
          <div>
            <p className="text-sm uppercase tracking-widest text-destructive/80 mb-4">
              Honest Filter
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance mb-5"
              id="not-for-heading"
            >
              This is not for everyone.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              We are selective about fit because the work succeeds only when there is a
              clear problem, a committed decision-maker, and willingness to implement. If
              any of these describe you, we&apos;re likely not the right fit.
            </p>
          </div>

          {/* Right - List */}
          <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-8">
            <ul className="space-y-4">
              {notForItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-muted-foreground"
                >
                  <span className="mt-1.5 w-5 h-5 rounded-full border border-destructive/40 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                      className="text-destructive/60"
                    >
                      <path
                        d="M2 2l6 6M8 2L2 8"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
