export function SaaSGTMProblemsSection() {
  const problems = [
    {
      heading: 'What comes first: product or go-to-market strategy?',
      p1: 'Most SaaS founders build product first, then try to find customers for it. The result is a product shaped by assumptions rather than real buyer pain. GTM planning works best when it starts alongside product development, not after it. You do not need a finished product to define your ICP, test positioning, or identify the channel that fits your buyer.',
      p2: 'When Pressense starts a GTM engagement, we begin with buyer research, not slides. We talk to your existing users or target customers, map what they are actually trying to solve, and build your positioning from what we hear rather than what you guess. That research shapes every decision downstream.',
    },
    {
      heading: 'What is an ICP and why does it change everything?',
      p1: 'ICP stands for Ideal Customer Profile. It is the single most important input in any go-to-market strategy. A specific ICP tells your sales team who to call, your marketing team what to say, and your product team what to build next. A vague ICP tells everyone to target everyone, which means targeting no one.',
      p2: 'A useful ICP is not a demographic sketch. It is a description of the exact company or person who gets the most value from your product, can afford it, has a reason to act now, and will refer others if you deliver. Getting that right in the first 30 days of a GTM engagement saves six months of wasted spend.',
    },
    {
      heading: 'What is the difference between GTM strategy and marketing strategy?',
      p1: 'A marketing strategy is about how you communicate. A GTM strategy is bigger: it covers who you sell to, what you charge, how you reach buyers, how you close them, and how you retain them. Marketing strategy is one component of GTM, not a replacement for it.',
      p2: 'Many SaaS companies invest heavily in marketing tactics, such as ads, content, events, without the GTM foundation underneath. The result is activity without traction. When Pressense builds a GTM strategy, we establish the foundation first: ICP, positioning, pricing, channel fit. Marketing executes against that foundation, not in place of it.',
    },
    {
      heading: 'How long does a SaaS go-to-market strategy take?',
      p1: 'A focused GTM Sprint with Pressense runs six to eight weeks. In that time we deliver ICP definition, competitive positioning, pricing recommendation, channel selection, and a 90-day execution roadmap. The sprint format means you get a complete, usable output, not an ongoing engagement with no clear end point.',
      p2: 'For companies that want ongoing support after the sprint, we offer a retainer that covers monthly GTM reviews, messaging iteration, and channel performance analysis. Most clients run the sprint first, then decide on retainer based on whether the strategy needs active adjustment.',
    },
  ]

  return (
    <section id="gtm-problems" className="py-16" aria-label="Common SaaS GTM problems">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">What We Solve</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance mb-10">
          The GTM questions founders get stuck on
        </h2>

        <div className="flex flex-col gap-10">
          {problems.map((p) => (
            <div key={p.heading}>
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">{p.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{p.p2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
