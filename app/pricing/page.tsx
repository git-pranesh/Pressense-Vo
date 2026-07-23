import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | Pressense',
  description: 'Every engagement starts with a free diagnostic. See realistic starting prices for each service — final pricing depends on scope.',
  openGraph: {
    title: 'Pricing | Pressense',
    description: 'Every engagement starts with a free diagnostic. See realistic starting prices for each service.',
    url: '/pricing',
    type: 'website',
  },
}

const services = [
  {
    name: 'Custom Software & Internal Tools',
    price: 'From $3,000',
    type: 'Project',
    description: 'A working internal tool built around your actual process, not a generic template. Includes the diagnostic that scopes it.',
    link: '/custom-software-internal-tools',
  },
  {
    name: 'Workflow Automation',
    price: 'From $1,200',
    type: 'Project',
    description: 'We find where work is duplicating or stalling, then automate the repetitive parts so your team stops chasing status updates by hand.',
    link: '/workflow-automation',
  },
  {
    name: 'Custom CRM',
    price: 'From $5,000',
    type: 'Project',
    description: 'A CRM shaped around how your team actually sells and delivers, with the integrations you already rely on built in from day one.',
    link: '/custom-crm',
  },
  {
    name: 'AI Integration',
    price: 'From $2,000',
    type: 'Project',
    description: 'AI added to tools you already use, aimed at cutting specific manual work. Not a chatbot for the sake of having one.',
    link: '/ai-integration',
  },
  {
    name: 'Fractional CMO',
    price: 'From $1,500/month',
    type: 'Retainer',
    description: 'Ongoing positioning and go-to-market support, for clients whose operations are already solid enough to build growth on top of.',
    link: '/fractional-cmo',
  },
]

const faqs = [
  {
    q: "Why isn't there a fixed price for everything?",
    a: "Because the right price depends on what you actually need, and we don't know that until the diagnostic is done. A fixed number without that context would be a guess.",
  },
  {
    q: 'Is the diagnostic really free?',
    a: 'Yes. No cost, no obligation to continue after it.',
  },
  {
    q: 'What decides if I qualify for a free first build?',
    a: "What the diagnostic finds, and how clearly scoped the first piece of work is. We'll tell you directly if you qualify.",
  },
  {
    q: 'Do these prices include ongoing support?',
    a: "Support terms vary by project and are agreed on before the build starts. Ask during your diagnostic call and we'll spell it out.",
  },
  {
    q: 'Can I start with a smaller project before committing to something bigger?',
    a: 'Yes. Many clients start with one focused piece of work, see how it goes, and expand from there.',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Pricing</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-tight">
            How pricing works
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Every engagement starts with a diagnostic. We don&apos;t quote a build until we know exactly what needs building.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The ranges below give you a realistic starting point for each service. Final pricing depends on scope, which the diagnostic defines.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-base text-muted-foreground mb-10">
            Free diagnostic. Then a clear number. The diagnostic itself costs nothing. Once we know what you actually need, you get a specific quote, not a guess.
          </p>
          <div className="flex flex-col gap-px border border-border/40 rounded-2xl overflow-hidden">
            {services.map((service, i) => (
              <div
                key={service.name}
                className={`p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-5 ${i < services.length - 1 ? 'border-b border-border/40' : ''} bg-background hover:bg-secondary/20 transition-colors`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="text-base font-semibold text-foreground">{service.name}</h3>
                    <span className="text-sm font-medium text-primary">{service.price}</span>
                    <span className="text-xs text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded">
                      {service.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <Link
                  href={service.link}
                  className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors self-start sm:self-center mt-1 sm:mt-0"
                >
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free MVP section */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-5">About the free build</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            For businesses we think are a strong fit, we&apos;ll build a small first piece of your project for free before you commit to the rest. You get real, working software in your hands, and you decide from there whether to continue.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Not every business qualifies. It depends on what the diagnostic finds and how clear the scope is.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-10">Common questions</h2>
          <dl className="flex flex-col gap-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="text-base font-semibold text-foreground mb-2">{faq.q}</dt>
                <dd className="text-base text-muted-foreground leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance mb-5">
            Get a real number, not a guess
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Start with the diagnostic. It&apos;s free, and it&apos;s the only way to know what this would actually cost you.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-8 py-4 text-base font-semibold"
          >
            Start a Free Diagnostic
          </Link>
        </div>
      </section>

    </main>
  )
}
