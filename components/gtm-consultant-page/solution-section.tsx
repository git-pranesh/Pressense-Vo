const phases = [
  {
    letter: 'P',
    name: 'Position',
    tagline: 'Define exactly who you win with and why',
    description: 'We audit your current positioning against actual buyer language, competitive alternatives, and where your product genuinely outperforms. This phase exposes positioning gaps that cause deals to stall at qualification.',
    deliverable: 'ICP definition, positioning statement, and competitive displacement map',
    week: 'Weeks 1-2',
  },
  {
    letter: 'R',
    name: 'Research',
    tagline: 'Understand what your buyers actually need',
    description: 'We run structured buyer interviews and analyse your win/loss data to understand what drives purchase decisions in your specific market. Most companies skip this and build GTM on assumptions. We build on evidence.',
    deliverable: 'Buyer intelligence report with verbatim purchase triggers and objection patterns',
    week: 'Weeks 2-3',
  },
  {
    letter: 'E',
    name: 'Execute',
    tagline: 'Build the channel and sales motion',
    description: 'We design the two to three channels that actually reach your ICP at purchase intent, and build the sales motion that fits your buyer cycle. This is where most GTM consultants stop. We stay through implementation.',
    deliverable: 'Channel playbook, sales process design, and messaging framework',
    week: 'Weeks 3-5',
  },
  {
    letter: 'S',
    name: 'Scale',
    tagline: 'Install the systems that make it repeatable',
    description: 'We connect marketing, sales, and customer success in your CRM so leads do not leak between stages. We build the dashboards that tell you where deals stall and the feedback loops that make the system self-improving.',
    deliverable: 'CRM configuration, pipeline dashboards, and handoff protocols',
    week: 'Weeks 5-7',
  },
  {
    letter: 'S',
    name: 'Sustain',
    tagline: 'Embed the strategy so it outlasts the engagement',
    description: 'We document everything in a GTM playbook your team can run without us. We train the relevant roles and run a 30-day review to catch any implementation gaps before we hand over fully.',
    deliverable: 'GTM playbook, team training sessions, and 30-day review call',
    week: 'Week 8',
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">

        {/* Framework intro */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Our Methodology</span>
          </div>
          <h2 className="text-section-title font-serif font-medium text-foreground text-balance mb-4">
            The PRESS Framework
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Position, Research, Execute, Scale, Sustain. Every Pressense GTM engagement follows this five-phase framework. Each phase produces a named deliverable. Nothing is a slide deck. Every output is something your team uses from day one.
          </p>
        </div>

        {/* Phases */}
        <div className="flex flex-col gap-4">
          {phases.map((phase, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border border border-border/40 hover:border-primary/20 transition-all duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Letter accent */}
                <div className="flex items-center justify-center w-full md:w-20 py-6 md:py-0 bg-primary/5 border-b md:border-b-0 md:border-r border-border/40 shrink-0">
                  <span className="font-medium text-primary/60">{phase.letter}</span>
                </div>
                {/* Content */}
                <div className="p-8 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{phase.name}</h3>
                      <p className="text-sm text-primary font-medium">{phase.tagline}</p>
                    </div>
                    <span className="text-xs text-muted-foreground border border-border/40 rounded-full px-3 py-1 shrink-0 self-start">{phase.week}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{phase.description}</p>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide shrink-0 mt-0.5">Deliverable:</span>
                    <span className="text-sm text-muted-foreground">{phase.deliverable}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
