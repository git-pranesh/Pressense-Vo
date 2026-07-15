export function GtmSystemsBuilderThreeTracksSection() {
  const tracks = [
    {
      number: '01',
      name: 'GTM Strategy',
      tagline: 'The plan that makes everything else work',
      description:
        'Most early-stage founders conflate GTM strategy with marketing tactics. They run LinkedIn ads, try cold email, start a newsletter, and wonder why none of it compounds. GTM strategy is what comes before any of that: a precise ICP definition, a positioning statement that differentiates from competitors, a channel selection rationale, and a 90-day plan that tells the team exactly what to execute and in what order. Without this foundation, every tactic is guesswork and every dollar spent is a gamble.',
      body2:
        'Pressense builds GTM strategy for B2B SaaS founders who are post-product-market-fit and pre-series-A, or who have raised but are not seeing the revenue growth their investors expected. The output is a document your whole team can act on, not a slide deck for the board.',
      linkText: 'Learn about GTM strategy',
      linkHref: '/gtm-content-systems',
    },
    {
      number: '02',
      name: 'SEO Content Systems',
      tagline: 'Pipeline that compounds without ad spend',
      description:
        'A content system is not a blog. It is an interconnected architecture of topic clusters, comparison pages, use-case pages, and sales enablement pieces, each mapped to a specific buyer stage and a specific keyword intent. The strategy layer defines what to build. The production layer builds it. The distribution layer gets it in front of buyers. The measurement layer connects content to pipeline revenue so you know what is working.',
      body2:
        'The approach is the same at every scale: lead with bottom-of-funnel content that converts, because comparison pages and use-case pages generate qualified pipeline faster than top-of-funnel educational content. Layer in cluster content that builds topical authority over time. Distribute everything through LinkedIn and email so every piece works harder than a single channel allows.',
      linkText: 'Learn about SEO content for SaaS',
      linkHref: '/seo-content-for-saas',
    },
    {
      number: '03',
      name: 'Internal Tools',
      tagline: 'Automate the operations that slow you down',
      description:
        'At a certain stage, every founder-led SaaS company has the same problem: the operations are running on spreadsheets, manual data pulls, and a dozen browser tabs of disconnected tools. Someone on the team spends three hours every Monday morning pulling numbers from five systems to build a report that could run automatically. A sales handoff breaks because the CRM is not connected to the product database. A customer success workflow stalls because there is no internal tool to surface the right data at the right moment.',
      body2:
        'Pressense builds custom internal tools on Replit: dashboards, automated workflows, CRM integrations, and data pipelines that eliminate the manual operations bottleneck. These are not enterprise systems. They are lean, purpose-built tools that solve one specific operational problem and free the team to work on things that cannot be automated.',
      linkText: 'Learn about custom internal tools',
      linkHref: '/custom-internal-tools',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Three Tracks
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          What a GTM systems builder actually does
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          The three tracks are not independent services. They compound when run together. A GTM strategy built on the right ICP feeds a content system targeting the right keywords, and internal tools that automate the operation make the whole motion sustainable without a large team.
        </p>

        <div className="space-y-0">
          {tracks.map((track, i) => (
            <div
              key={track.number}
              className={`flex flex-col md:flex-row gap-8 py-10 ${
                i < tracks.length - 1 ? 'border-b border-border/30' : ''
              }`}
            >
              <div className="md:w-48 flex-shrink-0">
                <span className="font-medium text-primary/20 leading-none block mb-1">
                  {track.number}
                </span>
                <h3 className="text-xl font-medium text-foreground">{track.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{track.tagline}</p>
              </div>

              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed mb-4">{track.description}</p>
                <p className="text-muted-foreground leading-relaxed mb-5">{track.body2}</p>
                <a
                  href={track.linkHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-highlight transition-colors"
                >
                  {track.linkText}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
