import Link from 'next/link'

const tiers = [
  {
    name: 'Focused Integration',
    price: 'From $2,000',
    timeline: '2–3 weeks',
    note: 'Fixed-price build',
    features: [
      'Single use case (e.g. document analyser)',
      'Prompt architecture and system prompt',
      'API integration layer',
      'Basic UI or admin panel',
      'Usage logging and cost monitoring',
      'Two-week post-launch support',
    ],
    suitable: 'Teams with one clear AI task that needs a production-ready tool, not a prototype',
  },
  {
    name: 'Custom AI Application',
    price: 'From $5,000',
    timeline: '4–6 weeks',
    note: 'Fixed-price build',
    highlighted: true,
    features: [
      'Multiple use cases or workflows',
      'Multi-model routing (Claude + other APIs)',
      'Integrations with existing tools (CRM, docs, email)',
      'Role-based access controls',
      'Admin dashboard and usage analytics',
      'Four-week post-launch support',
    ],
    suitable: 'Founder-led businesses building a core AI layer into their product or operations',
  },
  {
    name: 'Ongoing Retainer',
    price: 'Custom',
    timeline: 'Monthly',
    note: 'Ongoing development + support',
    features: [
      'Prompt iteration and optimisation',
      'New use-case additions',
      'Model upgrades as Anthropic releases',
      'Integration maintenance',
      'Bug fixes within 24–48 hours',
    ],
    suitable: "Businesses that want a dedicated AI developer to evolve the integration as their needs grow",
  },
]

export function ClaudeApiPricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          What does Claude API integration cost?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          Claude API integration with Pressense starts from $2,000 for a focused single-use-case build. This is the cost of our integration work — not Anthropic&apos;s API usage, which is billed separately by the token.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Enterprise AI agencies charge $30K–$100K for comparable integrations. We serve founder-led businesses that need production-quality AI tools without enterprise pricing. Every engagement starts with a fixed-price estimate after the diagnostic.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-2xl border flex flex-col ${
                tier.highlighted ? 'border-primary/50 bg-primary/5' : 'border-border/50 bg-card'
              }`}
            >
              {tier.highlighted && (
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Most Common</span>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
              <p className="text-2xl font-bold text-foreground mb-0.5">{tier.price}</p>
              <p className="text-xs text-muted-foreground mb-1">{tier.note}</p>
              <p className="text-xs text-muted-foreground mb-5">Timeline: {tier.timeline}</p>
              <div className="space-y-2 flex-1 mb-6">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground border-t border-border/30 pt-4">
                <strong className="text-foreground">Best for:</strong> {tier.suitable}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
          All prices exclude GST. Anthropic API usage billed separately and depends on volume. Full cost estimate provided after the free diagnostic session.{' '}
          <Link href="/contact" className="text-primary hover:underline">Book your diagnostic here.</Link>
        </p>
      </div>
    </section>
  )
}
