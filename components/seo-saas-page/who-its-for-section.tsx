export function SeoSaasWhoItsForSection() {
  const rightFor = [
    {
      title: 'Post-funding SaaS companies who need to own a search channel',
      description:
        'You have raised a seed or Series A round. Paid ads are running but the cost per acquisition is high and ownership is zero. SEO is how you build a channel that compounds month over month. The right time to start is six months ago. The second best time is now.',
    },
    {
      title: 'B2B SaaS founders who know their ICP but have no content presence',
      description:
        'Your buyers are searching for your category every day. If you are not in the results, your competitor is. We build the content architecture that puts you in front of the right buyer at the right moment, before they have made a decision.',
    },
    {
      title: 'Technical SaaS products with buyers who do deep research before buying',
      description:
        'Enterprise and mid-market buyers read extensively before talking to sales. Documentation, integration guides, comparison pages, and use-case content are not marketing fluff. They are the reason buyers shortlist you or skip you.',
    },
    {
      title: 'Companies that tried content before and got traffic but no pipeline',
      description:
        'Vanity metrics are easy to produce and useless to the business. If you published content, got traffic, and saw no conversions, the problem is almost always keyword intent. You were ranking for research queries, not buyer queries. We fix the architecture, not just the writing.',
    },
  ]

  const notFor = [
    {
      title: 'You are pre-product or pre-ICP',
      description:
        'SEO requires knowing who you are writing for and what problem they are searching to solve. If you are still iterating on the product or the positioning, content investment is premature.',
    },
    {
      title: 'You need results within 30 days',
      description:
        'Organic content takes two to six months to reach page one for low-competition keywords. Longer for competitive terms. If you need leads this month, paid search is the right channel. We work alongside paid, not as a replacement for it.',
    },
    {
      title: 'You want high-volume generic content',
      description:
        'We do not produce content at scale for the sake of it. Every piece we write has a defined job: a specific keyword, a specific buyer stage, a specific conversion path. Volume without strategy is wasted budget.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Right Fit
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          Who this is right for
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          SEO content for SaaS works when the product is defined, the buyer is known, and there is a commitment to building an organic channel over a 6 to 12 month horizon. It does not work as a quick fix.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {rightFor.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-border/50 bg-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
            Honest Disqualifiers
          </p>
          <h3 className="text-2xl font-semibold text-foreground text-balance mb-10 leading-tight">
            When this is not the right fit
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {notFor.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border/30 bg-secondary/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                  <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
