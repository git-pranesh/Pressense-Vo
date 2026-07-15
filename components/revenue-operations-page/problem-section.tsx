// What is Revenue Operations — AEO H2 target + 4 core services
// Google AI Overview extracts structured definition + named service list

const services = [
  {
    name: 'Revenue process design',
    description: 'We map your entire customer journey from first touch to renewal, identify every handoff, and redesign the process so leads never fall through. Most B2B businesses lose 20 to 40 percent of pipeline at the marketing-to-sales handoff alone.',
  },
  {
    name: 'CRM architecture and data cleanup',
    description: 'A CRM full of duplicate records, missing fields, and inconsistent stages produces unreliable forecasts. We rebuild your data model, define pipeline stages precisely, and set up the automation rules that keep it clean going forward.',
  },
  {
    name: 'Revenue forecasting and pipeline management',
    description: 'We build the forecast model your leadership team can trust. This means weighted pipeline by stage, deal velocity tracking, and a weekly rhythm for reviewing what is real and what is wishful thinking.',
  },
  {
    name: 'Cross-functional reporting and KPI alignment',
    description: 'Marketing, sales, and customer success often track different metrics and declare different wins. We define a shared KPI set, build a single reporting dashboard, and run the monthly revenue review that keeps all three teams accountable to the same number.',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">

        {/* What is RevOps — AEO H2, exact PAA match */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow-on-dark">What is revenue operations</span>
          </div>
          <h2 className="text-section-title font-serif font-medium text-ink-foreground text-balance mb-6">
            What is Revenue Operations?
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed mb-4">
            Revenue operations is the business function that aligns marketing, sales, and customer success around shared data, shared processes, and shared accountability. The goal is to remove the handoff failures and visibility gaps that cause deals to stall, forecasts to be wrong, and customers to churn before they should.
          </p>
          <p className="text-lg text-ink-muted leading-relaxed mb-4">
            Without RevOps, your go-to-market teams operate in silos. Marketing tracks MQLs. Sales tracks SQLs. Customer success tracks NPS. Each team optimises for its own metric, and revenue falls through the gaps between them. A RevOps consultant builds the connective tissue that joins these functions into a single operating model.
          </p>
          <p className="text-lg text-ink-muted leading-relaxed">
            Most B2B businesses need revenue operations consulting when they hit $1M to $5M ARR and notice that growth is no longer predictable. The sales cycle gets longer, the pipeline is hard to read, and nobody agrees on what the numbers actually mean.
          </p>
        </div>

        {/* 4 core RevOps services */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance mb-10">
            Revenue operations consulting services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="rounded-2xl p-8 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
