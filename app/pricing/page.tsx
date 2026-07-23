import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Pricing | Pressense',
  description: 'Transparent pricing for all Pressense services — AI automation, GTM strategy, custom development, integrations, and business consulting. All services include a free diagnostic.',
  openGraph: {
    title: 'Service Pricing | Pressense',
    description: 'Transparent pricing for all Pressense services — AI automation, GTM strategy, custom development, integrations, and business consulting.',
    url: '/pricing',
    type: 'website',
  },
}

const services = [
  {
    name: 'Custom Software & Internal Tools',
    price: 'From $3,000',
    type: 'Project',
    outcome: 'Custom Software & Internal Tools — placeholder description.',
    link: '/custom-software-internal-tools',
    deliverables: ['Requirements mapping', 'Custom tool build', 'User training', 'Post-launch support option'],
  },
  {
    name: 'Workflow Automation',
    price: 'From $1,200',
    type: 'Project',
    outcome: 'Workflow Automation — placeholder description.',
    link: '/workflow-automation',
    deliverables: ['Process audit & redesign', 'Tool selection & setup', 'Custom automation builds', '30-day post-launch support'],
  },
  {
    name: 'Custom CRM',
    price: 'From $5,000',
    type: 'Project',
    outcome: 'Custom CRM — placeholder description.',
    link: '/custom-crm',
    deliverables: ['Custom data model', 'Workflow automation', 'Integrations (email, calendar, etc.)', 'Team training & handover'],
  },
  {
    name: 'AI Integration',
    price: 'From $2,000',
    type: 'Project',
    outcome: 'AI Integration — placeholder description.',
    link: '/ai-integration',
    deliverables: ['AI capability audit', 'API architecture & integration', 'Prompt engineering & testing', 'Team training & documentation'],
  },
  {
    name: 'Fractional CMO',
    price: 'From $1,500/month',
    type: 'Retainer',
    outcome: 'Fractional CMO — placeholder description.',
    link: '/fractional-cmo',
    deliverables: ['Marketing audit & positioning', 'GTM strategy & 90-day roadmap', 'Demand gen engine setup', 'Board-ready dashboards'],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Pricing</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-tight">
              Transparent pricing. No surprises.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Every service includes a free diagnostic to confirm scope and pricing. Pick a service below — all prices are project-based or monthly retainers, depending on engagement type.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
              >
                Book a free diagnostic
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
              >
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services — flat grid */}
      <section className="py-16 lg:py-20 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="grid gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.name} className="glass-card rounded-2xl p-6 sm:p-8 border border-border/40 flex flex-col gap-5">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{service.name}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-lg border border-primary/30 bg-primary/5 text-xs font-semibold text-primary">
                        {service.price}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground bg-secondary/40 px-2.5 py-1 rounded">
                        {service.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Outcome statement */}
                <p className="text-base text-foreground italic leading-relaxed">
                  {service.outcome}
                </p>

                {/* Deliverables */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2.5">Includes</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                          <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.5" />
                          <path d="M5 8l1.5 1.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Escape valve + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-border/30">
                  <p className="text-xs text-muted-foreground">
                    Larger engagements?{' '}
                    <Link href="/contact" className="text-primary hover:underline">
                      Let&apos;s scope it together.
                    </Link>
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Full details
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA footer */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-2xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every engagement starts with a free diagnostic call. We'll map your constraints, scope the work, and give you a fixed price — no surprises.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Start your diagnostic
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
