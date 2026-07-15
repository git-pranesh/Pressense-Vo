const whenNotItems = [
  'You\'re looking for a quick fix or magic bullet',
  'You\'re not willing to change how you operate',
  'You want advice but won\'t implement',
  'You need someone to validate decisions already made',
  'You\'re looking for the cheapest option',
  'You expect results without doing the work',
]

export function WhenNotSection() {
  return (
    <section
      id="when-not"
      className="py-28 lg:py-36 bg-card/20"
      aria-labelledby="when-not-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left header */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Not Right For
            </p>
            <h2
              id="when-not-heading"
              className="text-section-title font-serif font-medium text-foreground text-balance"
            >
              When we&apos;re not the right fit.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              We&apos;re selective about who we work with because the work
              requires commitment from both sides. We&apos;d rather be honest
              upfront.
            </p>
          </div>

          {/* Right list */}
          <div>
            <ul className="space-y-4">
              {whenNotItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full border border-border/60 bg-secondary/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-muted-foreground"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3l8 8M11 3l-8 8" />
                    </svg>
                  </span>
                  <span className="text-lg text-muted-foreground leading-relaxed">
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
