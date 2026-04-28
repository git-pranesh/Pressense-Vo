const workItems = [
  {
    category: 'Enterprise GTM',
    title: 'Product Narrative & GTM Clarity',
    context: 'Mid-market SaaS vendor with unclear product positioning.',
    problem: 'Sales team confused about customer use cases. Technical content scattered. GTM strategy existed but wasn\'t operationalized.',
    activities: [
      'Facilitated 6-week diagnostic with sales, product, and marketing leaders',
      'Mapped customer jobs-to-be-done and competitive gaps',
      'Built unified product narrative and customer use case library',
      'Designed GTM workflows and content sprints for ongoing execution',
    ],
    outcome: 'Sales cycle shortened. Win rate improved. Team clarity on what they sell and to whom.',
  },
  {
    category: 'Founder-Led Scale',
    title: 'Revenue Leakage & Operations Rebuild',
    context: 'Founder-led business hitting revenue plateau despite growth ambitions.',
    problem: 'Undefined pricing model. Inconsistent onboarding. No customer success system. Founder bottleneck on all decisions.',
    activities: [
      'Conducted customer and internal deep dives',
      'Audited pricing strategy and revenue leakage points',
      'Rebuilt customer onboarding and success playbooks',
      'Implemented ops cadences and decision-making frameworks',
    ],
    outcome: 'Revenue recovery of 18%. Founder freed from execution. Scalable systems in place for next growth phase.',
  },
  {
    category: 'Expert Growth',
    title: 'Personal Brand & Market Expansion',
    context: 'Expert professional looking to scale visibility and revenue without a team.',
    problem: 'No systematic approach to visibility. Ad-hoc client work only. No leverage or productization.',
    activities: [
      'Mapped market opportunities and positioning',
      'Built content and visibility system',
      'Designed repeatable service offerings',
      'Implemented automation for lead flow and follow-up',
    ],
    outcome: 'Consistent inbound pipeline. Revenue doubled year-over-year. Built system for sustainable leverage.',
  },
]

export function WorkGrid() {
  return (
    <section className="py-28 lg:py-36" aria-label="Selected work examples">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="space-y-8 max-w-4xl mx-auto">
          {workItems.map((work, i) => (
            <article key={i} className="glass-card rounded-2xl p-8 lg:p-10 border border-border/40 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-[0.15em] uppercase font-medium text-primary">{work.category}</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6 text-balance">{work.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-medium">Context</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{work.context}</p>
                </div>
                
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-medium">The Problem</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{work.problem}</p>
                </div>
                
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3 font-medium">What We Did</p>
                  <ul className="space-y-2">
                    {work.activities.map((activity, j) => (
                      <li key={j} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary/60 flex-shrink-0">·</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-medium">Outcome</p>
                  <p className="text-base text-foreground font-medium leading-relaxed">{work.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
