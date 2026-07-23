export function AIStructuredScaleSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20" aria-label="How this connects to structured scale">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-8">
            How this connects to structured scale.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              AI workflows are useful only when they help the business execute with more clarity.
            </p>
            <p>
              The goal is not to use AI everywhere. The goal is to reduce repeated work, improve consistency, preserve knowledge, and help small teams operate with better leverage.
            </p>
            <p className="text-foreground font-medium">
              Good AI systems support human judgment. They do not replace the need for ownership, standards, and process.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border/40">
            <p className="text-muted-foreground">
              See how AI connects to the larger system: <a href="/custom-software-internal-tools" className="text-primary hover:underline">Internal tools</a>, <a href="/how-it-works" className="text-primary hover:underline">How we work</a>, and <a href="/playbooks" className="text-primary hover:underline">Playbooks</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
