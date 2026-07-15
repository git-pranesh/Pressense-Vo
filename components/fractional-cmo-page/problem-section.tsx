// AEO target: "What does a fractional CMO do?" — structured list for AI Overview extraction
const responsibilities = [
  {
    title: 'Define positioning and ICP',
    detail: 'Map the ideal customer profile, sharpen messaging, and align the whole team around who you are selling to and why they buy.',
  },
  {
    title: 'Architect the GTM engine',
    detail: 'Design inbound, outbound, and product-led growth motions. Set up demand generation with measurable pipeline metrics: CAC, LTV, and conversion rates.',
  },
  {
    title: 'Align marketing with sales',
    detail: 'End the blame game between marketing and sales. Build shared pipeline definitions, SLAs, and feedback loops so both teams pull in the same direction.',
  },
  {
    title: 'Lead and structure the team',
    detail: 'Manage junior marketers, hire contractors, oversee agencies, and build a marketing org that does not need founder oversight on every decision.',
  },
  {
    title: 'Report at board level',
    detail: 'Translate marketing activity into business metrics. Produce board-ready reporting that shows pipeline contribution, channel ROI, and growth trajectory.',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="what-cmo-does-heading">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow-on-dark">The role defined</span>
          </div>
          {/* H2 matches the PAA question exactly for AEO */}
          <h2
            id="what-cmo-does-heading"
            className="text-section-title font-serif font-medium text-ink-foreground text-balance mb-6"
          >
            What does a fractional CMO do?
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">
            A fractional CMO services engagement covers the full scope of a senior marketing leader, just at the hours your stage requires. Most B2B SaaS companies at the 0-to-1 or 1-to-3 million ARR stage need 10 to 20 hours of CMO-level input per week. They do not need someone in a seat full-time. Here is what that input covers:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {responsibilities.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-xs font-bold text-primary/50 pt-0.5 tabular-nums">0{i + 1}</span>
                <h3 className="text-lg font-semibold text-foreground leading-snug">{item.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
