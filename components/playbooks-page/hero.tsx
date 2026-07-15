export function PlaybooksHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="Playbooks and implementation guides">
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Playbooks</span>
          </div>

          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.05] mb-6">
            Playbooks for the constraints{' '}
            <span className="italic font-normal">that slow growth.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            From diagnosis to implementation. Structured frameworks for fixing the problems we see repeatedly.
          </p>
        </div>
      </div>
    </section>
  )
}
