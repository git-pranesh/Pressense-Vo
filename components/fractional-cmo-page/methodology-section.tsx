const phases = [
  {
    number: '01',
    name: 'Diagnose',
    description: 'The first two weeks are an audit. We review your current marketing spend, channel performance, messaging, team structure, and funnel metrics. We interview your sales team, look at what your best customers say about why they bought, and identify where the biggest leaks are. You receive a written diagnosis with your top three marketing constraints ranked by revenue impact.',
    deliverable: 'Marketing audit report and constraint map',
  },
  {
    number: '02',
    name: 'Strategise',
    description: 'We build the GTM strategy based on what the diagnosis found. This covers positioning, ICP definition, channel prioritisation, messaging architecture, and a 90-day execution roadmap. Before anything gets built or spent, you have a clear plan that your whole team, sales, product, and marketing, agrees on.',
    deliverable: 'GTM strategy document and 90-day roadmap',
  },
  {
    number: '03',
    name: 'Build',
    description: 'Strategy without systems is just a document. This phase builds the infrastructure: demand gen engine, CRM workflows, content system, reporting dashboard, and campaign playbooks. We manage agencies and junior team members through this phase so execution stays aligned with strategy. You see measurable pipeline impact within 60 days.',
    deliverable: 'Marketing infrastructure, playbooks, and reporting framework',
  },
  {
    number: '04',
    name: 'Scale',
    description: 'Once the system is running, we optimise and scale what is working. This includes channel expansion, team hiring guidance, board-ready reporting, and preparing the business for a full-time marketing hire when the time is right. Some clients continue with ongoing fractional advisory at a lighter-touch cadence from this point.',
    deliverable: 'Scaled marketing system and full-time hire transition plan',
  },
]

export function MethodologySection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">The Pressense Method</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4">
          Diagnose. Strategise. Build. Scale.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-14">
          Every fractional CMO engagement follows the same four phases. No scope creep, no vague retainers. You know what happens in each phase and what you receive at the end of it.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="text-4xl font-bold text-primary/20 leading-none">{phase.number}</span>
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium pt-1">{phase.name}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{phase.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{phase.description}</p>
              <div className="flex items-start gap-2.5 pt-4 border-t border-border/40">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-foreground font-medium">{phase.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
