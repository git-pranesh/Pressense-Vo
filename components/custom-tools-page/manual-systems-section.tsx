export function ManualSystemsSection() {
  return (
    <section className="py-28 lg:py-36 border-t border-border/40" aria-labelledby="manual-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 id="manual-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-8">
            Manual systems work, until the business grows past them.
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most businesses do not start with broken operations. They grow into them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Spreadsheets, WhatsApp, email, disconnected SaaS tools, and founder memory can work in the early stages. But as the team grows, these systems create delays, missed handoffs, reporting gaps, and revenue leakage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is where internal tools become useful, not as "software for the sake of software," but as infrastructure for how the business actually runs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
