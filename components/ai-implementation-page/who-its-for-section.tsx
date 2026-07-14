export function AIImplementationWhoItsForSection() {
  const rightFor = [
    {
      label: 'Healthcare practices',
      body: 'You spend hours on prior authorisations, patient intake paperwork, appointment reminders, and follow-up messages. AI can handle most of this inside your existing tools, without touching patient records or requiring a HIPAA-certified overhaul of your entire stack.',
    },
    {
      label: 'Real estate agencies',
      body: 'You manually respond to enquiries, update CRM records after calls, chase documents, and write listing descriptions. Every one of these tasks can be partially or fully automated. We build the workflows and connect them to the tools you already use.',
    },
    {
      label: 'IT service providers',
      body: 'You field the same support tickets over and over. You write proposals from scratch every time. You manually pull time logs into invoices. These are not hard problems to solve with AI. They just require someone to build the pipeline and make sure it works in practice.',
    },
    {
      label: 'Interior designers and agencies',
      body: 'You create project briefs, supplier emails, client update reports, and mood board copy repeatedly for each project. We build AI workflows that take your inputs and produce first drafts in your tone, so you spend time refining rather than starting from blank.',
    },
  ]

  const notFor = [
    'Businesses that have not yet defined their core workflows',
    'Teams that want AI implemented but are not willing to change how they work',
    'Companies looking for a one-off tool with no ongoing support need',
  ]

  return (
    <section className="py-16" aria-label="Who AI implementation is for">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">Is This Right for You</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold text-ink-foreground text-balance mb-10">
          This is right for you if...
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {rightFor.map((item) => (
            <div key={item.label} className="p-6 rounded-xl border border-border/60 bg-card">
              <h3 className="text-base font-semibold text-foreground mb-3">{item.label}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl border border-border/40 bg-secondary/20">
          <h3 className="text-base font-semibold text-foreground mb-4">This is NOT for you if...</h3>
          <div className="flex flex-col gap-3">
            {notFor.map((item) => (
              <p key={item} className="text-sm text-ink-muted leading-relaxed pl-4 border-l border-border/60">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
