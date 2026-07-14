export function SaaSGTMWhoItsForSection() {
  const rightFor = [
    {
      label: 'Pre-revenue founders',
      body: 'You have built or are building a SaaS product and you need to know exactly who to target, what to charge, and which channel to go after first. You want a plan you can act on this week, not a deck you file away.',
    },
    {
      label: 'Post-launch but not growing',
      body: 'You have customers but growth has stalled. You are unsure whether it is a messaging problem, a channel problem, or a pricing problem. You need someone to diagnose it without bias and give you a clear answer.',
    },
    {
      label: 'Preparing for a funding round',
      body: 'Investors ask for GTM clarity before they write cheques. You need a tight ICP, a repeatable acquisition narrative, and a 12-month roadmap that holds up under due diligence.',
    },
    {
      label: 'Scaling a working product',
      body: 'Your current GTM was built by trial and error. It works, but it is fragile. You want to formalise what is working, cut what is not, and build a system that a team can run without you doing everything.',
    },
  ]

  const notFor = [
    'Businesses without a defined product or service yet',
    'Founders who want a strategy deck but are not ready to execute',
    'Teams looking for paid ad management only, not strategy',
  ]

  return (
    <section className="py-16" aria-label="Who this service is for">
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
