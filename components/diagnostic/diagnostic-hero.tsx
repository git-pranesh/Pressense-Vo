export function DiagnosticHero() {
  return (
    <section
      id="diagnostic-hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-label="Diagnostic page introduction"
    >
      {/* Grid background */}

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="eyebrow mb-6">
          Diagnostic
        </p>

        {/* H1 - Only H1 on page */}
        <h1 className="text-display font-serif font-medium text-foreground leading-[1.08] text-balance mb-6">
          Start with the right problem.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          Tell us what feels unclear, broken, or stuck. We will use the context to understand whether the next step should be advisory, a workflow, website, content system, CRM/ERP layer, internal tool, AI workflow, or something simpler.
        </p>
      </div>
    </section>
  )
}
