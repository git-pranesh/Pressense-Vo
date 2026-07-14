import Link from 'next/link'

const tiers = [
  {
    name: 'Landing Page',
    price: 'From $1,500',
    timeline: '1–2 weeks',
    note: 'Fixed-price build',
    features: [
      'Single page, fully responsive',
      'Custom animations and micro-interactions',
      'SEO meta, Open Graph, JSON-LD schema',
      'Contact form or CTA integration',
      'Core Web Vitals score 90+',
      'Handover training and documentation',
    ],
    suitable: 'Product launches, ad campaigns, and waitlist pages that need to convert quickly',
  },
  {
    name: 'Marketing Site',
    price: 'From $4,000',
    timeline: '2–4 weeks',
    note: 'Fixed-price build',
    highlighted: true,
    features: [
      '5–8 page site with shared design system',
      'CMS integration for blog or case studies',
      'Animated hero and feature sections',
      'Full SEO structure across all pages',
      'Analytics and conversion tracking setup',
      'Post-launch support included',
    ],
    suitable: 'SaaS companies, consulting firms, and agencies launching or redesigning their primary site',
  },
  {
    name: 'Enterprise / Multi-page',
    price: 'Custom',
    timeline: 'Scoped together',
    note: 'Larger engagements',
    features: [
      '10+ page sites with complex content models',
      'Multi-language and localisation',
      'Design system and component library',
      'Figma design → Framer build',
      'Retainer for ongoing updates',
      'Dedicated designer + developer',
    ],
    suitable: 'Larger teams or multi-market sites — scope it together on a call',
  },
]

export function FramerPricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          How much does Framer website design cost?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          A Framer landing page starts from $1,500. A full marketing site with CMS, animations, and full SEO structure starts from $4,000. Traditional web agencies charge $20K–$80K for comparable output — the gap exists because Framer eliminates the Figma-to-code handoff.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Framer&apos;s hosting fee ($20–$40/month) is billed directly by Framer. It is not part of our build cost. Every engagement starts with a fixed-price estimate after the diagnostic — no hourly rates, no invoices for extra rounds.
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
              <p className="text-2xl font-medium text-foreground mb-0.5">{tier.price}</p>
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
              <p className="text-xs text-muted-foreground/30 pt-4">
                <strong className="text-foreground">Best for:</strong> {tier.suitable}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
          All prices exclude GST. Framer hosting ($20–$40/month) billed directly by Framer. Copy must be finalised before build starts — this is the single biggest factor in timeline.{' '}
          <Link href="/diagnostic" className="text-primary hover:underline">Book your diagnostic to get a fixed-price estimate.</Link>
        </p>
      </div>
    </section>
  )
}
