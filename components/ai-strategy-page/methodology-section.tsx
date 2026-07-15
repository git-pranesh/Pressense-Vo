const phases = [
  {
    number: '01',
    name: 'Diagnose',
    tagline: 'What is actually worth automating?',
    weeks: 'Week 1',
    deliverable: 'AI Opportunity Map',
    body1:
      'We run a 30-minute structured diagnostic with you and up to two key team members. We map every task that is high-volume, rule-based, and currently done by a human. We score each one against three criteria: time saved per week, ease of implementation, and revenue or cost impact. The output is a prioritised list of the top five AI opportunities in your business, ranked by ROI.',
    body2:
      'We also run the four-dimension readiness check: data quality, process documentation, team buy-in, and tool compatibility. If any of these flags red, we tell you what needs to be fixed first. A bad AI implementation wastes more time than it saves. We would rather tell you the hard truth in week one than discover it in week six.',
  },
  {
    number: '02',
    name: 'Strategise',
    tagline: 'Build the roadmap, not the slides.',
    weeks: 'Week 2',
    deliverable: 'Implementation Roadmap',
    body1:
      'We turn the opportunity map into a phased implementation roadmap. Phase one covers the two to three highest-ROI wins your team can execute in 30 days without external dependencies. Phase two covers the two to three next-level initiatives that need either a data cleanup or a small custom build first. Phase three is the six-to-twelve month horizon.',
    body2:
      'Every item in the roadmap has a named owner, a success metric, a tool recommendation with cost, and an estimated hours-saved figure. This is the document you take to your board or your ops team. It is not a strategy framework. It is a task list with context.',
  },
  {
    number: '03',
    name: 'Build',
    tagline: 'Pilots that prove the strategy works.',
    weeks: 'Weeks 3–4',
    deliverable: 'Two working pilots',
    body1:
      'We do not hand you a roadmap and leave. We build the first two pilots ourselves: typically an AI workflow using your existing tools (Make, Zapier, Claude, or a custom Replit app) and an AI-assisted document or report template. Both run in parallel with your existing process for the first two weeks so you can validate the output before switching over.',
    body2:
      'Pilots are scoped to be completable in five to ten hours of build time. They are not production systems. They are proof points. If a pilot works, it goes into the Scale phase. If it does not, we adjust the strategy and try the next item on the list. The roadmap is a living document, not a fixed contract.',
  },
  {
    number: '04',
    name: 'Scale',
    tagline: 'Expand what works. Cut what does not.',
    weeks: 'Month 2 onward',
    deliverable: 'Monthly retainer or handoff',
    body1:
      'Once the pilots show measurable results, we either hand off to your team with documentation and training, or we move into a monthly retainer to continue building and optimising. The retainer covers two to three new AI builds per month, plus ongoing optimisation of the systems already running.',
    body2:
      'Most clients see the pilot results within the first 30 days and make the retainer decision based on hard data, not a sales pitch. The average retainer client saves 15 to 25 hours per week across their operations team within three months. That is the equivalent of one part-time hire.',
  },
]

export function AIStrategyMethodology() {
  return (
    <section
      className="py-16 bg-surface"
      aria-labelledby="methodology-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-4 block">
            Our methodology
          </span>
          <h2
            id="methodology-heading"
            className="text-3xl sm:text-4xl font-medium text-foreground text-balance leading-tight mb-4"
          >
            The Pressense AI Strategy framework
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Diagnose, Strategise, Build, Scale. Every engagement follows the same four phases. The output of each phase is a concrete deliverable, not a status update.
          </p>

          <div className="space-y-10">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="flex gap-6"
              >
                <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                  <span className="text-xs font-mono font-medium text-primary/60">{phase.number}</span>
                  <div className="w-px flex-1 bg-border/40" aria-hidden="true" />
                </div>
                <div className="pb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-medium text-foreground">{phase.name}</h3>
                    <span className="text-xs text-muted-foreground">{phase.weeks}</span>
                  </div>
                  <p className="text-sm text-primary/70 font-medium mb-3">{phase.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-3">{phase.body1}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{phase.body2}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground bg-card px-3 py-1.5 rounded-full">
                    Deliverable: {phase.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
