const businessTypes = [
  {
    title: 'Scaling Founders',
    description:
      'You built something that works — now you need the systems to grow it without losing control.',
  },
  {
    title: 'Operators & COOs',
    description:
      'You own execution, but the current systems are blocking scale. Time to rebuild the engine.',
  },
  {
    title: 'Enterprise Teams',
    description:
      'A function or department needs restructuring. Strategy exists — execution is stalled.',
  },
]

export function ForBusinessesSection() {
  return (
    <section
      id="for-businesses"
      className="py-20 lg:py-28 border-t border-border/40"
      aria-labelledby="for-businesses-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Who This Is For
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance max-w-xl"
            id="for-businesses-heading"
          >
            This is for businesses that are ready to move.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {businessTypes.map((type) => (
            <div
              key={type.title}
              className="group relative p-6 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="text-primary"
                >
                  <path
                    d="M10 2v16M2 10h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {type.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
