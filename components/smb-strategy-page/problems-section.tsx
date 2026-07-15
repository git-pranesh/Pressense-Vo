export function SMBStrategyProblemsSection() {
  const problems = [
    {
      heading: 'You are busy but not clear on where the business is actually going',
      body1:
        'Most small business owners are deep inside the day-to-day. Client work, team issues, cash flow. There is no time to step back and ask whether the work you are doing today is pointing toward the business you want in three years. The result is a business that grows in the wrong direction, or does not grow at all.',
      body2:
        'A strategy session with Pressense starts here. We map where you are, where you want to be, and the specific gap between the two. Not a generic framework. A specific conversation about your business.',
    },
    {
      heading: 'You have had advice before but it never translated into action',
      body1:
        'Business coaches and consultants often hand you a plan and leave. You read it once, file it, and go back to putting out fires. The problem is not the quality of the plan. It is the absence of follow-through. Strategy without accountability produces a document, not a result.',
      body2:
        'Pressense stays with you through a retainer that turns the roadmap into a weekly or fortnightly working rhythm. Outcomes are defined upfront. Progress is tracked every session. If something is not working, we change it.',
    },
    {
      heading: 'You are not sure if AI is right for your business yet',
      body1:
        'There is a lot of noise about AI right now. Every tool promises to save time and cut costs. But without a clear picture of how your business actually operates, adding AI is just adding complexity. You end up with more tools and the same problems.',
      body2:
        'Strategy comes first at Pressense. We spend the first engagement understanding how your business works before we ever mention a tool. If AI belongs in your growth plan, we build it in deliberately. If it does not, we say so.',
    },
    {
      heading: 'You are a first-time business owner and do not know what you do not know',
      body1:
        'First-time founders face a specific problem: they cannot see the gaps in their own thinking because they have never had the job before. Pricing, positioning, hiring, systems, cash flow management — each of these can quietly kill a business that looks healthy on the surface.',
      body2:
        'The Pressense mentorship track is built for founders who want a thinking partner and a direction-setter, not just a delivery team. We work through the decisions you are stuck on and give you a clear next move every session.',
    },
  ]

  return (
    <section className="border-t border-border/40 py-16">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="eyebrow-line" aria-hidden="true" />
          <span className="text-xs font-medium tracking-widest uppercase text-primary/70">Where Businesses Get Stuck</span>
        </div>
        <h2 className="text-3xl font-medium text-foreground text-pretty mb-10">
          Problems we hear from small business owners every week
        </h2>
        <div className="space-y-10">
          {problems.map((p) => (
            <div key={p.heading}>
              <h3 className="font-medium text-lg text-foreground mb-3">{p.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">{p.body1}</p>
              <p className="text-muted-foreground leading-relaxed">{p.body2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
