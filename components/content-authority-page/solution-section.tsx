import Link from 'next/link'

const services = [
  {
    name: 'SEO Content Systems',
    outcome: 'Compounding organic pipeline',
    description:
      'We build pillar and cluster content architectures designed around actual buyer search intent, not keyword volume. Every piece maps to a specific buyer, a specific question, and a specific point in their decision process. Bottom-of-funnel pages rank within 60 to 90 days. The full system compounds over 6 to 12 months.',
    detail:
      'Covers ICP-mapped keyword research, pillar page architecture, cluster content, comparison pages, use-case pages, and internal linking structure. All content is structured for both Google ranking and AI engine citation.',
  },
  {
    name: 'AEO-Optimised Pages',
    outcome: 'Cited by AI search engines',
    description:
      'Answer Engine Optimisation means structuring content so that Google AI Overviews, Perplexity, and ChatGPT cite your pages as the authoritative answer to buyer questions. We build FAQ sections, definition pages, and structured answer blocks with 40 to 60 word direct answers that AI systems can extract.',
    detail:
      'Every page includes FAQPage schema, question-based headings, front-loaded answers, and internal links that build topical authority across the full content cluster.',
  },
  {
    name: 'Website Copy and Positioning',
    outcome: 'Homepage that explains the offer',
    description:
      'If your website requires a call to explain what you do, the copy is not working. We rewrite homepage, service page, and landing page copy so that the right buyer understands the offer, the problem it solves, and the reason to act. No jargon. No generic positioning.',
    detail:
      'Covers homepage narrative, service page structure, ICP-specific landing pages, case study copy, and conversion-focused CTAs. Works alongside the website build track if needed.',
  },
  {
    name: 'Thought Leadership and LinkedIn',
    outcome: 'Founder expertise compounds publicly',
    description:
      'Founder-led content is the highest-trust form of B2B marketing. We build the system that turns your observations, customer wins, and contrarian views into a weekly LinkedIn content calendar without making you a full-time content creator. You provide the raw insight. We handle structure, editing, and distribution.',
    detail:
      'Covers content capture process, weekly LinkedIn posts, long-form articles, and Medium publishing. The system keeps your voice authentic while removing the bottleneck of sitting down to write.',
  },
  {
    name: 'Technical Content and Product Narratives',
    outcome: 'Complex products explained clearly',
    description:
      'SaaS products, medical services, and technical platforms are often accurate internally but difficult for buyers to understand externally. We translate complex product logic into clear, buyer-relevant narratives: use-case pages, feature-benefit write-ups, comparison pages against named alternatives, and onboarding documentation.',
    detail:
      'Works with your product team or technical founders to extract the actual differentiation, then structures it into content buyers can act on.',
  },
]

export function ContentSolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">
          What a content authority system builds for you
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Every engagement starts with a diagnostic to identify what communication gaps are costing the most pipeline. We then build in the order that creates the most traction fastest. See{' '}
          <Link href="/playbooks" className="text-primary hover:underline">our playbooks</Link>{' '}
          for examples of how each track works in practice.
        </p>

        <div className="space-y-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 shrink-0">
                  {service.outcome}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">{service.description}</p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">{service.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/diagnostic"
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
