export function ErpLiteSection() {
  return (
    <section className="py-24 lg:py-32" aria-label="ERP-lite positioning">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-8 text-balance">
            ERP-lite, not enterprise bloat.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Many growing businesses need structure before they need a full enterprise ERP.
            </p>
            <p>
              They need visibility across orders, customers, vendors, delivery, payments, inventory, tasks, approvals, and reporting, without spending months inside a heavy implementation.
            </p>
            <p className="text-foreground font-medium">
              ERP-lite systems create the operational backbone a growing business needs now, while staying simple enough for the team to actually use.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border/40">
            <p className="text-muted-foreground">
              See how this connects to <a href="/custom-internal-tools" className="text-primary hover:underline">internal tools</a> and <a href="/how-we-work" className="text-primary hover:underline">how we work</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
