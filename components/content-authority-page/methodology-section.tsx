const phases = [
  {
    number: '01',
    name: 'Diagnose',
    description: 'We review the business, customer, product, positioning, and current communication gaps. We map where expertise is trapped, where buyers are losing clarity, and which content investments have the highest ROI potential for your current stage.',
    deliverable: 'Communication gap report and content opportunity map',
  },
  {
    number: '02',
    name: 'Strategise',
    description: 'We define what the business should be known for, map the full buyer question tree using tools like AlsoAsked, and design the pillar-cluster content architecture. Every topic is mapped to a buyer persona, a pain point, and a pipeline stage before writing begins.',
    deliverable: 'Content strategy document and pillar architecture',
  },
  {
    number: '03',
    name: 'Build',
    description: 'We create the core content assets: pillar pages, cluster articles, website copy, AEO-structured FAQ pages, and founder-led content. Every piece includes FAQPage schema, question-based headings, and direct 40 to 60 word answer blocks that AI systems can extract.',
    deliverable: 'Core content assets, schema markup, and publishing workflow',
  },
  {
    number: '04',
    name: 'Scale',
    description: 'We build the repeatable system: a content capture process, a weekly production workflow, and AI-assisted tools that let your team maintain output without the founder becoming a bottleneck. You leave with a running system, not a dependency on us.',
    deliverable: 'Content production system, team training, and performance dashboard',
  },
]

export function ContentMethodologySection() {
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
          We do not start by writing. We start by understanding what the business should be known for, which buyers it needs to reach, and what questions those buyers are actually asking. Every piece of content is then built to answer those questions in a way that both search engines and buyers can act on.
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
