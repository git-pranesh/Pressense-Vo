export function GtmSystemsBuilderWhoItsForSection() {
  const rightFor = [
    {
      title: 'You have product-market-fit but no repeatable pipeline',
      description:
        'Customers love the product. The problem is finding more of them without the founder personally running every deal. You need a content motion that generates inbound and a GTM system that converts it without manual effort.',
    },
    {
      title: 'You are post-seed and need to show investors a growth system',
      description:
        'Your next funding conversation will include questions about customer acquisition unit economics and organic growth. A GTM content system that generates measurable pipeline is the most credible answer to both. It is evidence, not a plan.',
    },
    {
      title: 'Your ops are held together by spreadsheets and founder memory',
      description:
        'Every time you hire someone new, onboarding takes three weeks because the processes only exist in your head. Every time a key person leaves, something breaks. Internal tools replace founder-dependent processes with documented, automated systems.',
    },
    {
      title: 'You have tried agencies and gotten generic output',
      description:
        'You hired a content agency and got articles that sound like your category, not your company. You hired a dev shop and got a system that nobody uses. Pressense works directly with the founder, builds to a specific brief, and owns the outcome.',
    },
  ]

  const notFor = [
    {
      title: 'You are pre-product and still validating',
      description:
        'Building a content system on top of unvalidated positioning is how you produce a large volume of the wrong content. Validate the ICP and value proposition first, then build the system.',
    },
    {
      title: 'You want to stay hands-off from strategy',
      description:
        'Pressense requires founder input on ICP, positioning, and what good looks like. The best GTM systems are built with the founder, not handed to them. If you want a vendor to run independently without founder review, this is not the right fit.',
    },
    {
      title: 'You need a full-time in-house team right now',
      description:
        'If you are at Series B with a 30-person marketing team and need someone to manage headcount, that is not what Pressense does. We are right for founder-led businesses building the system before the team.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Right Fit
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-ink-foreground text-balance mb-4 leading-tight">
          Who this is built for
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-14 max-w-2xl">
          Pressense works with founder-led B2B SaaS companies that are past the validation stage and need to build systems that scale without proportional headcount. If that is not where you are, this is not the right engagement.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {rightFor.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <h3 className="text-base font-medium text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-12">
          <p className="eyebrow mb-4">
            Honest Disqualifiers
          </p>
          <h3 className="text-2xl font-medium text-ink-foreground text-balance mb-10">
            This is NOT right for you if...
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {notFor.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border/30 bg-secondary/20"
              >
                <h4 className="text-base font-medium text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
