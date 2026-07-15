export function SMBStrategyWhoItsForSection() {
  const rightFor = [
    {
      label: 'Founders stuck in operations',
      body: 'You started the business but now you are the business. Every decision goes through you. You cannot take a week off. You know something needs to change structurally but you do not know where to start. That is exactly the situation we work in.',
    },
    {
      label: 'Businesses that tried AI too early',
      body: 'You bought tools, hired someone to set up automations, and spent money on software. None of it stuck because the underlying processes were not clear enough to automate. Strategy work clarifies those processes first so any tools you add actually help.',
    },
    {
      label: 'Owners who need a thinking partner',
      body: 'You do not need a consultant who disappears after delivering a deck. You need someone who challenges your assumptions, asks the uncomfortable questions, and stays involved as you execute the plan. That is how our retainer model works.',
    },
    {
      label: 'Businesses preparing for growth',
      body: 'You are about to hire your first team, launch a new service, or enter a new market. You want to make sure you are building on a solid foundation rather than scaling chaos. A strategy session before those moves prevents expensive corrections later.',
    },
  ]

  const notFor = [
    'Businesses looking for someone to make decisions for them',
    'Owners not willing to look honestly at what is not working',
    'Teams who want a one-off report with no follow-through',
  ]

  return (
    <section className="py-16 border-t border-border/40" aria-label="Who small business strategy consulting is for">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Is This Right for You</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance mb-10">
          This is right for you if...
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {rightFor.map((item) => (
            <div key={item.label} className="p-6 rounded-xl border border-border/60 bg-card">
              <h3 className="text-base font-semibold text-foreground mb-3">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl border border-border/40 bg-secondary/20">
          <h3 className="text-base font-semibold text-foreground mb-4">This is NOT for you if...</h3>
          <div className="flex flex-col gap-3">
            {notFor.map((item) => (
              <p key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-border/60">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
