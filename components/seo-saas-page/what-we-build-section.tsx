export function SeoSaasWhatWeBuildSection() {
  const contentTypes = [
    {
      type: 'Pillar Pages',
      intent: 'Topical authority',
      description: 'Comprehensive category-defining pages that establish your site as the authority on a core topic. Target 2,500 to 4,000 words. These anchor the cluster and rank for high-volume head terms.',
    },
    {
      type: 'Comparison Pages',
      intent: 'Decision stage',
      description: '"[Product] vs [Competitor]" pages targeting buyers in active evaluation. Highest commercial intent in any SaaS content programme. Often rank within 60 to 90 days even on a new domain.',
    },
    {
      type: 'Alternative Pages',
      intent: 'Decision stage',
      description: '"Best alternatives to [Market Leader]" pages that capture the buyer who has decided the incumbent is wrong for them. Strong conversion signal — these visitors are actively looking to switch.',
    },
    {
      type: 'Use-Case Pages',
      intent: 'Consideration stage',
      description: '"[Product] for [specific use case or industry]" pages that speak directly to a buyer segment. Converts better than generic service pages because the visitor recognises their specific situation.',
    },
    {
      type: 'Integration Guides',
      intent: 'Consideration + decision',
      description: '"[Product] + [tool your ICP uses]" pages that capture buyers researching workflow compatibility. These rank for long-tail terms with high buyer intent and low competition.',
    },
    {
      type: 'Cluster Articles',
      intent: 'Awareness + consideration',
      description: 'Long-form educational pieces targeting specific questions your ICP is asking during research. Each article links to the pillar page and relevant use-case or comparison pages.',
    },
  ]

  return (
    <section id="what-we-build" className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Content Types
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          What we build and why each type exists
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Every content type in a SaaS SEO programme has a specific job in the buyer journey. We build all six. Most content agencies build one or two and call it a strategy.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {contentTypes.map((ct) => (
            <div key={ct.type} className="p-6 rounded-2xl border border-border/50 bg-card">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-base font-semibold text-foreground">{ct.type}</h3>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full flex-shrink-0">
                  {ct.intent}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{ct.description}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-sm font-semibold text-foreground mb-2">B2B SaaS expertise, not generalist content</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We have built content programmes for B2B SaaS companies including enterprise software platforms and photography workflow tools. We understand the difference between a buyer searching "what is [category]" and a buyer searching "[your product] vs [competitor]", and we build both correctly.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card">
            <p className="text-sm font-semibold text-foreground mb-2">Written for Google and AI citation</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every piece is structured for AI engine citation: direct answers first, specific claims backed by detail, clear heading hierarchy. Content that gets cited by Perplexity and ChatGPT tends to rank well in Google too. The standards overlap more than most content teams realise.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card">
            <p className="text-sm font-semibold text-foreground mb-2">Connected to pipeline, not sessions</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We set up conversion tracking so organic trial sign-ups and demo requests are attributed to specific content. Your monthly report shows revenue pipeline, not page views.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Book a diagnostic
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
