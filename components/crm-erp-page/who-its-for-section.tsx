const whoItsForCards = [
  {
    title: 'Founders who cannot see the business without asking',
    description: 'If you need to message the team to find out where a deal is, how many active clients you have, or whether a delivery is on track, the operating system is broken. We fix the visibility layer so you always know what is happening without a weekly status call.',
  },
  {
    title: 'Sales teams with inconsistent follow-up',
    description: 'Leads are being created and never followed up. Proposals are sent and forgotten. Deals sit in the pipeline for months with no activity. This is almost always a system problem, not a people problem. The fix is a pipeline with built-in follow-up logic and clear ownership.',
  },
  {
    title: 'Businesses with broken handoffs',
    description: 'When a deal closes, it gets handed off to delivery through a Slack message or a forwarded email. Nobody owns the transition. Delivery starts late or with wrong information. We build the handoff system that connects sales and operations cleanly.',
  },
  {
    title: 'Growing businesses with too many tools',
    description: 'You have HubSpot, Notion, a spreadsheet, a finance tool, and a project management system that all hold different slices of the same business. We audit the stack, identify the gaps, and design an integrated operating layer that reduces duplication.',
  },
]

const notForCards = [
  {
    title: 'Businesses that need an enterprise ERP',
    description: 'If you have 200 employees and need SAP or Oracle, we are not the right fit. We build for growing businesses at the 5 to 100 employee stage that need more structure without enterprise complexity.',
  },
  {
    title: 'Teams unwilling to change how they work',
    description: 'A new CRM only works if the team uses it. If leadership is not ready to enforce the system, the investment will not stick. We will tell you this in the diagnostic if we see it.',
  },
  {
    title: 'Businesses with no defined sales process',
    description: 'If the sales process is entirely ad hoc and undefined, we need to design the process before building the system. This is usually a combined advisory and CRM engagement.',
  },
]

export function CrmWhoItsForSection() {
  return (
    <section className="py-20 md:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">This is right for you if</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-10">
            Who CRM and ERP systems help
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whoItsForCards.map((card, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-border/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">This is NOT for you if</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {notForCards.map((card, i) => (
              <div key={i} className="rounded-2xl p-8 border border-border/40 bg-card/30">
                <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
