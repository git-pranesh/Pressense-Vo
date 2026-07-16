const fits = [
  { label: 'Good fit', items: ['10 to 100 person businesses with repeatable workflows', 'Founders spending more than 5 hours per week on operational firefighting', 'Teams tracking work in spreadsheets or across 4 or more disconnected tools', 'Businesses where broken handoffs directly reduce delivery quality or speed', 'Operations that need a single source of truth but cannot find one in existing SaaS', 'Founders preparing to raise or hire senior leadership'] },
  { label: 'Not the right fit', items: ['Businesses that have not yet defined or stabilised the workflow to be automated', 'Teams that are not ready to adopt a new system or enforce consistent usage', 'Workflows that change so frequently the tool would be rebuilt every quarter', 'Problems that a well-configured off-the-shelf SaaS tool already solves adequately', 'Businesses without a clear owner who will manage and enforce usage of the tool'] },
]
export function CustomToolsWhoItsForSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Who It Is For</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Right for businesses where manual processes are the bottleneck
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Custom tools solve a specific class of problem. We are direct about when they are the right answer and when they are not.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {fits.map((col, i) => (
            <div key={i}>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-5">{col.label}</p>
              <ul className="space-y-3">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? 'bg-primary' : 'bg-muted-foreground/40'}`} aria-hidden="true" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
