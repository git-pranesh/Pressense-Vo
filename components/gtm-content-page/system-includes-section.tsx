export function GtmContentSystemIncludesSection() {
  const layers = [
    {
      layer: 'Strategy Layer',
      items: [
        { name: 'ICP definition', detail: 'Company type, size, buyer role, trigger events, fastest-closing profile' },
        { name: 'Positioning statement', detail: 'One-sentence value proposition that every content piece is built on' },
        { name: 'Topic cluster architecture', detail: 'Pillar pages, cluster articles, and cross-links mapped to the buyer journey' },
        { name: 'Keyword strategy', detail: 'Bottom-of-funnel keywords (comparison, alternative, use-case) prioritised first' },
      ],
    },
    {
      layer: 'Content Layer',
      items: [
        { name: 'Pillar pages', detail: '2,500 to 4,000-word category-defining pages built for topical authority' },
        { name: 'Cluster articles', detail: 'Long-form pieces targeting specific questions at awareness and consideration stage' },
        { name: 'Comparison and alternative pages', detail: 'Decision-stage content that captures buyers in active vendor evaluation' },
        { name: 'Sales enablement content', detail: 'Case studies, use-case pages, and integration guides for deal support' },
      ],
    },
    {
      layer: 'Distribution Layer',
      items: [
        { name: 'LinkedIn repurposing workflow', detail: 'Long-form content broken into weekly threads, carousels, and short posts' },
        { name: 'Email newsletter cadence', detail: 'Subscriber sequence and monthly newsletter built from published content' },
        { name: 'Outbound content triggers', detail: 'Relevant content pieces mapped to outbound sequences by ICP segment' },
        { name: 'Community and partner distribution', detail: 'Relevant content seeded to Slack communities, subreddits, and partner newsletters' },
      ],
    },
    {
      layer: 'Measurement Layer',
      items: [
        { name: 'CRM attribution setup', detail: 'UTM parameters, first-touch and last-touch attribution, content source tagging' },
        { name: 'Organic conversion tracking', detail: 'Trial sign-ups, demo requests, and pipeline attributed to specific content' },
        { name: 'Monthly performance report', detail: 'Rankings, conversions, pipeline impact, and next-cycle priorities' },
        { name: 'Quarterly system review', detail: 'ICP check, positioning review, competitive content gap analysis' },
      ],
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          What Is Included
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          The four layers of a GTM content system
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Most content agencies deliver the content layer only. A GTM content system requires all four. Remove any one layer and the others stop compounding.
        </p>

        <div className="space-y-8">
          {layers.map((layer) => (
            <div key={layer.layer} className="rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-secondary/30">
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">{layer.layer}</h3>
              </div>
              <div>
                {layer.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex flex-col sm:flex-row gap-2 sm:gap-6 px-6 py-4 items-start sm:items-center ${
                      i % 2 === 0 ? 'bg-card' : 'bg-secondary/10'
                    } ${i < layer.items.length - 1 ? 'border-b border-border/20' : ''}`}
                  >
                    <div className="flex items-center gap-2 sm:w-56 flex-shrink-0">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl border border-primary/30 bg-primary/5">
          <p className="text-sm font-medium text-foreground mb-2">This connects to your SEO content programme</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The GTM content system and <a href="/seo-content-for-saas" className="text-primary hover:text-highlight underline underline-offset-2">SEO content for SaaS</a> are designed to work together. The SEO layer builds long-term organic authority. The GTM system ensures the content produced for SEO is also distributed, attributed, and connected to pipeline. Companies that run both see faster compounding than those running either in isolation.
          </p>
        </div>
      </div>
    </section>
  )
}
