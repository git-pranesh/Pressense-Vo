import Link from 'next/link'

const areas = [
  {
    name: 'GTM Strategy',
    outcome: 'Clear ICP and messaging',
    description:
      'Who to target, how to position, what message to lead with, and which channels to prioritise. Most early-stage businesses have marketing activity but no GTM strategy. The activity generates noise. The strategy generates traction.',
    detail: 'Covers ICP definition, competitive positioning, offer clarity, channel prioritisation, and a 90-day GTM plan.',
  },
  {
    name: 'Growth Bottleneck Diagnosis',
    outcome: 'Constraint identified in week 1',
    description:
      'When growth feels slow or scattered, the cause is usually one of five things: unclear positioning, a broken conversion step, a founder bottleneck, revenue leakage, or a systems gap. We diagnose which one is the primary constraint and build a plan around fixing it first.',
    detail: 'Covers funnel analysis, customer interviews, revenue flow review, and team structure assessment.',
  },
  {
    name: 'Pricing and Offer Clarity',
    outcome: 'Easier to buy, harder to ignore',
    description:
      'Underpricing, unclear packaging, and offers that require explanation are among the most common causes of slow sales. We work through how value is packaged, where pricing is leaving money on the table, and how to make the offer clearer to the buyer.',
    detail: 'Covers offer structure, pricing tiers, comparison to alternatives, and sales conversation alignment.',
  },
  {
    name: 'Market Entry and Expansion',
    outcome: 'New market, lower risk',
    description:
      'Entering a new market or segment without a clear view of the buyer, competition, and positioning is expensive. We define which markets to enter, how to evaluate them, what risks to avoid, and what the GTM motion looks like before you commit resource.',
    detail: 'Covers market sizing, buyer research, competitive landscape, positioning, and go-to-market sequencing.',
  },
  {
    name: 'Revenue Leakage Review',
    outcome: 'Recovered pipeline within 30 days',
    description:
      'Most businesses lose 15 to 30 percent of revenue opportunity to gaps in their process: leads that go uncontacted, deals that stall without follow-up, customers who churn without a retention trigger, and margins that erode through untracked discounting.',
    detail: 'Covers lead response times, pipeline conversion rates, churn triggers, pricing discipline, and upsell gaps.',
  },
  {
    name: 'Execution Roadmap',
    outcome: '90-day plan with clear ownership',
    description:
      'Strategy without a sequenced plan is just thinking. Every advisory engagement ends with a practical roadmap that defines what to fix, what to build, in what order, and who owns each step. This can extend into execution through{" "} <a href="/ai-automation-agency" class="text-primary hover:underline">automation</a>, <a href="/custom-software-internal-tools" class="text-primary hover:underline">internal tools</a>, or <a href="/content-authority-systems" class="text-primary hover:underline">content systems</a>.',
    detail: 'Covers prioritised actions, ownership assignment, success metrics, and sequencing logic.',
  },
]

export function AdvisorySolutionSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">
          What strategic advisory covers
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Every engagement starts with a diagnostic to identify the actual constraint. We then work through the areas that matter most for the current stage of the business. See{' '}
          <Link href="/playbooks" className="text-primary hover:underline">our playbooks</Link>{' '}
          for examples of how each area works in practice.
        </p>

        <div className="space-y-8">
          {areas.map((area, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h3 className="text-xl font-semibold text-foreground">{area.name}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 shrink-0">
                  {area.outcome}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">{area.description}</p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">{area.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
          >
            Start With a Diagnostic
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
