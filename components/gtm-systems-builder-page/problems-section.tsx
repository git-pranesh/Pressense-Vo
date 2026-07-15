export function GtmSystemsBuilderProblemsSection() {
  const problems = [
    {
      heading: 'Why do most B2B SaaS founders struggle with growth after product-market-fit?',
      body1:
        'Product-market-fit is when the product works. Growth is a different problem entirely. Most founders who find PMF did so through personal network, warm intros, and relentless founder-led selling. Those channels are not scalable. They depend on the founder being present, proactive, and willing to trade time for pipeline. There is a ceiling.',
      body2:
        'The transition from founder-led growth to system-led growth requires building infrastructure that the product itself cannot provide: a content motion that generates inbound, a GTM strategy that defines exactly which buyers to pursue and why, and internal systems that remove the founder from the operational bottlenecks that slow the team down. This is what a GTM systems builder builds.',
    },
    {
      heading: 'What is the difference between a GTM strategy and a marketing plan?',
      body1:
        'A marketing plan is a list of activities: publish X posts per month, run ads on Y platform, attend Z events. A GTM strategy is the reasoning that sits behind those activities: which specific type of buyer do you go after, what specific pain do you solve for them, why is your solution better than the alternative they are currently using, and what is the motion that gets your message in front of them at the moment they are looking.',
      body2:
        'Most early-stage SaaS companies have a marketing plan but no GTM strategy. The plan generates activity. The strategy generates traction. Pressense builds the strategy first and the execution system second. Without the strategy, the system produces a lot of effort with no coherent direction. With the strategy, every piece of content, every outbound sequence, and every distribution channel is pointing at the same buyer with the same message.',
    },
    {
      heading: 'Why do content agencies fail for B2B SaaS founders?',
      body1:
        'Generic content agencies produce generic content. Their model is built for volume: hire writers at scale, apply a keyword brief, produce an article. The problem is that B2B SaaS content requires domain knowledge, an understanding of how software buyers research and evaluate, and a strategic layer that connects every piece to a buyer journey stage. Without that, you end up with a blog that looks busy and a pipeline that does not grow.',
      body2:
        'The founders who book a diagnostic with Pressense have almost always tried a content agency first. The result was usually articles that sounded like the category but not like the company, that ranked for low-intent keywords but did not generate trials, and that the sales team would never send to a prospect. Pressense builds content that works at every stage of the buyer journey, from the first Google search to the competitive comparison before sign-up.',
    },
    {
      heading: 'When do internal operations become a growth bottleneck?',
      body1:
        'Operations become a growth bottleneck when the time the team spends managing information exceeds the time they spend using it. The signal is usually: someone is pulling data from three systems every week to build a report that could be automated. A customer success handoff is broken because the CRM and the product database are not connected. A sales rep cannot see which features a prospect is using because there is no internal dashboard surfacing it.',
      body2:
        'These problems do not look like engineering problems. They look like process problems or communication problems. The root cause is missing internal tooling. Pressense builds the specific tool that fixes the specific bottleneck: a dashboard, an automation, a CRM integration, or a data pipeline. The scope is defined in the diagnostic. The build is fixed-price. The outcome is a team that spends more time on work that creates value and less time managing the system manually.',
    },
    {
      heading: 'How does Pressense differ from a fractional CMO or a full-service agency?',
      body1:
        'A fractional CMO advises on strategy and manages a team. They are the right hire when you have a marketing team that needs leadership. A full-service agency produces deliverables across channels. They are the right hire when you have a clear brief and a budget for execution at scale. Pressense is neither of those.',
      body2:
        'Pressense is a single operator who designs and builds the system: the GTM strategy, the content architecture, the internal tools, and the operational workflows. The output is a running system, not a slide deck or a deliverable list. For a founder-led company that is too early for a CMO and too specific for a generic agency, this is the gap Pressense fills.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Why This Matters
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          The growth problems a GTM systems builder solves
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          These are the problems that come up in every diagnostic session. We answer them directly here because the founders who are right for this engagement already know which one is theirs.
        </p>

        <div className="space-y-0">
          {problems.map((p, i) => (
            <div
              key={p.heading}
              className={`py-10 ${i < problems.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 text-balance">{p.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.body1}</p>
              <p className="text-muted-foreground leading-relaxed">{p.body2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
