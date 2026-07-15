export function SeoSaasMethodologySection() {
  const phases = [
    {
      number: '01',
      name: 'Diagnose',
      tagline: 'Map your current content against buyer intent',
      description:
        'The diagnostic starts with your existing content: what is ranking, what is generating trials, and what is generating sessions with no downstream behaviour. We audit your keyword footprint against the full buyer journey: awareness, consideration, and decision. We identify the content that is missing at each stage and the quick wins available in the first thirty days. You see a prioritised gap analysis before any content is produced.',
      deliverable: 'Content audit + keyword gap analysis + 90-day content calendar',
    },
    {
      number: '02',
      name: 'Architect',
      tagline: 'Build the topic cluster and content hierarchy',
      description:
        'We design the topic cluster architecture: one pillar page per core category, supported by eight to twelve cluster articles per pillar. Every article has a defined job: a specific keyword, a specific buyer stage, a specific question to answer. Comparison pages, alternative pages, use-case pages, and integration guides are built into the architecture from the start, not added later as afterthoughts. The cluster map is reviewed and approved before we start writing.',
      deliverable: 'Topic cluster map + pillar page outlines + content briefs',
    },
    {
      number: '03',
      name: 'Produce',
      tagline: 'Write content built for both Google and AI citation',
      description:
        'Every piece is written to a brief that specifies the target keyword, the buyer stage, the primary question to answer, and the specific claim or insight that differentiates it from what already ranks. We write for direct question-answer structure so the content is cited by AI engines as well as ranked by Google. Content is reviewed against the brief and against the existing ranking pages before it is delivered. We do not produce content that is a rephrasing of what already ranks.',
      deliverable: 'Published articles, comparison pages, and use-case pages per calendar',
    },
    {
      number: '04',
      name: 'Measure',
      tagline: 'Track organic pipeline, not organic traffic',
      description:
        'Traffic is a vanity metric. We track the metrics that connect to revenue: organic trial sign-ups, organic demo requests, and organic-sourced pipeline revenue. We set up conversion tracking so every piece of content that generates a trial is attributed. Monthly reviews cover ranking movements, conversion rates by content type, and the next iteration priorities. The goal is a content programme that the CFO can connect to revenue, not one that only exists in the marketing dashboard.',
      deliverable: 'Monthly performance report + ranking tracker + conversion attribution',
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          How We Work
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-ink-foreground text-balance mb-4 leading-tight">
          How we build a SaaS SEO content programme that generates pipeline
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-14 max-w-2xl">
          Four phases. Every phase has a named deliverable. The goal throughout is not content volume — it is content that generates organic trials, demos, and pipeline within ninety days.
        </p>

        <div className="space-y-0">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`flex flex-col md:flex-row gap-8 py-10 ${
                i < phases.length - 1 ? 'border-b border-border/30' : ''
              }`}
            >
              <div className="md:w-48 flex-shrink-0">
                <span className="font-medium text-primary/20 leading-none block mb-1">
                  {phase.number}
                </span>
                <h3 className="text-xl font-medium text-foreground">{phase.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{phase.tagline}</p>
              </div>

              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed mb-5">{phase.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Deliverable</span>
                  <span className="text-xs text-foreground">{phase.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
