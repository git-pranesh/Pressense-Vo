export function WorkHero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 flex flex-col justify-center overflow-hidden pt-20 bg-background hero-section" aria-label="Work and selected engagements">
      {/* Grid background */}

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Our Work</span>
          </div>

          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Selected Work
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Every engagement is confidential. These are directional examples of the types of problems we solve and how we approach them.
          </p>
        </div>
      </div>

    </section>
  )
}
