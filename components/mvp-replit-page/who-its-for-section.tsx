export function MvpReplitWhoItsForSection() {
  const rightFor = [
    {
      title: 'You want to build on Replit but need production standards',
      description:
        'Replit Agent is fast. It can scaffold a full-stack app in minutes. What it cannot do is make architectural decisions: whether to use a session-based or JWT auth pattern, how to scope database access by user role, when a third-party SDK is safer than hand-rolling an integration. You want Replit speed with developer judgement applied to the choices that matter.',
    },
    {
      title: 'You have tried vibe coding and the codebase is becoming a liability',
      description:
        'Most vibe-coded MVPs hit the same wall at week six. The initial scaffolding works. Then you add a feature. Then another. Then something breaks and nobody knows why. The code has no structure, no error handling, and no tests. You need someone to stabilise what exists and build the next phase with discipline.',
    },
    {
      title: 'You want a live product for investors or early users within two months',
      description:
        'A Figma mockup gets you the first conversation. A live, working product closes the round or signs the first customer. If you need something real with a sign-up flow, working data, and at least one complete user journey, six weeks on Replit is achievable without compromising on code quality.',
    },
    {
      title: 'You want to own the code and stay on Replit long term',
      description:
        'Some founders want to migrate to AWS once the MVP is done. Others want to stay on Replit because it is fast, affordable, and easy for a small team to manage. Either path works. The codebase we write is standard TypeScript and PostgreSQL. It runs on Replit today and moves anywhere tomorrow without a rewrite.',
    },
  ]

  const notFor = [
    {
      title: 'Your idea is still a vague concept with no user validation',
      description:
        'Six weeks of development on an unvalidated idea produces an expensive experiment. Before any code, you need five to ten real conversations with potential users that confirm the problem is painful enough to pay to solve. We review your validation evidence in the diagnostic session before quoting.',
    },
    {
      title: 'You need regulated compliance on day one',
      description:
        'HIPAA, SOC 2, and PCI compliance are real infrastructure requirements, not checkbox items. If your launch requires certification before you can sign a single user, the timeline and cost structure of this engagement will not fit. Those builds take three to six months regardless of how good the underlying code is.',
    },
    {
      title: 'You want enterprise-level team features from the first sprint',
      description:
        'Multi-tenant architectures with granular permission systems, audit logs, and SSO are not MVP scope. If your day-one user base is enterprise IT teams who require all of the above before they will test the product, the MVP framing is wrong. Start with a single-tenant build that validates the core value first.',
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Right Fit
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-ink-foreground text-balance mb-4 leading-tight">
          Who this Replit MVP build is right for
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-14 max-w-2xl">
          This engagement works for founders who have chosen Replit as their platform and want a production-grade product at the end of it, not a demo that breaks under real user load.
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
              <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-12">
          <p className="eyebrow mb-4">
            Honest Disqualifiers
          </p>
          <h3 className="text-2xl font-semibold text-ink-foreground text-balance mb-10">
            This is not right for you if...
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {notFor.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border/30 bg-secondary/20"
              >
                <h4 className="text-base font-semibold text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
