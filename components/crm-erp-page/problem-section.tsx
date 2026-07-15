export function CrmProblemSection() {
  return (
    <section className="py-20 md:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">
            The real problem is not software. It is operating visibility.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Growing businesses accumulate tools: a CRM here, a spreadsheet there, a shared inbox, a project management tool, and a finance system that does not talk to any of them. The result is that leadership cannot see what is actually happening without asking the team manually.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Leads fall through the cracks not because the business lacks a CRM, but because the pipeline stages do not match the actual sales process, ownership is unclear, and nobody agreed on what a qualified lead looks like.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Delivery breaks down not because the team is bad at their job, but because handoffs between sales and operations are informal, status is tracked in a spreadsheet that only one person updates, and there is no single source of truth for what is happening with each client.
          </p>
        </div>
      </div>
    </section>
  )
}
