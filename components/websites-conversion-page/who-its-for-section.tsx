const fits = [
  { label: 'Good fit', items: ['Businesses where the website does not match what sales says in discovery calls', 'Founders who have refined their offer but whose site still reflects the original version', 'Companies entering a new market or segment that requires updated positioning', 'Teams where inbound leads are low quality or where the site generates volume but not fit', 'Businesses preparing for a fundraise, partnership, or enterprise sale where the site must hold up to scrutiny'] },
  { label: 'Not the right fit', items: ['Businesses whose offer or ICP is not yet defined — messaging cannot fix an unclear offer', 'Teams looking for a design refresh without changing any of the content or structure', 'Founders not willing to change what the site says about who the business is for', 'Businesses expecting a website to generate leads without content, SEO, or distribution behind it', 'Situations where a single landing page would solve the immediate problem more efficiently'] },
]
export function WebsitesWhoItsForSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Who It Is For</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Right for businesses whose offer has evolved past their current website
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A website rebuild makes sense when the gap between what the business actually does and what the site says has become a sales obstacle. It does not make sense as a design exercise.
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
