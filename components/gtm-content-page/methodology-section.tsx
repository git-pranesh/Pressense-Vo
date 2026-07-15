export function GtmContentMethodologySection() {
  const phases = [
    {
      number: '01',
      name: 'Positioning Audit',
      tagline: 'Establish the foundation before building the system',
      description:
        'No content system produces results on top of vague positioning. We start with your ICP: the specific company type, company size, and role of the buyer who closes fastest and churns slowest. We define your primary value proposition in one sentence that a twelve-year-old could explain. We identify the three to five job-to-be-done your product solves. This is the foundation every piece of content in the system is built on. If the positioning changes, the system adapts. If the positioning is undefined, no content will convert.',
      deliverable: 'ICP definition + positioning statement + JTBD map',
    },
    {
      number: '02',
      name: 'System Architecture',
      tagline: 'Design the content machine before producing a single piece',
      description:
        'The architecture covers four layers: the content types and topics mapped to the buyer journey, the production workflow from brief to published, the distribution channels and their cadences, and the measurement setup in your CRM and analytics. We map every content type to a specific buyer stage and a specific channel. We design the attribution tagging so every content-sourced lead is trackable. Nothing is built until the architecture is reviewed and approved.',
      deliverable: 'Content architecture doc + topic cluster map + distribution playbook + CRM attribution setup',
    },
    {
      number: '03',
      name: 'Foundation Build',
      tagline: 'Launch the first pillar cluster and distribution cadence',
      description:
        'The foundation build produces the first complete topic cluster: one pillar page and the first four cluster articles, fully researched, written, optimised for both Google and AI citation, and interlinked. In parallel, we configure the distribution infrastructure: the LinkedIn repurposing workflow, the email newsletter setup, the CRM tagging for content-attributed leads. By the end of this phase, the system is live, producing content, and tracking attribution.',
      deliverable: 'Live pillar page + 4 cluster articles + distribution cadence live + CRM attribution active',
    },
    {
      number: '04',
      name: 'Operate and Compound',
      tagline: 'Run the system and measure against pipeline, not traffic',
      description:
        'After the foundation is live, we move into an operational rhythm: two to four new cluster articles per month, one sales enablement piece per quarter, monthly LinkedIn content from repurposed long-form, and a monthly performance review that connects content output to organic trials, demos, and CRM-attributed pipeline. Every quarterly review includes a positioning check: if your ICP has shifted or a new competitor has emerged, the content plan adjusts. The system is designed to compound, not to produce a fixed output and stop.',
      deliverable: 'Monthly content production + performance reports + quarterly system review',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          The System
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-ink-foreground text-balance mb-4 leading-tight">
          How we design and run your GTM content system
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-14 max-w-2xl">
          Four phases from positioning foundation to operational system. Every phase produces a named set of deliverables. By phase three, content is live, distributed, and attributed in your CRM.
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
